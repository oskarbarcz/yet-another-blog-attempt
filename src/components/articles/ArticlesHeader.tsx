interface ArticlesHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function ArticlesHeader({
  title = "Latest publications",
  subtitle = "Deep dives into backend development, system design, and modern web architecture",
}: ArticlesHeaderProps) {
  return (
    <div className="mb-16 space-y-4">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl text-center">
        {title}
      </h1>
      <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-gray-600 dark:text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}
