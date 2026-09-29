"use client";

import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold text-slate-900">
            ProductApp
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/products"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Products
            </Link>

            <button
              type="button"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Search
            </button>

            <Link
              href="/cart"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Cart
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            type="button"
            variant="secondary"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="h-10 w-10 px-0 md:hidden"
          >
            {isMenuOpen ? "✕" : "☰"}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-slate-200 py-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              <Link
                href="/products"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              >
                Products
              </Link>

              <button
                type="button"
                className="rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              >
                Search
              </button>

              <Link
                href="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              >
                Cart
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
