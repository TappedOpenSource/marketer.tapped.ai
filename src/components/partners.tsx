import Image from 'next/image';
import Link from 'next/link';

const Partners = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
      <div className="text-center font-bold opacity-80">
        IN COLLABORATION WITH:
      </div>
      <Link

        href="https://tapped.ai"
      >
        <Image
          src='/images/tapped_reverse.png'
          width={75}
          height={75}
          alt='tapped logo'
        />
      </Link>
      <Link
        href="https://www.deathrowofficial.com/"
      >
        <Image
          src='/images/drr_logo.jpg'
          width={75}
          height={75}
          alt='Death row records logo'
        />
      </Link>

      <Link
        href="https://www.instagram.com/blankkanvaz/"
      >
        <Image
          src='/images/bcm_logo.png'
          width={75}
          height={75}
          alt='Black canvaz logo'
        />
      </Link>

      <Link
        href="https://www.instagram.com/playmakrsent/"
      >
        <Image
          src='/images/pe_logo.png'
          width={75}
          height={75}
          alt='Playmakrs entertainment logo'
          className='rounded-full'
        />
      </Link>
    </div>
  );
};

export default Partners;
