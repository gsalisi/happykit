function main() {
    // Previous call back; draws the previous stage
    function prevCb(prevStage) {
        currentView.destroy();
        createView(prevStage);
    }

    // Next stage call back; draws the next stage also provides a back pointer to the previous stage
    function nextCb(currStage, nextStage) {
        nextStage.prev = currStage;
        currentView.destroy();
        createView(nextStage);
    }

    // Call back to reset/ or when the app is done
    function doneCb() {
        console.log('done')
    }

    // Creates the view for each stage
    function createView(stage) {
        const callbacks = {
            prev: prevCb,
            next: nextCb,
            done: doneCb
        }
        if (stage.type === STAGE_TYPE.MC_TYPE) {
            currentView = new MultipleChoiceView($container, stage, callbacks);
        } else if (stage.type === STAGE_TYPE.TEXT_TYPE) {
            currentView = new TextView($container, stage, callbacks);
        }
        // Add different types of stages here...
        // - Also need to create a new view file for every STAGE_TYPE
        // - Dont forget to add the script tag to the index.html
    }

    let $container = $('.container');
    let model = new HappyKitModel();
    let currentView;

    createView(model.initStage)
}
main();
