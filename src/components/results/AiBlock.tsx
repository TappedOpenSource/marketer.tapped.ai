import { getAiFollowUpSteps } from '@/utils/ai';
import { useEffect, useState } from 'react';
import TeamSuggestion from './TeamAction';

const AiBlock = ({ text }: {
    text: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [followUpSteps, setFollowUpSteps] = useState<{
    title: string;
    actions: string;
  }[] | null>(null);

  // const randomInt = Math.floor(Math.random() * 5_000);
  const randomInt = 0;
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
      <div className="px-8 rounded-xl bg-gray-700">
        <div className='flex flex-row justify-between items-center gap-4'>
          <h4 className="text-white text-xl font-bold" style={{
            marginTop: '1rem',
            marginBottom: '1rem',
          }}>AI Team</h4>
          {!loading ? (
            <button
              onClick={() => setExpanded(!expanded)}
              className="rounded-xl bg-blue-300/25 hover:bg-blue-500/50 text-blue-300 text-sm px-4 py-2"
            >{expanded ? 'show less' : 'show more'}</button>
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
            {followUpSteps?.map(({ title, actions }, index) => (
              <div
                className='py-4'
                key={index}
              >
                <TeamSuggestion
                  title={title}
                  actions={actions} />
              </div>
            ))}
            {/* <div className="h-4"></div>
            <div className="flex justify-end">
              <button
                className="rounded-xl bg-blue-300/25 hover:bg-blue-500/25 px-6 py-3 text-sm md:text-base text-blue-300"
              >
                    let&apos;s do it
              </button>
            </div> */}
            <div className="h-4"></div>
          </>
        </div>
      </div>
    </>
  );
};

export default AiBlock;
