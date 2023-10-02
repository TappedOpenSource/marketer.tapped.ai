import Link from 'next/link';

const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;

const PaymentField = ({ formData, updateFormData, onValidation }) => {
  const id = formData.id;

  return (
    <div style={{ backgroundColor: '#15242d', height: '100vh' }} className="flex items-center justify-center">
      <div className="text-center">
        <div>
          <p className="text-lg font-bold text-white mb-4">
            let's get you that marketing plan!
          </p>
        </div>
        <div className="flex items-center justify-center w-[60%] mx-auto">
          <Link
            href={`${paymentLink}?client_reference_id=${id}`}
            className='tapped_btn_rounded'
          >
                pay now
          </Link>

        </div>
      </div>
    </div>
  );
};

export default PaymentField;
