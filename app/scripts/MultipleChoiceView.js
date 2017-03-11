class MultipleChoiceView {
    constructor($container, currStage, callbacks) {
        this.$container = $container;
        
        // In the next parts, we create the template string we want to append to the DOM;
        let choicesTemplate = ''; // Creates a list of buttons; initialize as empty string
        for(let choice of currStage.content.choices) {
            /* 
             * Using the back tick character -> ` 
             * It allows you to easily insert a ${YOUR_VARIABLE} inside your string.
             * It's nice cos you can write it in multiple lines too.
             * In this case, We also define a specific class to differentiate each button (used in event binding).
             */
            choicesTemplate += `
                <button class="stage-mc-btn-${choice.text} stage-mc-btn">
                    ${choice.text}
                </button>`;
        }

        // If there is a previous stage, add the back button to the template
        let backBtnTemplate = '';
        if (currStage.prev) {
            backBtnTemplate = `<button class="stage-back-btn">Back</button>`
        }

        // Creates the title and appended with the list of choices above.
        const template = `
            ${backBtnTemplate}
            <div class="stage-title stage-title-multiplechoice">
                ${currStage.title}
            </div>
            ${choicesTemplate}
        `;

        // Finally!! we're ready to actually put it in the DOM (Document Object Model/HTML)
        this.$container.html(template);

        // Let's attach some event listeners

        // Check if there's a previous stage, if so add click listener to back button
        if (currStage.prev) {
            document.querySelector('.stage-back-btn').onclick = () => {
                callbacks.prev(currStage.prev);
            };
        }

        // Add onclick listeners for each choice button
        for(let choice of currStage.content.choices) {
            // each of the button leads you to a different page
            let nextStage = currStage.next[choice.nextIndex];
            document.querySelector(`.stage-mc-btn-${choice.text}`).onclick = () => {
                callbacks.next(currStage, nextStage);
            };
        }
    }

    destroy() {
        this.$container.empty(); 
    }
}