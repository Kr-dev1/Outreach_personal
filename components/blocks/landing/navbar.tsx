"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { authClient } from "@/lib/auth/auth-client"

export function Navbar() {
  const session = authClient.useSession().data?.user
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900"
        >
          LeadForge
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#how-it-works"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            How It Works
          </a>
          <a
            href="#features"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            About
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/dashboard"
            className={buttonVariants({
              variant: "default",
              size: "default",
            })}
          >
            {session ?
              "Open Dashboard" : "Login"
            }
          </Link>
        </div>

        {/* Mobile hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onPress={() => setMobileMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <a
              href="#how-it-works"
              className="text-sm text-zinc-600 hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-sm text-zinc-600 hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#about"
              className="text-sm text-zinc-600 hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <Separator />
            <Link
              href="/dashboard"
              className={buttonVariants({
                variant: "default",
                size: "default",
                className: "w-full",
              })}
            >
              {session ?
                "Open Dashboard" : "Login"
              }
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
