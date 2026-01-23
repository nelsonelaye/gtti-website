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
