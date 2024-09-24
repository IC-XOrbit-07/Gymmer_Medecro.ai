function change_color_0(anchorElement) {
    // Get all elements with the class 'option_div_styling'
    var allDivs = document.querySelectorAll('.option_div_styling_0');

    // Define the red color and the original color
    var greenColor = "#00ff29"; // red in RGB format
    var originalColor = "#FFFFFF"; // default original color
    var whiteColor = "#FFFFFF";
    var blackColor = "black";
    // Reset background color of all divs
    allDivs.forEach(function(div) {
        div.style.backgroundColor = originalColor;
        div.style.color = blackColor;
    });

    // Get the parent div element of the clicked anchor
    var parentDiv = anchorElement.parentElement;
    // Apply red background color to the clicked element
    parentDiv.style.backgroundColor = greenColor;
    parentDiv.style.color = whiteColor; 
}


function change_color_1(anchorElement) {
    // Get all elements with the class 'option_div_styling'
    var allDivs = document.querySelectorAll('.option_div_styling_1');

    // Define the red color and the original color
    var greenColor = "#00ff29"; // red in RGB format
    var originalColor = "#FFFFFF"; // default original color
    var whiteColor = "#FFFFFF";
    var blackColor = "black";
    // Reset background color of all divs
    allDivs.forEach(function(div) {
        div.style.backgroundColor = originalColor;
        div.style.color = blackColor;
    });

    // Get the parent div element of the clicked anchor
    var parentDiv = anchorElement.parentElement;
    // Apply red background color to the clicked element
    parentDiv.style.backgroundColor = greenColor;
    parentDiv.style.color = whiteColor; 
}

function change_color_2(anchorElement) {
    // Get all elements with the class 'option_div_styling'
    var allDivs = document.querySelectorAll('.option_div_styling_2');

    // Define the red color and the original color
    var greenColor = "#00ff29"; // red in RGB format
    var originalColor = "#FFFFFF"; // default original color
    var whiteColor = "#FFFFFF";
    var blackColor = "black";
    // Reset background color of all divs
    allDivs.forEach(function(div) {
        div.style.backgroundColor = originalColor;
        div.style.color = blackColor;
    });

    // Get the parent div element of the clicked anchor
    var parentDiv = anchorElement.parentElement;
    // Apply red background color to the clicked element
    parentDiv.style.backgroundColor = greenColor;
    parentDiv.style.color = whiteColor; 
}


function change_color_3(anchorElement) {
    // Get all elements with the class 'option_div_styling'
    var allDivs = document.querySelectorAll('.option_div_styling_3');

    // Define the red color and the original color
    var greenColor = "#00ff29"; // red in RGB format
    var originalColor = "#FFFFFF"; // default original color
    var whiteColor = "#FFFFFF";
    var blackColor = "black";
    // Reset background color of all divs
    allDivs.forEach(function(div) {
        div.style.backgroundColor = originalColor;
        div.style.color = blackColor;
    });

    // Get the parent div element of the clicked anchor
    var parentDiv = anchorElement.parentElement;
    // Apply red background color to the clicked element
    parentDiv.style.backgroundColor = greenColor;
    parentDiv.style.color = whiteColor; 
}




document.addEventListener('DOMContentLoaded', function() {
    const dropArea = document.getElementById('drop-area');
    const fileInput = document.getElementById('file-input');

    // Prevent default behavior for drag events
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropArea.classList.add('dragover');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropArea.classList.remove('dragover');
        });
    });

    // Handle files dropped or selected
    dropArea.addEventListener('drop', (e) => {
        handleFiles(e.dataTransfer.files);
    });

    dropArea.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', () => {
        handleFiles(fileInput.files);
    });

    function handleFiles(files) {
        [...files].forEach(file => {
            console.log('File name:', file.name);
            // Process each file (e.g., upload, display preview, etc.)
        });
    }
});
