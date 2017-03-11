const STAGE_TYPE = {
    MC_TYPE: 'mc_type',
    TEXT_TYPE: 'text_type',
    VIDEO_TYPE: 'media_type',
    AUDIO_TYPE: 'audio_type'
    PIC_TYPE: 'pic_type'
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

        this.VisualizationStage = {
          type: STAGE_TYPE.TEXT_TYPE,
          prev: null,
          next: null,
          title: 'Let\'s start with some visual exercises.',
          content: {}

        };

        this.PianoMusicStage = {
          type: STAGE_TYPE.AUDIO_TYPE,
          prev: null,
          next: null,
          title: 'Calming piano music.',
          content: {}
        }

        this.UpFact3Stage = {
          type: STAGE_TYPE.TEXT_TYPE,
          prev: null,
          next: null,
          title: 'Did you know?',
          content: {}
        }

        this.DanceVidStage = {
          type: STAGE_TYPE.VIDEO_TYPE,
          prev: null,
          next: null,
          title: 'Get up and moving to lift up your mood!',
          content: {}
        }

        this.FunnyPicStage = {
          type: STAGE_TYPE.PIC_TYPE,
          prev: null,
          next: null,
          title: 'Funny picture',
          content: {}
        }

        this.UpFact4Stage = {
          type: STAGE_TYPE.TEXT_TYPE,
          prev: null,
          next: null,
          title: 'Did you know?',
          content: {}
        }
    }
}
