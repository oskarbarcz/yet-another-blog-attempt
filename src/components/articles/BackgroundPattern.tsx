export default function BackgroundPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 size-full opacity-30">
      <div className="relative h-full w-full select-none">
        <img
          className="absolute right-0 min-w-dvh dark:hidden"
          alt="Pattern Light"
          src="/pattern-light.svg"
        />
        <img
          className="absolute right-0 hidden min-w-dvh dark:block"
          alt="Pattern Dark"
          src="/pattern-dark.svg"
        />
      </div>
    </div>
  );
}
