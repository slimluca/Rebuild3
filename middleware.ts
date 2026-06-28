import { NextResponse, type NextRequest } from "next/server";
import { isLegacyGonePath } from "@/lib/legacy-gone-paths";
import { getLegacyRedirectPath } from "@/lib/legacy-redirects";
import { isValidPublicPath, normalizePublicPath } from "@/lib/valid-public-paths";

const goneBody = `<!doctype html>
<html lang="it">
  <head>
    <meta charset="utf-8" />
    <meta name="robots" content="noindex, nofollow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Pagina rimossa | SessoChat.net</title>
  </head>
  <body>
    <main>
      <h1>Questa pagina non &egrave; pi&ugrave; disponibile.</h1>
      <p>La vecchia risorsa &egrave; stata rimossa in modo permanente. Puoi visitare la guida aggiornata di SessoChat.net dalla homepage.</p>
      <p><a href="/">Vai alla homepage</a></p>
    </main>
  </body>
</html>`;

const staticFilePattern = /\.(css|js|map|png|jpg|jpeg|webp|svg|gif|ico|txt|xml|json|woff|woff2)$/i;

function isLocalHost(hostname: string) {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
}

function isStaticOrInternalPath(pathname: string) {
  const normalizedPath = normalizePublicPath(pathname);

  return (
    normalizedPath.startsWith("/_next/") ||
    normalizedPath.startsWith("/go/") ||
    normalizedPath === "/go" ||
    staticFilePattern.test(normalizedPath)
  );
}

function shouldBypassMiddleware(pathname: string) {
  return isStaticOrInternalPath(pathname) || isValidPublicPath(pathname);
}

function permanentRedirect(request: NextRequest, pathname: string, search = request.nextUrl.search) {
  const redirectUrl = new URL(request.url);
  redirectUrl.pathname = pathname;
  redirectUrl.search = search;

  return NextResponse.redirect(redirectUrl, 308);
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? request.nextUrl.host;
  const hostname = host.split(":")[0]?.toLowerCase() ?? "";
  const forwardedProto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim().toLowerCase();
  const isHttp = request.nextUrl.protocol === "http:" || forwardedProto === "http";
  const isWww = hostname === "www.sessochat.net";

  if (!isLocalHost(hostname) && (isWww || isHttp)) {
    const redirectUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, "https://sessochat.net");
    return NextResponse.redirect(redirectUrl, 308);
  }

  if (
    request.nextUrl.pathname !== "/" &&
    request.nextUrl.pathname.endsWith("/") &&
    !isStaticOrInternalPath(request.nextUrl.pathname)
  ) {
    return permanentRedirect(request, request.nextUrl.pathname.replace(/\/+$/, ""));
  }

  const legacyRedirectPath = getLegacyRedirectPath(request.nextUrl.pathname);
  if (legacyRedirectPath) {
    return permanentRedirect(request, legacyRedirectPath);
  }

  if (isLegacyGonePath(request.nextUrl.pathname)) {
    return new NextResponse(goneBody, {
      status: 410,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow"
      }
    });
  }

  if (shouldBypassMiddleware(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  return new NextResponse(goneBody, {
    status: 410,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow"
    }
  });
}
