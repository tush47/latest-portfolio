"use client";

import {
  IconBalloon,
  IconBike,
  IconButterfly,
  IconCar,
  IconPlane,
  IconRocket,
} from "@tabler/icons-react";

function ElephantIcon({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M10 38c0-10 8-18 20-18h8c8 0 14 6 14 14v10" />
      <path d="M38 24c4-6 10-8 16-6" />
      <path d="M52 28c2 4 2 10-2 14h-6" />
      <path d="M18 44v8M28 44v8M40 44v8M48 42v10" />
      <path d="M12 36c-4 2-6 8-4 12" />
      <circle cx="34" cy="30" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const floaters = [
  { id: "bird-1", node: <IconButterfly size={42} stroke={1.5} />, className: "floater floater-a" },
  { id: "plane", node: <IconPlane size={48} stroke={1.5} />, className: "floater floater-b" },
  { id: "bike", node: <IconBike size={52} stroke={1.5} />, className: "floater floater-c" },
  { id: "car", node: <IconCar size={46} stroke={1.5} />, className: "floater floater-d" },
  { id: "elephant", node: <ElephantIcon size={56} />, className: "floater floater-e" },
  { id: "rocket", node: <IconRocket size={40} stroke={1.5} />, className: "floater floater-f" },
  { id: "balloon", node: <IconBalloon size={44} stroke={1.5} />, className: "floater floater-g" },
  { id: "bird-2", node: <IconButterfly size={34} stroke={1.5} />, className: "floater floater-h" },
] as const;

export function AnimatedBackground() {
  return (
    <div className="page-atmosphere" aria-hidden>
      <div className="bg-grid" />
      <div className="bg-wash bg-wash-a" />
      <div className="bg-wash bg-wash-b" />

      <div className="floater-layer">
        {floaters.map(({ id, node, className }) => (
          <span key={id} className={className}>
            {node}
          </span>
        ))}
      </div>
    </div>
  );
}
