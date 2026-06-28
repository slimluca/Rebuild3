export const legacyGonePaths = [
  "/random-old-model-page",
  "/fake-old-category",
  "/old-english-webcam-page",
  "/wp-admin",
  "/wp-login.php",
  "/xmlrpc.php",
  "/wp-content",
  "/wp-includes"
] as const;

export function normalizeLegacyPath(pathname: string) {
  const lowerPath = pathname.toLowerCase();

  if (lowerPath === "/") {
    return lowerPath;
  }

  return lowerPath.replace(/\/+$/, "");
}

export function isLegacyGonePath(pathname: string) {
  const normalizedPath = normalizeLegacyPath(pathname);

  return legacyGonePaths.some(
    (gonePath) => normalizedPath === gonePath || normalizedPath.startsWith(`${gonePath}/`)
  );
}
