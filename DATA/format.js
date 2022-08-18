function workss() {
  const movieArray = Array(...document.querySelectorAll(".page_wrapper .card"));

  const movieDataArray = movieArray.map((element) =>
    Array(...element.childNodes)
  );

  const finalList = movieDataArray.map((movieData) => {
    if (!movieData[1]) return null;
    const linkElement = movieData[1].querySelector("a.image") || null;
    const posterLink = linkElement.querySelector("img")?.src || "none";
    const movieTitle = linkElement.title || "none";

    const otherInfo = movieData[3];
    const rating = otherInfo
      .querySelector("[data-percent]")
      .getAttribute("data-percent");
    const releaseDate = otherInfo.querySelector("p").innerText;
    return {
      title: movieTitle,
      posterLink: posterLink,
      availibility: "Netflix",
      rating: rating,
      releaseDate: releaseDate
    };
  });

  console.log(finalList);
}

workss();
