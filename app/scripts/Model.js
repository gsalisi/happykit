const STAGE_TYPE = {
    MC_TYPE: 'mc_type',
    TEXT_TYPE: 'text_type',
    MEDIA_TYPE: 'media_type',
    AUDIO_TYPE: 'audio_type'
};


class HappyKitModel {
    constructor() {
        this.BreatheStage = {
            type: STAGE_TYPE.MC_TYPE,
            prev: null,
            next: null,
            title: 'BreatheStage',
            content: {    
                choices: []
            }
        };

         this.VisualStage = {
            type: STAGE_TYPE.MC_TYPE,
            prev: null,
            next: null,
            title: 'VisualStage',
            content: {    
                choices: []
            }
        };

        this.CuteVidStage = {
            type: STAGE_TYPE.MC_TYPE,
            prev: null,
            next: null,
            title: 'CuteVidStage',
            content: {    
                choices: []
            }
        };

        this.initStage = {    
            type: STAGE_TYPE.MC_TYPE,
            prev: null,
            next: [this.BreatheStage, this.VisualStage, this.CuteVidStage],
            title: 'How are you feeling today?',
            content: {    
                choices: [{
                    text: 'Sad',
                    icon: 'http://sadface.png',
                    nextIndex: 2
                }, {
                    text: 'Anxious',
                    icon: '', 
                    nextIndex: 0
                }, {
                    text: 'Stressed', 
                    icon: '', 
                    nextIndex: 1
                }]
            }
        }; 
    }
}