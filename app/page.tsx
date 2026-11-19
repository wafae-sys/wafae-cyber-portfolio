"use client";

import { useState } from "react";
import FrozenKeyboard from "@/components/FrozenKeyboard";
import SmoothScroll from "@/components/smooth-scroll";
import Reveal from "@/components/Reveal";
import SectionNav from "@/components/SectionNav";
import CopyEmail from "@/components/CopyEmail";
import SeasonPicker from "@/components/SeasonPicker";
import LanguagePicker from "@/components/LanguagePicker";
import ProjectModal, {
  type ProjectDetail,
} from "@/components/ProjectModal";
import { useLanguage } from "@/components/LanguageProvider";
import { useIsMobile } from "@/lib/useIsMobile";
import { SKILLS_FLAT } from "@/lib/skills";
import type { Lang } from "@/lib/i18n";

const EMAIL = "wafaeelfatmaoui@gmail.com";

// Localised content lives in `{ es, en }` objects inside these arrays so the
// page can be a straightforward array.map() at render time. Tech names stay
// as plain strings (they're brand names, not localised).
   type Localised = { fr: string; en: string };

type Project = ProjectDetail & {
  align: "left" | "right";
  section: "project1" | "project2" | "project3" | "project4" | "project5";
};


const projects: Project[] = [
  {
    num: "01",
    name: {
      fr: "DevSecOps — Sécurisation d'une chaîne de conteneurisation",
      en: "DevSecOps - Secure Containerization Pipeline",
    },
    stack: [
      "Docker",
      "Trivy",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
    desc: {
      fr: "Sécurisation d'une application conteneurisée avec Docker, Trivy et GitHub Actions, et supervision continue à l'aide de Prometheus et Grafana.",
      en: "Securing a containerized application using Docker, Trivy, and GitHub Actions, with continuous monitoring through Prometheus and Grafana.",
    },
    details: {
      fr: "Projet académique DevSecOps consacré à la sécurisation d'une application de réservation de salles conteneurisée. Utilisation de Docker pour la conteneurisation, de Trivy pour l'analyse des vulnérabilités et de GitHub Actions pour l'automatisation des contrôles de sécurité dans le pipeline CI/CD. Intégration de Prometheus et Grafana pour superviser les performances de l'application et les métriques de l'infrastructure.",
      en: "Academic DevSecOps project focused on securing a containerized room booking application. Docker was used for containerization, Trivy for vulnerability scanning, and GitHub Actions for CI/CD security automation. Prometheus and Grafana were integrated to monitor application performance and infrastructure metrics.",
    },
    media: [
      "/projects/devsecops/01-architecture.png",
      "/projects/devsecops/02-github-actions.png",
      "/projects/devsecops/03-trivy.png",
      "/projects/devsecops/04-grafana.png",
      "/projects/devsecops/05-cpu-ram.png",
    ],
    highlights: ["docker", "git", "trivy", "prometheus", "grafana"],
    align: "left",
    section: "project1",
  },
  {
    num: "02",
    name: {
      fr: "Supervision réseau proactive avec Zabbix",
      en: "Proactive Network Monitoring with Zabbix",
    },
    stack: [
      "Zabbix",
      "Ubuntu",
      "Windows",
      "Network Monitoring",
      "CPU & RAM Monitoring",
    ],
    desc: {
      fr: "Supervision proactive des infrastructures réseau avec Zabbix, surveillance des ressources CPU, RAM et des services sous Ubuntu et Windows.",
      en: "Proactive network infrastructure monitoring with Zabbix, tracking CPU, RAM and system services across Ubuntu and Windows environments.",
    },
    details: {
      fr: "Projet académique de supervision réseau proactive utilisant Zabbix pour surveiller des machines Ubuntu et Windows. Mise en place de la surveillance des ressources système (CPU, RAM) et des services, avec configuration d'alertes multi-seuils pour détecter rapidement les anomalies et faciliter l'administration des infrastructures.",
      en: "Academic project focused on proactive network monitoring using Zabbix across Ubuntu and Windows systems. Implemented CPU, RAM and service monitoring, along with multi-threshold alerts to identify anomalies early and support infrastructure administration.",
    },
    url: "",
    media: [
      "/projects/zabbix/zabbix1.png",
      "/projects/zabbix/zabix2.png",
      "/projects/zabbix/zabix3.png",
      "/projects/zabbix/zabix4.png",
    ],
    highlights: ["linux"],
    badge: { fr: "Terminé", en: "Completed" },
    align: "right",
    section: "project2",
  },
  {
    num: "03",
    name: {
      fr: "Infrastructure VPN sécurisée avec AAA et ACL",
      en: "Secure VPN Infrastructure with AAA & ACL",
    },
    stack: [
      "GNS3",
      "Cisco IOS",
      "Ubuntu Server",
      "FreeRADIUS",
      "AAA",
      "RADIUS",
      "ACL",
    ],
    desc: {
      fr: "Conception et mise en place d'une infrastructure VPN sécurisée avec des routeurs Cisco, une authentification AAA centralisée via FreeRADIUS et un filtrage du trafic réseau par ACL dans un environnement GNS3.",
      en: "Design and implementation of a secure VPN network infrastructure using Cisco routers, centralized AAA authentication with FreeRADIUS, and ACL-based traffic filtering in a GNS3 environment.",
    },
    details: {
      fr: "Projet académique de conception et de déploiement d'une infrastructure VPN sécurisée dans GNS3, utilisant des routeurs Cisco IOS et un serveur Ubuntu exécutant FreeRADIUS. Configuration de l'authentification AAA centralisée avec le protocole RADIUS et mise en place de listes de contrôle d'accès (ACL) pour filtrer le trafic réseau. Réalisation de tests de connectivité, d'authentification et de filtrage afin de valider la configuration et les mécanismes de sécurité.",
      en: "Academic project focused on designing and implementing a secure VPN infrastructure in GNS3 using Cisco IOS routers and an Ubuntu server running FreeRADIUS. Configured centralized AAA authentication through RADIUS and applied Access Control Lists (ACLs) to restrict network traffic. Performed connectivity, authentication, and traffic-filtering tests to validate the configuration.",
    },
    github: "",
    media: [
      "/projects/vpn/vpn1.png",
      "/projects/vpn/VPN2.png",
      "/projects/vpn/VPN3.png",
      "/projects/vpn/VPN4.png",
    ],
    highlights: ["linux"],
    badge: { fr: "Terminé", en: "Completed" },
    align: "left",
    section: "project3",
  },
  {
    num: "04",
    name: {
      fr: "Audit de vulnérabilités et remédiation — Metasploitable 2",
      en: "Vulnerability Assessment & Remediation — Metasploitable 2",
    },
    stack: [
      "Kali Linux",
      "Metasploitable 2",
      "Nmap",
      "NSE Scripts",
      "Metasploit Framework",
      "VirtualBox",
      "Vulnerability Assessment",
    ],
    desc: {
      fr: "Audit de sécurité de Metasploitable 2 dans un laboratoire isolé, avec Kali Linux, Nmap et Metasploit, afin d'identifier les vulnérabilités, de réaliser des tests d'exploitation contrôlés et d'appliquer des mesures de remédiation.",
      en: "Security assessment of Metasploitable 2 in an isolated lab using Kali Linux, Nmap, and Metasploit to identify vulnerabilities, perform controlled exploitation, and implement remediation measures.",
    },
    details: {
      fr: "Projet académique d'audit de sécurité réalisé dans un laboratoire virtuel isolé avec Kali Linux et Metasploitable 2. Identification des ports ouverts et des services exposés à l'aide de Nmap, analyse des vulnérabilités avec les scripts NSE et exploitation contrôlée de la vulnérabilité vsFTPd 2.3.4 (CVE-2011-2523) avec Metasploit Framework. Application et vérification d'une mesure de remédiation pour cette vulnérabilité critique, accompagnées d'une documentation des risques résiduels et de recommandations de sécurité.",
      en: "Academic security audit conducted in an isolated virtual lab using Kali Linux and Metasploitable 2. Identified exposed ports and services with Nmap, analyzed vulnerabilities using NSE scripts, and performed controlled exploitation of the vsFTPd 2.3.4 vulnerability (CVE-2011-2523) with Metasploit Framework. Applied and verified remediation for this critical vulnerability while documenting remaining security risks and recommendations.",
    },
    media: [
      "/projects/metasploitable/meta1.png",
      "/projects/metasploitable/META2.png",
      "/projects/metasploitable/META3.png",
      "/projects/metasploitable/META4.png",
    ],
    highlights: ["kalilinux", "nmap", "burpsuite"],
    badge: { fr: "Terminé", en: "Completed" },
    align: "right",
    section: "project4",
  },
  {
    num: "05",
    name: {
      fr: "Guardian v4 — Système de détection d'intrusions réseau",
      en: "Guardian v4 — Network Intrusion Detection System",
    },
    stack: [
      "Guardian v4",
      "Suricata",
      "Python",
      "Kali Linux",
      "Flask",
      "Scapy",
      "Honeypots",
      "iptables",
    ],
    desc: {
      fr: "Déploiement et test de Guardian v4, un système de détection d'intrusions réseau intégrant Suricata, des honeypots, des tableaux de bord de surveillance et le blocage manuel des adresses IP suspectes.",
      en: "Deployment and testing of Guardian v4, a network intrusion detection system integrating Suricata, honeypots, monitoring dashboards, and manual blocking of suspicious IP addresses.",
    },
    details: {
      fr: "Projet réalisé lors de mon stage en cybersécurité chez Al Amana Microfinance. Déploiement et configuration de Guardian v4 dans un environnement Kali Linux virtualisé. Intégration de Suricata pour la détection par signatures, d'un moteur Python pour l'analyse comportementale et de honeypots pour identifier les tentatives d'intrusion. Mise en place de tableaux de bord de surveillance et d'analyse forensique, avec blocage manuel des adresses IP suspectes via iptables. Validation du système à travers des tests de scans de ports, de connexions aux honeypots et d'intégration des alertes Suricata.",
      en: "Cybersecurity internship project carried out at Al Amana Microfinance. Deployed and configured Guardian v4 in a virtualized Kali Linux environment. Integrated Suricata for signature-based detection, a Python engine for behavioral analysis, and honeypots to identify intrusion attempts. Implemented monitoring and forensic dashboards with manual blocking of suspicious IP addresses using iptables. Validated the system through port scanning, honeypot connection tests, and Suricata alert integration.",
    },
    media: [
      "/projects/guardian/gard1.png",
      "/projects/guardian/GARD2.png",
      "/projects/guardian/GARD3.png",
      "/projects/guardian/GARD4.png",
    ],
    highlights: ["suricata", "python", "kalilinux"],
    badge: { fr: "Terminé", en: "Completed" },
    align: "left",
    section: "project5",
  },
];


const experiences: Array<{
  role: Localised;
  company: string;
  period: Localised;
  location: Localised;
  summary: Localised;
  bullets: Localised[];
  stack: string[];
}> = [
  {
   role: {
  fr: "Stagiaire en cybersécurité",
  en: "Cybersecurity Intern",
},
company: "Al Amana Microfinance",
    period: {
  fr: "Juillet – Août 2026",
  en: "July – August 2026",
},
location: {
  fr: "Rabat, Maroc",
  en: "Rabat, Morocco",
},
    summary: {
  fr: "Stage en cybersécurité consacré à la surveillance des infrastructures réseau, à la détection des activités suspectes et à l'analyse des événements de sécurité à l'aide de Suricata et de honeypots.",
  en: "Cybersecurity internship focused on network infrastructure monitoring, suspicious activity detection, and security event analysis using Suricata and honeypots.",
},
    bullets: [
  {
    fr: "Mise en place et configuration de Suricata pour la détection des activités réseau suspectes.",
    en: "Deployed and configured Suricata to detect suspicious network activity.",
  },
  {
    fr: "Utilisation de honeypots pour observer et analyser les tentatives d'intrusion.",
    en: "Used honeypots to observe and analyze intrusion attempts.",
  },
  {
    fr: "Analyse des alertes de sécurité et des événements réseau pour identifier les menaces potentielles.",
    en: "Analyzed security alerts and network events to identify potential threats.",
  },
],
    stack: ["Suricata", "Honeypots", "Network Security", "Intrusion Detection", "Security Monitoring"],
  },
];

function pick<T>(loc: { fr: T; en: T }, lang: Lang): T {
  return loc[lang];
}

// Hero name split per word so each can rise independently. Whitespace
// preserved as its own span so the line wraps naturally if needed.
function HeroWord({
  text,
  delay,
  className = "",
}: {
  text: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`hero-word ${className}`}>
      <span style={{ animationDelay: `${delay}ms` }}>{text}</span>
    </span>
  );
}

