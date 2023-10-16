import React from "react";
import { toast } from "react-toastify";

function SingleColor({ color, index }) {
  const { hex, weight } = color;
  const saveToClip = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`Color #${hex} copied to clipboard`);
      } catch (error) {
        toast.error("Failed to copy a color");
      }
    } else {
      toast.error(`Can't access clipboard`);
    }
  };

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClip}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}

export default SingleColor;
