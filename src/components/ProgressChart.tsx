import Icon from './Icon';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts';

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

function clampPercent(value: number) {
  if (Number.isNaN(value)) return 0;
  return Math.max(0, Math.min(100, value));
}

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const v = payload[0]?.value;
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <div className="text-xs font-semibold text-slate-700">{label}</div>
      <div className="text-xs text-slate-500 mt-0.5">
        {v}% активности
      </div>
    </div>
  );
}

export default function ProgressChart({ title, subtitle, employees }: ProgressChartProps) {
  const data = employees.map((e) => ({
    name: e.name,
    percentage: clampPercent(e.percentage),
    isActive: e.isActive,
  }));

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
      <div className="flex items-center justify-between mb-4">
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

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 12, right: 8, left: -10, bottom: 10 }}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
              tickFormatter={(v) => String(v).toUpperCase()}
            />
            <YAxis hide domain={[0, 100]} />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(15, 23, 42, 0.04)' }} />
            <Bar dataKey="percentage" radius={[10, 10, 0, 0]} maxBarSize={44}>
              {data.map((entry, idx) => (
                <Cell
                  key={`cell-${idx}`}
                  fill={entry.isActive ? 'rgba(59, 130, 246, 0.35)' : 'rgba(148, 163, 184, 0.25)'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
