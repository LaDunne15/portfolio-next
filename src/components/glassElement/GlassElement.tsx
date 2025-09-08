import { CSSProperties, ReactNode, useState, useEffect, useRef, useMemo } from 'react';
import { getDisplacementFilter, DisplacementOptions } from './getDisplacementFilter';
import { getDisplacementMap } from './getDisplacementMap';
import styles from './glassElements.module.css';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

type GlassElementProps = Omit<DisplacementOptions, 'width' | 'height'> & {
  width: number | string;
  height: number | string;
  children?: ReactNode;
  blur?: number;
  debug?: boolean;
  styleContainer?: string;
};

export const GlassElement = ({
  height,
  width,
  depth: baseDepth,
  radius,
  children,
  strength,
  chromaticAberration,
  blur = 2,
  debug = false,
  styleContainer = '',
}: GlassElementProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [measuredSize, setMeasuredSize] = useState({ width: 300, height: 300 });

  const mode = useSelector((state: RootState) => state.mode.value);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setMeasuredSize({ width, height });
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const depth = baseDepth;

  const filterUrl = useMemo(() => {
    if (mode === 'light') return '';
    return getDisplacementFilter({
      height: measuredSize.height,
      width: measuredSize.width,
      radius,
      depth,
      strength,
      chromaticAberration,
    });
  }, [measuredSize, radius, depth, strength, chromaticAberration, mode]);

  const style: CSSProperties = {
    height: typeof height === 'number' ? `${height}px` : height,
    width: typeof width === 'number' ? `${width}px` : width,
    borderRadius: `${radius}px`,
    backdropFilter: `blur(${blur / 2}px) url('${filterUrl}') blur(${blur}px) brightness(1.1) saturate(1.5)`,
  };

  if (debug) {
    style.background = `url("${getDisplacementMap({
      height: measuredSize.height,
      width: measuredSize.width,
      radius,
      depth,
    })}")`;
    style.boxShadow = 'none';
  }

  return (
    <div
      ref={ref}
      className={classNames(styles.box, styleContainer)}
      style={style}
      onMouseDown={() => {}}
      onMouseUp={() => {}}
    >
      {children}
    </div>
  );
};
