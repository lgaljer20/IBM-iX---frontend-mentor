const pitanja = document.querySelectorAll(".accordion__question");
const odgovori = document.querySelectorAll(".accordion__answer");

pitanja.forEach((pitanja, i) =>
  pitanja.addEventListener("click", () => accordionAction(i))
);

accordionAction = (i) => {
  odgovori[i].classList.contains("hidden")
    ? odgovori[i].classList.remove("hidden") &&
      pitanja[i].classList.add("boldano")
    : odgovori[i].classList.add("hidden");
};
