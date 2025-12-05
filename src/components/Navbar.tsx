import { useEffect, useState, type JSX } from 'react';
import { Link } from 'react-router';
import withkatecoLogo from '../assets/withkatecoLogo.png'

export default function Navbar(): JSX.Element {
    const [open, setOpen] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className={`relative z-20 w-full flex justify-between items-center py-4
            transition-all duration-1000 ease-out 
            ${mounted ? 'opacity-100 transate-y-0' : 'opacity-0 -translate-y-10'}
            `}>

            <Link to='/'>
                <img src={withkatecoLogo} className='h-[60px] w-auto px-4'/>
            </Link>
            
            <div className={`hidden md:flex justify-around gap-8 font-ltsoul px-8`}>
                <Link to='/about' className='text-xl text-white' onClick={() => setOpen(false)}>about</Link>
                <Link to='/calendar' className='text-xl text-white' onClick={() => setOpen(false)}>calendar</Link>
                <Link to='/offerings' className='text-xl text-white' onClick={() => setOpen(false)}>offerings</Link>
                <Link to='/connect' className='text-xl text-white' onClick={() => setOpen(false)}>connect</Link>
            </div>

            <button 
                className='md:hidden flex flex-col gap-1.5 px-8'
                onClick={() => setOpen(!open)}
            >
                <span className='w-6 h-0.75 bg-white transition'></span>
                <span className='w-6 h-0.75 bg-white transition'></span>
            </button>

            <div 
                className={`font-ltsoul absolute top-0 left-0 w-full 
                        bg-black/50 backdrop-blur-md min-h-[50vh] 
                        flex flex-col justify-center items-center gap-8
                        transition-all duration-450 ease-out
                ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-50 pointer-events-none"}
                `}
            >
                <Link to='/about' className='text-xl text-white' onClick={() => setOpen(false)}>about</Link>
                <Link to='/calendar' className='text-xl text-white' onClick={() => setOpen(false)}>calendar</Link>
                <Link to='/offerings' className='text-xl text-white' onClick={() => setOpen(false)}>offerings</Link>
                <Link to='/connect' className='text-xl text-white' onClick={() => setOpen(false)}>connect</Link>
            </div>

        </nav>
    )
}