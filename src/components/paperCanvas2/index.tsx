'use client';

import React, { ReactNode } from 'react';
// import paper, { Point, Raster, Path, PointText } from 'paper';
// import { palette } from '@/constants/color';

interface Props {
  children?: ReactNode;
}

export default function SpiralRaster({ children }: Props) {
  return <>{children}</>;
}

// export default function SpiralRaster({ children }: Props) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const pathRef = useRef<paper.Path | null>(null);
//   const rasterRef = useRef<paper.Raster | null>(null);
//   const positionRef = useRef<paper.Point | null>(null);
//   const countRef = useRef(0);
//   const growRef = useRef(false);
//   const maxRef = useRef(0);
//   const textRef = useRef<paper.PointText | null>(null);

//   const [, setTick] = useState(0);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     paper.setup(canvasRef.current);

//     const img = new Image();
//     img.src = '/main.jpg';
//     img.onload = () => {
//       rasterRef.current = new Raster(img);
//       rasterRef.current.visible = false;
//       rasterRef.current.on('load', resetSpiral);
//     };

//     paper.view.onFrame = (event: any) => {
//       if (growRef.current) {
//         if (
//           rasterRef.current?.loaded &&
//           positionRef.current &&
//           maxRef.current &&
//           positionRef.current.subtract(paper.view.center).length < maxRef.current
//         ) {
//           const l = countRef.current / 36 + 1;
//           for (let i = 0; i < l; i++) {
//             growSpiral();
//           }
//           pathRef.current?.smooth();
//         } else {
//           growRef.current = false;
//         }
//       }
//     };

//     const onResize = () => {
//       if (rasterRef.current?.loaded) {
//         resetSpiral();
//       }
//       if (textRef.current) {
//         textRef.current.point = paper.view.bounds.bottomRight.subtract(new Point(30, 30));
//       }
//       setTick((t) => t + 1);
//     };
//     window.addEventListener('resize', onResize);

//     const onKeyDown = (event: KeyboardEvent) => {
//       if (event.key === ' ') {
//         if (pathRef.current) {
//           pathRef.current.selected = !pathRef.current.selected;
//           paper.view.update();
//         }
//       }
//     };
//     window.addEventListener('keydown', onKeyDown);

//     return () => {
//       paper.project.clear();
//       paper.view.onFrame = null;
//     };
//   }, []);

//   function growSpiral() {
//     countRef.current++;
//     const count = countRef.current;
//     const vector = new Point({
//       angle: count * 5,
//       length: count / 100,
//     });
//     const rot = vector.rotate(90, new Point(0, 0));
//     let color = rasterRef.current?.getAverageColor(positionRef.current!.add(vector.divide(2)));
//     const value = color ? (1 - color.gray) * 3.7 : 0;
//     rot.length = Math.max(value, 0.2);
//     pathRef.current?.add(positionRef.current!.add(vector).subtract(rot));
//     pathRef.current?.insert(0, positionRef.current!.add(vector).add(rot));
//     positionRef.current = positionRef.current!.add(vector);

//     if (pathRef.current) pathRef.current.strokeColor = new paper.Color(palette.dark);
//     if (pathRef.current) pathRef.current.fillColor = new paper.Color(palette.dark);
//   }

//   function resetSpiral() {
//     growRef.current = true;
//     if (!rasterRef.current) return;

//     rasterRef.current.fitBounds(paper.view.bounds);

//     if (pathRef.current) {
//       pathRef.current.remove();
//     }

//     positionRef.current = paper.view.center.clone();
//     countRef.current = 0;
//     pathRef.current = new Path({
//       fillColor: 'black',
//       closed: true,
//     });

//     maxRef.current =
//       Math.min(rasterRef.current.bounds.width, rasterRef.current.bounds.height) * 0.5;
//   }

//   return (
//     <div
//       style={{
//         height: '100vh',
//         userSelect: 'none',
//         touchAction: 'none',
//       }}
//     >
//       <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
//       <div
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }
