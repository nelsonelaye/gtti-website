"use server";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getImageUrlsFromFolder(folder) {
  console.log("Fetching Cloudinary folder:", folder);
  let allUrls = [];
  let nextCursor;

  try {
    do {
      const result = await cloudinary.api.resources({
        type: "upload",
        resource_type: "image",
        prefix: folder,
        max_results: 500,
        next_cursor: nextCursor,
      });

      console.log("Batch size:", result.resources.length);

      allUrls.push(...result.resources.map((r) => r.secure_url));
      nextCursor = result.next_cursor;
    } while (nextCursor);

    return allUrls;
  } catch (error) {
    console.error("Cloudinary fetch failed:", error);
    throw new Error("Failed to fetch images");
  }
}
