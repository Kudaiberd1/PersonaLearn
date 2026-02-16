import {Link, useLocation} from 'react-router-dom';
import Icon from '../components/Icon';

interface NavItem {
    path: string;
    icon: string;
    label: string;
}

const navItems: NavItem[] = [
    {path: '/', icon: 'grid_view', label: 'Главная'},
    {path: '/training-materials', icon: 'folder_open', label: 'Материалы'},
    {path: '/training', icon: 'school', label: 'Обучение'},
    {path: '/ai-helper', icon: 'psychology', label: 'AI Диалог'},
    {path: '/setting', icon: 'settings', label: 'Настройки'},
];

export default function UserSidebar() {
    const location = useLocation();

    return (
        <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white flex flex-col h-full">
            <div className="p-6 flex items-center gap-3">
                <div className="size-9">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path
                            clipRule="evenodd"
                            d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                            fill="currentColor"
                            fillRule="evenodd"
                        />
                    </svg>
                </div>
                <div>
                    <h1 className="text-base font-bold tracking-tight">PersonaLearn</h1>
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
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                        >
                            <Icon name={item.icon} className="text-[22px]"/>
                            <span className="text-sm">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
