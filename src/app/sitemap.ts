import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://goldenpoppyappraisal.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://goldenpoppyappraisal.com/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://goldenpoppyappraisal.com/services",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://goldenpoppyappraisal.com/free-quote",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://goldenpoppyappraisal.com/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://goldenpoppyappraisal.com/faq",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
  ];
}
