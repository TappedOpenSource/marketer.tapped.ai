
import Link from 'next/link';
import { redirect } from 'next/navigation';

const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK

const MarketingForm = () => {
    if (!paymentLink) {
        return (
            <div className='h-screen flex flex-col justify-center items-center'>
                <div>whoa</div>
                <div>no payment link</div>
            </div>
        );
    }

    const saveFormAndRedirect = () => {
        // save form

        redirect(paymentLink);
    }

    return (
        <>
        <div className='h-screen flex flex-col justify-center items-center'>
            <div>whoa</div>
            <button
                onClick={saveFormAndRedirect}
                className='rounded-xl color-white bg-blue-500 p-4'
            >
                submit
            </button>
        </div>
        </>
    );
}

export default MarketingForm;