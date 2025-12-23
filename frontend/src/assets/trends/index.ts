// Loads every image in this folder at build time.
const files = import.meta.glob("./*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const getTrendThumb = (filename: string, fallback: string) => {
  // Keys are like "./myfile.jpg"
  return files[`./${filename}`] ?? fallback;
};
