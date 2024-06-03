'use client'
import { Cog,  Home,  Monitor, Shield, } from 'lucide-react'
import React, { useState } from 'react'
import { Nav } from './ui/nav'
import { Button } from './ui/button'
import { RedirectToSignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { SignOutButton } from './ui/SignOutButton'


type Props = {}

export default function SideNavBar({ }: Props) {

  const [isCollpased, setisCollpased] = useState(false);





  return (

    <div className='relative min-w-[80px] border-r px-3 pb-10 pt-8 flex flex-col items-center justify-between'>
     
      <div className='pt-28'>
        <Nav
          isCollapsed={isCollpased}
          links={[
            {
              title: "Home",
              label: "",
              icon: Home,
              variant: "default",
              href: '/'
            },
            {
              title: "Admins",
              label: "",
              icon: Shield,
              variant: "ghost",
              href: '/admindetails'
            },
            {
              title: "Applications",
              label: "",
              icon: Monitor,
              variant: "ghost",
              href: '/appdetails'
            },
            {
              title: "Manage",
              label: "",
              icon: Cog,
              variant: "ghost",
              href: '/manage'
            },

          ]}
        />
         
      </div>
      <div>
      <SignedOut>
      <RedirectToSignIn />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
      </div> 

    </div>

  )
}