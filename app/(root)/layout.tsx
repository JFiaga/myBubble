import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Bottombar, LeftSidebar, RightSidebar, Topbar } from "@/components/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:"Bubble",
  description:"Share your idea, build your community"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar/>
          <main>
            <LeftSidebar/>
            <section className="main-container">
              <div className="w-full max-w-4xl">
            {children}
              </div>
            </section>

            <RightSidebar/>
          </main>

          <Bottombar/>
        </body>
      </html>
    </ClerkProvider>
  );
}
