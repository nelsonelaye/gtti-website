"use server";
import { v2 as cloudinary } from "cloudinary";

// const cl = cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

export async function getAllImagesUrls(folder) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const allUrls = [];
  let nextCursor = undefined;
  let result;
  let resources;

  try {
    do {
      result = await cloudinary.api.resources_by_asset_folder(folder, {
        type: "upload",
        resource_type: "image",
        // prefix: folder,
        max_results: 500,
        next_cursor: nextCursor,
      });

      //   console.log(result);
      resources = result.resources;

      allUrls.push(...resources.map((r) => r.secure_url));

      nextCursor = result.next_cursor;
    } while (nextCursor);

    return { result, resources, urls: allUrls };
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    throw error;
  }
}
