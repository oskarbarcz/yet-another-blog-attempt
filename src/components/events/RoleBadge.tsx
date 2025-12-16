interface RoleBadgeProps {
  role: "guest" | "speaker" | "panelist";
}

export default function RoleBadge({ role }: RoleBadgeProps) {
  const map: Record<RoleBadgeProps["role"], { label: string; classes: string }> = {
    guest: { label: "Guest", classes: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300" },
    speaker: { label: "Speaker", classes: "bg-brand-50 text-brand-700 dark:bg-brand-400/10 dark:text-brand-400" },
    panelist: { label: "Panelist", classes: "bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-400" },
  };
  const cfg = map[role];
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${cfg.classes}`}>
      {cfg.label}
    </span>
  );
}
