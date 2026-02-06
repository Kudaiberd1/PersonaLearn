import Icon from './Icon';

interface Category {
  name: string;
  percentage: number;
  color: 'blue' | 'emerald' | 'orange';
}

interface MasteryChartProps {
  title: string;
  subtitle: string;
  totalPercentage: number;
  categories: Category[];
}

export default function MasteryChart({ title, subtitle, totalPercentage, categories }: MasteryChartProps) {
  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'stroke-blue-500 bg-blue-500',
      emerald: 'stroke-emerald-500 bg-emerald-500',
      orange: 'stroke-orange-400 bg-orange-400',
    };
    return colors[color] || colors.blue;
  };

  let currentOffset = 0;

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h4 className="text-base font-bold">{title}</h4>
          <p className="text-xs text-slate-500 mt-1 font-medium">{subtitle}</p>
        </div>
        <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors">
          <Icon name="tune" className="text-xl" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="relative size-44">
          <svg className="size-full transform -rotate-90" viewBox="0 0 36 36">
            <circle
              className="stroke-slate-50"
              cx="18"
              cy="18"
              fill="none"
              r="16"
              strokeWidth="4"
            />
            {categories.map((category, index) => {
              const dashArray = `${category.percentage}, 100`;
              const offset = currentOffset;
              currentOffset -= category.percentage;
              return (
                <circle
                  key={index}
                  className={`${getColorClass(category.color).split(' ')[0]}`}
                  cx="18"
                  cy="18"
                  fill="none"
                  r="16"
                  strokeDasharray={dashArray}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-2xl font-black text-slate-800">{totalPercentage}%</span>
            <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest mt-0.5">Active</span>
          </div>
        </div>
        <div className="w-full space-y-3">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between group cursor-default">
              <div className="flex items-center gap-3">
                <div className={`size-2 rounded-full ${getColorClass(category.color).split(' ')[1]} shadow-sm ${
                  category.color === 'blue' ? 'shadow-blue-500/40' :
                  category.color === 'emerald' ? 'shadow-emerald-500/40' :
                  'shadow-orange-400/40'
                }`}></div>
                <span className="text-[13px] font-medium text-slate-600">{category.name}</span>
              </div>
              <span className="text-[13px] font-bold text-slate-800">{category.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
