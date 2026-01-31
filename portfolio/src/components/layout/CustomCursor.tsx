import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Offset by half width/height to center
      cursorX.set(e.clientX - 32);
      cursorY.set(e.clientY - 32);
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
          scale: isHovering ? 1.5 : 1,
        }}
      />

      <style>{`
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 64px; 
          height: 64px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          border: none;
          pointer-events: none;
          z-index: 9999;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
          transition: scale 0.2s ease, background-color 0.2s;
        }
        
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
