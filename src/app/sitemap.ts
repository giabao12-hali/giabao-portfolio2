import { MetadataRoute } from "next";
import React from "react";
import { DATA } from "./data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${DATA.url}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];
}
