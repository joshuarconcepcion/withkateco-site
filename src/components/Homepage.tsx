import { type JSX } from 'react';
import homepageBG from '../assets/homepageBG.png';
import homepageHeroImg from '../assets/homepageHeroImg.png';
import Navbar from './Navbar';

export default function Homepage(): JSX.Element {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url(${homepageBG})` }}
      />

      {/* FOREGROUND */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* NAVBAR */}
        <Navbar />

        {/* HERO SECTION */}
        <div className="flex flex-1 justify-center items-center px-4">
          <img
            src={homepageHeroImg}
            className="block h-auto max-w-[clamp(1000px,100vw,250000px)]"
            alt=""
          />
        </div>

      </div>
    </div>
  );
}
