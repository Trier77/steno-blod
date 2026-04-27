import { useNavigate } from "react-router";
import { ChevronsLeft } from "lucide-react";

const BackButton = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Go back"
      style={{
        clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
        background:
          "linear-gradient(135deg, #1a4a4a 0%, #2a7a7a 50%, #1e6060 100%)",
        border: "none",
        outline: "none",
        position: "relative",
      }}
      className="group relative flex items-center justify-start px-5 pr-10 py-3 cursor-pointer transition-all duration-200 hover:brightness-125 active:brightness-90"
    >
      {/* Teal border overlay using clip-path */}
      <span
        aria-hidden
        style={{
          clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
          background: "linear-gradient(135deg, #2dd4bf 0%, #0f766e 100%)",
          position: "absolute",
          inset: 0,
          zIndex: 0,
          padding: "1.5px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Icon */}
      <ChevronsLeft
        size={36}
        strokeWidth={2.5}
        className="relative z-10 transition-transform duration-200 group-hover:-translate-x-1"
        style={{ color: "#2a8a8a" }}
      />
    </button>
  );
};

export default BackButton;
