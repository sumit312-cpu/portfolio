import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[1] w-[350px] h-[350px] rounded-full"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}
