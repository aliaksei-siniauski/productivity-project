export { addPortfolioButtonHandler };

const addPortfolioButtonHandler = () => {
  document
    .querySelector(".portfolio-buttons")
    .addEventListener("click", (event) => {
      if (event.target.classList.contains("portfolio-button")) {
        let clickPortfolioButton = event.target;
        removeSelectedPortfolioButtonActive();
        addSelectedPortfolioButtonActive(clickPortfolioButton);
      }
    });
};

const removeSelectedPortfolioButtonActive = () => {
  let buttons = document.querySelectorAll(
    ".portfolio-buttons .portfolio-button"
  );
  buttons.forEach((element) => {
    element.classList.remove("portfolio-button--active");
    element.classList.add("button--border");
  });
};

const addSelectedPortfolioButtonActive = (clickPortfolioButton) => {
  clickPortfolioButton.classList.add("portfolio-button--active");
  clickPortfolioButton.classList.remove("button--border");
};

addPortfolioButtonHandler();
