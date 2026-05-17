import React from "react";
import { createPortal } from "react-dom";

export default function VideoModal({ src, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <video src={src} controls autoPlay playsInline preload="auto" />
      </div>
    </div>,
    document.body
  );
}
