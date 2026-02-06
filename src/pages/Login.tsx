import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import Button from '../components/Button';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard-manager-2');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
      <div className="flex min-h-screen w-full">
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-blue-500 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-white">
              <div className="size-8">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">AI Training</span>
            </div>
          </div>
          <div className="relative z-10 max-w-lg">
            <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] mb-6">
              Повышайте эффективность продаж с помощью обучения на базе ИИ
            </h1>
            <p className="text-white/80 text-lg font-normal leading-relaxed">
              B2B SaaS платформа для тренировки персонала с использованием диалоговых ИИ-моделей и интеллектуального отслеживания прогресса.
            </p>
          </div>
          <div className="relative z-10">
            <div className="flex gap-4">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                <Icon name="trending_up" className="text-white mb-2" />
                <p className="text-white text-sm font-medium">+40% к конверсии</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                <Icon name="psychology" className="text-white mb-2" />
                <p className="text-white text-sm font-medium">ИИ-симуляции</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-black/10 rounded-full blur-2xl"></div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-20 bg-background-light dark:bg-background-dark">
          <div className="w-full max-w-[440px]">
            <div className="mb-10">
              <div className="lg:hidden flex items-center gap-2 mb-8 text-blue-500">
                <div className="size-6">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path
                      clipRule="evenodd"
                      d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg font-bold">AI Training</span>
              </div>
              <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-2">
                Вход в систему
              </h2>
              <p className="text-[#617289] dark:text-gray-400">Добро пожаловать! Пожалуйста, введите ваши данные.</p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="flex flex-col">
                  <span className="text-[#111418] dark:text-gray-200 text-sm font-semibold leading-normal pb-2">
                    Электронная почта
                  </span>
                  <input
                    className="form-input flex w-full rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-blue-500/50 border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 h-14 placeholder:text-[#617289] px-4 text-base font-normal transition-all"
                    placeholder="example@company.ru"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-[#111418] dark:text-gray-200 text-sm font-semibold leading-normal">Пароль</span>
                  <a className="text-blue-500 text-sm font-semibold hover:underline" href="#">
                    Забыли пароль?
                  </a>
                </div>
                <div className="relative flex w-full items-stretch rounded-lg group">
                  <input
                    className="form-input flex w-full rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-blue-500/50 border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 h-14 placeholder:text-[#617289] px-4 pr-12 text-base font-normal transition-all"
                    placeholder="••••••••"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#617289] hover:text-blue-500 transition-colors"
                  >
                    <Icon name={showPassword ? 'visibility_off' : 'visibility'} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 py-1">
                <input
                  className="w-4 h-4 rounded border-[#dbe0e6] text-blue-500 focus:ring-blue-500 cursor-pointer"
                  id="remember"
                  type="checkbox"
                />
                <label className="text-sm text-[#111418] dark:text-gray-300 cursor-pointer select-none" htmlFor="remember">
                  Запомнить меня на 30 дней
                </label>
              </div>
              <Button type="submit" className="w-full h-14" icon="login" iconPosition="right">
                Войти в аккаунт
              </Button>
            </form>
            <div className="mt-8 pt-8 border-t border-[#f0f2f4] dark:border-gray-800">
              <button
                type="button"
                onClick={() => navigate('/dashboard-manager-2')}
                className="w-full h-12 flex items-center justify-center gap-3 bg-white dark:bg-gray-800 border border-[#dbe0e6] dark:border-gray-700 rounded-lg text-[#111418] dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Войти через Google
              </button>
            </div>
            <p className="mt-8 text-center text-[#617289] dark:text-gray-400 text-sm">
              Нет аккаунта?{' '}
              <a className="text-blue-500 font-bold hover:underline" href="#">
                Зарегистрироваться
              </a>
            </p>
            <div className="mt-12 flex justify-center gap-6">
              <a className="text-[#617289] text-xs hover:text-blue-500 transition-colors" href="#">
                О продукте
              </a>
              <a className="text-[#617289] text-xs hover:text-blue-500 transition-colors" href="#">
                Цены
              </a>
              <a className="text-[#617289] text-xs hover:text-blue-500 transition-colors" href="#">
                Помощь
              </a>
              <a className="text-[#617289] text-xs hover:text-blue-500 transition-colors" href="#">
                RU/EN
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
