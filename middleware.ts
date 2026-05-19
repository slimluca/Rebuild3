import { NextResponse, type NextRequest } from "next/server";
import { isLegacyGonePath } from "@/lib/legacy-gone-paths";

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

export function middleware(request: NextRequest) {
  if (!isLegacyGonePath(request.nextUrl.pathname)) {
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
