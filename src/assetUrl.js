const assets = import.meta.glob("/src/images/**/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export function resolveAsset(path) {
  return assets[path.replace("@/", "/src/")];
}
