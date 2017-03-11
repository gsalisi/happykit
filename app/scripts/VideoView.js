class VideoView {
    constructor($container, currStage, callbacks) {
        this.$container = $container;


        // If there is a previous stage, add the back button to the template
        let backBtnTemplate = '';
        if (currStage.prev) {
            backBtnTemplate = `<button class="js-stage-back-btn">Back</button>`
        }

        const videoTemplate = currStage.content.video;

        const nextBtn = `<button class="js-stage-next-btn">Next</button>`

        // Creates the title and appended with the list of choices above.
        const template = `
            ${backBtnTemplate}
            <h2 class="stage-title stage-title-multiplechoice">
                ${currStage.title}
            </h2>
            ${videoTemplate}
            ${nextBtn}
        `;

        // Finally!! we're ready to actually put it in the DOM (Document Object Model/HTML)
        this.$container.html(template);

        // Let's attach some event listeners

        // Check if there's a previous stage, if so add click listener to back button
        if (currStage.prev) {
            document.querySelector('.js-stage-back-btn').onclick = () => {
                callbacks.prev(currStage.prev);
            };
        }

        document.querySelector('.js-stage-next-btn').onclick = () => {
            callbacks.next(currStage, currStage.next);
        };
    }

    //Dont forget me!
    destroy() {
        this.$container.empty();
    }
}
