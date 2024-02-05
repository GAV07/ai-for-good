import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata = {
  title: {
    //template: 'AWSxVM AI for Good Pitch Competition',
    default: 'VM x AWS AI for Good Pitch Competition',
  },
  description:
    'A competition putting impact at the center of AI technology. The event will provide a platform for companies to deliver 3-minute pitches on their AI solutions in Healthcare, Finance, Climate, or Media, and connect with a panel of expert judges from the AI technology space and represented partners.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
