import Icon from './Icon';

interface KPICardProps {
  icon: string;
  label: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  iconBgColor: 'blue' | 'emerald' | 'amber' | 'purple';
}

export default function KPICard({
  icon,
  label,
  value,
  change,
  changeType,
  iconBgColor,
}: KPICardProps) {
  const bgColors = {
    blue: 'bg-blue-50 dark:bg-blue-500/10 text-blue-500',
    emerald: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600',
    amber: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600',
    purple: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600',
  };

  const changeBgColor = changeType === 'positive' 
    ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600'
    : 'bg-red-50 dark:bg-red-500/10 text-red-600';

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-sm transition-transform hover:scale-[1.01]">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2.5 ${bgColors[iconBgColor]} rounded-xl`}>
          <Icon name={icon} className="block" />
        </div>
        <span className={`px-2 py-0.5 ${changeBgColor} text-[11px] font-bold rounded-full flex items-center gap-0.5`}>
          {change}{' '}
          <Icon name={changeType === 'positive' ? 'arrow_upward' : 'arrow_downward'} className="text-[14px]" />
        </span>
      </div>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{label}</p>
      <h3 className="text-3xl font-bold mt-2 tracking-tight">
        {value}
        {value === '4.2' && <span className="text-sm text-slate-400 font-medium ml-1">/ 5</span>}
      </h3>
    </div>
  );
}
