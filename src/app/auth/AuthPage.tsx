import React from "react";
import { Link } from "react-router-dom";
import regesterimage from "../../assets/regester.jpg"

const BACKGROUND_URL = regesterimage // placeholder motion-ish bg





export default function AuthPage() {
  return (
    <div className="relative mx-auto h-[100dvh] w-full max-w-[430px] overflow-hidden bg-black text-[#101010]">
      {/* Header: logo and byline */}
      <header className="relative flex items-center gap-3  ">
        <img
          src={BACKGROUND_URL}
          alt="Family Echo logo" />
      </header>

      {/* Bottom actions with background image */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="relative">
          <img
            src={BACKGROUND_URL}
            alt="bg"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-white/85" />

          <div className="relative px-5 pb-[max(16px,env(safe-area-inset-bottom))] pt-8">
            <div className="flex items-center gap-3">
               
              <button 
                className="h-12 flex-1 rounded-2xl border border-neutral-900/80 bg-white text-neutral-900 shadow-sm active:scale-[.98]"
              >
                <Link to="/login" className="">
                <span className="text-[13px] font-semibold tracking-wide">LOG IN</span>
                </Link>
              </button>
              

              <button
                className="h-12 flex-1 rounded-2xl bg-neutral-900 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] active:scale-[.98]"
              >
                <span className="text-[13px] font-semibold tracking-wide">REGISTER</span>
              </button>
            </div>

            <div className="mt-4 text-center">
              <button className="mx-auto block text-[12px] font-medium text-neutral-800 underline underline-offset-4">
                Explore Sample Family Tree Here
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating face badges */}
   
    </div>
  );
}
