
let circleDiameter = +prompt("Enter the diameter of the circle (cm.)");
console.log(circleDiameter);

let circumference = Math.PI * circleDiameter;
console.log(circumference.toFixed(2));
document.write("Circumference = " + circumference.toFixed(2) + " cm. ");

let areaCircle = Math.PI * ((circleDiameter / 2) ** 2);
console.log(areaCircle.toFixed(2));
document.write("Area of a circle = " + areaCircle.toFixed(2) + " cm.");