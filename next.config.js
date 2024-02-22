const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["api.producthunt.com"], // 如果需要从外部域名加载图片，需要在此处添加
        deviceSizes: [640, 768, 1024, 1280, 1600], // 设备尺寸用于响应式图片
        imageSizes: [16, 32, 48, 64, 96], // 定义图片尺寸
        path: '/_next/image', // 图片优化API的路径
        loader: 'default' // 使用默认的图片加载器
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
}
module.exports = withMDX(nextConfig)