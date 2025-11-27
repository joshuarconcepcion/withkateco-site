import {  type JSX } from 'react';
import homepageBG from '../assets/homepageBG.png'
import homepageHeroImg from '../assets/homepageHeroImg.png'

function Homepage(): JSX.Element {
    return (
        /* BACKGROUND LAYER*/
        <>
            <div
                className='absolute z-0 inset-0 bg-cover bg-center bg-fixed'
                style={{ backgroundImage: `url(${homepageBG})` }}
            >
            </div>
            
            <div className='relative z-10 flex justify-center items-center min-h-screen overflow-hidden'>
                <img
                    src={homepageHeroImg}
                    className="block max-w-[clamp(1500px,100vw,2500px)]"
                />
            </div>
        </>
    )
}

export default Homepage;