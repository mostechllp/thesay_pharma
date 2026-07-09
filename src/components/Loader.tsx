import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

interface LoaderProps {
  children: React.ReactNode;
}

export function Loader({ children }: LoaderProps) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Handle route changes
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const showLoader = loading || isNavigating;

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { duration: 0.6, ease: "easeOut" }
              }}
              exit={{
                scale: 1.5,
                opacity: 0,
                transition: { duration: 0.4, ease: "easeIn" }
              }}
              className="flex flex-col items-center"
            >
              <motion.img
                src={logo}
                alt="THESAY Pharma"
                className="h-15 md:h-15 w-auto"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}