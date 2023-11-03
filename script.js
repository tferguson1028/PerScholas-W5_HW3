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
  document.querySelector("body").style.backgroundColor = "#53ea92"; // Minty

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
      // My Java trauma is screaming at me!
      node.remove();
      break;
    }
  }

  // Part 6
  const newLiElement = document.createElement("li");
  newLiElement.textContent = "Seattle";
  pastRaces.appendChild(newLiElement);

  // Part 7
  const newBlogPost = document.createElement("div");
  const newHeader = document.createElement("h1"); // Why h2?
  const newParagraph = document.createElement("p");
  newBlogPost.className = "blog-post purple";
  newHeader.textContent = "Seattle";
  newParagraph.textContent = "I JUMPED MY CAR OVER THE SPACE NEEDLE!";
  
  newBlogPost.appendChild(newHeader);  
  newBlogPost.appendChild(newParagraph);
  
  console.log(newBlogPost);
  document.querySelector(".main").appendChild(newBlogPost);
  

  // Part 8
  document.querySelector("#quote-title").addEventListener("click", () =>
  {
    randomQuote();
  });
  

  // Part 9
  
  // I don't think this works how the author thought it would work...
  // I'm changing "mouseout" to "mouseleave" since it works better.
  // DOM says that mouseout/mouseover bubble, and mouseleave/mouseenter don't
  const blogPosts = document.querySelectorAll(".blog-post");
  for(let post of blogPosts)
  {
    post.addEventListener("mouseleave", function()
    {
      post.classList.toggle("red");
      post.classList.toggle("purple");
    });
    
    post.addEventListener("mouseenter", function()
    {
      post.classList.toggle("red");
      post.classList.toggle("purple");
    });
  } 
});
