"use client";

export function AnimatedBackground() {
  return (
    <div className="page-atmosphere" aria-hidden>
      <div className="bg-grid" />
      <div className="bg-wash bg-wash-a" />
      <div className="bg-wash bg-wash-b" />
      <div className="bg-wash bg-wash-c" />
      <div className="bg-beam" />
    </div>
  );
}
