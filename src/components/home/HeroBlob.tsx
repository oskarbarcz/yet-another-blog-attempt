export default function HeroBlob() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 mt-60 sm:mt-40 md:mt-28 lg:me-32 lg:mt-20 xl:me-40"
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-soft-light dark:opacity-15"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E')",
          backgroundSize: "160px 160px",
        }}
      />

      {/* Blob A */}
      <div className="absolute -top-1 right-4 h-80 w-[20rem] transform-gpu animate-[blobMorph_3.5s_ease-in-out_infinite] bg-[radial-gradient(circle_at_30%_30%,var(--color-brand-200),var(--color-brand-300)_60%,transparent_70%)] opacity-[0.085] blur-[20px] will-change-[border-radius,transform] dark:bg-[radial-gradient(circle_at_30%_30%,var(--color-brand-300),var(--color-brand-400)_60%,transparent_70%)] dark:opacity-[0.06] dark:blur-[28px]" />

      {/* Blob B */}
      <div className="absolute -top-4 right-12 h-56 w-56 transform-gpu animate-[blobMorph_3.5s_ease-in-out_infinite] bg-[radial-gradient(circle_at_70%_40%,var(--color-brand-100),var(--color-brand-200)_55%,transparent_75%)] opacity-[0.085] blur-[20px] will-change-[border-radius,transform] [animation-delay:6s] dark:bg-[radial-gradient(circle_at_70%_40%,var(--color-brand-200),var(--color-brand-300)_55%,transparent_75%)] dark:opacity-[0.06] dark:blur-[28px]" />

      {/* Blob C */}
      <div className="absolute top-3 right-1 h-48 w-48 transform-gpu animate-[blobMorph_3.5s_ease-in-out_infinite] bg-[radial-gradient(circle_at_50%_50%,var(--color-brand-300),var(--color-brand-400)_50%,transparent_80%)] opacity-[0.085] blur-[20px] will-change-[border-radius,transform] [animation-delay:12s] dark:bg-[radial-gradient(circle_at_50%_50%,var(--color-brand-400),var(--color-brand-500)_50%,transparent_80%)] dark:opacity-[0.06] dark:blur-[28px]" />
    </div>
  );
}
