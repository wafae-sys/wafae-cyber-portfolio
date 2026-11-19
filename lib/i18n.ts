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
  summer: { fr: "Été", en: "Summer" },
  autumn: { fr: "Automne", en: "Autumn" },
  winter: { fr: "Hiver", en: "Winter" },
},
nav: {
  aria: { fr: "Sections", en: "Sections" },
  home: { fr: "Accueil", en: "Home" },
  stack: { fr: "Compétences", en: "Stack" },
  experience: { fr: "Expérience", en: "Experience" },
  project: { fr: "Projet", en: "Project" },
  contact: { fr: "Contact", en: "Contact" },
},
  header: {
    availability: {
      fr: "Ouverte aux opportunités",
      en: "Open to opportunities",
    },
  },
  hero: {
    greeting: { fr: "Bonjour, je suis", en: "Hello, I'm" },
    roleLine: {
  fr: "Élève ingénieure en cybersécurité et infrastructures réseaux",
  en: "Cybersecurity & Network Infrastructure Engineering Student",
},
tagline: {
  fr: "Passionnée par la cybersécurité, la sécurité des réseaux et le DevSecOps. À la recherche d'un stage de fin d'études (PFE) en 2027.",
  en: "Passionate about cybersecurity, network security, and DevSecOps. Seeking a final-year internship (PFE) in 2027.",
},
    cv: { fr: "Télécharger mon CV", en: "Download CV" },
    hire: { fr: "Me contacter", en: "Contact me" },

scroll: {
  fr: "Défiler pour découvrir",
  en: "Scroll to explore"
},

keysHint: {
  fr: "· EXPLOREZ MON UNIVERS CYBER",
  en: "· EXPLORE MY CYBER WORLD",
},
  },
  stack: {
  title: {
    fr: "Compétences techniques",
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
  title: { fr: "Expérience", en: "Experience" },
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
  overview: { fr: "Présentation", en: "Overview" },
},
contact: {
  kicker: { fr: "contact", en: "contact" },
  title: { fr: "Discutons ensemble !", en: "Let's talk?" },
  body: {
    fr: "Vous avez un projet, une opportunité ou une question ? N'hésitez pas à me contacter.",
    en: "If what you've seen interests you, the keyboard is ready for the first message.",
  },
  copyEmail: { fr: "Copier l'adresse e-mail", en: "Copy email" },
  openMail: { fr: "Envoyer un e-mail", en: "Open mailto" },
  github: { fr: "GitHub", en: "GitHub" },
  linkedin: { fr: "LinkedIn", en: "LinkedIn" },
  emailToast: { fr: "Adresse e-mail copiée", en: "Email copied" },
  footer: {
    fr: "© 2026 EL FATMAOUI Wafae. Tous droits réservés.",
    en: "© 2026 EL FATMAOUI Wafae. All rights reserved.",
  },

  },
  keyboard: {
    taglines: {
      javascript: {
        fr: "Développement web interactif et dynamique.",
        en: "Where it all started. Still here, still in charge.",
      },
      typescript: {
        fr: "Développement d'applications typées, fiables et maintenables.",
        en: "Type-safe application development, reliable code & maintainable software.",
      },
      html5: {
        fr: "Structure et organisation des pages web.",
        en: "The bones of any page.",
      },
      css: {
        fr: "Mise en forme et création d'interfaces web.",
        en: "What separates good from beautiful.",
      },
      tailwindcss: {
        fr: "Création rapide d'interfaces avec des classes utilitaires.",
        en: "Utility-first. Design inside the HTML.",
      },
      python: {
        fr: "Automatisation de la sécurité et développement d'outils de cybersécurité.",
        en: "Security automation, scripting & cybersecurity tools development.",
      },
      react: {
        fr: "Création d'interfaces modernes à base de composants.",
        en: "Components, components, components.",
      },
      nextdotjs: {
        fr: "Développement d'applications React avec routage et rendu côté serveur.",
        en: "React all grown up: routing, SSR, edge.",
      },
      vuedotjs: {
        fr: "Développement d'interfaces web réactives.",
        en: "The most relaxed frontend.",
      },
      nodedotjs: {
        fr: "Développement JavaScript côté serveur.",
        en: "JavaScript on the server.",
      },
      php: {
        fr: "Développement d'applications web côté serveur.",
        en: "Runs more of the web than you think.",
      },
      odoo: {
        fr: "Gestion et personnalisation de solutions ERP.",
        en: "ERP that doesn't make you cry.",
      },
      postgresql: {
        fr: "Gestion de bases de données et stockage sécurisé.",
        en: "Database management, secure data storage & SQL.",
      },
      docker: {
        fr: "Conteneurisation, sécurisation des images et déploiement.",
        en: "Containerization, secure images & deployment.",
      },
      grafana: {
        fr: "Supervision des infrastructures et visualisation des performances.",
        en: "Infrastructure monitoring, data visualization & container performance analysis.",
      },
      prometheus: {
        fr: "Collecte des métriques et analyse des performances.",
        en: "Metrics collection, infrastructure monitoring & performance analysis.",
      },
      linux: {
        fr: "Administration et sécurisation des systèmes Linux.",
        en: "Linux system administration, security & networking.",
      },
      kalilinux: {
        fr: "Tests d'intrusion, analyse des vulnérabilités et audits de sécurité.",
        en: "Penetration testing, vulnerability assessment & security auditing.",
      },
      wireshark: {
        fr: "Analyse du trafic réseau et inspection des paquets.",
        en: "Network traffic analysis, packet inspection & security troubleshooting.",
      },
      nmap: {
        fr: "Découverte réseau, analyse des ports et évaluation de la sécurité.",
        en: "Network discovery, port scanning & security assessment.",
      },
      burpsuite: {
        fr: "Tests de sécurité web et analyse des requêtes HTTP.",
        en: "Web application security testing, vulnerability analysis & HTTP interception.",
      },
      activedirectory: {
        fr: "Gestion des identités, des accès et audit des privilèges.",
        en: "Identity & Access Management, user administration, group policies & privilege auditing.",
      },
      suricata: {
        fr: "Détection d'intrusions réseau et analyse des menaces.",
        en: "Network intrusion detection, traffic monitoring & threat analysis.",
      },
      trivy: {
        fr: "Analyse des vulnérabilités des conteneurs et sécurité DevSecOps.",
        en: "Container vulnerability scanning, image security & DevSecOps.",
      },
      git: {
        fr: "Gestion des versions, collaboration et intégration continue sécurisée.",
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
