import { useEffect, useRef } from "react";

const interactiveSelector = "a, button, [role='button'], select, summary, label";
const textSelector =
  "textarea, [contenteditable='true'], input:not([type='button']):not([type='submit']):not([type='checkbox']):not([type='radio'])";

export function AestheticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let targetX = 0;
    let targetY = 0;
    let trailX: number | null = null;
    let trailY: number | null = null;
    let frame = 0;

    const animateTrail = () => {
      if (trailX === null || trailY === null) {
        trailX = targetX;
        trailY = targetY;
      } else {
        trailX += (targetX - trailX) * 0.14;
        trailY += (targetY - trailY) * 0.14;
      }
      trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%)`;
      if (Math.abs(targetX - trailX) + Math.abs(targetY - trailY) > 0.2) {
        frame = window.requestAnimationFrame(animateTrail);
      } else {
        frame = 0;
      }
    };

    const setModeFromTarget = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null;
      const isTextField = Boolean(element?.closest(textSelector));
      const isInteractive = Boolean(element?.closest(interactiveSelector));
      cursor.dataset.mode = isTextField ? "text" : isInteractive ? "interactive" : "default";
      trail.dataset.mode = cursor.dataset.mode;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursor.dataset.visible = "true";
      trail.dataset.visible = "true";
      setModeFromTarget(event.target);
      if (!frame) frame = window.requestAnimationFrame(animateTrail);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse") cursor.dataset.pressed = "true";
    };

    const handlePointerUp = () => {
      delete cursor.dataset.pressed;
    };

    const hideCursor = () => {
      delete cursor.dataset.visible;
      delete trail.dataset.visible;
      delete cursor.dataset.pressed;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("blur", hideCursor);
    document.documentElement.addEventListener("pointerleave", hideCursor);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("blur", hideCursor);
      document.documentElement.removeEventListener("pointerleave", hideCursor);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="aesthetic-cursor-trail" ref={trailRef} aria-hidden="true" />
      <div className="aesthetic-cursor" ref={cursorRef} aria-hidden="true">
        <span className="aesthetic-cursor-ring" />
      </div>
    </>
  );
}
