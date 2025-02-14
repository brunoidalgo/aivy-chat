"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"
import { MobileDropdownMenu } from "@/components/mobile-dropdown-menu"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen sm:w-full">

      <div className="relative z-10">
        {isMobile && <MobileDropdownMenu />}
        {!isMobile && <Navbar />}
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}