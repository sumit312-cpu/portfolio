import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.top = "0";
    glow.style.left = "0";
    glow.style.width = "400px";
    glow.style.height = "400px";
    glow.style.borderRadius = "50%";
    glow.style.pointerEvents = "none";
    glow.style.zIndex = "1";
    glow.style.background =
      "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)";
    glow.style.transform = "translate(-50%, -50%)";

    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(glow);
    };
  }, []);

  return null;
}

