// layouts/MainLayout.tsx
import { useTranslations } from 'next-intl';

import { Metadata } from 'next';


export default function HeaderLayout({ children }) {
  const t = useTranslations('aitoolsdir');

  // 这里动态设置 metadata
  const metadata = {
    title: t('title'),
    description: t('description'),
    links: [
      { rel: 'icon', href: '/favicon.ico' },
    ],
  };

  return (
    <>
      {/* 这里可以根据 metadata 渲染 <Head> 或其他元素 */}
      {children}
    </>
  );
}

// 动态设置布局的 getLayout 函数
HeaderLayout.getLayout = function getLayout(page) {
  return (
    <HeaderLayout>
      {page}
    </HeaderLayout>
  );
};
