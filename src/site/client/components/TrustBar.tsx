export default function TrustBar({ yearsOfExperience }: { yearsOfExperience: string }) {
  const items = [
    { icon: 'gavel', label: 'Aprobados por el MTT' },
    { icon: 'history', label: `+${yearsOfExperience} años de trayectoria` },
    { icon: 'public', label: 'Cobertura nacional' },
    { icon: 'support_agent', label: 'Atención personalizada' },
  ];

  return (
    <section className="bg-surface-dark hidden md:block">
      <div className="container-max mx-auto px-12">
        <div className="grid grid-cols-4 divide-x divide-white/10">
          {items.map((item) => (
            <div key={item.icon} className="flex items-center gap-3 p-6">
              <span className="material-symbols-outlined text-accent">{item.icon}</span>
              <span className="text-white/90 text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
