import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../components/Icon';

interface TopNavLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export default function TopNavLayout({ children, showSidebar = true }: TopNavLayoutProps) {
  const location = useLocation();

  const navItems = [
    { path: '/employee-training', label: 'Обучение' },
    { path: '/employee-list-1', label: 'Сотрудники' },
    { path: '/analytics-admin-1', label: 'Аналитика' },
    { path: '/system-settings-1', label: 'Настройки' },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 lg:px-10 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center bg-blue-500 rounded-lg p-1.5 text-white">
            <Icon name="rocket_launch" className="text-2xl" />
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">
            SalesTrain AI
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-500 border-b-2 border-blue-500 py-4 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-500'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-8">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold">Администратор</p>
              <p className="text-xs text-slate-500">ООО "Ритейл Групп"</p>
            </div>
            <div
              className="bg-slate-200 dark:bg-slate-700 bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-blue-500/20"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAq3zRpKEU08kXddxbmxGBJSs4XzXIwL-riOFPR7zpvMOKUUiw2_g0oJ2PPbButZtK4_ntG2OZqHIXHWWvxdpSSeJvVKyOJYTMkOrxzPBgNhVddVXROgQDkkEn024zD66yLGCWIdYfQaFT7x-gz8FqiSpyIVuKMg6gBqpTiPVXxZ44y4UO0qlaZCr67l4rN51-IGMWSmwBg5xGb0LfWwoWsxFxWxTBuXyIPaixbVIjRYZjmb5TMH4E-B-H1ykl58zyjnNYFzkqAYKE')",
              }}
            ></div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {showSidebar && (
          <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 gap-2">
            <div className="flex items-center gap-3 px-3 py-4 mb-2">
              <div className="flex items-center justify-center size-8 bg-blue-500/10 text-blue-500 rounded-lg">
                <Icon name="dashboard" className="text-xl" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-slate-900 dark:text-white text-sm font-bold">SalesTrain</h1>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">Панель управления</p>
              </div>
            </div>
            <Link
              to="/dashboard-manager-1"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              <Icon name="home" />
              <p className="text-sm font-medium">Дашборд</p>
            </Link>
            <Link
              to="/employee-list-1"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-500 text-white shadow-lg shadow-blue-500/20"
            >
              <Icon name="group" />
              <p className="text-sm font-medium">Команда</p>
            </Link>
            <Link
              to="/training-materials-1"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              <Icon name="library_books" />
              <p className="text-sm font-medium">Библиотека</p>
            </Link>
            <Link
              to="/analytics-admin-1"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              <Icon name="analytics" />
              <p className="text-sm font-medium">Отчеты</p>
            </Link>
            <div className="mt-auto border-t border-slate-200 dark:border-slate-800 pt-4">
              <Link
                to="#"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <Icon name="help" />
                <p className="text-sm font-medium">Поддержка</p>
              </Link>
            </div>
          </aside>
        )}

        <main className="flex-1 overflow-y-auto px-6 lg:px-10 py-8">{children}</main>
      </div>
    </div>
  );
}
