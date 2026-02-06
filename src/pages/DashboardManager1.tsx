import PersonaLearnLayout from '../layouts/PersonaLearnLayout';
import Icon from '../components/Icon';
import dashboardData from '../data/dashboard.json';

export default function DashboardManager1() {
  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-600',
      emerald: 'bg-emerald-100 text-emerald-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
    };
    return colors[color] || colors.blue;
  };

  const getCategoryColor = (color: string) => {
    const colors: Record<string, string> = {
      primary: 'bg-blue-500',
      blue: 'bg-blue-500',
      emerald: 'bg-emerald-500',
      orange: 'bg-orange-400',
    };
    return colors[color] || colors.blue;
  };

  return (
    <PersonaLearnLayout title="Dashboard" showSearch={true}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardData.kpis.map((kpi) => (
          <div
            key={kpi.id}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <span className={`p-2 ${getColorClasses(kpi.color)} rounded-lg material-symbols-outlined`}>
                {kpi.icon}
              </span>
              <span className={`text-xs font-bold flex items-center ${
                kpi.change.startsWith('-') ? 'text-red-500' : 'text-green-500'
              }`}>
                {kpi.change}{' '}
                <Icon
                  name={kpi.change.startsWith('-') ? 'trending_down' : 'trending_up'}
                  className="text-xs"
                />
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">{kpi.label}</p>
            <h3 className="text-3xl font-bold mt-1">{kpi.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-lg font-bold">Прогресс по сотрудникам</h4>
              <p className="text-sm text-slate-500">Топ-7 по активности за месяц</p>
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <Icon name="more_vert" />
            </button>
          </div>
          <div className="h-64 flex items-end justify-between gap-4 px-4">
            {dashboardData.progressData.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1 gap-3">
                <div
                  className={`w-full rounded-t-lg ${
                    item.percentage > 60 ? 'bg-blue-500' : 'bg-blue-500/40'
                  }`}
                  style={{ height: `${item.percentage}%` }}
                ></div>
                <span className="text-[10px] font-bold text-slate-500 uppercase">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-lg font-bold">Освоение материалов</h4>
              <p className="text-sm text-slate-500">Статистика по категориям</p>
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <Icon name="filter_list" />
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 h-64">
            <div className="relative size-48">
              <svg className="size-full transform -rotate-90" viewBox="0 0 36 36">
                <circle
                  className="stroke-slate-100"
                  cx="18"
                  cy="18"
                  fill="none"
                  r="16"
                  strokeWidth="3.5"
                />
                <circle
                  className="stroke-blue-500"
                  cx="18"
                  cy="18"
                  fill="none"
                  r="16"
                  strokeDasharray="75, 100"
                  strokeWidth="3.5"
                />
                <circle
                  className="stroke-emerald-500"
                  cx="18"
                  cy="18"
                  fill="none"
                  r="16"
                  strokeDasharray="20, 100"
                  strokeDashoffset="-75"
                  strokeWidth="3.5"
                />
                <circle
                  className="stroke-orange-400"
                  cx="18"
                  cy="18"
                  fill="none"
                  r="16"
                  strokeDasharray="5, 100"
                  strokeDashoffset="-95"
                  strokeWidth="3.5"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-bold">{dashboardData.materialMastery.total}%</span>
                <span className="text-[10px] text-slate-500 uppercase font-bold">Активны</span>
              </div>
            </div>
            <div className="flex-1 space-y-4 w-full">
              {dashboardData.materialMastery.categories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`size-2 rounded-full ${getCategoryColor(category.color)}`}></div>
                    <span className="text-sm">{category.name}</span>
                  </div>
                  <span className="text-sm font-bold">{category.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section>
        <h4 className="text-lg font-bold mb-4">Быстрые действия</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardData.quickActions.map((action) => (
            <button
              key={action.id}
              className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:bg-blue-500/5 transition-all text-left group"
            >
              <div className="size-12 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Icon name={action.icon} />
              </div>
              <div>
                <h5 className="font-bold text-sm">{action.title}</h5>
                <p className="text-xs text-slate-500">{action.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </PersonaLearnLayout>
  );
}
