import { useState } from 'react';
import PersonaLearnLayout from '../layouts/PersonaLearnLayout';
import Icon from '../components/Icon';
import Button from '../components/Button';

export default function SystemSettings2() {
  const [profileData, setProfileData] = useState({
    name: 'Александр Иванов',
    email: 'alexander.i@personalearn.io',
  });

  return (
    <PersonaLearnLayout title="Настройки системы">
      <div className="max-w-4xl w-full mx-auto space-y-8">
        <section className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 shadow-sm border border-gray-200/50 dark:border-gray-800">
          <div className="flex items-center gap-2 mb-8">
            <Icon name="account_circle" className="text-blue-500 text-2xl" />
            <h2 className="text-xl font-bold">Профиль пользователя</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="relative group mx-auto md:mx-0">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-white dark:border-gray-700 shadow-xl"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcIhBBisAAslKYaXQ9H4K4Mvyt33cYPjMBmXodIXxQO7tTqGjIalGMmWyzv4lzEPnPZkfy--CXrHDCluyFzs7285qIOxvQe3Bb5sn58T-RNnPPcPaUwnWjgvf3mkQPZHOQI0vLcHZK1CbBD2ZwDsG_VhftszHlOlMXq3EfNGAHOXFQuZY2Rrbx-V1bjB3kTDQzvHkd5KC-F7iHiW_XxfUrXuR97dqbqxgw_n0mEEk6AIY2lIlxx29eAh9xwzS823wVpQ1b4uKtric")',
                }}
              />
              <button className="absolute bottom-1 right-1 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:scale-105 transition-transform">
                <Icon name="photo_camera" className="text-base" />
              </button>
            </div>
            <div className="flex-1 space-y-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Имя Фамилия
                  </label>
                  <input
                    className="rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</label>
                  <input
                    className="rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500 text-sm px-4 py-2"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <Button className="px-6 py-2 text-sm">Сохранить изменения</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 shadow-sm border border-gray-200/50 dark:border-gray-800">
          <div className="flex items-center gap-2 mb-8">
            <Icon name="security" className="text-blue-500 text-2xl" />
            <h2 className="text-xl font-bold">Безопасность</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-gray-500">
                  <Icon name="key" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Пароль</p>
                  <p className="text-xs text-gray-500">Рекомендуется менять пароль раз в полгода</p>
                </div>
              </div>
              <button className="text-blue-500 text-sm font-bold hover:underline px-4 py-2 hover:bg-blue-500/5 rounded-lg transition-all">
                Сбросить
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-gray-500">
                  <Icon name="verified_user" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Двухфакторная аутентификация</p>
                  <p className="text-xs text-green-600 font-medium">Включена (SMS / Приложение)</p>
                </div>
              </div>
              <button className="text-gray-500 text-sm font-bold hover:underline px-4 py-2 hover:bg-gray-200/50 rounded-lg transition-all">
                Настроить
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 shadow-sm border border-gray-200/50 dark:border-gray-800">
          <div className="flex items-center gap-2 mb-6">
            <Icon name="contact_support" className="text-blue-500 text-2xl" />
            <h2 className="text-xl font-bold">Поддержка</h2>
          </div>
          <div className="bg-blue-500/5 p-6 rounded-2xl border border-blue-500/10">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Нужна помощь с AI-тренажером или возникли вопросы по аналитике? Мы на связи 24/7.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase">Тема</label>
                  <select className="rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-sm px-4 py-2 focus:ring-blue-500">
                    <option>Технический вопрос</option>
                    <option>Проблема с AI-диалогом</option>
                    <option>Доступ к аналитике</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase">Срочность</label>
                  <select className="rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-sm px-4 py-2 focus:ring-blue-500">
                    <option>Обычная</option>
                    <option>Срочно</option>
                    <option>Критическая ошибка</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase">Сообщение</label>
                <textarea
                  className="rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-sm px-4 py-2 focus:ring-blue-500"
                  placeholder="Опишите ситуацию..."
                  rows={4}
                />
              </div>
              <Button className="w-full py-3.5">Отправить запрос</Button>
            </form>
          </div>
        </section>

        <footer className="flex flex-col md:flex-row justify-between items-center gap-4 py-8 text-xs text-gray-400">
          <div className="flex gap-4">
            <a className="hover:text-blue-500 transition-colors" href="#">
              Политика конфиденциальности
            </a>
            <span>•</span>
            <a className="hover:text-blue-500 transition-colors" href="#">
              Условия использования
            </a>
          </div>
          <p>© 2024 PersonaLearn AI. Все права защищены.</p>
        </footer>
      </div>
    </PersonaLearnLayout>
  );
}
