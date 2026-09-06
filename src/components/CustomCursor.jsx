import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const ring = document.createElement("div");
    const dot = document.createElement("div");

    ring.className = "cursor-ring";
    dot.className = "cursor-dot";

    document.body.appendChild(ring);
    document.body.appendChild(dot);

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const speed = 0.2; // faster response

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // ✅ PERFECT CENTER (DOT)
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;

      // ✅ PERFECT CENTER (RING)
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      ring.remove();
      dot.remove();
    };
  }, []);

  return null;
}
