# Calculator
## Author : Shubham Jain
This calculator is referenced from Casio fx-100MS scientific calculator. I tried to replicate its look. In this version the calculator just does simple addition, subtraction, multiplication and division. In later versions; in upcoming weeks; i would improve it for more functionality.

**I changed the color theme of the calculator. Might change later ;)**

### Version 1.0:

#### Daily Progress
* Day 1 : Designing the calculator on figma;
* Day 2 : Completed the designing of the calculator on html and css files.
* Day 3 : Completed the Calculator Version 1. Used ChatGPT for helping in writing and improving JS code. Replaced Div for equation and Answer with Input. Added value for button.


> This calculator does simple addition, multiplication, subtraction and division.Although at start of this project, i decide to add `x10^` button too. In next version i will definitely add this. I added a feature to place cursor and add or remove element from that selected area. I mainly used ChatGPT for this part. 

> This version does not support keyboard input as i'm using `eval` for this. 

> I kept the equation and answer part seperate as it looks easier to interpret. The equation is a text area with `resize` set to `none`. 

> I used `eval` to evaluate the mathematical expression, although it is not recommended, i just restricted it to certain input only.

**Issues:** 
* *There was a small bug in the logic, when using `//` and `/*` the eval considers then as comments and does not work as expected.*
* *If the input starts with `0` and if it is a valid ocatal number then it was considered as octal number input like `012` as 10 but `087` as 87.

This was my first Web Development project. I'm very happy to complete it with minimal help of LLM's. Very excited for my WebDev Journey... :)
---

### Version 2.0:

**In this version I'm adding input from keyboard and Fixing Previous Issues.**

#### Daily Progress:
* Day 1 : Enabling **Valid** keyboard Input. 
* Day 2 : Used mathjs instead of eval for valid syntax checking

> Enabled keyboard input : numbers `0-9`, `ArrowLeft`, `ArrowRight`, `Escape`, `Backspace`, `Home`, `End`, `Delete`, `(`, `)`, `+`, `-`, `/`, `*` , `.`

> Intead of eval, i used mathjs library in this. It helped in checking for valid mathematical syntax. I used chatgpt in this for implimenting it and making my code look clean. I also tried to impliment checking syntaxes like `++`, `-+` etc.

> It alos solved octal number bug in my code.

**Next Steps** : 
* In next Version, i will implement square of a number, square root and other mathematical functions too.