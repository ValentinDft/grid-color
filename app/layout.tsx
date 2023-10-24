'use client';
import { useUserStore } from '@/utils/store';
import './globals.scss';
import { checkUserLog } from '@/utils/getUsers';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser } = useUserStore();

  // useEffect(() => {
  //   try {
  //     checkUserLog().then((res) => setUser(res?.email!, res?.id!));
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // checkUserLog().then((res) => setUser(res?.email!, res?.id!));
  // }, []);

  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
