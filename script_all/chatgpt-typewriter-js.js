/**
 * Applies a typewriter effect to the given elements.
 * 
 * @param {HTMLElement[]} elements - Array of elements to apply the typewriter effect to.
 */
function typeTableContent(elements) {
    // Set data-content attribute and hide original content
    const prepareElements = elements.map(element => {
        const textContent = element.textContent || '';
        element.setAttribute('data-content', textContent);
        element.innerHTML = `<span style="visibility: hidden;">${textContent}</span>`;
        return element;
    });

    /**
     * Types content into a single element.
     * 
     * @param {HTMLElement} element - The element to type into.
     * @param {Function} callback - Function to call after typing is complete.
     */
    function typeContentIntoElement(element, callback) {
        const content = element.getAttribute('data-content') || '';
        let typedText = '';
        let charIndex = 0;
        const typingSpeed = 25;

        function typeChar() {
            if (charIndex < content.length) {
                typedText += content.charAt(charIndex);
                element.innerHTML = typedText;
                charIndex++;
                setTimeout(typeChar, typingSpeed);
            } else if (callback) {
                callback();
            }
        }

        typeChar();
    }

    /**
     * Starts typing effect for elements in sequence.
     * 
     * @param {number} index - The index of the element to start with.
     */
    function typeNextElement(index) {
        if (index < prepareElements.length) {
            typeContentIntoElement(prepareElements[index], () => {
                typeNextElement(index + 1);
            });
        }
    }

    // Start typing effect on the first element
    typeNextElement(0);
}

export {typeTableContent};