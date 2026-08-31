import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures every route change starts scrolled to the top of the page,
 * instead of preserving the previous page's scroll position.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
