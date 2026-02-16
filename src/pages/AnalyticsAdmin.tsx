import PersonaLearnLayout from '../layouts/PersonaLearnLayout';
import Icon from '../components/Icon';
import analyticsData from '../data/analyticsAdmin2.json';

export default function AnalyticsAdmin() {
    const getGapColor = (severity: string) => {
        const colors: Record<string, { bg: string; border: string; text: string; bar: string; progress: string }> = {
            high: {
                bg: 'bg-red-50',
                border: 'border-red-100',
                text: 'text-red-700',
                bar: 'bg-red-200',
                progress: 'bg-red-500',
            },
            medium: {
                bg: 'bg-orange-50',
                border: 'border-orange-100',
                text: 'text-orange-700',
                bar: 'bg-orange-200',
                progress: 'bg-orange-500',
            },
            low: {
                bg: 'bg-blue-50',
                border: 'border-blue-100',
                text: 'text-blue-700',
                bar: 'bg-blue-200',
                progress: 'bg-blue-500',
            },
        };
        return colors[severity] || colors.low;
    };

    const getAvatarColor = (color: string) => {
        const colors: Record<string, string> = {
            blue: 'bg-blue-100 text-blue-500',
            purple: 'bg-purple-100 text-purple-600',
        };
        return colors[color] || 'bg-gray-100 text-gray-600';
    };

    const getCompetencyColor = (level: number) => {
        if (level >= 80) return {bg: 'bg-green-500', text: 'text-green-600'};
        if (level >= 60) return {bg: 'bg-yellow-500', text: 'text-yellow-600'};
        return {bg: 'bg-red-500', text: 'text-red-600'};
    };

    return (
        <PersonaLearnLayout title="Аналитика" showSearch>
            <div className="m-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-[#111418] tracking-tight">
                        Аналитика PersonaLearn
                    </h2>
                    <p className="text-gray-500 mt-1">
                        Детальные ИИ-инсайты по эффективности обучения сотрудников
                    </p>
                </div>
                <div className="flex gap-3">
                    <div
                        className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 cursor-pointer">
                        <Icon name="calendar_month" className="text-[18px]"/>
                        <span>01 Окт — 31 Окт</span>
                    </div>
                </div>
            </div>

            <div className="m-8 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div
                    className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-lg font-bold">Карта компетенций (AI Radar)</h3>
                            <p className="text-xs text-gray-500">Сравнение текущих навыков с целевыми показателями</p>
                        </div>
                        <div className="flex gap-4">
              <span className="flex items-center gap-2 text-xs font-medium">
                <span className="size-2.5 rounded-full bg-blue-500"></span> Факт
              </span>
                            <span className="flex items-center gap-2 text-xs font-medium">
                <span className="size-2.5 rounded-full bg-gray-200"></span> Цель
              </span>
                        </div>
                    </div>
                    <div className="h-[340px] flex items-center justify-center relative">
                        <div
                            className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                            <div
                                className="w-[300px] h-[300px] border border-gray-400 rounded-full border-dashed"></div>
                            <div
                                className="absolute w-[200px] h-[200px] border border-gray-400 rounded-full border-dashed"></div>
                            <div
                                className="absolute w-[100px] h-[100px] border border-gray-400 rounded-full border-dashed"></div>
                        </div>
                        <svg className="w-[300px] h-[300px] drop-shadow-xl transform -rotate-18" viewBox="0 0 100 100">
                            <polygon
                                className="text-gray-200 dark:text-gray-700"
                                fill="none"
                                points="50,5 95,35 80,85 20,85 5,35"
                                stroke="currentColor"
                                strokeWidth="0.2"
                            />
                            <polygon
                                fill="rgba(226, 232, 240, 0.3)"
                                points="50,15 85,40 75,75 25,75 15,40"
                                stroke="#cbd5e1"
                                strokeWidth="0.5"
                            />
                            <polygon
                                fill="rgba(19, 109, 236, 0.2)"
                                points="50,10 92,38 78,82 28,70 12,42"
                                stroke="#136dec"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                            <circle cx="50" cy="10" fill="#136dec" r="1.5"/>
                            <circle cx="92" cy="38" fill="#136dec" r="1.5"/>
                            <circle cx="78" cy="82" fill="#136dec" r="1.5"/>
                            <circle cx="28" cy="70" fill="#136dec" r="1.5"/>
                            <circle cx="12" cy="42" fill="#136dec" r="1.5"/>
                        </svg>
                        <div className="absolute top-0 flex flex-col items-center">
              <span className="text-[10px] font-black uppercase text-gray-500 tracking-tighter">
                Знание продукта
              </span>
                            <span className="text-xs font-bold">{analyticsData.radarData.fact.productKnowledge}</span>
                        </div>
                        <div className="absolute right-0 top-1/3 text-right">
                            <span
                                className="text-[10px] font-black uppercase text-gray-500 tracking-tighter">Уверенность</span>
                            <p className="text-xs font-bold">{analyticsData.radarData.fact.confidence}</p>
                        </div>
                        <div className="absolute bottom-4 right-1/4 text-right">
                            <span
                                className="text-[10px] font-black uppercase text-gray-500 tracking-tighter">Возражения</span>
                            <p className="text-xs font-bold">{analyticsData.radarData.fact.objections}</p>
                        </div>
                        <div className="absolute bottom-4 left-1/4 text-left">
                            <span
                                className="text-[10px] font-black uppercase text-gray-500 tracking-tighter">Эмпатия</span>
                            <p className="text-xs font-bold">{analyticsData.radarData.fact.empathy}</p>
                        </div>
                        <div className="absolute left-0 top-1/3 text-left">
                            <span
                                className="text-[10px] font-black uppercase text-gray-500 tracking-tighter">Закрытие</span>
                            <p className="text-xs font-bold">{analyticsData.radarData.fact.closing}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold mb-4">Пробелы в знаниях</h3>
                    <div className="space-y-5">
                        {analyticsData.knowledgeGaps.map((gap) => {
                            const colors = getGapColor(gap.severity);
                            return (
                                <div key={gap.id} className={`p-4 ${colors.bg} border ${colors.border} rounded-lg`}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className={`text-sm font-bold ${colors.text}`}>{gap.title}</span>
                                        {gap.trend && (
                                            <span
                                                className={`text-xs font-black ${colors.bg.replace('50', '100').replace('900/10', '900/40')} px-2 py-0.5 rounded ${colors.text}`}>
                        {gap.trend > 0 ? '+' : ''}{gap.trend}%
                      </span>
                                        )}
                                        {!gap.trend && (
                                            <span
                                                className={`text-xs font-black ${colors.bg.replace('50', '100').replace('900/10', '900/40')} px-2 py-0.5 rounded ${colors.text}`}>
                        {gap.progress}%
                      </span>
                                        )}
                                    </div>
                                    <div className={`w-full ${colors.bar} h-1.5 rounded-full overflow-hidden`}>
                                        <div className={`${colors.progress} h-full`}
                                             style={{width: `${gap.progress}%`}}/>
                                    </div>
                                    {gap.message && (
                                        <p className={`text-[11px] ${colors.text} mt-2 font-medium`}>{gap.message}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="m-8 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-bold">Рейтинг сотрудников и AI-фидбек</h3>
                        <p className="text-sm text-gray-500">Автоматический анализ диалогов за последнюю неделю</p>
                    </div>
                    <button className="text-blue-500 text-sm font-bold hover:underline flex items-center gap-1">
                        Все сотрудники <Icon name="chevron_right" className="text-sm"/>
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50">
                        <tr className="text-[10px] font-black uppercase text-gray-500 tracking-wider">
                            <th className="px-6 py-4">Сотрудник</th>
                            <th className="px-6 py-4">Уровень компетенций</th>
                            <th className="px-6 py-4">AI Резюме & Рекомендация</th>
                            <th className="px-6 py-4">Балл</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                        {analyticsData.employees.map((employee) => {
                            const compColors = getCompetencyColor(employee.competencyLevel);
                            return (
                                <tr key={employee.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`size-10 rounded-full ${getAvatarColor(employee.avatarColor)} flex items-center justify-center font-black text-sm`}>
                                                {employee.initials}
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">{employee.name}</p>
                                                <p className="text-xs text-gray-500">{employee.role}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 w-20 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                                <div className={`${compColors.bg} h-full`}
                                                     style={{width: `${employee.competencyLevel}%`}}/>
                                            </div>
                                            <span
                                                className={`text-xs font-bold ${compColors.text}`}>{employee.competencyLevel}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 max-w-md">
                                        <div
                                            className="bg-blue-500/5 border border-blue-500/20 p-3 rounded-lg flex gap-3 group-hover:bg-blue-500/10 transition-colors">
                                            <Icon name="auto_awesome" className="text-blue-500 text-lg shrink-0"/>
                                            <p className="text-xs leading-relaxed italic text-gray-700">
                                                "{employee.aiFeedback}"
                                            </p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                      <span className="text-sm font-black bg-gray-100 px-2 py-1 rounded">
                        {employee.score}
                      </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <button
                                            className="size-8 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-400">
                                            <Icon name="more_vert" className="text-xl"/>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </PersonaLearnLayout>
    );
}
