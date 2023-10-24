'use client';

import { checkUserLog } from '@/utils/getUsers';
import { useUserStore } from '@/utils/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logout from '@/components/Logout/Logout';

export default function GridLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser } = useUserStore();
  const { push } = useRouter();

  useEffect(() => {
    checkUserLog().then((res) => {
      setUser(res?.email!, res?.id!);
      if (!res) {
        push('/');
      }
    });
  }, []);

  return (
    <html lang='en'>
      <body>
        <Logout />
        {children}
      </body>
    </html>
  );
}
