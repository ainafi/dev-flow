import type { Metadata } from "next";
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css";
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";


const inter=localFont({
  src:"./fonts/inter.ttf",
  variable:"--font-inter",
  weight:"100 200 300 400 500 600 700",
})
const spaceGrotesk=localFont({
  src:"./fonts/SpaceGroteskVF.ttf",
  variable:"--font-SpaceGroteskVF",
  weight:"100 200 300 400 500 600 700",
})


export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session=await auth()
  return (
    <html lang="en">
    <SessionProvider session={session}>
    
        <body
          className={`${inter.className} ${spaceGrotesk.variable}  antialiased`}
        >
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster/>
            </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}


