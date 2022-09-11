export { setLocalStorage, getLocalStorage };
import { changeTheme, theme } from "./changeTheme.js";
import { langEn, langRu, language, getTranslate } from "./translate.js";

const setLocalStorage = () => {
  localStorage.setItem("lang", language);
  localStorage.setItem("theme", theme);
};

window.addEventListener("beforeunload", setLocalStorage);

const getLocalStorage = () => {
  if (localStorage.getItem("lang")) {
    const lang = localStorage.getItem("lang");
    if (lang == "en") {
      getTranslate("en");
      langRu.classList.remove("language-item--active");
      langEn.classList.add("language-item--active");
    }
    if (lang == "ru") {
      getTranslate("ru");
      langRu.classList.add("language-item--active");
      langEn.classList.remove("language-item--active");
    }
  }

  if (localStorage.getItem("theme")) {
    const theme = localStorage.getItem("theme");
    if (theme == "dark") {
      changeTheme;
    } else if (theme == "light") {
      delete changeTheme();
    }
  }
};

window.addEventListener("load", getLocalStorage);
