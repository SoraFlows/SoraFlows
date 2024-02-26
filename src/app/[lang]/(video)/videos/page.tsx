import VideoWrapper from "@/components/VideoWrapper";
import VideoCarousel from '@/components/VideoCarousel'
import { allExampleVideoList } from "@/app/data/openaiExampleVideo";
import { LayoutHeader } from '@/components/Header'

// This page only renders when the app is built statically (output: 'export')
export default function VideoShowCase() {
   const videos = allExampleVideoList
   return (
      <>
      <LayoutHeader />
      <div className="bg-white rounded-2xl border-[14px] border-b-blue-300 p-16 flex flex-col items-center">
         <div
            className="mb-8 gap-7 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
            {videos.map((item) => {
               return (
                  <div key={item.number} className="p-2 break-inside-avoid">
                     <VideoCarousel videos={item} />
                  </div>
               )
            })}
         </div>
      </div>
      </>
   );
}
