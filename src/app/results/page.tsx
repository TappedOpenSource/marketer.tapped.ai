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
      <div>{marketingPlan.content}</div>
    </div>
  );
};

export default Results;
