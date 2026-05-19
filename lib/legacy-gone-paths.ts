export const legacyGonePaths = [
  "/teens",
  "/latina",
  "/trans",
  "/sex-chat-russian-teen"
] as const;

export function normalizeLegacyPath(pathname: string) {
  const lowerPath = pathname.toLowerCase();

  if (lowerPath === "/") {
    return lowerPath;
  }

  return lowerPath.replace(/\/+$/, "");
}

export function isLegacyGonePath(pathname: string) {
  return legacyGonePaths.includes(normalizeLegacyPath(pathname) as (typeof legacyGonePaths)[number]);
}
