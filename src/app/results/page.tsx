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

  function formatMarketingContent(content) {
    const formattedContent = [];
    const sectionHeaders = ['Introduction:', '1. Target Audience:', '2. Online Presence and Branding:', '3. Content Marketing:', '4. Collaborations and Partnerships:', '5. Guerrilla Marketing and Street Promotion:', 'Conclusion:'];

    const mainSections = content.split(new RegExp(`(${sectionHeaders.join('|')})`));

    for (let i = 0; i < mainSections.length; i++) {
      const section = mainSections[i].trim();

      if (sectionHeaders.includes(section)) {
        formattedContent.push(section);
      } else {
        const bulletPoints = section.split('- ').filter((pt) => pt);
        if (bulletPoints.length > 0) {
          formattedContent.push(bulletPoints[0].trim());
          for (let j = 1; j < bulletPoints.length; j++) {
            formattedContent.push('- ' + bulletPoints[j].trim());
          }
        } else {
          formattedContent.push(section.trim());
        }
      }
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
