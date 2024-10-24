import { ReactComponent as Neon } from "../../images/neon.svg";
import { useEffect } from "react";
import "./cursor.css";
export const CustomCursor = () => {
  useEffect(() => {
    const neon = document.querySelector(".neon");
    if (neon) {
      const handleMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        neon.style.transform = `translate(${mouseX - 215}px, ${
          mouseY - 25
        }px) `;
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <div class="neon">
      <Neon />
    </div>
  );
};
