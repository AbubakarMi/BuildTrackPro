'use client';
import MainHeader from '@/components/main-header';
import { MainSidebar } from '@/components/main-sidebar';
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarRail,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname === '/') {
    return <>{children}</>;
  }
  return (
    <SidebarProvider>
      <Sidebar>
        <MainSidebar />
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <MainHeader />
        <main className="flex-1 p-4 sm:p-6 md:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
