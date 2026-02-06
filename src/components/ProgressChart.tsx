import Icon from './Icon';

interface EmployeeProgress {
  name: string;
  percentage: number;
  isActive: boolean;
}

interface ProgressChartProps {
  title: string;
  subtitle: string;
  employees: EmployeeProgress[];
}

export default function ProgressChart({ title, subtitle, employees }: ProgressChartProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h4 className="text-base font-bold">{title}</h4>
          <p className="text-xs text-slate-500 mt-1 font-medium">{subtitle}</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-600">
            Месяц
          </button>
          <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors">
            <Icon name="more_vert" className="text-xl" />
          </button>
        </div>
      </div>
      <div className="h-64 flex items-end justify-between gap-6 px-2">
        {employees.map((employee, index) => (
          <div key={index} className="flex flex-col items-center flex-1 gap-4 group">
            <div
              className={`w-full rounded-t-lg relative transition-all ${
                employee.isActive
                  ? 'bg-blue-500/20 group-hover:bg-blue-500/30'
                  : 'bg-slate-100 group-hover:bg-slate-200'
              }`}
              style={{ height: `${employee.percentage}%` }}
            >
              {employee.isActive && (
                <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500 rounded-full -translate-y-1/2"></div>
              )}
            </div>
            <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-700 transition-colors">
              {employee.name.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
