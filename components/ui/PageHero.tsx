interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-r from-horizon-dark to-horizon-blue text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
