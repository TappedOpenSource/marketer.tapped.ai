'use client';

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
      <div>
        <h1>Results</h1>
        <div>{sessionId}</div>
        <div>loading...</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Results</h1>
      <div>{sessionId}</div>
      <div>{marketingPlan?.status}</div>
      <div>{marketingPlan?.content}</div>
    </div>
  );
};

export default Results;
