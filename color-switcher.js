/* Color Switcher

Step 1: Create a function called colorSwitch that takes 
a value from our dropdown list in our HTML file as a parameter.
Step 2: Select the body element and use the style collection 
to set the CSS property that we want to apply to our element of
selection. Use the background color property and assign to it
the parameter of the function.
Step 3: Add the onchange event with the function's name as its value
to the <select> element from the HTML file. Inside of the parameters
of the function name in the onchange event, we use the "this" keyword
on the value of each item in our list so that function has access to them.
The function, when executed, will take the value of the selected item
in our list as its parameter
*/


function colorSwitch(val) {
	document.body.style.backgroundColor = val;
};