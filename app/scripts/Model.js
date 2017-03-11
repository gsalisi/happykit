const STAGE_TYPE = {
    MC_TYPE: 'mc_type',
    TEXT_TYPE: 'text_type',
    VIDEO_TYPE: 'video_type',
    AUDIO_TYPE: 'audio_type',
    PIC_TYPE: 'pic_type',
};

class HappyKitModel {
    constructor() {
        this.BreatheStage = {
            type: STAGE_TYPE.TEXT_TYPE,
            prev: null,
            next: null,
            title: 'Let\'s Breathe.',
            content: {
              blurb: `Let go of the tension in your hands. Now, drop your shoulders and let your jaw relax. </br>
Keep your shoulders down and allow your stomach to expand as you breathe in through your nose and count to four.</br>
Hold the breath for a moment. You’re doing great. </br>
Now release your breath slowly and smoothly as you count to seven. </br>
Repeat for 5 cycles, or as many times as needed.`
            }
        };

        this.UpFact1Stage = {
          type: STAGE_TYPE.TEXT_TYPE,
          prev: null,
          next: null,
          title: 'We know it’s cliche, but it’s true.',
          content: {
            blurb: 'You’re not alone! Everyone feels nervous or worried at some time. You’ve probably felt that your anxiety preoccupies your thoughts or even interferes with your daily life. Try asking friends, family, coworkers, or even strangers what they do when they’re anxious. Likely, everyone you ask will have some stories to share with you and probably some tips! Remember, for every emotion you’re feeling, there’s someone that can relate!'
          }
        }

        this.RainMusicStage = {
          type: STAGE_TYPE.AUDIO_TYPE,
          prev: null,
          null: null,
          title: '',
          content: {
            //
          }
        }

        this.NaturePicStage = {
            type: STAGE_TYPE.PIC_TYPE,
            prev: null,
            next: null,
            title: 'Ahhh. Nature.',
            content: [
              {icon: 'https://static.pexels.com/photos/1852/dawn-landscape-mountains-nature.jpg'},
              {icon: 'https://static.pexels.com/photos/27403/pexels-photo-27403.jpg'},
              {icon: 'https://static.pexels.com/photos/103567/pexels-photo-103567.jpeg'},
          ]
        };

        this.CartoonPicStage = {
            type: STAGE_TYPE.PIC_TYPE,
            prev: null,
            next: null,
            title: '',
            content: {
              choices: [
                {icon: 'http://assets.amuniversal.com/053cf9e0df4401345b62005056a9545d'},
                {icon: 'http://assets.amuniversal.com/0a450570df4401345b62005056a9545d'},
                {icon: 'http://assets.amuniversal.com/0f2aa560df4401345b62005056a9545d'},
              ]
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
            type: STAGE_TYPE.VIDEO_TYPE,
            prev: null,
            next: null,
            title: 'CuteVidStage',
            content: {

            }
        };

        this.UpFact5 = {
          type: STAGE_TYPE.TEXT_TYPE,
          prev: null,
          next: null,
          title: '',
          content: {

          }
        }

        this.FunnyVidStage = {
          type: STAGE_TYPE.MEDIA_TYPE,
          prev: null,
          next: null,
          title: '',
          content: {

          }
        }

        this.FunJokeStage = {
          type: STAGE_TYPE.TEXT_TYPE,
          prev: null,
          next: null,
          title: '',
          content: {

          }
        }

        this.NatureMusicStage = {
          type: STAGE_TYPE.AUDIO_TYPE,
          prev: null,
          next: null,
          title: '',
          content: {

          }
        }

        this.UpFact6 = {
          type: STAGE_TYPE.TEXT_TYPE,
          prev: null,
          next: null,
          title: '',
          content: {

          }
        }

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
