'use client';

import Loading from '@/components/loading';
import Processing from '@/components/processing';
import { MarketingPlan } from '@/types/marketing_plan';
import { checkoutSessionToClientReferenceId } from '@/utils/api';
import { getAccessCode, marketingPlanListener } from '@/utils/database';
import { redirect, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';


const Results = () => {
  const params = useSearchParams();
  const sessionId = params.get('session_id');
  const clientReferenceId = params.get('client_reference_id');
  const accessCode = params.get('access_code');

  if (!sessionId && !(clientReferenceId && accessCode)) {
    redirect('/');
  }

  const [marketingPlan, setMarketingPlan] = useState<MarketingPlan | null>(null);

  useEffect(() => {
    if (!sessionId) {
      const fetchClientReferenceId = async () => {
        const clientReferenceId = await checkoutSessionToClientReferenceId(sessionId);
        console.log({ clientReferenceId });
        marketingPlanListener(clientReferenceId, async (marketingPlan) => {
          setMarketingPlan(marketingPlan);
        });
      };
      fetchClientReferenceId();
    }
  }, []);

  useEffect(() => {
    const startListener = async () => {
      if (clientReferenceId && accessCode) {
        const theCode = await getAccessCode(accessCode);
        if (theCode === null) {
          alert(`This access code ${accessCode} does not exist.`);
          return;
        }

        console.log({ clientReferenceId });
        marketingPlanListener(clientReferenceId, async (marketingPlan) => {
          setMarketingPlan(marketingPlan);
        });
      }
    };
    startListener();
  });

  if (marketingPlan === null) {
    return (
      <Loading />
    );
  }

  if (marketingPlan.status === 'processing') {
    return (
      <Processing />
    );
  }

  return (
    <div className="px-4 py-4 lg:px-24 lg:pt-24">
      <button>download as PDF</button>
      <div className='h-4 lg:h-12'></div>
      <div className='bg-white p-8 rounded-md'>
        <Markdown className="text-black prose lg:prose-xl" children={marketingPlan.content} />
      </div>
    </div>
  );
};

export default Results;
