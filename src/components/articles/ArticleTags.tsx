interface ArticleTagsProps {
  tags?: string[];
  limit?: number;
}

export default function ArticleTags({ tags = [], limit = 3 }: ArticleTagsProps) {
  if (!tags.length) return null;
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {tags.slice(0, limit).map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center rounded-md bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-400/10 dark:text-brand-400"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
