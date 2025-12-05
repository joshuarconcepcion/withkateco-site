import { useEffect, useState, type JSX } from 'react';
import homepageHeroImg from '../assets/homepageHeroImg.png';

export default function Homepage(): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <img
      src={homepageHeroImg}
      className={`w-full h-[clamp(300px,50vh,800px)] object-cover
                transition-all duration-1000 ease-out 
                ${mounted ? 'opacity-100 transate-y-0' : 'opacity-0 -translate-y-10'}`}
    />
  );
}

