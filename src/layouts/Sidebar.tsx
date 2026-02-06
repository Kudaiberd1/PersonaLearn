import { Link, useLocation } from 'react-router-dom';
import Icon from '../components/Icon';

interface NavItem {
  path: string;
  icon: string;
  label: string;
}

interface SidebarProps {
  navItems?: NavItem[];
  activePath?: string;
}

const defaultNavItems: NavItem[] = [
  { path: '/dashboard-manager-1', icon: 'dashboard', label: 'Dashboard' },
  { path: '/employee-list-1', icon: 'group', label: 'Сотрудники' },
  { path: '/training-materials-1', icon: 'book_5', label: 'Материалы' },
  { path: '/analytics-admin-1', icon: 'bar_chart', label: 'Аналитика' },
  { path: '/system-settings-1', icon: 'settings', label: 'Настройки' },
];

export default function Sidebar({ navItems = defaultNavItems, activePath }: SidebarProps) {
  const location = useLocation();
  const currentPath = activePath || location.pathname;

  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col h-full">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 rounded-lg bg-blue-500 flex items-center justify-center text-white">
          <Icon name="rocket_launch" className="text-2xl" />
        </div>
        <div>
          <h1 className="text-sm font-bold leading-none">AI Sales Trainer</h1>
          <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Admin Panel</p>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1 mt-4">
        {navItems.map((item) => {
          const isActive = currentPath === item.path || currentPath.startsWith(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-500 text-white font-medium'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon name={item.icon} className="text-xl" />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3 p-2">
          <div className="size-8 rounded-full bg-slate-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9_gI4z1AeI_SeVngeRHxh2ncUZtPfPr09J0CYW2S3Ym0XbD6GWaTM6oB2GuOAeSg3kLD-ZCehpHk_4iiAAnnRR3jQeZjW88-GVKEM_9VfYJAnzFxREnYY9HXZbfyO5wJmfjm5anGLGGei590ay58H-rEIRtx7KEyz8C92s__leWLbOWvcCe6kq3s0r90PjIP0VzQOcVOd3luF1iuPRSbkYa-W-lKUQhHyhcHm7k4Zs-GBTem2NPi-ZWJe_tidHpxaxtQZCRh79zQ')" }}></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Александр М.</p>
            <p className="text-xs text-slate-500 truncate">Head of Sales</p>
          </div>
          <button className="text-slate-400 hover:text-slate-600">
            <Icon name="logout" className="text-lg" />
          </button>
        </div>
      </div>
    </aside>
  );
}
