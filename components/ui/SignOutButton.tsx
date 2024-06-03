'use client'

import { useClerk } from '@clerk/nextjs';
import Image from 'next/image';
import { Button } from './button';

export const SignOutButton = () => {
  const { signOut } = useClerk();

  return (
    // Clicking on this button will sign out a user
    // and reroute them to the "/" (home) page.
    <Button onClick={() => signOut({ redirectUrl: '/sign-in' })}>
      <div className='flex cursor-pointer gap-4 '>
        <p className='text-light-2 max-lg:hidden'>Logout</p>
      </div>
    </Button>


  );
};