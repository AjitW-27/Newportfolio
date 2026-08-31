import React from "react";
import FloatingBlobs from "../components/ui/FloatingBlobs";
import Button from "../components/ui/Button";

const NotFoundPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 overflow-hidden">
      <FloatingBlobs variant="hero" />
      <div className="relative z-10 text-center animate-fade-up">
        <h1 className="text-7xl sm:text-9xl font-extrabold text-gradient font-display">404</h1>
        <p className="mt-4 text-lg text-[var(--text-secondary)]">
          This page took a wrong turn somewhere.
        </p>
        <Button to="/" variant="gradient" className="mt-8">
          Back to Home
        </Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
