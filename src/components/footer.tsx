import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto text-sm text-muted-foreground">
        <div>© 2025 Luke Johnson</div>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/luke-johnson-b4967426a/" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/LUKEJOHNSON2021" className="hover:text-foreground transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
