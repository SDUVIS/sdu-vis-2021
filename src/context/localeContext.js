import { createContext } from "react";

import enLocale from "../statics/locale/en.json";
import zhLocale from "../statics/locale/zh.json";
import descriptionData from "../statics/data/description.json";
import projectsData from "../statics/data/projects.json";
import profilesData from "../statics/data/profiles.json";
import referenceData from "../statics/data/references.json";
import galleryData from "../statics/data/gallery.json";
import demosData from "../statics/data/demos.json";

const sublangMap = {
  en: "zh",
  zh: "en",
};

const selectLocaleDescriptionAndProjectsData = (
  data,
  lang = "en",
  sublang
) => {
  sublang = sublang || sublangMap[lang];
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      value[lang] ? value[lang] : value[sublang],
    ])
  );
};

const selectLocaleProfilesData = (data, lang = "en", sublang) => {
  sublang = sublang || sublangMap[lang];
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      value.map((value) => ({
        name: value[lang + "Name"]
          ? value[lang + "Name"]
          : value[sublang + "Name"],
        site: value["site"],
        email: value["email"],
      })),
    ])
  );
};

const selectLocaleDemosData = (data, lang = "en", sublang) => {
  sublang = sublang || sublangMap[lang]; 
  return data.map((d) => ({
    name: d[lang + "Name"] ? d[lang + "Name"] : d[sublang + "Name"],
    figures: d.figures,
  }));
};

const enProfiles = selectLocaleProfilesData(profilesData, "en");
const zhProfiles = selectLocaleProfilesData(profilesData, "zh");
const enProjects = selectLocaleDescriptionAndProjectsData(projectsData, "en");
const zhProjects = selectLocaleDescriptionAndProjectsData(projectsData, "zh");
const enDescription = selectLocaleDescriptionAndProjectsData(
  descriptionData,
  "en"
);
const zhDescription = selectLocaleDescriptionAndProjectsData(
  descriptionData,
  "zh"
);
const enDemos = selectLocaleDemosData(demosData, "en");
const zhDemos = selectLocaleDemosData(demosData, "zh");

const localeThemes = {
  en: {
    locale: enLocale,
    description: enDescription,
    profiles: enProfiles,
    projects: enProjects,
    references: referenceData,
    gallery: galleryData,
    demos: enDemos,
  },
  zh: {
    locale: zhLocale,
    description: zhDescription,
    profiles: zhProfiles,
    projects: zhProjects,
    references: referenceData,
    gallery: galleryData,
    demos: zhDemos,
  },
};

const localeContext = createContext(localeThemes.en);

export { localeThemes, localeContext };
