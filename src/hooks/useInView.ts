'use client'

import { useEffect, useRef, useState } from "react";

export function useScrollTyping(fullText: string, speed = 70) {
  const [typed, setTyped] = useState("");
  const started = useRef(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;

          let index = 0;
          const interval = setInterval(() => {
            index++;
            setTyped(fullText.slice(0, index));
            if (index >= fullText.length) clearInterval(interval);
          }, speed);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [fullText, speed]);

  return { typed, elementRef };
}