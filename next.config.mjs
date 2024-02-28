import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    unoptimized: true,
    domains: ['www.favicon.vip'], // 添加你需要的外部图片域名
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "www.soraflows.com",
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: "*.producthunt.com",
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: "api.iowen.cn",
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'http',
        hostname: "inadequate-turquoise-macaw.faviconkit.com",
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: "www.favicon.vip",
        port: '',
        pathname: '/**/*',
      }
    ], // 如果需要从外部域名加载图片，需要在此处添加
    deviceSizes: [640, 768, 1024, 1280, 1600], // 设备尺寸用于响应式图片
    imageSizes: [16, 32, 48, 64, 96], // 定义图片尺寸
    path: '/_next/image', // 图片优化API的路径
    loader: 'default',// 使用默认的图片加载器,
    dangerouslyAllowSVG: true // 允许加载SVG
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // async rewrites() {
  //   return [
  //     {
  //       source: '/v1/:path*', // 匹配 /v1/ 后面的所有路径
  //       destination: '/api/v1/:path*', // 重写到 /api/v1/ 对应的路径
  //     },
  //   ];
  // },
}

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);