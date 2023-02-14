import Image from 'next/image'
  
  {/** Reusable Image component*/}
  export const Icon = ({ src, alt }) => {
    return <Image src={src} alt={alt} />;
  }