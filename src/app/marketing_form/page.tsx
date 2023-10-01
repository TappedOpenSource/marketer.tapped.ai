
import Link from 'next/link';

const MarketingForm = () => {
    return (
        <>
        <div className='h-screen flex flex-col justify-center items-center'>
            <div>whoa</div>
            <Link
                href="https://buy.stripe.com/test_aEUcOh0h32sWdeUfYY"
                className='rounded-xl color-white bg-blue-500 p-4'
            >
                submit
            </Link>
        </div>
        </>
    );
}

export default MarketingForm;