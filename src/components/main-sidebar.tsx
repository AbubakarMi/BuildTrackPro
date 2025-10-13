
'use client';

import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  Building2,
  LayoutDashboard,
  BrickWall,
  CircleDollarSign,
  FileText,
  Settings,
  HardHat,
  FolderKanban,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: FolderKanban,
  },
  {
    href: '/materials',
    label: 'Materials',
    icon: BrickWall,
  },
  {
    href: '/payments',
    label: 'Payments',
    icon: CircleDollarSign,
  },
  {
    href: '/reports',
    label: 'Reports',
    icon: FileText,
  },
];

export function MainSidebar() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Link href="/dashboard" className="flex items-center gap-2 font-headline text-lg font-semibold">
            <HardHat className="h-6 w-6 text-primary" />
            <span className="group-data-[collapsible=icon]:hidden">BuildTrack Pro</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(item.href)}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-1 flex-col items-start p-2 gap-2">
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Settings">
                    <Link href="#">
                        <Settings />
                        <span className="group-data-[collapsible=icon]:hidden">Settings</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
        <div className="text-center w-full text-xs text-muted-foreground px-2 group-data-[collapsible=icon]:hidden">
          <Link href="#" className="hover:text-primary transition-colors">Powered by Nubenta</Link>
        </div>
      </SidebarFooter>
    </>
  );
}