export default function Home() {
  const { t, lang } = useLanguage();
  const isMobile = useIsMobile();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <SmoothScroll>
      <div className="relative">
        {/* Desktop: persistent 3D scene fullscreen behind content. On mobile
            the canvas lives inside the hero instead (see below) so it scrolls
            away and the rest of the page is clean, fast 2D. */}
        {!isMobile && (
          <div className="fixed inset-0 z-0">
            <FrozenKeyboard />
          </div>
        )}

        {/* Header */}
        <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span
              data-cursor="hover"
              className="text-sm font-semibold tracking-tight text-ice-100 whitespace-nowrap"
            >
              Wafae El Fatmaoui
            </span>
            {/* Wrapper (not the pill itself) carries the hide: .status-pill
                hard-sets display:inline-flex, which beats Tailwind's .hidden
                due to CSS source order, so hiding must happen on a parent. */}
            <span className="hidden md:inline-flex">
              <span className="status-pill">{t("header.availability")}</span>
            </span>
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <SeasonPicker />
            <span className="hidden md:inline-flex">
            <a
              href="https://github.com/wafae-sys"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="frost-btn !py-1.5 !px-3 !text-xs"
            >
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span>GitHub</span>
            </a>
            </span>
            <LanguagePicker />
          </div>
        </header>

        <SectionNav />

        <main className="relative z-10 pointer-events-none">
          {/* Hero */}
          <section
            data-kb-section="hero"
            className="min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14"
          >
            {/* Mobile-only 3D centerpiece. Lives inside the hero (scrolls away
                with it) and takes pointer events so keycaps are tappable. */}
            {isMobile && (
              <div className="w-full h-[34vh] mt-12 -mb-4 pointer-events-auto">
                <FrozenKeyboard mobile />
              </div>
            )}
            <div className="mt-2 md:mt-20">
              <p
                className="text-[11px] uppercase tracking-[0.3em] text-ice-300 mb-5 fade-in-up"
                style={{ ["--d" as string]: "0ms" }}
              >
                {t("hero.greeting")}
              </p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold tracking-[-0.03em] text-ice-50 leading-[0.92] whitespace-nowrap">
                <HeroWord text="Wafae" delay={120} />
<br />
<HeroWord text="El Fatmaoui" delay={260} className="text-ice-400" />
              </h1>
              <p
                className="mt-8 text-base sm:text-lg md:text-xl text-ice-200 max-w-xl leading-relaxed fade-in-up"
                style={{ ["--d" as string]: "520ms" }}
              >
                {t("hero.roleLine")}
                <br />
                {t("hero.tagline")}
              </p>

              {/* CTAs */}
              <div
                className="mt-10 flex flex-wrap items-center gap-3 pointer-events-auto fade-in-up"
                style={{ ["--d" as string]: "700ms" }}
              >
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn frost-btn--primary"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
                    <path d="M14 3v5h5" />
                  </svg>
                  {t("hero.cv")}
                </a>
                <button
                  type="button"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn"
                  onClick={() =>
                    document
                      .querySelector<HTMLElement>(
                        '[data-kb-section="contact"]'
                      )
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  {t("hero.hire")}
                </button>
                {/* Mobile-only full-width break: forces the social icons onto
                    their own row below the two primary buttons. Hidden on md+
                    so desktop keeps everything on a single line. */}
                <div className="basis-full h-0 md:hidden" aria-hidden />
                <a
                  href="https://www.linkedin.com/in/wafae-elfatmaoui-23228b446/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.59c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.62V8z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/wafae-sys"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Animated scroll indicator at bottom */}
            <div
              className="mt-10 md:mt-auto flex items-center gap-3 fade-in-up"
              style={{ ["--d" as string]: "900ms" }}
            >
              <span className="scroll-indicator">
                <span>{t("hero.scroll")}</span>
                <span className="scroll-indicator__rail" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-ice-400 hidden sm:inline">
                {t("hero.keysHint")}
              </span>
            </div>
          </section>

          {/* Stack — desktop relies on the 200vh scroll + sticky title while
              the keyboard does the talking on hover. On mobile (md:) that
              choreography is gone, so we drop the tall scroll and render a
              real, legible skills grid with the same taglines. */}
          <section
            data-kb-section="stack"
            className="relative min-h-screen p-6 sm:p-10 md:p-14"
          >
            <div className="relative">
              <div className="md:sticky md:top-28 text-center">
                <Reveal>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-ice-50 leading-tight mb-6">
                    {t("stack.title")}
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-3 text-sm sm:text-base text-ice-400">
                    <span className="hidden md:inline">{t("stack.hint")}</span>
                    <span className="md:hidden">{t("stack.hintMobile")}</span>
                  </p>
                </Reveal>
              </div>

              {/* Mobile skills grid (recovers the hover interaction as static
                  content the keyboard can't surface on touch). */}
              <div className="relative z-10 w-full max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pointer-events-auto">
                  {SKILLS_FLAT.map((s) => (
                    <div
                      key={s.slug}
                      className="relative flex items-start gap-3 rounded-2xl bg-[#21172F]/95 backdrop-blur-xl border border-[#BAA7FF]/25 p-5 shadow-lg shadow-[#120D20]/30 transition-all duration-300 hover:-translate-y-1 hover:border-[#E9A6D0]/80 hover:shadow-[0_0_25px_rgba(233,166,208,0.22)]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill={`#${s.hex}`}
                        className="flex-none mt-0.5"
                        aria-hidden
                      >
                        <path d={s.path} />
                      </svg>
                      <div>
                        <p className="text-ice-50 font-medium text-sm">
                          {s.title}
                        </p>
                        <p className="text-ice-400 text-xs mt-0.5 leading-snug">
                          {t(`keyboard.taglines.${s.slug}`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </section>

          {/* Experience — title is sticky at top-24 (feels anchored) but sits
              BEHIND the cards (z-0 vs. card wrapper's z-10), so as you scroll
              the card slides over the title. The section has no extra filler
              beyond the cards, so when you scroll past the last card the
              section ends and the title un-pins and exits the viewport at the
              same time — giving the "anchored then both disappear" feel. */}
          <section
            data-kb-section="experience"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  {t("experience.title")}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  {t("experience.subtitle")}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {experiences.map((exp, idx) => (
                <Reveal
                  key={`${exp.company}-${idx}`}
                  delay={idx * 120}
                  as="article"
                  className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 md:p-10 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                        {pick(exp.role, lang)}
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">
                        {exp.company}
                        <span className="text-ice-500/80 font-normal">
                          {" · "}
                          {pick(exp.location, lang)}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-nowrap">
                      {pick(exp.period, lang)}
                    </span>
                  </header>

                  <p className="text-ice-200 leading-relaxed mb-5">
                    {pick(exp.summary, lang)}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-ice-100 leading-relaxed"
                      >
                        <span className="mt-[0.65em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                        <span>{pick(b, lang)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects.map((p) => (
            <section
              key={p.num}
              data-kb-section={p.section}
              data-kb-highlights={(p.highlights ?? []).join(",")}
              className="relative py-20 md:min-h-screen flex items-center p-6 sm:p-10 md:p-14 overflow-hidden"
            >
              <span
                aria-hidden
                className={`watermark hidden md:block top-1/2 -translate-y-1/2 ${
                  p.align === "left" ? "right-[-2vw]" : "left-[-2vw]"
                }`}
              >
                {p.num}
              </span>

              <div
                className={
                  p.align === "left"
                    ? "max-w-xl relative"
                    : // Right-aligned cards get extra right padding on md+ so
                      // the action buttons ("Ver más") don't sit under the
                      // fixed SectionNav dots on the right edge. On mobile they
                      // collapse to a normal left-aligned full-width card.
                      "max-w-xl relative md:ml-auto md:text-right md:mr-16 lg:mr-24"
                }
              >
                <Reveal>
                  <p className="font-mono text-sm text-ice-400 mb-3">
                    {p.num} · {t("projects.kicker")}
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ice-50 leading-[1.05] mb-4">
                    {pick(p.name, lang)}
                  </h2>
                </Reveal>
                {p.badge ? (
                  <Reveal delay={140}>
                    <span className="inline-block text-[10px] uppercase tracking-widest text-ice-300 border border-ice-700 rounded-full px-2 py-0.5 mb-4">
                      {pick(p.badge, lang)}
                    </span>
                  </Reveal>
                ) : null}
                <Reveal delay={180}>
                  <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-6">
                    {pick(p.desc, lang)}
                  </p>
                </Reveal>
                <Reveal delay={260}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex flex-wrap gap-1.5 md:justify-end pointer-events-auto mb-5"
                        : "flex flex-wrap gap-1.5 pointer-events-auto mb-5"
                    }
                  >
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={320}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex md:justify-end pointer-events-auto"
                        : "flex pointer-events-auto"
                    }
                  >
                    <button
                      type="button"
                      onClick={() => setActiveProject(p)}
                      data-cursor="hover"
                      data-magnetic
                      className="frost-btn"
                    >
                      {t("projects.viewMore")}
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>
          ))}

          {/* Contact — copy pinned to the left so the (large, hero-posed)
              keyboard on the right has room to bob its random keys. */}
          <section
            data-kb-section="contact"
            className="relative py-24 md:min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14 overflow-hidden"
          >
            <div className="max-w-xl relative">
              <Reveal>
                <p className="font-mono text-sm text-ice-400 mb-3">
                  {t("contact.kicker")}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-ice-50 mb-6">
                  {t("contact.title")}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-ice-200 mb-10">{t("contact.body")}</p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 pointer-events-auto">
                  <CopyEmail
                    email={EMAIL}
                    className="frost-btn frost-btn--primary"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                    {t("contact.copyEmail")}
                  </CopyEmail>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.openMail")}
                  </a>
                  <a
                    href="https://github.com/wafae-sys"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.github")}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/wafae-elfatmaoui-23228b446/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.linkedin")}
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={320}>
              <p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-ice-400">
                {t("contact.footer")}
              </p>
            </Reveal>
          </section>
        </main>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </SmoothScroll>
  );
}
