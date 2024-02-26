import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: "*.producthunt.com",
            port: '',
            pathname: '/**/*',
          }], // 如果需要从外部域名加载图片，需要在此处添加
        deviceSizes: [640, 768, 1024, 1280, 1600], // 设备尺寸用于响应式图片
        imageSizes: [16, 32, 48, 64, 96], // 定义图片尺寸
        path: '/_next/image', // 图片优化API的路径
        loader: 'default',// 使用默认的图片加载器,
        dangerouslyAllowSVG: true // 允许加载SVG
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
}

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);