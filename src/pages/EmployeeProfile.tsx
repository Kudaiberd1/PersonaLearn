import { useParams } from 'react-router-dom';
import PersonaLearnLayout from '../layouts/PersonaLearnLayout';
import Icon from '../components/Icon';
import employeesData from '../data/employees2.json';

export default function EmployeeProfile() {
  const { id } = useParams();
  const employeeId = Number(id);

  const employee = employeesData.employees.find((e) => e.id === employeeId);

  if (!employee) {
    return (
      <PersonaLearnLayout>
        <div className="m-8">
          <p className="text-sm text-slate-500">Сотрудник не найден.</p>
        </div>
      </PersonaLearnLayout>
    );
  }

  const progressColor =
    employee.trainingProgress === 100
      ? 'bg-green-500'
      : employee.trainingProgress >= 50
      ? 'bg-blue-500'
      : 'bg-amber-500';

  return (
    <PersonaLearnLayout>
      <div className="m-8 space-y-8">
        <header className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
              {employee.avatar}
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900">{employee.name}</h1>
              <p className="text-sm text-slate-500">
                {employee.position} · {employee.email}
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 space-y-6">
            <div>
              <h2 className="text-base font-bold mb-3">Прогресс обучения</h2>
              <div className="flex items-center gap-3 max-w-md">
                <div className="flex-1 h-2 rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${progressColor}`}
                    style={{ width: `${employee.trainingProgress}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-slate-800">
                  {employee.trainingProgress}% пройденного материала
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-base font-bold mb-3">AI-оценка</h2>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-50 border border-slate-200">
                <Icon name="star" className="text-amber-400 text-xl" />
                <span className="text-sm font-bold">{employee.aiScoreLabel}</span>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 space-y-4">
            <h2 className="text-base font-bold">Сводка</h2>
            <p className="text-sm text-slate-500">
              Карточка сотрудника для руководителя. Здесь будут отображаться ключевые метрики,
              связанные с обучением и результатами AI-диалогов.
            </p>
          </section>
        </div>
      </div>
    </PersonaLearnLayout>
  );
}

