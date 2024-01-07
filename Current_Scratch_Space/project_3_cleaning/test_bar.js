const url = "https://docs.google.com/spreadsheets/d/1eqvNy45jhh17-9iyh80sIiSym7hbP1560WyExIVcLVE/gviz/tq?tqx=out:csv"

const dataPromise = d3.csv(url);
console.log("Data Promise: ", dataPromise);

function init() {

  //Name the selector
  let selector = d3.select("#selDataset");

  // Grab CSV data
  d3.csv(url).then((data) => {
    console.log("data", data);

    let sampleYears = data.Year;
    sampleYears.forEach((Year) => {
    selector.append("option").text(Year).property("value", Year);
  });
    console.log(sampleYears);

     


    });
  };

  init()