import {redirect} from 'next/navigation';
import { LayoutHeader } from '@/components/Header'
import VideoDisplay from '@/components/VideoDisplay'

// This page only renders when the app is built statically (output: 'export')
export default function Studio() {
 return (
    <div className='bg-[#0d0d0d] py-12 px-4'>
        <LayoutHeader />
        <VideoDisplay />

    </div>
 );
}
