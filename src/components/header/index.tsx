"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from 'react';
import { GlassElement } from "../glassElement/GlassElement";

export const Header = () => {

  const pathname = usePathname();

    const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // встановити початкову ширину
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{
      position: "fixed",
      width:"auto",
      padding: 10
    }}>
      <GlassElement
        width="100vw"
        height="auto"
        radius={10}
        depth={10}
        blur={5}
        chromaticAberration={15}
      >
        <Link href="/"> Home </Link>
        <Link href="/about"> About </Link>
        <Link href="/projects"> Projects </Link>
        <Link href="/contact"> Contact </Link>

        <p> {pathname} </p>
      </GlassElement>
    </div>
  );
}

export default Header;