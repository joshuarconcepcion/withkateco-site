import { useState, type JSX } from 'react';
import withkatecoLogo from '../assets/withkatecoLogo.png'

export default function Navbar(): JSX.Element {
    const [open, setOpen] = useState(false);

    return (
        <nav className='relative z-20 w-full flex justify-between items-center'>
            {/* LOGO */}
            <img src={withkatecoLogo} className='max-w-[30vw]'></img>

            {/* DESKTOP NAVBAR */}

            {/* MOBILE NAVBAR */}
            <button 
                className='md:hidden flex flex-col gap-1.5 p-4'
                onClick={() => setOpen(!open)}
            >
                <span className='w-6 h-0.5 bg-white transition'></span>
                <span className='w-6 h-0.5 bg-white transition'></span>
                <span className='w-6 h-0.5 bg-white transition'></span>
            </button>

            {open && (
                <div className='absolute top-0 left-0 w-full bg-black/50 backdrop-blur-md min-h-[50vh] flex flex-col justify-center items-center gap-8'>
                    <a className='text-lg text-white' onClick={() => setOpen(false)}>about</a>
                    <a className='text-lg text-white' onClick={() => setOpen(false)}>calendar</a>
                    <a className='text-lg text-white' onClick={() => setOpen(false)}>offerings</a>
                    <a className='text-lg text-white' onClick={() => setOpen(false)}>connect</a>
                </div>
            )}
        </nav>
    )
}