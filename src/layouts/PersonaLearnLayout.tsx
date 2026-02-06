import type { ReactNode } from 'react';
import PersonaLearnSidebar from './PersonaLearnSidebar';
import Icon from '../components/Icon';

interface PersonaLearnLayoutProps {
  children: ReactNode;
  title?: string;
  showSearch?: boolean;
}

export default function PersonaLearnLayout({ 
  children, 
  title,
  showSearch = false 
}: PersonaLearnLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light font-display text-slate-900">
      <PersonaLearnSidebar />
      <main className="flex-1 flex flex-col overflow-y-auto bg-slate-50/50">
        {title && (
          <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold">{title}</h2>
            </div>
            {showSearch && (
              <div className="flex items-center gap-5">
                <div className="relative group">
                  <Icon
                    name="search"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-blue-500 transition-colors"
                  />
                  <input
                    className="bg-slate-100/80 border-transparent rounded-lg pl-10 pr-4 py-1.5 text-sm w-64 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all"
                    placeholder="Поиск по сотрудникам..."
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button className="size-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors relative">
                    <Icon name="notifications" className="text-[22px]" />
                    <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                  </button>
                  <button className="size-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
                    <Icon name="help_outline" className="text-[22px]" />
                  </button>
                </div>
              </div>
            )}
          </header>
        )}
        <div className="p-8 space-y-8">{children}</div>
      </main>
    </div>
  );
}
