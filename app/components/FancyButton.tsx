'use client';

import { motion } from 'framer-motion';

interface FancyButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function FancyButton({ onClick, children }: FancyButtonProps) {
  const length = 672.1;

  return (
    <motion.button
      onClick={onClick}
      className="fancy-button relative w-[300px] h-[80px] bg-transparent border-none cursor-pointer"
      style={{ color: '#98A5A6' }}
      whileHover={{ scale: 1.05, color: '#BEC3C7' }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <svg
        className="absolute top-0 left-0 w-full h-full"
        width="300"
        height="80"
        viewBox="0 0 300 80"
      >
        <rect
          className="button-line-inner"
          strokeWidth="4"
          stroke="#e6b87d"
          strokeLinecap="round"
          fill="none"
          x="4"
          y="4"
          width="292"
          height="72"
          rx="36"
          style={{
            strokeDasharray: `${length / 2} ${length / 2}`,
            strokeDashoffset: 0,
          }}
        />
        <rect
          className="button-line-outer"
          strokeWidth="8"
          stroke="#FECD8C"
          strokeLinecap="round"
          fill="none"
          x="4"
          y="4"
          width="292"
          height="72"
          rx="36"
          style={{
            strokeDasharray: `${length / 2} ${length / 2}`,
            strokeDashoffset: 0,
          }}
        />
      </svg>
      <div className="relative w-full h-full flex items-center justify-center text-lg font-semibold z-10">
        {children}
      </div>
    </motion.button>
  );
}
