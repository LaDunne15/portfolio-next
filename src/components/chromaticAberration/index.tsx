"use client";
import React, { useId, useState } from "react";
import "./chAber.css";
import classNames from "classnames";

type ChAberProps = {
  children: React.ReactNode;
  strength?: number; // сила ефекту
  active?: boolean;  // true = завжди активний ефект
  className?: string;
};

export const ChAber = ({ children, strength = 2, active = false, className="" }: ChAberProps) => {
  const filterId = useId();
  const [hover, setHover] = useState(false);

  const dx = Math.min(strength, 20);

  const redMatrix = `${1 + strength} 0 0 0 0
                      0 0 0 0 0 
                      0 0 0 0 0 
                      0 0 0 1 0`;

  const blueMatrix = `0 0 0 0 0
                      0 ${1 + strength} 0 0 0 
                      0 0 ${2 + strength} 0 0 
                      0 0 0 1 0`;

  const applyFilter = active || hover;

  return (
    <div
      className="ch-aber-wrapper"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg width="0" height="0">
        <filter id={filterId}>
          <feColorMatrix type="matrix" result="red_" values={redMatrix} />
          <feOffset in="red_" dx={dx} dy="0" result="red" />
          <feColorMatrix type="matrix" in="SourceGraphic" result="blue_" values={blueMatrix} />
          <feOffset in="blue_" dx={-dx} dy="0" result="blue" />
          <feBlend mode="screen" in="red" in2="blue" />
        </filter>
      </svg>

      <div
        className={ classNames("ch-aber-content", className) }
        style={applyFilter ? { filter: `url(#${filterId})` } : {}}
      >
        {children}
      </div>
    </div>
  );
};
