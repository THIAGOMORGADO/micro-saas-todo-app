'use client'

import { DashBoardSideBar, DashBoardSideBarHeader, DashBoardSideBarMain, DashBoardSideBarNav, DashBoardSideBarNavMain, DashBoardSideBarNavLink, DashBoardSideBarNavHeader, DashBoardSideBarNavHeaderTitle, DashBoardSideBarFooter } from '@/components/dashboard/sidebar'
import { usePathname, useRouter } from 'next/navigation'
import { HomeIcon, MixerVerticalIcon } from '@radix-ui/react-icons'
import React from 'react'
import { UserDropDown } from './user-dropdown'
import { Logo } from '@/components/logo'
import { Session } from 'next-auth'

type MainSideBarProps = {
  user: Session['user'];
}


export function MainSideBar({user} : MainSideBarProps) {
  const pathname = usePathname();

  const isActive = (path: string)  =>{
    return pathname === path
  }
  return (
    <DashBoardSideBar>
    <DashBoardSideBarHeader >
      <Logo />
    </DashBoardSideBarHeader>

    <DashBoardSideBarMain className="flex  flex-col flex-grow">
      <DashBoardSideBarNav>
        
          <DashBoardSideBarNavMain className="">
              <DashBoardSideBarNavLink href="/app" active={isActive('/app')}>
              <HomeIcon className='w-3 h-3 mr-3'/>
              Tarefas
              
              </DashBoardSideBarNavLink>
              <DashBoardSideBarNavLink href="/app/settings" active={isActive('/app/settings')}>
              <MixerVerticalIcon className='w-3 h-3 mr-3'/>
                Configuraçoes
              </DashBoardSideBarNavLink>
          </DashBoardSideBarNavMain>
       
      </DashBoardSideBarNav>

      <DashBoardSideBarNav className="mt-auto">
        <DashBoardSideBarNavHeader>
          <DashBoardSideBarNavHeaderTitle>
            Links Extras
          </DashBoardSideBarNavHeaderTitle>
        </DashBoardSideBarNavHeader>
          <DashBoardSideBarNavMain>
              <DashBoardSideBarNavLink href="/">Precisa de ajuda ?</DashBoardSideBarNavLink>
              <DashBoardSideBarNavLink href="/">Site</DashBoardSideBarNavLink>
          </DashBoardSideBarNavMain>
       
      </DashBoardSideBarNav>
      
    </DashBoardSideBarMain>
      <DashBoardSideBarFooter>
        <UserDropDown  user={user}/>
       </DashBoardSideBarFooter>
  </DashBoardSideBar>
  )
}
