import React from "react";

interface ObserverProps {
  root?: React.RefObject<Element>;
  target: any;
  onIntersect: () => void;
  threshold?: number | number[];
  rootMargin?: string;
  enabled: boolean | undefined;
}

export default function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 1,
  rootMargin = "200px",
  enabled = true,
}: ObserverProps): void {
  React.useLayoutEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting && onIntersect();
        });
      },
      {
        root: root && root.current,
        rootMargin,
        threshold,
      }
    );

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [target.current, enabled, onIntersect, root, rootMargin, threshold]);
}
