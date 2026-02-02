type LoadingScreenProps = {
  message?: string;
  variant?: "page" | "section";
};

const LoadingScreen = ({
  message = "Loading data...",
  variant = "page",
}: LoadingScreenProps) => {
  if (variant === "section") {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex items-center gap-4">
        <span
          className="h-10 w-10 rounded-full border-2 border-main border-t-transparent animate-spin"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm text-white/60">Please wait</p>
          <p className="text-white font-semibold">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[70svh] flex flex-col items-center justify-center gap-6 text-white">
      <div className="relative h-20 w-20">
        <span className="absolute inset-0 rounded-full border-4 border-white/20" />
        <span
          className="absolute inset-0 rounded-full border-4 border-main border-t-transparent animate-spin"
          aria-hidden="true"
        />
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold">{message}</p>
        <p className="text-sm text-white/60">
          We are fetching the latest NASA data.
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
