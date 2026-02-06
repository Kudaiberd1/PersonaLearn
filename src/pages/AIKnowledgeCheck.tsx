import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../components/Icon';
import Button from '../components/Button';
import examData from '../data/aiKnowledgeCheck.json';

export default function AIKnowledgeCheck() {
  const [showResults, setShowResults] = useState(false);
  const [message, setMessage] = useState('');
  const location = useLocation();

  const navItems = [
    { path: '/dashboard-manager-2', icon: 'dashboard', label: 'Дашборд' },
    { path: '/training-materials-1', icon: 'menu_book', label: 'Курсы' },
    { path: '/ai-knowledge-check', icon: 'assignment_turned_in', label: 'Экзамены' },
  ];

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 hidden lg:flex flex-col justify-between shrink-0">
          <div className="flex flex-col gap-6">
            <Link
              to="/system-settings-2"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
            >
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200 dark:border-slate-700 group-hover:border-blue-500 transition-colors"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPvY1eqGDPLFoyFzROim_2XEU9MOFcVLhn1N-E99SANCu63-1OqjRCGFAeb8Gq8JI_ZXgBVbm4we7reBvmGSqU2ojdDT2qQfyUhTtGRwW-guWPNqoiNPvK5cpl8Dae9tjwEdOJ3syfRt3NHbqu8CPgk9uv1CgCwrLBV63nI8nQwmHTYgG2aUAiIsfkSbDEHfbjI6FQkfi5bVLe3GRrZACStFZWjwZVLyomf00igTDWhogA9dzMa4UB6__ZfnOyBxICByCMXryWbVg")',
                }}
              />
              <div className="flex flex-col">
                <h1 className="text-slate-900 dark:text-white text-base font-bold group-hover:text-blue-500 transition-colors">
                  Иван Иванов
                </h1>
                <p className="text-slate-500 text-sm">Senior Sales Manager</p>
              </div>
            </Link>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-500/10 text-blue-500'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon name={item.icon} filled={isActive} />
                    <p className={`text-sm ${isActive ? 'font-semibold' : 'font-medium'}`}>{item.label}</p>
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="p-3 bg-blue-500/5 rounded-xl border border-blue-500/10">
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">Текущий экзамен</p>
            <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{examData.exam.title}</p>
            <div className="mt-3 h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full rounded-full" style={{ width: `${examData.exam.progress}%` }} />
            </div>
            <p className="text-[10px] text-slate-500 mt-2">
              Вопрос {examData.exam.currentQuestion} из {examData.exam.totalQuestions}
            </p>
          </div>
        </aside>

        <main className="flex-1 flex flex-col bg-background-light dark:bg-background-dark relative">
          <div className="px-8 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between">
            <div>
              <h2 className="text-slate-900 dark:text-white text-lg font-bold">Экзаменационная сессия</h2>
              <p className="text-sm text-slate-500">Симуляция переговоров с AI-клиентом</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex size-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium text-slate-500">AI Ассистент активен</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {examData.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 max-w-2xl ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                {msg.sender === 'ai' ? (
                  <div className="size-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                    <Icon name="smart_toy" className="text-blue-500" />
                  </div>
                ) : (
                  <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0 overflow-hidden">
                    <div
                      className="w-full h-full bg-center bg-cover"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaAiyXGGhXDUPgndkeam3hbF7HB454ZYxGVcGiH6K-_l40b0xUckgnAs1MDS2Cd7SjilARVkTJavAO49GiHYnDec3-Ov80isyk70DSoEraImkxeA1ubQ_dexaqkK5GHy4nFPmYDkth0UGbZ6f-fIXKkkordutdQzuiRLZcVlZYbHZqIGBz0eHudCx4k7ZFRJk2A_i8KOZtC9u7mdsMYlUvn3eeBqRBZHpn9MVkf8YV1KpLPu0vEf53KtTWfIl_BFuusnevvx8IWHY")',
                      }}
                    />
                  </div>
                )}
                <div className={`flex flex-col gap-1.5 ${msg.sender === 'user' ? 'items-end' : ''}`}>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight ml-1">
                    {msg.sender === 'ai' ? 'AI Ассистент' : 'Вы'}
                  </p>
                  <div
                    className={`p-4 rounded-xl shadow-sm ${
                      msg.sender === 'ai'
                        ? 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-tl-none'
                        : 'bg-blue-500 text-white rounded-tr-none shadow-md'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-4xl mx-auto flex gap-3">
              <div className="relative flex-1">
                <textarea
                  className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 pr-12 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
                  placeholder="Введите ваш ответ здесь..."
                  rows={1}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-500">
                  <Icon name="mic" />
                </button>
              </div>
              <Button
                icon="send"
                iconPosition="right"
                className="px-6 py-3"
                onClick={() => {
                  if (message.trim()) {
                    setMessage('');
                    if (examData.messages.length >= 4) {
                      setShowResults(true);
                    }
                  }
                }}
              >
                Отправить
              </Button>
            </div>
          </div>
        </main>
      </div>

      {showResults && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Результаты экзамена</h3>
                  <p className="text-slate-500">{examData.exam.title}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-4xl font-black text-blue-500">{examData.results.score}%</span>
                  <span className="text-xs font-bold text-slate-400 uppercase">Уровень знаний</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-100 dark:border-green-900/30">
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-3">
                    <Icon name="trending_up" />
                    <h4 className="font-bold text-sm uppercase tracking-wider">Сильные стороны</h4>
                  </div>
                  <ul className="space-y-2">
                    {examData.results.strengths.map((strength, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <span className="text-green-500 font-bold">•</span> {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border border-amber-100 dark:border-amber-900/30">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-3">
                    <Icon name="emergency_home" />
                    <h4 className="font-bold text-sm uppercase tracking-wider">Точки роста</h4>
                  </div>
                  <ul className="space-y-2">
                    {examData.results.gaps.map((gap, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <span className="text-amber-500 font-bold">•</span> {gap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 mb-8">
                <h4 className="text-sm font-bold mb-2">Общее резюме:</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{examData.results.summary}</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowResults(false)}
                  className="flex-1 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 py-3 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Повторить попытку
                </button>
                <Button className="flex-1 py-3">Завершить</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
