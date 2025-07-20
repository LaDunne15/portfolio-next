"use client";

import React, { useEffect, useRef, useState } from "react";
import paper, { Point, Raster, Path, PointText } from "paper";

export default function SpiralRaster() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Для збереження змінних між кадрами:
  const pathRef = useRef<paper.Path | null>(null);
  const rasterRef = useRef<paper.Raster | null>(null);
  const positionRef = useRef<paper.Point | null>(null);
  const countRef = useRef(0);
  const growRef = useRef(false);
  const maxRef = useRef(0);
  const textRef = useRef<paper.PointText | null>(null);

  // Сила змін для оновлення в React (не обов’язково, але щоб текст змістити)
  const [, setTick] = useState(0);

  // ініціалізація paper при монтуванні компонента
  useEffect(() => {
    if (!canvasRef.current) return;

    paper.setup(canvasRef.current);

    // Спочатку створюємо растер за id 'mona' — в Next.js немає картинки за id, тому
    // можна поставити дефолтне зображення, наприклад, локальний шлях або замінити на заглушку

    // Для прикладу додамо дефолтне зображення, можна замінити на будь-яке, наприклад public/mona.jpg
    const img = new Image();
    img.src = "/main.jpg"; // Поклади зображення в /public/mona.jpg
    img.onload = () => {
      rasterRef.current = new Raster(img);
      rasterRef.current.visible = false;
      rasterRef.current.on("load", resetSpiral);
    };

    // Створимо текстову підказку
    textRef.current = new PointText({
      point: paper.view.bounds.bottomRight.subtract(new Point(30, 30)),
      justification: "right",
      fontSize: 12,
      fillColor: "black",
      content: window.FileReader
        ? "drag & drop an image from your desktop to rasterize it"
        : "to drag & drop images, please use Webkit, Firefox, Chrome or IE 10",
    });

    // Функція обробки frame - для анімації
    paper.view.onFrame = (event: any) => {
      if (growRef.current) {
        if (
          rasterRef.current?.loaded &&
          positionRef.current &&
          maxRef.current &&
          positionRef.current.subtract(paper.view.center).length < maxRef.current
        ) {
          const l = countRef.current / 36 + 1;
          for (let i = 0; i < l; i++) {
            growSpiral();
          }
          pathRef.current?.smooth();
        } else {
          growRef.current = false;
        }
      }
    };

    // Обробники drag & drop
    const onDocumentDrag = (event: DragEvent) => {
      event.preventDefault();
    };

    const onDocumentDrop = (event: DragEvent) => {
      event.preventDefault();
      const file = event.dataTransfer?.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const image = new Image();
        image.onload = () => {
          rasterRef.current?.remove();
          rasterRef.current = new Raster(image);
          rasterRef.current.visible = false;
          rasterRef.current.on("load", resetSpiral);
        };
        image.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    };

    document.addEventListener("drop", onDocumentDrop);
    document.addEventListener("dragover", onDocumentDrag);
    document.addEventListener("dragleave", onDocumentDrag);

    // Обробник resize
    const onResize = () => {
      if (rasterRef.current?.loaded) {
        resetSpiral();
      }
      if (textRef.current) {
        textRef.current.point = paper.view.bounds.bottomRight.subtract(new Point(30, 30));
      }
      setTick((t) => t + 1);
    };
    window.addEventListener("resize", onResize);

    // Обробник клавіш
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === " ") {
        if (pathRef.current) {
          pathRef.current.selected = !pathRef.current.selected;
          paper.view.update();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);

    // Очистка при розмонтуванні
    return () => {
      document.removeEventListener("drop", onDocumentDrop);
      document.removeEventListener("dragover", onDocumentDrag);
      document.removeEventListener("dragleave", onDocumentDrag);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
      paper.project.clear();
      paper.view.onFrame = null;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Функції внутрішні
function growSpiral() {
  countRef.current++;
  const count = countRef.current;
  const vector = new Point({
    angle: count * 5,
    length: count / 100,
  });
  const rot = vector.rotate(90, new Point(0, 0));
  let color = rasterRef.current?.getAverageColor(positionRef.current!.add(vector.divide(2)));
  const value = color ? (1 - color.gray) * 3.7 : 0;
  rot.length = Math.max(value, 0.2);
  pathRef.current?.add(positionRef.current!.add(vector).subtract(rot));
  pathRef.current?.insert(0, positionRef.current!.add(vector).add(rot));
  positionRef.current = positionRef.current!.add(vector);

  if (pathRef.current) pathRef.current.strokeColor = new paper.Color('#FF00FF');
}


  function resetSpiral() {
    growRef.current = true;
    if (!rasterRef.current) return;

    rasterRef.current.fitBounds(paper.view.bounds);

    if (pathRef.current) {
      pathRef.current.remove();
    }

    positionRef.current = paper.view.center.clone();
    countRef.current = 0;
    pathRef.current = new Path({
      fillColor: "black",
      closed: true,
    });

    maxRef.current = Math.min(rasterRef.current.bounds.width, rasterRef.current.bounds.height) * 0.5;
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        userSelect: "none",
        touchAction: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}