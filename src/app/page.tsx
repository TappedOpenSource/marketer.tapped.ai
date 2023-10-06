import Link from 'next/link';
import Partners from '@/components/partners';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-stretch h-screen relative">
      <div className="flex flex-col justify-center items-center flex-grow m-4">
        <h1 className="text-6xl m-2 font-bold text-[#63b2fd] text-center">
          (Tapped AI Marketing logo)
        </h1>
        <h2 className="text-center font-semibold m-2">
          create your unique marketing plan and
        </h2>
        <h1 className="text-4xl font-bold m-1 mb-2 text-[#63b2fd] text-center">
          get your music heard
        </h1>

        <Partners />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-[#63b2fd] relative">
        <div 
          className="absolute w-[150px] h-[75px] rounded-t-full bg-[#63b2fd]"
          style={{
            top: '-75px',
            left: 'calc(50% - 75px)',
          }}
        ></div>
        <Link href="/marketing_form">
          <div 
            className="absolute w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center text-[#63b2fd] font-bold cursor-pointer"
            style={{
              top: '-50px',
              left: 'calc(50% - 50px)',
            }}
          >
            Start Now
          </div>
        </Link>
      </div>
    </main>
  );
}
