import {
  siPrometheus,
  siDocker,
  siGit,
  siHtml5,
  siTrivy,
  siBurpsuite,
  siNodedotjs,
  siLinux,
  siKalilinux,
  siPostgresql,
  siPython,
  siReact,
  siGrafana,
  siTypescript,
  siWireshark,
} from "simple-icons";

export type SkillIcon = {
  title: string;
  slug: string;
  path: string;
  hex: string;
};
export const siNmap: SkillIcon = {
  title: "Nmap",
  slug: "nmap",
  path: "M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zm0 3a7 7 0 1 1 0 14 7 7 0 1 1 0-14zm0 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8z",
  hex: "2563EB",
};
export const siActiveDirectory: SkillIcon = {
  title: "Active Directory",
  slug: "activedirectory",
  path: "M12 1 2 6v12l10 5 10-5V6L12 1zm0 3.2 6.8 3.4L12 11 5.2 7.6 12 4.2zM4.5 10l6 3v6.3l-6-3V10zm15 0v6.3l-6 3V13l6-3z",
  hex: "0078D4",
};
export const siSuricata: SkillIcon = {
  title: "Suricata",
  slug: "suricata",
  path: "M12 2 3 6v6c0 5.5 3.8 8.5 9 10 5.2-1.5 9-4.5 9-10V6l-9-4zm0 3.3 6 2.7v4c0 3.7-2.2 5.8-6 7-3.8-1.2-6-3.3-6-7V8l6-2.7zm-1 3.2v4l-2.5-1.5L7 13l5 3 5-3-1.5-2-2.5 1.5v-4h-2z",
  hex: "F97316",
};
// 3×5 grid — consumed by the 3D keyboard (one icon per keycap) and, on mobile,
// by the flat list below for the static skills grid that replaces the
// hover-driven keyboard interaction. Taglines live in the i18n dictionary
// under `keyboard.taglines.<slug>`.
export const SKILLS_GRID: readonly (readonly SkillIcon[])[] = [
[siTrivy, siTypescript, siSuricata, siPrometheus, siGrafana],
  [siPython, siActiveDirectory, siBurpsuite, siWireshark, siNmap],
  [siKalilinux, siLinux, siPostgresql, siDocker, siGit],
] as const;

export const SKILLS_FLAT: readonly SkillIcon[] = SKILLS_GRID.flat();
