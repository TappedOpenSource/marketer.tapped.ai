'use client';

import Loading from '@/components/loading';
import { MarketingPlan } from '@/types/marketing_plan';
import { checkoutSessionToClientReferenceId } from '@/utils/api';
import { marketingPlanListener } from '@/utils/database';
import { redirect, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';


const Results = () => {
  const params = useSearchParams();
  const sessionId = params.get('session_id');
  if (!sessionId) {
    redirect('/');
  }

  const [marketingPlan, setMarketingPlan] = useState<MarketingPlan | null>(null);

  useEffect(() => {
    const fetchClientReferenceId = async () => {
      const clientReferenceId = await checkoutSessionToClientReferenceId(sessionId);
      console.log({ clientReferenceId });
      marketingPlanListener(clientReferenceId, async (marketingPlan) => {
        setMarketingPlan(marketingPlan);
      });
    };
    fetchClientReferenceId();
  }, []);

  if (marketingPlan === null) {
    return (
      <Loading />
    );
  }

  if (marketingPlan.status === 'processing') {
    return (
      <Loading />
    );
  }

  // eslint-disable-next-line sonarjs/cognitive-complexity
  function formatMarketingContent(content) {
    console.log(content);
    const sections = ['Introduction:', 'Target Audience:', 'Promotion Strategies:', 'Conclusion:'];
    const formattedContent = [];

    let startIndex = 0;
    for (const section of sections) {
      const endIndex = content.indexOf(section, startIndex + 1);
      const sectionLimit = endIndex !== -1 ? endIndex : content.length;
      const sectionContent = content.slice(startIndex, sectionLimit).trim();

      if (sectionContent) {
        const numericPoints = sectionContent.split(/\d+\./);
        for (const numericPoint of numericPoints) {
          if (numericPoint.trim()) {
            const alphabeticPoints = numericPoint.split(/[a-z]\)/);
            for (const alphabeticPoint of alphabeticPoints) {
              if (alphabeticPoint.trim()) {
                formattedContent.push(alphabeticPoint.trim());
              }
            }
          }
        }
      }

      startIndex = sectionLimit;
    }

    return formattedContent;
  }

  const formattedContent = formatMarketingContent(marketingPlan.content);

  return (
    <div className="px-24 pt-24">
      <div className="flex flex-row">
        <h1 className="font-black text-4xl">Results</h1>
        <div className='w-6'></div>
        <div className="p-2 bg-green-500 text-white rounded-xl">
          <p>
            {marketingPlan.status}
          </p>
        </div>
      </div>
      <div className='h-12'></div>
      <div className='bg-white p-8 rounded-md'>
        <div>
          {formattedContent.map((paragraph, index) => (
            <p key={index} className='text-black mb-4'>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
