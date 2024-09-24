let final = "";

function checkColor() {
    // Select all divs within the level_chooser
    const divs = document.querySelectorAll('#level_chooser .option_div_styling_0');

    // Iterate over each div
    divs.forEach(div => {
        // Get the computed style of the div
        const style = window.getComputedStyle(div);
        
        // Get the background color
        const bgColor = style.backgroundColor;

        // Check if the background color matches #00ff29
        if (bgColor === 'rgb(0, 255, 41)') {
            // console.log(`Div with ID ${div.id} has the color #00ff29`);
            final+=`I am ${div.id} in carbohydates sensitivity`;
        }
    });
}
function checkColor_1() {
    // Select all divs within the level_chooser
    const divs = document.querySelectorAll('#level_chooser .option_div_styling_1');

    // Iterate over each div
    divs.forEach(div => {
        // Get the computed style of the div
        const style = window.getComputedStyle(div);
        
        // Get the background color
        const bgColor = style.backgroundColor;

        // Check if the background color matches #00ff29
        if (bgColor === 'rgb(0, 255, 41)') {
            // console.log(`Div with ID ${div.id} has the color #00ff29`);
            final+=` and, ${div.id} in fat metabolism`;
        }
    });
}
function checkColor_2() {
    // Select all divs within the level_chooser
    const divs = document.querySelectorAll('#level_chooser .option_div_styling_2');

    // Iterate over each div
    divs.forEach(div => {
        // Get the computed style of the div
        const style = window.getComputedStyle(div);
        
        // Get the background color
        const bgColor = style.backgroundColor;

        // Check if the background color matches #00ff29
        if (bgColor === 'rgb(0, 255, 41)') {
            final+=` and, ${div.id} in protein requirements`;
            // console.log(`Div with ID ${div.id} has the color #00ff29`);
        }
    });
}
function checkColor_3() {
    // Select all divs within the level_chooser
    const divs = document.querySelectorAll('#level_chooser .option_div_styling_3');

    // Iterate over each div
    divs.forEach(div => {
        // Get the computed style of the div
        const style = window.getComputedStyle(div);
        
        // Get the background color
        const bgColor = style.backgroundColor;

        // Check if the background color matches #00ff29
        if (bgColor === 'rgb(0, 255, 41)') {
            // console.log(`Div with ID ${div.id} has the color #00ff29`);
            final+=` and, ${div.id} in caffenine sensitivity`;
        }
    });
}

console.log(final); 
// Call the function to check the colors
document.getElementById("go_button_id").addEventListener("click",checkColor);
document.getElementById("go_button_id").addEventListener("click",checkColor_1);
document.getElementById("go_button_id").addEventListener("click",checkColor_2);
document.getElementById("go_button_id").addEventListener("click",checkColor_3);
