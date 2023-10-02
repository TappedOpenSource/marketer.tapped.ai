'use client'

import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import FormDataManager from '@/components/FormDataManager';
import SegmentedLine from '@/components/SegmentedLine';
import NameField from '@/components/application/name_field';
import FollowingField from '@/components/application/following_field';

import { track } from '@vercel/analytics';

const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK

const MarketingForm: NextPage = () => {

  if (!paymentLink) {
      return (
          <div className='h-screen flex flex-col justify-center items-center'>
              <div>whoa</div>
              <div>no payment link</div>
          </div>
      );
  }

  // const uuid = '1234';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();

  const pages = [
    NameField,
    FollowingField
  ];
  const totalPages = pages.length;
  const CurrentPage = pages[currentIndex];

  const backgroundColor = '#3ba0fc';

  React.useEffect(() => {
    setIsValid(false);
  }, [currentIndex]);

  const handleNextPage = () => {
    if (isValid) {
      console.log(`${currentIndex}: next page`);
      track('next-question', {
        index: currentIndex,
        question: CurrentPage.name,
      });
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentIndex === 0) {
      router.push('/');
    } else {
      console.log(`${currentIndex}: previous page`);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (totalPages <= 0) {
    return (
      <>
        <h1>Form is empty</h1>
      </>
    );
  }

  return (
    <>
      <div className={'flex min-h-screen flex-col items-center justify-center px-4 md:px-8 lg:px-16'} style={{ backgroundColor }}>
        <div className="w-full max-w-screen-md mx-auto">
          <SegmentedLine totalPages={totalPages} currentIndex={currentIndex} />
          <FormDataManager>
            {({ formData, updateFormData }) => {
              return (
                <>
                  <CurrentPage
                    formData={formData}
                    updateFormData={updateFormData}
                    onValidation={setIsValid}
                  />
                  <div className="flex justify-between mt-4 md:mt-8 lg:mt-16">
                    <button
                      className="tapped_btn_rounded"
                      onClick={handlePreviousPage}
                    >
                      back
                    </button>

                    {isValid && currentIndex !== totalPages - 1 && (
                      <button
                        className="tapped_btn_rounded_black"
                        onClick={handleNextPage}
                        disabled={!isValid}
                      >
                        next
                      </button>
                    )}
                  </div>
                </>
              );
            }}
          </FormDataManager>
        </div>
      </div>
    </>
  );
};

// return (
//     <>
//         <div className='h-screen flex flex-col justify-center items-center'>
//             <div>whoa</div>
//             <Link
//                 href={`${paymentLink}?client_reference_id=1234`}
//                 className='rounded-xl color-white bg-blue-500 p-4'
//             >
//                 submit
//             </Link>
//         </div>
//     </>

export default MarketingForm;
