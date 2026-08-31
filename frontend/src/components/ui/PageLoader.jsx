import React from "react";

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="relative w-14 h-14">
      <span className="absolute inset-0 rounded-full border-2 border-[var(--glass-border)]" />
      <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-[var(--accent-2)] border-r-[var(--accent-1)] animate-spin" />
    </div>
  </div>
);

export default PageLoader;
