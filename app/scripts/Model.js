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
            prev: this.initStage,
            next: this.UpFact1Stage,
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
          prev: this.BreatheStage,
          next: this.RainMusicStage,
          title: 'We know it’s cliche, but it’s true.',
          content: {
            blurb: 'You’re not alone! Everyone feels nervous or worried at some time. You’ve probably felt that your anxiety preoccupies your thoughts or even interferes with your daily life. Try asking friends, family, coworkers, or even strangers what they do when they’re anxious. Likely, everyone you ask will have some stories to share with you and probably some tips! Remember, for every emotion you’re feeling, there’s someone that can relate!'
          }
        }

        this.RainMusicStage = {
          type: STAGE_TYPE.AUDIO_TYPE,
          prev: this.UpFact1Stage,
          next: this.NaturePicStage,
          title: 'Falling rain to calm the mind.',
          content: {
            audio: '/music/RainMusic.mp3',
            icon: '/images/rain_img.jpg',
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
            title: 'Time For Some Laughs.',
            content:
              [
                {icon: '/images/icon1.gif'},
                {icon: '/images/icon2.gif'},
                {icon: '/images/icon3.gif'},
              ]
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
            title: 'Puppies!',
            content: {
              video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mRf3-JkwqfU" frameborder="0" allowfullscreen></iframe>',
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
                    text: 'Anxious',
                    icon: '',
                    nextIndex: 0
                }, {
                    text: 'Sad',
                    icon: 'http://sadface.png',
                    nextIndex: 2
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
        };

        this.UpFact3Stage = {
          type: STAGE_TYPE.TEXT_TYPE,
          prev: null,
          next: null,
          title: 'Did you know?',
          content: {}
        };

        this.DanceVidStage = {
          type: STAGE_TYPE.VIDEO_TYPE,
          prev: null,
          next: null,
          title: 'Get up and moving to lift up your mood!',
          content: {}
        };

        this.FunnyPicStage = {
          type: STAGE_TYPE.PIC_TYPE,
          prev: null,
          next: null,
          title: 'Funny picture',
          content: {}
        };

        this.UpFact4Stage = {
          type: STAGE_TYPE.TEXT_TYPE,
          prev: null,
          next: null,
          title: 'Did you know?',
          content: {}

        };
        this.BreatheStage.next = this.UpFact1Stage
        this.UpFact1Stage.next = this.RainMusicStage
        this.RainMusicStage.next = this.NaturePicStage
        this.NaturePicStage.next = this.CuteVidStage
        this.CuteVidStage.next = this.CartoonPicStage
        this.CartoonPicStage.next = this.initStage

    }

}
