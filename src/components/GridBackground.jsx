export default function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 bg-[#050507]"
    >
      {/* GRID */}
      <div className="absolute inset-0 animated-grid opacity-40" />

      {/* TOP GLOW */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2
        h-[500px] w-[800px]
        rounded-full bg-purple-500/10 blur-[160px]"
      />

      {/* BOTTOM GLOW */}
      <div
        className="absolute bottom-[-200px] right-[-100px]
        h-[400px] w-[400px]
        rounded-full bg-purple-500/10 blur-[140px]"
      />
    </div>
  );
}