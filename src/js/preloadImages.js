export { preloadImages };

const seasons = ["winter", "spring", "summer", "autumn"];

const preloadImages = () => {
  seasons.forEach((element) => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `src/images/portfolio/${element}/${i}.jpg`;
    }
  });
};
preloadImages();
