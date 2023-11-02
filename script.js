let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitle = document.querySelector("#main-title");
  mainTitle.textContent = "Something Shorter";

  // Part 2
  document.querySelector("body").style.backgroundColor = "#53ea92";

  // Part 3
  const favList =  document.querySelector("#favorite-things");
  favList.removeChild(favList.children[favList.children.length-1]);
  
  // Part 4
  const specialTitles = document.querySelectorAll(".special-title");
  specialTitles.forEach((node) => node.style.fontSize = "2rem");

  // Part 5
  const pastRaces =  document.querySelector("#past-races");
  for(let node of pastRaces.children) 
  {
    if(node.textContent === "Chicago")
    {
      node.remove();
      break;
    }
  }

  // Part 6


  // Part 7


  // Part 8


  // Part 9




});
