import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonaLearnLayout from '../layouts/PersonaLearnLayout';
import Icon from '../components/Icon';
import Button from '../components/Button';

export default function EmployeeSurvey() {
  const navigate = useNavigate();
  const [learningStyle, setLearningStyle] = useState('visual');
  const [comfortLevel, setComfortLevel] = useState(0);
  const [behaviorRole, setBehaviorRole] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let calculatedProgress = 0;
    if (learningStyle) calculatedProgress += 33.33;
    if (comfortLevel > 0) calculatedProgress += 33.33;
    if (behaviorRole) calculatedProgress += 33.34;
    setProgress(Math.round(calculatedProgress));
  }, [learningStyle, comfortLevel, behaviorRole]);

  return (
    <PersonaLearnLayout title="Анкетирование сотрудника">
      <div className="flex flex-col max-w-[800px] mx-auto w-full">
          <div className="flex flex-col gap-4 mb-8 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Анкетирование сотрудника</h1>
                <p className="text-slate-500 text-sm mt-1">
                  Шаг 3: Определение стиля взаимодействия
                </p>
              </div>
              <div className="text-right">
                <span className="text-blue-500 font-bold text-lg">{progress}%</span>
                <p className="text-slate-400 text-xs uppercase tracking-wider">Заполнено</p>
              </div>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
            <div className="h-48 w-full bg-gradient-to-r from-blue-500/20 to-blue-600/10 flex items-center justify-center relative">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuoYBIdYrw8CCQjv2xl86Lw7AVGGQGWbW1BoNCAKSqfuraz9xFE-4rQa12RGSWQCTrd0IbcNZOuxWaExBse_dcuYqEw8eCg8GNSghv3Ay_V1V0V6jImFmG0KaiQr80kKszlQcPk9IplutZFVM1Z6OW8EGEu45YufDoYMZHM54YCvg1jJOKsK7yIxvpf-7j7xiSk4_NzTay7SFse7k7uhOGwHPw8aa2wKycdMNmDGyWCDo6bWfpN2EVk3cvOrXDjZBdJWqGfrqmWUo")',
                }}
              />
              <div className="relative z-10 flex flex-col items-center text-center px-6">
                <Icon name="psychology" className="text-blue-500 text-4xl mb-2" />
                <h3 className="text-xl font-bold text-slate-900">Ваш стиль обучения и поведения</h3>
                <p className="text-slate-600 max-w-md">
                  Это поможет ИИ-наставнику адаптировать теорию и практические кейсы под ваши особенности.
                </p>
              </div>
            </div>

            <div className="p-8 space-y-10">
              <section className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  <p className="text-lg font-semibold text-slate-900 leading-tight">
                    Как вы обычно предпочитаете получать новую информацию о продукте?
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-9">
                  {[
                    { value: 'visual', label: 'Визуальный', desc: 'Схемы, графики, видео-уроки' },
                    { value: 'audio', label: 'Аудиальный', desc: 'Подкасты, живые лекции, звонки' },
                    { value: 'text', label: 'Текстовый', desc: 'Статьи, лонгриды, инструкции' },
                    { value: 'practical', label: 'Практический', desc: 'Ролевые игры, тесты, симуляции' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center gap-3 rounded-lg border p-4 cursor-pointer hover:bg-slate-50 transition-colors ${
                        learningStyle === option.value
                          ? 'border-blue-500 bg-blue-500/5'
                          : 'border-slate-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="learning_style"
                        value={option.value}
                        checked={learningStyle === option.value}
                        onChange={(e) => setLearningStyle(e.target.value)}
                        className="h-5 w-5 border-slate-300 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-transparent"
                      />
                      <div className="flex flex-col">
                        <span className="text-slate-900 font-medium text-sm">{option.label}</span>
                        <span className="text-slate-500 text-xs">{option.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  <p className="text-lg font-semibold text-slate-900 leading-tight">
                    Оцените уровень своего комфорта при работе с возражениями клиентов
                  </p>
                </div>
                <div className="pl-9 space-y-4">
                  <div className="flex justify-between items-center text-xs text-slate-500 font-medium px-1">
                    <span>Очень низкий (Избегаю)</span>
                    <span>Абсолютно уверен</span>
                  </div>
                  <div className="grid grid-cols-10 gap-2">
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                      <button
                        key={num}
                        onClick={() => setComfortLevel(num)}
                        className={`h-12 border rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all font-medium text-sm ${
                          comfortLevel === num
                          ? 'border-blue-500 bg-blue-500/10 text-blue-500'
                          : 'border-slate-200'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold">
                    3
                  </span>
                  <p className="text-lg font-semibold text-slate-900 leading-tight">
                    Какая роль в команде вам ближе всего?
                  </p>
                </div>
                <div className="pl-9 space-y-3">
                  {[
                    'Лидер, ведущий за собой всю команду',
                    'Аналитик, фокусирующийся на деталях и цифрах',
                    'Коммуникатор, сглаживающий углы в общении',
                  ].map((role) => (
                    <label
                      key={role}
                      className={`flex items-center gap-4 rounded-lg border p-4 cursor-pointer hover:border-blue-500 transition-colors ${
                        behaviorRole === role ? 'border-blue-500 bg-blue-500/5' : 'border-slate-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="behavior"
                        value={role}
                        checked={behaviorRole === role}
                        onChange={(e) => setBehaviorRole(e.target.value)}
                        className="h-5 w-5 border-slate-300 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-transparent"
                      />
                      <span className="text-slate-700 font-medium">{role}</span>
                    </label>
                  ))}
                </div>
              </section>
            </div>

            <div className="p-8 bg-slate-50 border-t border-slate-200 flex flex-col items-center gap-6">
              <p className="text-slate-600 text-sm italic text-center max-w-sm">
                «На основе ответов мы подберём лучший формат обучения и персонального ИИ-наставника для вас»
              </p>
              <div className="flex gap-4 w-full justify-center">
                <button
                  onClick={() => navigate(-1)}
                  className="px-8 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors"
                >
                  Назад
                </button>
                <Button
                  className="px-12 py-3"
                  onClick={() => {
                    if (progress === 100) {
                      navigate('/dashboard-manager-2');
                    }
                  }}
                  disabled={progress < 100}
                >
                  Далее
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center items-center gap-6 text-slate-400 text-xs">
            <div className="flex items-center gap-1">
              <Icon name="lock" className="text-sm" />
              Данные защищены
            </div>
            <div className="flex items-center gap-1">
              <Icon name="bolt" className="text-sm" />
              AI-анализ в реальном времени
            </div>
            <div className="flex items-center gap-1">
              <Icon name="help" className="text-sm" />
              Поддержка
            </div>
          </div>
      </div>
    </PersonaLearnLayout>
  );
}
