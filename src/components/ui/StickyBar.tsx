type StickyBarProps = {
  label: string;
  onClick: () => void;
};

export default function StickyBar({ label, onClick }: StickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#0b1531]/95 backdrop-blur md:hidden">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-center px-4 pb-[env(safe-area-inset-bottom)]">
        <button
          type="button"
          onClick={onClick}
          className="w-full max-w-md rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition-transform hover:scale-[1.01]"
        >
          {label}
        </button>
      </div>
    </div>
  );
}
