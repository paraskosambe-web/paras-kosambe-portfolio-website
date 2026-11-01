import { useEffect, useRef } from "react";

const interactiveSelector = "a, button, [role='button'], select, summary, label";
const textSelector =
  "textarea, [contenteditable='true'], input:not([type='button']):not([type='submit']):not([type='checkbox']):not([type='radio'])";

export function AestheticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const setModeFromTarget = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null;
      const isTextField = Boolean(element?.closest(textSelector));
      const isInteractive = Boolean(element?.closest(interactiveSelector));
      cursor.dataset.mode = isTextField ? "text" : isInteractive ? "interactive" : "default";
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursor.dataset.visible = "true";
      setModeFromTarget(event.target);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse") cursor.dataset.pressed = "true";
    };

    const handlePointerUp = () => {
      delete cursor.dataset.pressed;
    };

    const hideCursor = () => {
      delete cursor.dataset.visible;
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
    };
  }, []);

  return (
    <div className="aesthetic-cursor" ref={cursorRef} aria-hidden="true">
      <span className="aesthetic-cursor-ring" />
    </div>
  );
}
