
import Link from 'next/link';

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

    return (
        <>
        <div className='h-screen flex flex-col justify-center items-center'>
            <div>whoa</div>
            <Link
                href={paymentLink}
                className='rounded-xl color-white bg-blue-500 p-4'
            >
                submit
            </Link>
        </div>
        </>
    );
}

export default MarketingForm;