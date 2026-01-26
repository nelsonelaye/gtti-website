export const getMasonrySpan = (index) => {
  const patterns = [
    { colSpan: "md:col-span-1", rowSpan: "md:row-span-2" }, // Tall
    { colSpan: "md:col-span-1", rowSpan: "md:row-span-1" }, // Standard
    { colSpan: "md:col-span-2", rowSpan: "md:row-span-1" }, // Wide
    { colSpan: "md:col-span-1", rowSpan: "md:row-span-1" }, // Standard
    { colSpan: "md:col-span-1", rowSpan: "md:row-span-2" }, // Tall
    { colSpan: "md:col-span-1", rowSpan: "md:row-span-1" }, // Standard
    { colSpan: "md:col-span-2", rowSpan: "md:row-span-2" }, // Large
    { colSpan: "md:col-span-1", rowSpan: "md:row-span-1" }, // Standard
    { colSpan: "md:col-span-1", rowSpan: "md:row-span-2" }, // Tall
    { colSpan: "md:col-span-1", rowSpan: "md:row-span-1" }, // Standard
    { colSpan: "md:col-span-2", rowSpan: "md:row-span-1" }, // Wide
    { colSpan: "md:col-span-1", rowSpan: "md:row-span-1" }, // Standard
  ];

  return patterns[index % patterns.length];
};

export const optimizeCloudinaryUrl = (url, options = {}) => {
  if (!url || !url.includes("cloudinary.com")) return url;

  const { width = "auto", quality = "auto", format = "auto" } = options;

  // Insert transformations into the URL
  // Changes: /upload/v123/image.jpg
  // To: /upload/w_800,f_auto,q_auto/v123/image.jpg
  return url.replace(
    "/upload/",
    `/upload/w_${width},f_${format},q_${quality}/`,
  );
};
