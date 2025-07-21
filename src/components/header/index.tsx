"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from 'react';
import { GlassElement } from "../glassElement/GlassElement";
import { Contact2, Home, Palette } from "lucide-react";
import { ChAber } from "../chromaticAberration";

import s from "@/styles/Main.module.scss"

export const Header = () => {

  const pathname = usePathname();

  return (
  <div style={{ width: "100%", textAlign: "center", position: "sticky", top: 0, zIndex: 10 }}>
    <div
      style={{
        display: "inline-block",
        padding: 10,
      }}
    >
      <GlassElement
        width="auto"
        height="auto"
        radius={10}
        depth={10}
        blur={5}
        chromaticAberration={15}
        styleContainer={s.header}
      >
        <Link href="/" className="link"> 
          <ChAber 
            active={pathname==="/"}
            className={s.element}
          > 
            <Home color="#FFF"/>
            <span>Home</span>
          </ChAber> 
        </Link>
        <Link href="/about" className="link">
          <ChAber 
            active={pathname==="/about"}
            className={s.element}
          > 
            <Contact2 color="#FFF"/>
            About
          </ChAber>
        </Link>
        <Link href="/projects" className="link">
          <ChAber 
            active={pathname==="/projects"}
            className={s.element}
          > 
            <Palette color="#FFF"/>
            Projects
          </ChAber>
        </Link>
        <Link href="/contact" className="link"> 
          <ChAber 
            active={pathname==="/contact"}
            className={s.element}
          > 
            <Contact2 color="#FFF"/>
            Contact
          </ChAber>
        </Link>
      </GlassElement>
      </div>
    </div>
  );
}

export default Header;