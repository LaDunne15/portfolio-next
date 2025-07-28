'use client';

import { useEffect, useRef } from 'react';
import paper from 'paper';

export default function PaperCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    paper.setup(canvasRef.current);

    const ballPositions = [
      [255, 129],
      [610, 73],
      [486, 363],
      [117, 459],
      [484, 726],
      [843, 306],
      [789, 615],
      [1049, 82],
      [1292, 428],
      [1117, 733],
      [1352, 86],
      [92, 798],
    ];

    const handle_len_rate = 2.4;
    const circlePaths: paper.Path.Circle[] = [];
    const radius = 50;

    for (let pos of ballPositions) {
      const circle = new paper.Path.Circle({
        center: new paper.Point(pos),
        radius,
        fillColor: 'black',
      });
      circlePaths.push(circle);
    }

    const largeCircle = new paper.Path.Circle({
      center: new paper.Point(676, 433),
      radius: 100,
      fillColor: 'black',
    });
    circlePaths.push(largeCircle);

    const connections = new paper.Group();

    function getVector(radians: number, length: number) {
      return new paper.Point({
        angle: (radians * 180) / Math.PI,
        length: length,
      });
    }

    function metaball(
      ball1: paper.Path.Circle,
      ball2: paper.Path.Circle,
      v: number,
      handle_len_rate: number,
      maxDistance: number
    ) {
      const center1 = ball1.position;
      const center2 = ball2.position;
      const radius1 = ball1.bounds.width / 2;
      const radius2 = ball2.bounds.width / 2;
      const pi2 = Math.PI / 2;
      const d = center1.getDistance(center2);

      let u1: number, u2: number;

      if (radius1 === 0 || radius2 === 0) return;

      if (d > maxDistance || d <= Math.abs(radius1 - radius2)) return;
      else if (d < radius1 + radius2) {
        u1 = Math.acos((radius1 ** 2 + d ** 2 - radius2 ** 2) / (2 * radius1 * d));
        u2 = Math.acos((radius2 ** 2 + d ** 2 - radius1 ** 2) / (2 * radius2 * d));
      } else {
        u1 = u2 = 0;
      }

      const angle1 = center2.subtract(center1).angleInRadians;
      const angle2 = Math.acos((radius1 - radius2) / d);
      const angle1a = angle1 + u1 + (angle2 - u1) * v;
      const angle1b = angle1 - u1 - (angle2 - u1) * v;
      const angle2a = angle1 + Math.PI - u2 - (Math.PI - u2 - angle2) * v;
      const angle2b = angle1 - Math.PI + u2 + (Math.PI - u2 - angle2) * v;

      const p1a = center1.add(getVector(angle1a, radius1));
      const p1b = center1.add(getVector(angle1b, radius1));
      const p2a = center2.add(getVector(angle2a, radius2));
      const p2b = center2.add(getVector(angle2b, radius2));

      const totalRadius = radius1 + radius2;
      let d2 = Math.min(v * handle_len_rate, p1a.subtract(p2a).length / totalRadius);
      d2 *= Math.min(1, (d * 2) / (radius1 + radius2));

      const path = new paper.Path({
        segments: [p1a, p2a, p2b, p1b],
        style: ball1.style,
        closed: true,
      });

      const segments = path.segments;
      segments[0].handleOut = getVector(angle1a - pi2, radius1 * d2);
      segments[1].handleIn = getVector(angle2a + pi2, radius2 * d2);
      segments[2].handleOut = getVector(angle2b - pi2, radius2 * d2);
      segments[3].handleIn = getVector(angle1b + pi2, radius1 * d2);

      return path;
    }

    function generateConnections(paths: paper.Path.Circle[]) {
      connections.removeChildren();
      for (let i = 0; i < paths.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
          const path = metaball(paths[i], paths[j], 0.5, handle_len_rate, 300);
          if (path) {
            connections.addChild(path);
            path.removeOnMove();
          }
        }
      }
    }

    generateConnections(circlePaths);

    paper.view.onMouseMove = (event: any) => {
      largeCircle.position = event.point;
      generateConnections(circlePaths);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1440}
      height={900}
      style={{ display: 'block', background: 'white' }}
    />
  );
}
