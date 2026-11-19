// Minimal i18n layer: a single dictionary keyed by dot-path, with each leaf
// carrying both the ES and EN copy. Consumers read via `useLanguage().t()`
// which resolves the path for the active language. Keeping it flat and
// co-located (rather than adding a dependency like next-intl) keeps the
// project tiny and makes the strings easy to audit.
export type Lang = "fr" | "en";

export const LANGUAGES: Lang[] = ["fr", "en"];
export const DEFAULT_LANG: Lang = "fr";

type Leaf = Record<Lang, string>;
type Node = Leaf | { [key: string]: Node };

function isLeaf(node: Node): node is Leaf {
  return typeof (node as Leaf).fr === "string";
}

export const DICT = {
  picker: {
  season: { fr: "Saison", en: "Season" },
  language: { fr: "Langue", en: "Language" },
},
  seasons: {
  spring: { fr: "Printemps", en: "Spring" },
  summer: { fr: "Ã‰tÃ©", en: "Summer" },
  autumn: { fr: "Automne", en: "Autumn" },
  winter: { fr: "Hiver", en: "Winter" },
},
nav: {
  aria: { fr: "Sections", en: "Sections" },
  home: { fr: "Accueil", en: "Home" },
  stack: { fr: "CompÃ©tences", en: "Stack" },
  experience: { fr: "ExpÃ©rience", en: "Experience" },
  project: { fr: "Projet", en: "Project" },
  contact: { fr: "Contact", en: "Contact" },
},
  header: {
    availability: {
      fr: "Ouverte aux opportunitÃ©s",
      en: "Open to opportunities",
    },
  },
  hero: {
    greeting: { fr: "Bonjour, je suis", en: "Hello, I'm" },
    roleLine: {
  fr: "Ã‰lÃ¨ve ingÃ©nieure en cybersÃ©curitÃ© et infrastructures rÃ©seaux",
  en: "Cybersecurity & Network Infrastructure Engineering Student",
},
tagline: {
  fr: "PassionnÃ©e par la cybersÃ©curitÃ©, la sÃ©curitÃ© des rÃ©seaux et le DevSecOps. Ã€ la recherche d'un stage de fin d'Ã©tudes (PFE) en 2027.",
  en: "Passionate about cybersecurity, network security, and DevSecOps. Seeking a final-year internship (PFE) in 2027.",
},
    cv: { fr: "TÃ©lÃ©charger mon CV", en: "Download CV" },
    hire: { fr: "Me contacter", en: "Contact me" },

scroll: {
  fr: "DÃ©filer pour dÃ©couvrir",
  en: "Scroll to explore"
},

keysHint: {
  fr: "Â· EXPLOREZ MON UNIVERS CYBER",
  en: "Â· EXPLORE MY CYBER WORLD",
},
  },
  stack: {
  title: {
    fr: "CompÃ©tences techniques",
    en: "Tech Stack"
  },
  hint: {
    fr: "(astuce : survolez une touche)",
    en: "(hint: hover over a key)"
  },
  hintMobile: {
    fr: "Les technologies que j'utilise pour mes projets.",
    en: "The tools I build with."
  },
},
 experience: {
  title: { fr: "ExpÃ©rience", en: "Experience" },
  subtitle: {
    fr: "Mon parcours professionnel.",
    en: "My professional journey.",
  },
},
projects: {
  kicker: { fr: "projet", en: "project" },
  viewMore: { fr: "Voir plus", en: "View more" },
  openSite: { fr: "Visiter le site", en: "Visit site" },
  viewCode: { fr: "Voir le code", en: "View code" },
  close: { fr: "Fermer", en: "Close" },
  stackLabel: { fr: "Technologies", en: "Stack" },
  overview: { fr: "PrÃ©sentation", en: "Overview" },
},
contact: {
  kicker: { fr: "contact", en: "contact" },
  title: { fr: "Discutons ensemble !", en: "Let's talk?" },
  body: {
    fr: "Vous avez un projet, une opportunitÃ© ou une question ? N'hÃ©sitez pas Ã  me contacter.",
    en: "If what you've seen interests you, the keyboard is ready for the first message.",
  },
  copyEmail: { fr: "Copier l'adresse e-mail", en: "Copy email" },
  openMail: { fr: "Envoyer un e-mail", en: "Open mailto" },
  github: { fr: "GitHub", en: "GitHub" },
  linkedin: { fr: "LinkedIn", en: "LinkedIn" },
  emailToast: { fr: "Adresse e-mail copiÃ©e", en: "Email copied" },
  footer: {
    fr: "Â© 2026 EL FATMAOUI Wafae. Tous droits rÃ©servÃ©s.",
    en: "Â© 2026 EL FATMAOUI Wafae. All rights reserved.",
  },

  },
  keyboard: {
    taglines: {
      javascript: {
        fr: "DÃ©veloppement web interactif et dynamique.",
        en: "Where it all started. Still here, still in charge.",
      },
      typescript: {
        fr: "DÃ©veloppement d'applications typÃ©es, fiables et maintenables.",
        en: "Type-safe application development, reliable code & maintainable software.",
      },
      html5: {
        fr: "Structure et organisation des pages web.",
        en: "The bones of any page.",
      },
      css: {
        fr: "Mise en forme et crÃ©ation d'interfaces web.",
        en: "What separates good from beautiful.",
      },
      tailwindcss: {
        fr: "CrÃ©ation rapide d'interfaces avec des classes utilitaires.",
        en: "Utility-first. Design inside the HTML.",
      },
      python: {
        fr: "Automatisation de la sÃ©curitÃ© et dÃ©veloppement d'outils de cybersÃ©curitÃ©.",
        en: "Security automation, scripting & cybersecurity tools development.",
      },
      react: {
        fr: "CrÃ©ation d'interfaces modernes Ã  base de composants.",
        en: "Components, components, components.",
      },
      nextdotjs: {
        fr: "DÃ©veloppement d'applications React avec routage et rendu cÃ´tÃ© serveur.",
        en: "React all grown up: routing, SSR, edge.",
      },
      vuedotjs: {
        fr: "DÃ©veloppement d'interfaces web rÃ©actives.",
        en: "The most relaxed frontend.",
      },
      nodedotjs: {
        fr: "DÃ©veloppement JavaScript cÃ´tÃ© serveur.",
        en: "JavaScript on the server.",
      },
      php: {
        fr: "DÃ©veloppement d'applications web cÃ´tÃ© serveur.",
        en: "Runs more of the web than you think.",
      },
      odoo: {
        fr: "Gestion et personnalisation de solutions ERP.",
        en: "ERP that doesn't make you cry.",
      },
      postgresql: {
        fr: "Gestion de bases de donnÃ©es et stockage sÃ©curisÃ©.",
        en: "Database management, secure data storage & SQL.",
      },
      docker: {
        fr: "Conteneurisation, sÃ©curisation des images et dÃ©ploiement.",
        en: "Containerization, secure images & deployment.",
      },
      grafana: {
        fr: "Supervision des infrastructures et visualisation des performances.",
        en: "Infrastructure monitoring, data visualization & container performance analysis.",
      },
      prometheus: {
        fr: "Collecte des mÃ©triques et analyse des performances.",
        en: "Metrics collection, infrastructure monitoring & performance analysis.",
      },
      linux: {
        fr: "Administration et sÃ©curisation des systÃ¨mes Linux.",
        en: "Linux system administration, security & networking.",
      },
      kalilinux: {
        fr: "Tests d'intrusion, analyse des vulnÃ©rabilitÃ©s et audits de sÃ©curitÃ©.",
        en: "Penetration testing, vulnerability assessment & security auditing.",
      },
      wireshark: {
        fr: "Analyse du trafic rÃ©seau et inspection des paquets.",
        en: "Network traffic analysis, packet inspection & security troubleshooting.",
      },
      nmap: {
        fr: "DÃ©couverte rÃ©seau, analyse des ports et Ã©valuation de la sÃ©curitÃ©.",
        en: "Network discovery, port scanning & security assessment.",
      },
      burpsuite: {
        fr: "Tests de sÃ©curitÃ© web et analyse des requÃªtes HTTP.",
        en: "Web application security testing, vulnerability analysis & HTTP interception.",
      },
      activedirectory: {
        fr: "Gestion des identitÃ©s, des accÃ¨s et audit des privilÃ¨ges.",
        en: "Identity & Access Management, user administration, group policies & privilege auditing.",
      },
      suricata: {
        fr: "DÃ©tection d'intrusions rÃ©seau et analyse des menaces.",
        en: "Network intrusion detection, traffic monitoring & threat analysis.",
      },
      trivy: {
        fr: "Analyse des vulnÃ©rabilitÃ©s des conteneurs et sÃ©curitÃ© DevSecOps.",
        en: "Container vulnerability scanning, image security & DevSecOps.",
      },
      git: {
        fr: "Gestion des versions, collaboration et intÃ©gration continue sÃ©curisÃ©e.",
        en: "Version control, collaboration & secure CI/CD workflows.",
      },
    },
  },
} as const satisfies Record<string, Node>;

export function translate(path: string, lang: Lang): string {
  const parts = path.split(".");
  let ref: Node = DICT as unknown as Node;

  for (const p of parts) {
    if (isLeaf(ref)) return path;

    ref = (ref as { [key: string]: Node })[p];

    if (ref === undefined) return path;
  }

  if (isLeaf(ref)) {
    return ref[lang] ?? ref.fr ?? path;
  }

  return path;
}
