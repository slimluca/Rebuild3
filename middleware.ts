import { NextResponse, type NextRequest } from "next/server";
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
      <h1>Questa pagina non è più disponibile.</h1>
      <p>La vecchia risorsa è stata rimossa in modo permanente. Puoi visitare la guida aggiornata di SessoChat.net dalla homepage.</p>
      <p><a href="/">Vai alla homepage</a></p>
    </main>
  </body>
</html>`;

const staticFilePattern = /\.(css|js|map|png|jpg|jpeg|webp|svg|gif|ico|txt|xml|json|woff|woff2)$/i;

function shouldBypassMiddleware(pathname: string) {
  const normalizedPath = normalizePublicPath(pathname);

  return (
    normalizedPath.startsWith("/_next/") ||
    normalizedPath.startsWith("/go/") ||
    normalizedPath === "/go" ||
    staticFilePattern.test(normalizedPath) ||
    isValidPublicPath(normalizedPath)
  );
}

export function middleware(request: NextRequest) {
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
