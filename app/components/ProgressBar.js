'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import '../styles/nprogress.css';

export default function ProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.configure({ showSpinner: false, speed: 500, minimum: 0.08 });
  }, []);

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname]);

  return null;
}

