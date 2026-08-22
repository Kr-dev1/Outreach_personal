import Link from "next/link";
import {
  Search,
  Globe,
  Phone,
  LayoutDashboard,
  FileSearch,
  Send,
  Building2,
  MapPin,
  Star,
  ArrowRight,
  Database,
  Code2,
  ExternalLink,
  CheckCircle2,
  CircleDot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { Navbar } from "@/components/blocks/landing/navbar";
import { ScrollReveal } from "@/components/blocks/landing/scroll-reveal";

/* ----------------------------- DATA ----------------------------- */

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Search construction, contracting, and equipment rental businesses across target markets.",
    icon: Search,
  },
  {
    num: "02",
    title: "Enrich",
    desc: "Collect publicly available business details -- websites, phone numbers, locations, and other useful information.",
    icon: Database,
  },
  {
    num: "03",
    title: "Research",
    desc: "Analyze businesses and their websites to identify potential opportunities.",
    icon: FileSearch,
  },
  {
    num: "04",
    title: "Outreach",
    desc: "Organize prospects and manage personalized outreach from a single workspace.",
    icon: Send,
  },
];

const features = [
  {
    title: "Business Discovery",
    desc: "Search and discover construction businesses across locations using Google Places data.",
    icon: Building2,
  },
  {
    title: "Website Detection",
    desc: "Automatically identify which businesses have websites and which ones don't.",
    icon: Globe,
  },
  {
    title: "Contact Discovery",
    desc: "Find publicly available phone numbers, emails, and other contact details.",
    icon: Phone,
  },
  {
    title: "Lead Management",
    desc: "Organize, filter, and manage all discovered leads in one structured dashboard.",
    icon: LayoutDashboard,
  },
  {
    title: "Website Research",
    desc: "Scrape and analyze business websites to understand services and identify gaps.",
    icon: FileSearch,
  },
  {
    title: "Outreach Management",
    desc: "Track outreach status and manage follow-ups across all prospects.",
    icon: Send,
  },
];

