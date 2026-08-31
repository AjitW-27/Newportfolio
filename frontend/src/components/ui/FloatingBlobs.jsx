import React from "react";

/**
 * Ambient floating gradient blobs used behind hero/section content.
 * variant controls which color combo + density is used so different
 * sections don't feel visually identical.
 */
const VARIANTS = {
  hero: [
    { className: "blob-aqua w-[460px] h-[460px] -top-28 -left-28", delay: "0s" },
    { className: "blob-sky w-[400px] h-[400px] top-1/3 -right-24", delay: "-6s" },
    { className: "blob-teal w-[340px] h-[340px] bottom-0 left-1/3", delay: "-11s" },
  ],
  section: [
    { className: "blob-aqua w-[340px] h-[340px] -top-12 -right-12", delay: "-3s" },
    { className: "blob-mint w-[300px] h-[300px] bottom-0 -left-12", delay: "-9s" },
  ],
};

const FloatingBlobs = ({ variant = "section" }) => {
  const blobs = VARIANTS[variant] || VARIANTS.section;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {blobs.map((b, i) => (
        <span key={i} className={`blob ${b.className}`} style={{ animationDelay: b.delay }} />
      ))}
    </div>
  );
};

export default FloatingBlobs;
