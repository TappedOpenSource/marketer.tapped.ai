import Link from 'next/link';
import Partners from '@/components/partners';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative h-screen flex flex-col blueShapesBackground p-2 md:p-0">
      <div className="firstCircle hidden md:block"></div>
      <div className="secondCircle hidden md:block"></div>
      <div className="flex-grow flex flex-col justify-center items-center">
        <Image
          src='/images/tapped_reverse.png'
          width={300}
          height={300}
          alt='tapped logo'
          className="max-w-full w-auto h-auto"
        />
        <h1 className="text-4xl md:text-7xl my-2 font-bold text-[#63b2fd] text-center">
          get your music heard.
        </h1>
        <h2 className="text-lg md:text-2xl font-semibold my-2">
          create your unique marketing plan
        </h2>
        <div className="my-2 md:my-4">
          <Link
            href="/marketing_form"
            className="bg-white text-black font-black text-lg rounded-full px-4 py-2 hover:scale-105 transform transition-all duration-200 ease-in-out"
          >start now</Link>
        </div>
      </div>

      <div className="mb-4">
        <Partners />
      </div>
    </main>
  );
}
