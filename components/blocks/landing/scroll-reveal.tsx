"use client"

import { useEffect } from "react"

export function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible")
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    )

    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
