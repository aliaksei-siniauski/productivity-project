export { changePortfolioImages };

const portfolioButtons = document.querySelector(".portfolio-buttons");
const portfolioImages = document.querySelectorAll(".portfolio-item");

const changePortfolioImages = (event) => {
  if (event.target.classList.contains("portfolio-button")) {
    let season = event.target.dataset.season;
    portfolioImages.forEach(
      (img, index) =>
        (img.src = `src/images/portfolio/${season}/${index + 1}.jpg`)
    );
  }
};
portfolioButtons.addEventListener("click", changePortfolioImages);
