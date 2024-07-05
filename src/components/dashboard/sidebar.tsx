import { cn } from "@/lib/utils";
import Link from "next/link";

export type DashBoardSideBarGenercProps<T = unknown> = {
  children: React.ReactNode;
  className?: string;
} & T



export function DashBoardSideBar({ className, children }: DashBoardSideBarGenercProps) {
  return(
    <aside className={cn(['border-r border-border flex flex-col space-y-6', className])}>
      {children}
    </aside>
  )
}

export function DashBoardSideBarHeader({ className, children }: DashBoardSideBarGenercProps) {
  return(
    <header className={cn(['px-6 py-3 border-b border-border', className])}>
      {children}
    </header>
  )
}
export function DashBoardSideBarHeaderTitle({ className, children }: DashBoardSideBarGenercProps) {
  return(
    <h2 className={cn(['', className])}>
      {children}
    </h2>
  )
}

export function DashBoardSideBarMain({ className, children }: DashBoardSideBarGenercProps) {
  return(
    <main className={cn(['px-3', className])}>
      {children}
    </main>
  )
}

export function DashBoardSideBarNav({ className, children }: DashBoardSideBarGenercProps) {
  return(
    <nav className={cn(['', className])}>
      {children}
    </nav>
  )
}
export function DashBoardSideBarNavHeader({ className, children }: DashBoardSideBarGenercProps) {
  return(
    <header className={cn(['', className])}>
      {children}
    </header>
  )
}
export function DashBoardSideBarNavHeaderTitle({ className, children }: DashBoardSideBarGenercProps) {
  return(
    <h4 className={cn(['text-xs uppercase text-muted-foreground ml-3', className])}>
      {children}
    </h4>
  )
}
export function DashBoardSideBarNavMain({ className, children }: DashBoardSideBarGenercProps) {
  return(
    <main className={cn(['flex flex-col', className])}>
      {children}
    </main>
  )
}

type DashBoardSideBarNavLinkProps = {
  href: string;
  active?: boolean;
}

export function DashBoardSideBarNavLink({ className, children, href, active }: DashBoardSideBarGenercProps<DashBoardSideBarNavLinkProps>) {
  return(
    <Link href={href} className={cn([
    'text-xs px-3 py-2 rounded-md flex  items-center',
      active && 'bg-secondary',
    className])}>
      {children}
    </Link>
  )
}

export function DashBoardSideBarFooter({ className, children }: DashBoardSideBarGenercProps) {
  return(
    <footer className={cn(['p-6 mt-auto border-t border-border', className])}>
      {children}
    </footer>
  )
}

