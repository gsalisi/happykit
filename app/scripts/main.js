function main() {
    let $container = $('.container');
    let model = new HappyKitModel();

    let currentView;
    
    function prevCb(prevStage) {
        currentView.destroy();
        drawStage(prevStage);
    }

    function nextCb(currStage, nextStage) {
        nextStage.prev = currStage;
        currentView.destroy();
        drawStage(nextStage);
    }

    function doneCb() {
        console.log('done')
    }

    function drawStage(stage) {
        const callbacks = {
            prev: prevCb,
            next: nextCb,
            done: doneCb
        }
        if (stage.type == STAGE_TYPE.MC_TYPE) {
            currentView = new MultipleChoiceView($container, stage, callbacks);
        }
    }


    console.log('Test')
    
    
    drawStage(model.initStage)
}
main();   
