export default function HeroBlob() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 mt-60 sm:mt-40 md:mt-28 lg:me-32 lg:mt-20 xl:me-40"
    >
      {/* Blob A */}
      <div className="absolute -top-1 right-4 h-80 w-[20rem] transform-gpu animate-[blobMorph_3.5s_ease-in-out_infinite] bg-[radial-gradient(circle_at_30%_30%,var(--color-brand-300),var(--color-brand-400)_60%,transparent_70%)] opacity-[0.065] blur-[20px] will-change-[border-radius,transform] dark:opacity-[0.06] dark:blur-[28px]" />

      {/* Blob B */}
      <div className="absolute -top-4 right-12 h-56 w-56 transform-gpu animate-[blobMorph_3.5s_ease-in-out_infinite] bg-[radial-gradient(circle_at_70%_40%,var(--color-brand-200),var(--color-brand-300)_55%,transparent_75%)] opacity-[0.065] blur-[20px] will-change-[border-radius,transform] [animation-delay:6s] dark:opacity-[0.06] dark:blur-[28px]" />

      {/* Blob C */}
      <div className="absolute top-3 right-1 h-48 w-48 transform-gpu animate-[blobMorph_3.5s_ease-in-out_infinite] bg-[radial-gradient(circle_at_50%_50%,var(--color-brand-400),var(--color-brand-500)_50%,transparent_80%)] opacity-[0.065] blur-[20px] will-change-[border-radius,transform] [animation-delay:12s] dark:opacity-[0.06] dark:blur-[28px]" />
    </div>
  );
}
