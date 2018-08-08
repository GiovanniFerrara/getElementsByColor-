# document.getElementsByColor()

Select all the elements in the DOM by document.getElementsByColor("color")

## Getting Started

This functions works just like classic DOM selectors, but selects all the elements that have a certain color of backgound color.
You can use different color formats like:
```
document.getElementsByColor("black")
document.getElementsByColor("#000")
document.getElementsByColor("#000000")
document.getElementsByColor("rgb(0, 0, 0)")

```
### Example: how to change colors to all the black elements for blue:

```
//Select the header in the h1 by its color
var allBlacks=document.getElementsByColor("black");
console.log(allBlacks)

//Change all the black elements to blue
allBlacks.forEach(item=>item.style.color="rgb(0, 0, 255)")

```

### Installing

Just download the file getElementByColor.js and include it to you scripts: <script src="getElementByColor.js"></script>

## Authors

* Giovanni Ferrara

##Contributors

*Gary Clark

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

