
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-500">
        get your music heard
      </h1>
      <div className="h-4"></div>
      <h2>
        create your unique marketing plan
      </h2>
      <div className="h-4"></div>
      <Link
        href="/marketing_form"
        className="bg-white text-black font-black text-lg rounded-full px-4 py-2 hover:scale-105 transform transition-all duration-200 ease-in-out"
      >start now</Link>
    </main>
  )
}
