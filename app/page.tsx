'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';

export default function HomePage() {
  const router = useRouter();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/lobby');
    } else {
      router.replace('/login');
    }
  }, [isLoggedIn, router]);

  return null; // or loading spinner
}
