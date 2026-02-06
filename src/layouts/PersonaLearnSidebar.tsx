import { Link, useLocation } from 'react-router-dom';
import Icon from '../components/Icon';

interface NavItem {
  path: string;
  icon: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: '/dashboard-manager-2', icon: 'grid_view', label: 'Главная' },
  { path: '/employee-list-2', icon: 'group', label: 'Сотрудники' },
  { path: '/training-materials-2', icon: 'folder_open', label: 'Материалы' },
  { path: '/employee-training', icon: 'school', label: 'Обучение' },
  { path: '/analytics-admin-2', icon: 'bar_chart', label: 'Аналитика' },
  { path: '/system-settings-2', icon: 'settings', label: 'Настройки' },
  { path: '/employee-survey', icon: 'quiz', label: 'Анкетирование' },
  { path: '/ai-knowledge-check', icon: 'psychology', label: 'AI Диалог' },
];

export default function PersonaLearnSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col h-full">
      <div className="p-6 flex items-center gap-3">
        <div className="size-9 rounded-lg bg-blue-500 flex items-center justify-center text-white shadow-sm shadow-blue-500/20">
          <Icon name="psychology" className="text-xl" />
        </div>
        <div>
          <h1 className="text-base font-bold tracking-tight">PersonaLearn</h1>
          <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-[0.1em]">Admin Space</p>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1.5 mt-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-500/5 text-blue-500 font-semibold border border-blue-500/10'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              <Icon name={item.icon} className="text-[22px]" />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 mt-auto border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 p-2">
          <div
            className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center border border-slate-200 dark:border-slate-600 shadow-sm"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9_gI4z1AeI_SeVngeRHxh2ncUZtPfPr09J0CYW2S3Ym0XbD6GWaTM6oB2GuOAeSg3kLD-ZCehpHk_4iiAAnnRR3jQeZjW88-GVKEM_9VfYJAnzFxREnYY9HXZbfyO5wJmfjm5anGLGGei590ay58H-rEIRtx7KEyz8C92s__leWLbOWvcCe6kq3s0r90PjIP0VzQOcVOd3luF1iuPRSbkYa-W-lKUQhHyhcHm7k4Zs-GBTem2NPi-ZWJe_tidHpxaxtQZCRh79zQ')",
            }}
          ></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">Александр М.</p>
            <p className="text-[11px] text-slate-500 truncate font-medium">Head of Sales</p>
          </div>
          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
            <Icon name="logout" className="text-lg" />
          </button>
        </div>
      </div>
    </aside>
  );
}
