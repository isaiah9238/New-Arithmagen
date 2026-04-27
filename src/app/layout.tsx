import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {SidebarNav} from '@/components/sidebar-nav';
import {HelpCircle} from 'lucide-react';
import { UserProfile } from '@/components/user-profile';
import { Providers } from '@/components/providers';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import ArithmaHeader from '@/components/arithma-header';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "ArithmaGen",
  description: "Your all-in-one toolkit for mathematical and surveying calculations.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>
          <div className="flex min-h-screen">
            <Sidebar collapsible="icon">
              <SidebarHeader>
                <div className="flex h-8 items-center gap-2 px-2">
                  <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap group-data-[collapsible=icon]:hidden pt-2">
                    <HelpCircle className="size-5 shrink-0 text-primary" />
                    <span className="font-headline text-lg font-bold">ArithmaGen</span>
                  </div>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarNav />
              </SidebarContent>
              <SidebarFooter>
                <UserProfile />
              </SidebarFooter>
            </Sidebar>
            <SidebarInset className="min-w-0 overflow-hidden">
              <div className="flex flex-col flex-1 h-screen overflow-hidden min-w-0">
                <ArithmaHeader />
                <main className="flex-1 overflow-hidden min-w-0">
                  {children}
                </main>
              </div>
            </SidebarInset>
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
