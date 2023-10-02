import { MarketingForm } from '@/types/marketing_form';
import { saveForm } from '@/utils/database';
import { redirect } from 'next/navigation';

const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;

const PaymentField = ({ formData, updateFormData, onValidation }: {
  formData: MarketingForm;
  updateFormData: (key: string, value: any) => void;
  onValidation: (isValid: boolean) => void;
}) => {
  const handleButtonClick = async () => {
    const id = formData.id;
    await saveForm(formData);
    redirect(`${paymentLink}?client_reference_id=${id}`);
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
          <button
            onClick={handleButtonClick}
            className='tapped_btn_rounded'
          >
                pay now
          </button>

        </div>
      </div>
    </div>
  );
};

export default PaymentField;
