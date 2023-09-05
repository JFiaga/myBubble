import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
    title:"Bubble",
    description:"Share your idea, build your community"
}

const inter = Inter({subsets:["latin"]})

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
   <ClerkProvider>
    <html lang='en'>
        <body className = {`${inter.className} bg-dark-1`} >
            {children}
        </body>
    </html>
   </ClerkProvider>
  )
}
