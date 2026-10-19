"use client";

import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold text-slate-900">
            ProductApp
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/products"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="relative inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
          </nav>

          {/* Actions (Cart & Mobile Menu Button) */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Menu Button */}
            <Link
              href="/cart"
              className="relative inline-flex items-center rounded-lg border border-slate-200 bg-white p-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              aria-label="Cart"
            >
              🛒
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>

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
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-slate-200 py-4 md:hidden"
          >
            <nav className="flex flex-col gap-3">
              <Link
                href="/products"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              >
                Products
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
