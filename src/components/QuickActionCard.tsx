import Icon from './Icon';

interface QuickActionCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function QuickActionCard({ icon, title, description }: QuickActionCardProps) {
  return (
    <button className="flex items-center gap-4 p-5 bg-white border border-slate-200/60 rounded-2xl hover:border-blue-500/50 hover:bg-white transition-all text-left group shadow-sm">
      <div className="size-12 rounded-xl bg-blue-500/5 text-blue-500 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
        <Icon name={icon} className="text-2xl" />
      </div>
      <div>
        <h5 className="font-bold text-[15px] group-hover:text-blue-500 transition-colors">{title}</h5>
        <p className="text-xs text-slate-400 mt-0.5 font-medium">{description}</p>
      </div>
    </button>
  );
}
