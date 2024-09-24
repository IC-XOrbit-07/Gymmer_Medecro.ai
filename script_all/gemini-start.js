// Import necessary modules
// import { config } from 'dotenv';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { GoogleGenerativeAI } from './node_modules/@google/generative-ai/dist/index.mjs';
import { GoogleGenerativeAI } from '../node_modules/@google/generative-ai/dist/index.mjs';
// console.log(GoogleGenerativeAI);
import { typeTableContent } from './chatgpt-typewriter-js.js';
// console.log(GoogleGenerativeAI);
// Load environment variables
// config();

// Retrieve the API key from environment variables
const API_KEY_new = "AIzaSyAAe0ibWWqHn5EbmudnKzMteoz_w900FDg";

// Ensure that the API_KEY is available
if (!API_KEY_new) {
    console.error("API_KEY is missing. Please set it in your .env file.");
    process.exit(1);
}

async function run_query() {
    try {

        // updating values frirst in database

        console.log("Button Pressed");
        
        // Initialize GoogleGenerativeAI with the API key
        const genAI = new GoogleGenerativeAI(API_KEY_new);

        // Get the generative model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Define the prompt

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
        checkColor();
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
        checkColor_1();
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
        checkColor_2();
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
        checkColor_3();

        console.log(final); 
        const prompt = document.getElementById("input_placeholder").value+final+"write it in html fomrat for bold chararcters";

        console.log(prompt);    

        // Generate content using the model
        const result = await model.generateContent(prompt);

        // Log the response text
        // console.log(result.response.text());

        document.getElementById("typewriter-gpt-5").innerText = result.response.text();
        

        const tables = document.querySelectorAll('#typewriter-gpt-1 table');
        tables.forEach(table => {
            const cells = Array.from(table.querySelectorAll('th, td'));
            if (cells.length) {
                typeTableContent(cells);
            }
        });

        // For normal text elements
        const textElements = Array.from(document.querySelectorAll('#typewriter-gpt-2 p, #typewriter-gpt-2 span, #typewriter-gpt-2 h1'));
        if (textElements.length) {
            typeTableContent(textElements);
        }

        const inputElement = document.getElementById('input_placeholder');
        const userInput = inputElement.value.trim();

        if (!userInput) {
            alert('Please enter a query.');
            return;
        }

        // Replace with your actual API URL and chat ID
        // const chatId = 1; // This should be dynamically determined
        const apiUrl = `http://localhost:5500/api/update-chat`;

        try {
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newValue: userInput }),
            });

            if (response.ok) {
                const result = await response.json();
                // alert('Chat updated successfully');
                inputElement.value = ''; // Clear input field after success
            } else {
                const error = await response.json();
                alert(`Error: ${error.message || 'Failed to update chat'}`);
            }
        } catch (error) {
            console.error('Error updating chat:', error);
            alert('An error occurred while updating the chat.');
        }


    } catch (error) {
        console.error("Error occurred:", error);
    }


}

document.getElementById("go_button_id").addEventListener("click" , run_query);

