import PersonaLearnLayout from '../layouts/PersonaLearnLayout';
import Icon from '../components/Icon';
import Button from '../components/Button';

export default function EmployeeTraining() {
    return (
        <PersonaLearnLayout>
            <div className="m-8 max-w-[1000px]">
                <nav className="flex items-center gap-2 text-sm font-medium text-[#617289] mb-6">
                    <a className="hover:text-blue-500 transition-colors" href="#">
                        Обучение
                    </a>
                    <Icon name="chevron_right" className="text-[16px]"/>
                    <a className="hover:text-blue-500 transition-colors" href="#">
                        Работа с возражениями
                    </a>
                    <Icon name="chevron_right" className="text-[16px]"/>
                    <span className="text-[#111418]">Техника "Присоединение"</span>
                </nav>

                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Техника "Присоединение"</h1>
                    <p className="text-[#617289]">Урок 4 • Длительность: 12 минут</p>
                </div>

                <div
                    className="relative aspect-video w-full bg-[#111418] rounded-xl overflow-hidden shadow-2xl group border border-white/10">
                    <div
                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
                        <div className="flex flex-col items-center gap-4">
                            <button
                                className="size-20 bg-blue-500 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg">
                                <Icon name="play_arrow" className="text-[48px]" filled/>
                            </button>
                            <p className="text-white font-medium">Нажмите, чтобы начать просмотр</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-[#e5e7eb]">
                            <h3 className="text-lg font-bold mb-4">О чем этот урок</h3>
                            <p className="text-[#617289] leading-relaxed">
                                В этом уроке мы изучим ключевую технику «Присоединение», которая позволяет снизить
                                градус сопротивления клиента. Вы узнаете, как правильно соглашаться с правом клиента
                                на мнение, не соглашаясь при этом с самим возражением.
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex gap-2 text-sm items-start">
                                    <Icon name="check_circle" className="text-blue-500 text-[18px]"/>
                                    <span>Алгоритм из 3 шагов для любого возражения</span>
                                </li>
                                <li className="flex gap-2 text-sm items-start">
                                    <Icon name="check_circle" className="text-blue-500 text-[18px]"/>
                                    <span>Фразы-шаблоны для начала диалога</span>
                                </li>
                                <li className="flex gap-2 text-sm items-start">
                                    <Icon name="check_circle" className="text-blue-500 text-[18px]"/>
                                    <span>Психологические аспекты доверия</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-[#e5e7eb]">
                            <h4 className="text-sm font-bold uppercase text-[#617289] mb-4">Материалы урока</h4>
                            <div className="space-y-3">
                                <div
                                    className="flex items-center justify-between p-3 bg-background-light rounded-lg cursor-pointer hover:bg-[#f0f2f4] transition-colors">
                                    <div className="flex items-center gap-3">
                                        <Icon name="description" className="text-red-500"/>
                                        <span className="text-sm font-medium">Конспект (PDF)</span>
                                    </div>
                                    <Icon name="download" className="text-[18px]"/>
                                </div>
                                <div
                                    className="flex items-center justify-between p-3 bg-background-light rounded-lg cursor-pointer hover:bg-[#f0f2f4] transition-colors">
                                    <div className="flex items-center gap-3">
                                        <Icon name="audio_file" className="text-blue-500"/>
                                        <span className="text-sm font-medium">Аудио-практика</span>
                                    </div>
                                    <Icon name="download" className="text-[18px]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-6 pb-20">
                    <div className="w-full h-px bg-[#e5e7eb]"></div>
                    <div className="flex flex-col items-center gap-3 text-center">
                        <p className="text-sm text-[#617289]">
                            Просмотрели материал? Проверьте свои знания, чтобы открыть следующий урок.
                        </p>
                        <Button icon="quiz" iconPosition="right" className="min-w-[320px] py-4 px-8 text-lg">
                            Перейти к проверке знаний
                        </Button>
                    </div>
                </div>
            </div>
        </PersonaLearnLayout>
    );
}
