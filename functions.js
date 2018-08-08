//Select the header in the h1 by its color
var allBlacks=document.getElementsByColor("black");
console.log(allBlacks)

//Change all the black elements to blue
allBlacks.forEach(item=>item.style.color="rgb(0, 0, 255)")