const leads = [
  {
    id: "1",
    name: "JNT Construction",
    location: "Houston, TX",
    category: "General Contractor",
    rating: "4.5",
    website: "jntconstruction.com",
    contact: "(713) 555-0142",
    status: "New",
    statusColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "2",
    name: "Amour Remodeling",
    location: "Dallas, TX",
    category: "Remodeling",
    rating: "4.2",
    website: "--",
    contact: "(214) 555-0398",
    status: "No Website",
    statusColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    id: "3",
    name: "Cavalry Construction",
    location: "Austin, TX",
    category: "Commercial Construction",
    rating: "4.8",
    website: "cavalryconstruction.com",
    contact: "(512) 555-0271",
    status: "Contact Found",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "4",
    name: "Alchemy Builders",
    location: "San Antonio, TX",
    category: "General Contractor",
    rating: "4.0",
    website: "alchemybuilders.co",
    contact: "--",
    status: "Researching",
    statusColor: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    id: "5",
    name: "Ironclad Equipment Rental",
    location: "Fort Worth, TX",
    category: "Equipment Rental",
    rating: "4.6",
    website: "--",
    contact: "(817) 555-0184",
    status: "No Website",
    statusColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    id: "6",
    name: "Summit Crane Services",
    location: "Houston, TX",
    category: "Crane Rental",
    rating: "4.3",
    website: "summitcrane.com",
    contact: "(713) 555-0567",
    status: "New",
    statusColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
];

const techStack = [
  { label: "Google Places API", desc: "Business discovery and location data" },
  { label: "PostgreSQL + Prisma", desc: "Structured data persistence" },
  { label: "Node.js", desc: "Backend scraping and enrichment pipeline" },
  { label: "Next.js", desc: "Frontend application and server components" },
  { label: "Automated contact discovery", desc: "Public data extraction" },
  {
    label: "AI-assisted research",
    desc: "Business analysis as a later enrichment stage",
  },
];

const useCases = [
  "General Contractors",
  "Commercial Construction",
  "Remodeling Companies",
  "Heavy Equipment Rental",
  "Crane Rental",
  "Excavation Companies",
  "Roofing Contractors",
  "Concrete & Masonry",
  "Demolition Services",
  "Site Preparation",
];

/* ----------------------------- PAGE ----------------------------- */

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Client blocks */}
      <ScrollReveal />
      <Navbar />

      {/* -------------------- HERO -------------------- */}
      <section className="overflow-hidden px-6 pt-20 pb-16 lg:px-8 lg:pt-28 lg:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="animate-on-scroll">
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-zinc-900 sm:text-5xl">
              Find businesses.
              <br />
              Find opportunities.
              <br />
              <span className="text-zinc-400">Start conversations.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-500">
              Discover construction and equipment rental businesses, identify
              their public contact information, and turn them into qualified
              outreach opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
              >
                <Button size="lg" className="gap-2">
                  Explore Leads
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="outline" size="lg">
                  See How It Works
                </Button>
              </a>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="animate-on-scroll stagger-2">
            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                </div>
                <div className="ml-3 flex-1">
                  <div className="w-full max-w-55 rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-400">
                    leadforge.app/dashboard
                  </div>
                </div>
              </div>
              {/* Dashboard content */}
              <div className="p-5">
                {/* Stat cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-zinc-50 p-3.5">
                    <p className="text-2xl font-semibold text-zinc-900">
                      1,762
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-500">Total Leads</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-3.5">
                    <p className="text-2xl font-semibold text-zinc-900">105</p>
                    <p className="mt-0.5 text-xs text-zinc-500">No Website</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-3.5">
                    <p className="text-2xl font-semibold text-zinc-900">847</p>
                    <p className="mt-0.5 text-xs text-zinc-500">Contactable</p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-3.5">
                    <p className="text-2xl font-semibold text-zinc-900">25+</p>
                    <p className="mt-0.5 text-xs text-zinc-500">Locations</p>
                  </div>
                </div>
                {/* Recent discoveries */}
                <div className="mt-5">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-400">
                    Recent Discoveries
                  </p>
                  <div className="space-y-0">
                    {[
                      {
                        name: "JNT Construction",
                        loc: "Houston, TX",
                        badge: "New",
                      },
                      {
                        name: "Amour Remodeling",
                        loc: "Dallas, TX",
                        badge: "No Website",
                      },
                      {
                        name: "Cavalry Construction",
                        loc: "Austin, TX",
                        badge: "Contact Found",
                      },
                      {
                        name: "Alchemy Builders",
                        loc: "San Antonio, TX",
                        badge: "Researching",
                      },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between border-b border-zinc-100 py-2.5 last:border-0"
                      >
                        <div>
                          <p className="text-sm font-medium text-zinc-700">
                            {item.name}
                          </p>
                          <p className="text-xs text-zinc-400">{item.loc}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-[10px] font-normal"
                        >
                          {item.badge}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- STATS -------------------- */}
      <section className="border-y border-zinc-100 bg-zinc-50/60 px-6 py-14 lg:px-8">
        <div className="animate-on-scroll mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {[
            { value: "1,762", label: "Businesses discovered" },
            { value: "105", label: "Without websites" },
            { value: "25+", label: "Locations covered" },
            { value: "12", label: "Business categories" },
          ].map((s, i) => (
            <div key={s.label} className={`stagger-${i + 1}`}>
              <p className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-zinc-400">
          Example data from a demo research pipeline
        </p>
      </section>

      {/* -------------------- HOW IT WORKS -------------------- */}
      <section id="how-it-works" className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="animate-on-scroll mb-14 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-zinc-400">
              Process
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              How it works
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`animate-on-scroll stagger-${i + 1}`}
              >
                <Card className="h-full border-zinc-200 bg-white transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100">
                        <step.icon className="size-4 text-zinc-600" />
                      </div>
                      <span className="text-sm font-medium text-zinc-300">
                        {step.num}
                      </span>
                    </div>
                    <CardTitle className="text-base font-semibold text-zinc-900">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-zinc-500">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- FEATURES -------------------- */}
      <section
        id="features"
        className="border-t border-zinc-100 bg-zinc-50/60 px-6 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="animate-on-scroll mb-14 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-zinc-400">
              Capabilities
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Everything you need to prospect smarter
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`animate-on-scroll stagger-${i + 1}`}
              >
                <Card className="h-full border-zinc-200 bg-white transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100">
                      <f.icon className="size-5 text-zinc-600" />
                    </div>
                    <CardTitle className="text-base font-semibold text-zinc-900">
                      {f.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed text-zinc-500">
                      {f.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- PRODUCT SHOWCASE -------------------- */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="animate-on-scroll mb-14 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-zinc-400">
              Product
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Your leads, organized
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-500">
              Every discovered business in one structured view -- filter,
              research, and manage outreach without switching tools.
            </p>
          </div>

          {/* Table in a browser-like card */}
          <div className="animate-on-scroll overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-4 py-2.5">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              </div>
              <div className="ml-3">
                <div className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-400">
                  leadforge.app/dashboard/leads
                </div>
              </div>
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b border-zinc-100">
                    <th className="h-10 px-4 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Business
                    </th>
                    <th className="h-10 px-4 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Location
                    </th>
                    <th className="hidden h-10 px-4 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 md:table-cell">
                      Category
                    </th>
                    <th className="hidden h-10 px-4 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 lg:table-cell">
                      Rating
                    </th>
                    <th className="hidden h-10 px-4 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 sm:table-cell">
                      Website
                    </th>
                    <th className="hidden h-10 px-4 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 lg:table-cell">
                      Contact
                    </th>
                    <th className="h-10 px-4 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-zinc-50 transition-colors last:border-0 hover:bg-zinc-50/50"
                    >
                      <td className="px-4 py-3 font-medium text-zinc-900">
                        {lead.name}
                      </td>
                      <td className="px-4 py-3 text-zinc-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="size-3 text-zinc-400" />
                          {lead.location}
                        </span>
                      </td>
                      <td className="hidden px-4 py-3 text-zinc-500 md:table-cell">
                        {lead.category}
                      </td>
                      <td className="hidden px-4 py-3 lg:table-cell">
                        <span className="flex items-center gap-1 text-zinc-500">
                          <Star className="size-3 fill-amber-400 text-amber-400" />
                          {lead.rating}
                        </span>
                      </td>
                      <td className="hidden px-4 py-3 sm:table-cell">
                        {lead.website === "--" ? (
                          <span className="text-zinc-300">--</span>
                        ) : (
                          <span className="flex items-center gap-1 text-zinc-500">
                            <ExternalLink className="size-3" />
                            {lead.website}
                          </span>
                        )}
                      </td>
                      <td className="hidden px-4 py-3 text-zinc-500 lg:table-cell">
                        {lead.contact}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${lead.statusColor}`}
                        >
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- USE CASES -------------------- */}
      <section className="border-t border-zinc-100 bg-zinc-50/60 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="animate-on-scroll mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Built for targeted outbound prospecting
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-500">
              Discover and research businesses across the construction and heavy
              equipment industry.
            </p>
          </div>

          <div className="animate-on-scroll flex flex-wrap justify-center gap-2.5">
            {useCases.map((uc) => (
              <Badge
                key={uc}
                variant="outline"
                className="rounded-full border-zinc-200 bg-white px-4 py-1.5 text-sm font-normal text-zinc-600"
              >
                {uc}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- DEVELOPER / ABOUT -------------------- */}
      <section id="about" className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="animate-on-scroll mx-auto max-w-2xl">
            <div className="mb-10 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-500">
                <Code2 className="size-3" />
                Engineering
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                Built as an automated lead research pipeline
              </h2>
              <p className="mt-4 text-zinc-500">
                An independent developer project combining public APIs,
                automated enrichment, and a structured frontend.
              </p>
            </div>

            <div className="space-y-0">
              {techStack.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 border-b border-zinc-100 py-4 last:border-0"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-zinc-400" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900">
                      {item.label}
                    </p>
                    <p className="text-sm text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- FINAL CTA -------------------- */}
      <section className="border-t border-zinc-100 bg-zinc-50/60 px-6 py-20 lg:px-8 lg:py-28">
        <div className="animate-on-scroll mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Turn local businesses into real opportunities.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-500">
            Discover businesses, research prospects, and manage your outreach
            from one place.
          </p>
          <div className="mt-8">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                Explore the Platform
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------- FOOTER -------------------- */}
      <footer className="border-t border-zinc-200 bg-white px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Brand */}
            <div>
              <p className="text-base font-semibold text-zinc-900">
                LeadForge
              </p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-500">
                Discover construction businesses, enrich their public
                information, and manage outreach from one workspace.
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                Links
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <Link
                  href="/dashboard"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  Dashboard
                </Link>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  GitHub
                </a>
                <a
                  href="mailto:hello@leadforge.app"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Status */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                Project
              </p>
              <div className="mt-3 flex items-center gap-2">
                <CircleDot className="size-3 text-emerald-500" />
                <span className="text-sm text-zinc-500">
                  Independent developer project
                </span>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <p className="text-center text-xs text-zinc-400">
            &copy; 2025 LeadForge. Built as a portfolio project.
          </p>
        </div>
      </footer>
    </div>
  );
}
