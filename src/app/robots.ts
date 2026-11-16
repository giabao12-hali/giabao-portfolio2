import { MetadataRoute } from 'next'
import React from 'react'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api", "/admin", "/dashboard", "/auth", "/login", "/register"]
        },
        sitemap: "https://giabao-portfolio2.vercel.app/sitemap.xml",
    }
}