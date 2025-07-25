export function PageLayout({ children }: React.PropsWithChildren) {
  return <main className="container mx-auto border-x flex-1 flex flex-col text-base">{children}</main>
}
