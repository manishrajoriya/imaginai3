import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const ibmPlex = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"], subsets: ["latin"],
variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "Ai powered image genrator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={cn("font-ibmPlex antialiased", ibmPlex.variable )}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
