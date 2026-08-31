import React from "react";
import { Link } from "react-router-dom";

/**
 * Unified button component.
 * variant: "gradient" | "glass"
 * Renders a react-router <Link> for internal `to`, an <a> for `href`, else a <button>.
 */
const Button = ({ variant = "gradient", to, href, children, className = "", ...rest }) => {
  const base = variant === "gradient" ? "btn-gradient" : "btn-outline-glass";
  const classes = `${base} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
