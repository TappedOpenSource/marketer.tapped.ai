import { getAiFollowUpSteps } from '@/utils/ai';
import { useEffect, useState } from 'react';

const AiBlock = ({ text }: {
    text: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [followUpSteps, setFollowUpSteps] = useState<string | null>(null);

  const randomInt = Math.floor(Math.random() * 5_000);
  useEffect(() => {
    const followUpSteps = getAiFollowUpSteps(text);

    setTimeout(() => {
      setFollowUpSteps(followUpSteps);
      setLoading(false);
    }, randomInt);
  }, []);

  if (!loading && followUpSteps === null) {
    return null;
  }

  return (
    <>
      <div className="px-8 rounded-md bg-gradient-to-br from-indigo-500 to-gray-700">
        <div className='flex flex-row justify-between items-center gap-4'>
          <h3 className="text-white text-2xl font-extrabold">AI Team Follow Ups</h3>
          {!loading ? (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-pink-500 p-0"
            >expand</button>
          ) :
            (
              <div className="text-white">
            loading...
              </div>
            )}

        </div>
        <div
          className={`${
            expanded ? '' : 'hidden'
          }`}
        >
          <>
            <div className="h-4"></div>
            <p className="md:text-lg text-white">{followUpSteps}</p>
            <div className="h-4"></div>
            <div className="flex justify-end">
              <button
                className="rounded-xl bg-pink-500 hover:bg-pink-700 px-6 py-3 text-sm md:text-base text-white"
              >
                    let&apos;s do it
              </button>
            </div>
            <div className="h-4"></div>
          </>
        </div>
      </div>
    </>
  );
};

export default AiBlock;
