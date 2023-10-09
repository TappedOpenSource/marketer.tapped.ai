'use client';

import { redirect, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { marketingPlanListener } from '@/utils/database';
import { MarketingPlan } from '@/types/marketing_plan';
import Loading from '@/components/loading';
import Processing from '@/components/processing';
import Markdown from 'react-markdown';
import Link from 'next/link';

const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;

const Preview = () => {
  const params = useSearchParams();
  const clientReferenceId = params.get('client_reference_id');
  if (!clientReferenceId) {
    redirect('/');
  }

  const paymentUrl = `${paymentLink}?client_reference_id=${clientReferenceId}`;

  const [marketingPlan, setMarketingPlan] = useState<MarketingPlan | null>(null);

  useEffect(() => {
    console.log({ clientReferenceId });
    marketingPlanListener(clientReferenceId, async (marketingPlan) => {
      setMarketingPlan(marketingPlan);
    });
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

  const headerRegEx = /^#[^#\n]+([\W\w]*?)/gm;
  const subheaderRegEx = /^##[^#\n]+([\W\w]*?)/gm;
  const headers = marketingPlan.content.match(headerRegEx);
  const subheaders = marketingPlan.content.match(subheaderRegEx);
  console.log(headers);
  console.log(subheaders);

  return (
    <div className="flex flex-col lg:flex-row px-4 py-4 lg:px-24 lg:pt-24">
      <div className='flex flex-col items-center'>
        <h1 className='text-6xl font-extrabold py-6 px-6 text-center'>Preview</h1>
        <p className='md:w-1/2 lg:w-full text-center font-thin pb-12'>
          this is copy for ilias to add stuff.
          he'll add some shit about how this is a pivotal
          moment in the artist's career and how this could change their life
        </p>
        <div>
          <Link
            href={paymentUrl}
            className='bg-blue-600 hover:bg-blue-800 text-white font-extrabold py-4 px-6 rounded'
          >
            BUY FULL PLAN
          </Link>
        </div>
      </div>
      <div className='h-8 w-4 lg:h-12 lg:w-12'></div>
      <div className='bg-white p-8 rounded-md'>
        <Markdown className="text-black prose lg:prose-xl" children={headers[0]} />
        {subheaders.map((subheader) => (
          <div className='py-6'>
            <Markdown className="text-black prose lg:prose-xl" children={subheader} />
            <div className='blur-lg text-black py-4'>
            Blanditiis occaecati deleniti nisi hic placeat officiis nemo eius. Architecto sapiente omnis ut impedit. Sequi ex nam temporibus voluptate excepturi. Quasi illum pariatur illum eum.

            Exercitationem neque pariatur eum eos qui excepturi. Deserunt eligendi perferendis ut. Accusantium libero nobis incidunt. Itaque molestiae laboriosam dolorum eos consequatur nesciunt.

            Ducimuslksjdbgn excepturi est voluptas consequatur reprehenderit ipsa non quis. Sunt magnam eos aut deserunt eum pariatur est impedit. Quidem quae aut praesentium voluptatem architecto eligendi quisquam. Consectetur quaerat architecto ea non dignissimos. Eum ea molestias ut.

            Minus possimus expedita est at qui et. Necessitatibus ut omnis modi aut velit quo. Rerum esse magni praesentium est. Eos non nostrum laudantium fugit vel commodi possimus. Vitae minima ab vitae sunt. Distinctio quae delectus nemo.
            </div>
          </div>
        ),)}
      </div>
    </div>
  );
};

export default Preview;
