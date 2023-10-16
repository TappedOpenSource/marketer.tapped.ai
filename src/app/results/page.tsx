'use client';

import Loading from '@/components/loading';
import Processing from '@/components/processing';
import { checkoutSessionToClientReferenceId } from '@/utils/api';
import { getAccessCode, marketingPlanListener } from '@/utils/database';
import { redirect, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from '@/components/PDFDocument';
import Link from 'next/link';
import AiBlock from '@/components/results/AiBlock';
import MarketingPlanDocument from '@/components/results/MarketingPlanDocument';
import { MarketingPlan } from '@/types/marketing_plan';

const Results = () => {
  const params = useSearchParams();
  const sessionId = params.get('session_id');
  const clientReferenceId = params.get('client_reference_id');
  const rawAccessCode = params.get('access_code');
  const accessCode = rawAccessCode?.toString()?.toLowerCase();

  if (
    !params.has('session_id') &&
    !(params.has('client_reference_id') && params.has('access_code'))
  ) {
    redirect('/');
  }

  const [marketingPlan, setMarketingPlan] = useState<MarketingPlan | null>(null);

  useEffect(() => {
    if (sessionId !== null) {
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
      if ((clientReferenceId !== null) && (accessCode !== null)) {
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
  }, []);

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
    <div className="px-4 py-4 lg:px-24 lg:pt-24 flex flex-col items-center">
      <div className='flex flex-col md:flex-row gap-2 rounded-xl md:bg-blue-500'>
        <PDFDownloadLink
          document={<PDFDocument content={marketingPlan.content} />}
          fileName="marketing_plan.pdf"
          className="hidden md:block rounded-xl bg-blue-500 hover:bg-blue-700 px-6 py-3 text-sm md:text-base"
        >
          {({ loading }) => (loading ? 'preparing document...' : 'get as PDF')}
        </PDFDownloadLink>
        <Link
          className="hidden md:block rounded-xl bg-blue-500 hover:bg-blue-700 px-6 py-3 text-sm md:text-base"
          target="_blank"
          rel="noopener noreferrer"
          href="https://tapped.ai"
        >
          join the label
        </Link>
        <Link
          className="hidden md:block rounded-xl bg-blue-500 hover:bg-blue-700 px-6 py-3 text-sm md:text-base"
          target="_blank"
          rel="noopener noreferrer"
          href="https://viralsocialmediaideas.com"
        >
          social media
        </Link>
        <Link
          className="hidden md:block rounded-xl bg-blue-500 hover:bg-blue-700 px-6 py-3 text-sm md:text-base"
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.tapped.ai"
        >
          bookings
        </Link>
        <Link
          className="hidden md:block rounded-xl bg-blue-500 hover:bg-blue-700 px-6 py-3 text-sm md:text-base"
          target="_blank"
          rel="noopener noreferrer"
          href="https://getmusicnewsletters.com"
        >
          newsletter
        </Link>
      </div>
      <div className='h-4 lg:h-12'></div>
      <MarketingPlanDocument
        content={marketingPlan.content}
      />
      <div className='h-4 lg:h-24'></div>
      <div className='flex flex-col md:hidden gap-2 rounded-xl md:bg-blue-500'>
        <PDFDownloadLink
          document={<PDFDocument content={marketingPlan.content} />}
          fileName="marketing_plan.pdf"
          className="rounded-xl bg-blue-500 hover:bg-blue-700 px-6 py-3 text-sm md:text-base"
        >
          {({ loading }) => (loading ? 'preparing document...' : 'get as PDF')}
        </PDFDownloadLink>
        <Link
          className="rounded-xl bg-blue-500 hover:bg-blue-700 px-6 py-3 text-sm md:text-base"
          target="_blank"
          rel="noopener noreferrer"
          href="https://tapped.ai"
        >
          join the label
        </Link>
        <Link
          className="rounded-xl bg-blue-500 hover:bg-blue-700 px-6 py-3 text-sm md:text-base"
          target="_blank"
          rel="noopener noreferrer"
          href="https://viralsocialmediaideas.com"
        >
          social media
        </Link>
        <Link
          className="rounded-xl bg-blue-500 hover:bg-blue-700 px-6 py-3 text-sm md:text-base"
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.tapped.ai"
        >
          bookings
        </Link>
        <Link
          className="rounded-xl bg-blue-500 hover:bg-blue-700 px-6 py-3 text-sm md:text-base"
          target="_blank"
          rel="noopener noreferrer"
          href="https://getmusicnewsletters.com"
        >
          newsletter
        </Link>
      </div>
      <div className='h-4 lg:h-24'></div>
    </div>
  );
};

export default Results;
