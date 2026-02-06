import { useState } from 'react';
import PersonaLearnLayout from '../layouts/PersonaLearnLayout';
import Icon from '../components/Icon';
import Button from '../components/Button';
import trainingMaterialsData from '../data/trainingMaterials.json';

export default function TrainingMaterials1() {
  const [activeTab, setActiveTab] = useState('all');

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      Видео: 'bg-blue-500/90',
      PDF: 'bg-orange-500/90',
      Аудио: 'bg-purple-600/90',
    };
    return colors[type] || 'bg-blue-500/90';
  };

  const filteredMaterials =
    activeTab === 'all'
      ? trainingMaterialsData.materials
      : trainingMaterialsData.materials.filter((m) => m.type === trainingMaterialsData.tabs.find((t) => t.id === activeTab)?.label);

  return (
    <PersonaLearnLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-tight">
            Материалы обучения
          </h2>
          <p className="text-[#617289] dark:text-gray-400 mt-1">
            Управляйте курсами и учебными файлами для ваших менеджеров
          </p>
        </div>
        <Button icon="add_circle" iconPosition="left" className="h-12 px-6">
          Загрузить материал
        </Button>
      </div>

      <div className="flex border-b border-[#dbe0e6] dark:border-gray-800 mb-8 overflow-x-auto scrollbar-hide">
        {trainingMaterialsData.tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 border-b-2 px-4 pb-4 font-bold text-sm transition-colors ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-[#617289] hover:text-blue-500'
            }`}
          >
            {tab.icon && <Icon name={tab.icon} className="text-lg" />}
            <span>{tab.label}</span>
            {tab.count && (
              <span className="bg-blue-500/10 px-2 py-0.5 rounded text-[10px]">{tab.count}</span>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMaterials.map((material) => (
          <div
            key={material.id}
            className="group bg-white dark:bg-[#1a2430] border border-[#dbe0e6] dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${material.image}')` }}
              ></div>
              {material.duration && (
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded">
                  {material.duration}
                </div>
              )}
              <div className="absolute bottom-2 left-2 flex gap-1">
                <span className={`${getTypeColor(material.type)} text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider`}>
                  {material.type}
                </span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-[#111418] dark:text-white font-bold text-lg leading-tight mb-2 line-clamp-2">
                {material.title}
              </h3>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs text-[#617289] dark:text-gray-400 font-medium">
                    Прогресс усвоения
                  </span>
                  <span className="text-xs text-blue-500 font-bold">{material.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-500 h-full rounded-full"
                    style={{ width: `${material.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="group border-2 border-dashed border-[#dbe0e6] dark:border-gray-800 rounded-xl flex flex-col items-center justify-center p-6 text-center hover:bg-white dark:hover:bg-[#1a2430] hover:border-blue-500 transition-all cursor-pointer min-h-[250px]">
          <div className="size-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform mb-4">
            <Icon name="upload_file" className="text-3xl" />
          </div>
          <h4 className="text-[#111418] dark:text-white font-bold mb-1">Новый материал</h4>
          <p className="text-sm text-[#617289]">
            Нажмите, чтобы загрузить<br />
            видео, аудио или PDF
          </p>
        </div>
      </div>
    </PersonaLearnLayout>
  );
}
