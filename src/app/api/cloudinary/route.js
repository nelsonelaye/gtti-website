import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

export async function GET(request) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder") || "";

  const allUrls = [];
  let nextCursor = undefined;

  try {
    do {
      const result = await cloudinary.api.resources({
        type: "upload",
        resource_type: "image",
        prefix: folder,
        max_results: 500,
        next_cursor: nextCursor,
      });

      allUrls.push(...result.resources.map((r) => r.secure_url));
      nextCursor = result.next_cursor;
    } while (nextCursor);

    return NextResponse.json({ urls: allUrls });
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
