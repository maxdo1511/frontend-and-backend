import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Frontend and Backend',
  description: ')))',
}

export default function RootLayout({ children }) {
  return (
      <html lang="ru">
          <body className={inter.className}>
              <header>
              </header>

              <main className={"pl-4 pr-4 pt-4"}>
                <div className={"w-full h-full"}>
                  {children}
                </div>
              </main>

              <footer>

              </footer>
          </body>
      </html>
  )
}