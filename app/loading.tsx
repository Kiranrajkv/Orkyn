export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white" aria-busy="true" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-2 border-[#0a0a0a]/15 border-t-[#0a0a0a] animate-spin" aria-hidden="true" />
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Loading</p>
      </div>
    </div>
  );
}
