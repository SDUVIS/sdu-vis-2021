import { createContext } from "react";

import enLocale from "../statics/locale/en.json";
import zhLocale from "../statics/locale/zh.json";
import descriptionData from "../statics/data/description.json";
import projectsData from "../statics/data/projects.json";
import profilesData from "../statics/data/profiles.json";
import referenceData from "../statics/data/references.json";
import galleryData from "../statics/data/gallery.json";
import demosData from "../statics/data/demos.json";

const extractLocaleDescriptionAndProjectsData = (data, lang = "en", sublang = "zh") =>
  Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      value[lang] ? value[lang] : value[sublang],
    ])
  );

const extractLocaleProfilesData = (data, lang = "en", sublang = "zh") =>
  Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      value.map((value) => ({
        name: value[lang] ? value[lang] : value[sublang],
        site: value["site"],
        email: value["email"]
      })),
    ])
  );

const enProfiles = extractLocaleProfilesData(profilesData, "en");
const zhProfiles = extractLocaleProfilesData(profilesData, "zh");
const enProjects = extractLocaleDescriptionAndProjectsData(projectsData, "en");
const zhProjects = extractLocaleDescriptionAndProjectsData(projectsData, "zh");
const enDescription = extractLocaleDescriptionAndProjectsData(
  descriptionData,
  "en"
);
const zhDescription = extractLocaleDescriptionAndProjectsData(
  descriptionData,
  "zh"
);

const localeThemes = {
  en: {
    locale: enLocale,
    description: enDescription,
    profiles: enProfiles,
    projects: enProjects,
    references: referenceData,
    gallery: galleryData,
    demos: demosData
  },
  zh: {
    locale: zhLocale,
    description: zhDescription,
    profiles: zhProfiles,
    projects: zhProjects,
    references: referenceData,
    gallery: galleryData,
    demos: demosData
  },
};

const localeContext = createContext(localeThemes.en);

export {localeThemes, localeContext};