import PersonaLearnLayout from '../layouts/PersonaLearnLayout';
import Icon from '../components/Icon';
import Button from '../components/Button';
import employeesData from '../data/employees.json';

export default function EmployeeList1() {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'trending_up';
      case 'down':
        return 'trending_down';
      case 'star':
        return 'stars';
      default:
        return 'trending_flat';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    return 'bg-amber-500';
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600';
    if (score >= 70) return 'text-slate-700';
    return 'text-slate-500';
  };

  return (
    <PersonaLearnLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-slate-900 text-3xl font-black tracking-tight">
            Список сотрудников
          </h1>
          <p className="text-slate-500 mt-1">
            Управление доступом, назначение тренингов и мониторинг прогресса.
          </p>
        </div>
        <Button icon="person_add" iconPosition="left" className="py-2.5 px-5">
          Добавить сотрудника
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full bg-slate-50 border-slate-200 focus:ring-blue-500 focus:border-blue-500 rounded-lg pl-10 pr-4 py-2.5 text-sm"
              placeholder="Поиск по имени, должности или ID"
              type="text"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
              <Icon name="filter_list" className="text-lg text-slate-400" />
              <span>Фильтры</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
              <Icon name="download" className="text-lg text-slate-400" />
              <span>Экспорт</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Имя
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Должность
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/4">
                  Статус обучения
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  AI-оценка
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {employeesData.employees.map((employee) => (
                <tr
                  key={employee.id}
                  className="hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm">
                        {employee.avatar}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900">
                          {employee.name}
                        </span>
                        <span className="text-xs text-slate-500">{employee.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium uppercase tracking-wide">
                      {employee.position}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className={`h-full ${getProgressColor(employee.trainingProgress)} rounded-full`}
                          style={{ width: `${employee.trainingProgress}%` }}
                        ></div>
                      </div>
                      <span
                        className={`text-xs font-bold ${
                          employee.trainingProgress === 100
                            ? 'text-green-600'
                            : 'text-slate-700'
                        }`}
                      >
                        {employee.trainingProgress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-sm font-bold ${getScoreColor(employee.aiScore)}`}>
                        {employee.aiScore}%
                      </span>
                      <Icon name={getTrendIcon(employee.trend)} className="text-green-500 text-sm" />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <div className="flex justify-end gap-3">
                      <button className="text-blue-500 hover:text-blue-500/80 font-semibold px-3 py-1.5 hover:bg-blue-500/5 rounded-lg transition-all">
                        Назначить материалы
                      </button>
                      <button className="text-slate-600 hover:text-slate-900 font-semibold px-3 py-1.5 hover:bg-slate-100 rounded-lg transition-all">
                        Детальный отчёт
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Показано {employeesData.employees.length} из 124 сотрудников
          </p>
          <div className="flex gap-2">
            <button className="size-8 flex items-center justify-center border border-slate-200 rounded text-slate-400 hover:text-slate-600 transition-colors">
              <Icon name="chevron_left" className="text-lg" />
            </button>
            <button className="size-8 flex items-center justify-center bg-blue-500 text-white rounded text-sm font-bold">
              1
            </button>
            <button className="size-8 flex items-center justify-center border border-slate-200 rounded text-slate-600 text-sm font-medium hover:bg-white">
              2
            </button>
            <button className="size-8 flex items-center justify-center border border-slate-200 rounded text-slate-600 text-sm font-medium hover:bg-white">
              3
            </button>
            <button className="size-8 flex items-center justify-center border border-slate-200 rounded text-slate-400 hover:text-slate-600 transition-colors">
              <Icon name="chevron_right" className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <Icon name="school" className="text-blue-500 bg-blue-500/10 p-2 rounded-lg" />
            <span className="text-xs font-bold text-green-500">+12%</span>
          </div>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
            Всего уроков
          </p>
          <p className="text-2xl font-black mt-1">{employeesData.stats.totalLessons.toLocaleString()}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <Icon name="emoji_events" className="text-blue-500 bg-blue-500/10 p-2 rounded-lg" />
            <span className="text-xs font-bold text-green-500">+5%</span>
          </div>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
            Ср. успеваемость
          </p>
          <p className="text-2xl font-black mt-1">{employeesData.stats.averagePerformance}%</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <Icon name="timer" className="text-blue-500 bg-blue-500/10 p-2 rounded-lg" />
            <span className="text-xs font-bold text-slate-400">±0%</span>
          </div>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
            Часов обучения
          </p>
          <p className="text-2xl font-black mt-1">{employeesData.stats.trainingHours}</p>
        </div>
      </div>
    </PersonaLearnLayout>
  );
}
