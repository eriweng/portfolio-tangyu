import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'var(--color-cta)' : 'white',
          mixBlendMode: 'difference' // Cool effect
        }}
      />

      <style>{`
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: white;
          pointer-events: none;
          z-index: 9999;
        }
        
        /* Hide default cursor only on devices with hover */
        @media (hover: hover) and (pointer: fine) {
          body {
            cursor: none;
          }
          a, button {
            cursor: none;
          }
        }
        @media (hover: none) {
          .cursor-dot {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
