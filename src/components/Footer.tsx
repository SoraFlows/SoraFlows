
import React, { useEffect } from 'react';

// 定义Props类型
interface FooterProps {
    year: number;
    companyName: string;
}

export default function Footer({ year, companyName }: FooterProps) {
    // 定义Props类型，如果需要的话
    return (
        <footer className="flex flex-col items-center justify-end text-center mt-auto p-5 bg-gray-100 text-gray-800">
            {/* 插入Google统计脚本*/}
            {/* <!-- Google tag (gtag.js) --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-CCB2RC3FFG"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QYDXN91667');
        ` }}
            />
            {/* 插入百度统计脚本 */}
            <script dangerouslySetInnerHTML={{
                __html: `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?383e2ed78880f6ea2a404e57d45be7b2";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        ` }} />
        <p className='mt-auto'> &copy; {year} <a href='https://github.com/flytoagi/SoraFlows' className='hover:text-blue-700'>{companyName}.</a></p>
        </footer>
    )
}