import { useState } from 'react';

const AiBlock = ({ title, text }: {
    title: string;
    text: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="px-8 rounded-md bg-gradient-to-br from-indigo-500 to-gray-700">
        <div className='flex flex-row items-center gap-4'>
          <h3 className="text-white text-2xl font-extrabold">{title}</h3>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-pink-500"
          >expand</button>
        </div>
        <div
          className={`${
            expanded ? '' : 'hidden'
          }`}
        >
          <div className="h-4"></div>
          <p className="md:text-lg text-white">{text}</p>
          <div className="h-4"></div>
          <div className="flex justify-start">
            <button
              className="rounded-xl bg-pink-500 hover:bg-blue-700 px-6 py-3 text-sm md:text-base"
            >
            let&apos;s do it
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiBlock;
