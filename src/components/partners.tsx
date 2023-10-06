import Image from 'next/image';

const Partners = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="text-center font-semibold">with marketing data from industry leaders such as: </div>
      <div className='flex flex-row'>
        <Image
          src='/images/drr_logo.jpg'
          width={100}
          height={100}
          alt='Death row records logo'
          className='m-4'
        />

        <Image
          src='/images/bcm_logo.png'
          width={100}
          height={100}
          alt='Black canvaz logo'
          className='m-4'
        />

        <Image
          src='/images/pe_logo.png'
          width={100}
          height={100}
          alt='Playmakrs entertainment logo'
          className='rounded-full m-4'
        />
      </div>
    </div>
  );
};

export default Partners;
