'use client'
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { signIn, signOut, useSession } from 'next-auth/react'

import { AiOutlineMenu } from 'react-icons/ai'

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  const { status, data } = useSession()

  const handleSignIn = () => signIn()

  const handleSignOut = () => {
    setMenuIsOpen(false)
    signOut()
  }

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen)

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
      <Link href="/">
        <div className="relative h-[32px] w-[182px]">
          <Image src="/logo.png" alt="Full Stack Week" fill />
        </div>
      </Link>

      {status === 'unauthenticated' && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handleSignIn}
        >
          Login
        </button>
      )}

      {status === 'authenticated' && data.user && (
        <div className="flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 px-3 relative">
          <AiOutlineMenu
            size={16}
            onClick={handleMenuClick}
            className="cursor-pointer"
          />

          <Image
            src={data.user.image}
            width={30}
            height={30}
            alt={data.user.name!}
            className="rounded-full shadow-md"
          />

          {menuIsOpen && (
            <div className="z-50 absolute top-12 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <button
                className="text-primary text-sm font-semibold"
                onClick={handleSignOut}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}