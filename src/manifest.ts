import { MetadataRoute } from 'next'
import React from 'react'
import { DATA } from './data/resume'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: DATA.name,
    short_name: DATA.name,
    description: DATA.description,
    start_url: "/",
    display: "standalone",
    lang: "vi_VN",
    icons: [
        {
            src: "/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png"
        },
        {
            src: "/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png"
        }
    ]
  }
}
