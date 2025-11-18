import { ReactNode } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { useAuth } from '@/hooks/useAuth';
import { User, TrendingUp } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { user } = useAuth();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border/50 glassmorphism flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-accent" />
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Net Worth</p>
                <p className="text-lg font-semibold text-profit">$125,430.00</p>
              </div>
              <Avatar className="border-2 border-primary/20">
                <AvatarFallback className="bg-primary/20 text-primary">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
