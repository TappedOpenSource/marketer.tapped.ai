'use client';

import Loading from '@/components/loading';
import Processing from '@/components/processing';
import { MarketingPlan } from '@/types/marketing_plan';
import { checkoutSessionToClientReferenceId } from '@/utils/api';
import { marketingPlanListener } from '@/utils/database';
import { redirect, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from '../../components/PDFDocument';

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
      <Processing />
    );
  }

  return (
    <div className="px-4 py-4 lg:px-24 lg:pt-24 flex flex-col items-center">
      <PDFDownloadLink
        document={<PDFDocument content={marketingPlan.content} />}
        fileName="marketing_plan.pdf"
        className="tapped_btn_rounded_blue w-10"
      >
        {({ loading }) => (loading ? 'Preparing document...' : 'Download as PDF')}
      </PDFDownloadLink>
      <div className='h-4 lg:h-12'></div>
      <div className='bg-white p-8 rounded-md'>
        <Markdown className="text-black prose lg:prose-xl markdown-content" children={marketingPlan.content} />
      </div>
    </div>
  );
};

export default Results;
