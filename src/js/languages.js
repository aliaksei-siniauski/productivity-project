export { changeActiveLanguage };

const changeActiveLanguage = () => {
  document.querySelector(".language").addEventListener("click", (event) => {
    if (event.target.classList.contains("language-item")) {
      let clickLanguageTeg = event.target;
      removeSelectedLanguageTegActive();
      addSelectedLanguageTegActive(clickLanguageTeg);
    }
  });
};

const removeSelectedLanguageTegActive = () => {
  let languages = document.querySelectorAll(".language .language-item");
  languages.forEach((element) => {
    element.classList.remove("language-item--active");
  });
};

const addSelectedLanguageTegActive = (clickLanguageTeg) => {
  clickLanguageTeg.classList.add("language-item--active");
};
changeActiveLanguage();
