import { LayoutDashboard, Trophy, TrendingUp, Briefcase, Users, Settings } from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const menuItems = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'My Leagues', url: '/leagues', icon: Trophy },
  { title: 'Market', url: '/market', icon: TrendingUp },
  { title: 'My Portfolio', url: '/portfolio', icon: Briefcase },
  { title: 'Leaderboard', url: '/leaderboard', icon: Users },
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Sidebar className={open ? 'w-60' : 'w-14'} collapsible="icon">
      <SidebarContent className="glassmorphism border-r">
        <div className="p-4 border-b border-border/50">
          <h2 className={`text-xl font-bold text-primary ${!open && 'hidden'}`}>TradeArena</h2>
          {!open && <TrendingUp className="h-6 w-6 text-primary" />}
        </div>
        <SidebarGroup>
          <SidebarGroupLabel className={!open ? 'hidden' : ''}>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className="hover:bg-accent/50"
                      activeClassName="bg-primary/20 text-primary font-medium border-l-2 border-primary"
                    >
                      <item.icon className="h-4 w-4" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
