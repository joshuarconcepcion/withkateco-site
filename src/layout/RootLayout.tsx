import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { type JSX } from "react"; 
import homepageBG from '../assets/homepageBG.png';

export default function RootLayout(): JSX.Element {
    return (
    <div className="relative min-h-screen overflow-hidden w-full">
      
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url(${homepageBG})` }}
      />

      {/* FOREGROUND */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="flex-1 flex w-full justify-center items-center">
          <Outlet />
        </div>

      </div>
    </div>
  );
}