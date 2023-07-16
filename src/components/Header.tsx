'use client'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import Link from 'next/link'

import { signIn, signOut, useSession } from 'next-auth/react'

import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'

export function Header() {
  const { status, data } = useSession()

  const handleSignIn = () => signIn()

  const handleSignOut = () => {
    signOut()
  }

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center lg:border-b lg:border-grayLighter">
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
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <AiOutlineMenu size={20} className="cursor-pointer" />
              <Avatar>
                <AvatarImage src={data.user.image!} alt={data.user.name!} />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white mt-2 mr-3">
              <DropdownMenuLabel className="pb-2 border-b border-grayLighter border-solid">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem className="text-primary pb-2 border-b border-grayLighter border-solid text-sm font-semibold cursor-pointer">
                <Link href="/profile">Meu Perfil</Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem className="text-primary pb-2 border-b border-grayLighter border-solid text-sm font-semibold cursor-pointer">
                <Link href="/my-trips">Minhas Viagens</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-primary pt-2 text-sm font-semibold cursor-pointer"
                onClick={handleSignOut}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  )
}
