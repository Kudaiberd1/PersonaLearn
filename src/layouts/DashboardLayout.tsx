import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Icon from '../components/Icon';

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
  showSearch?: boolean;
}

export default function DashboardLayout({ 
  children, 
  title = 'Dashboard',
  showSearch = true 
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          {showSearch && (
            <div className="flex items-center gap-4">
              <div className="relative max-w-xs">
                <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                <input
                  className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-blue-500"
                  placeholder="Поиск..."
                  type="text"
                />
              </div>
              <button className="size-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <Icon name="notifications" className="text-slate-600 dark:text-slate-300" />
              </button>
            </div>
          )}
        </header>
        <div className="p-8 space-y-8">{children}</div>
      </main>
    </div>
  );
}
