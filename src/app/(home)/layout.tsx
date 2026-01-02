import { Footer } from '~/components/layout/footer'
import { Navbar } from '~/components/layout/navbar'
import { CookieBanner } from '~/components/miscellaneous/cookie-banner'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="selection:bg-primary bg-background text-foreground min-h-screen font-sans selection:text-black">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      <CookieBanner />
    </main>
  )
}
