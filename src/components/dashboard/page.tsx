import { cn } from "@/lib/utils";


export type DashBoardPageGenericsProps<T = unknown> = {
  children: React.ReactNode;
  className?: string;
} & T

export function DashBoardPage({children, className} : DashBoardPageGenericsProps) {
  return (
    <section className={cn(['h-screen', className])}>
      {children}
    </section>
  )
}

export function DashBoardPageHeader({children, className} : DashBoardPageGenericsProps) {
  return (
    <header className={cn(['px-6 py-3 border-b border-border', className])}>
      {children}
    </header>
  )
}

export function DashBoardPageHeaderTitle({children, className} : DashBoardPageGenericsProps) {
  return (
    <span className={cn(['text-sm text-muted-foreground uppercase', className])}>
      {children}
    </span>
  )
}

export function DashBoardPageHeaderNav({children, className} : DashBoardPageGenericsProps) {
  return (
    <nav className={cn(['', className])}>
      {children}
    </nav>
  )
}

export function DashBoardPageMain({children, className} : DashBoardPageGenericsProps) {
  return(
    <main className={cn(['p-6', className])}>
      {children}
    </main>
  )
}