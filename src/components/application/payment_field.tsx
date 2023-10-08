import { MarketingForm } from '@/types/marketing_form';
import { createEmptyMarketingPlan, saveForm } from '@/utils/database';
import { useState } from 'react';

const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;

const PaymentField = ({ formData, updateFormData, onValidation }: {
  formData: MarketingForm;
  updateFormData: (key: string, value: any) => void;
  onValidation: (isValid: boolean) => void;
}) => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    const id = formData.id;
    const redirectUrl = `${paymentLink}?client_reference_id=${id}`;
    console.log({ redirectUrl });

    await saveForm(formData);
    await createEmptyMarketingPlan({
      clientReferenceId: id,
    });

    window.location.href = redirectUrl;
  };
  return (
    <div style={{ backgroundColor: '#15242d', height: '100vh' }} className="flex items-center justify-center">
      <div className="text-center">
        <div>
          <p className="text-lg font-bold text-white mb-4">
            let's get you that marketing plan!
          </p>
        </div>
        <div className="flex items-center justify-center w-[60%] mx-auto">
          {loading && (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          )}
          {!loading && (
            <button
              onClick={handleButtonClick}
              className='tapped_btn_rounded'
            >
                claim now
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default PaymentField;
