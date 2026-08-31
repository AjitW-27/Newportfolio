import React from "react";
import useReveal from "../../hooks/useReveal";

/**
 * Wraps children in a fade-up-on-scroll animation.
 * delay: 0-5, maps to staggered CSS transition-delay classes.
 */
const Reveal = ({ children, delay = 0, className = "", as: Tag = "div", ...rest }) => {
  const { ref, visible } = useReveal();
  const delayClass = delay > 0 ? `reveal-delay-${Math.min(delay, 5)}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${visible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
