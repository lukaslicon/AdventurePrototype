class Scene1 extends AdventureScene {
    constructor() {
        super("Scene1", "Entrance");
    }
    preload(){
        this.load.image('entrance', 'assets/images/entrance.png');
        this.load.image('left', 'assets/images/arrowleft.png');
        this.load.image('right', 'assets/images/arrow.png');
        this.load.image('up', 'assets/images/arrowup.png');
        this.load.image('down', 'assets/images/arrowdown.png');
        this.load.image('chemicals', 'assets/images/hive.png');

    }
    onEnter() {
        //background img
        this.imageObject = this.add.image(
                    720,//x
                    540,//y
            'entrance',
        )
/*
        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });


        this.add.image(this.w * 0.4, this.w * 0.3, '')
            .setScale(.3)
            .setInteractive()
            .on('pointerover', () => { 
                this.showMessage("Chemicals to fight off ground insects.");
        })
        .on('pointerdown', () => {
                this.showMessage("You picked up the chemicals");
                this.gainItem('Chemicals');
                if(this.hasItem("Fly Swatter")){
                    this.loseItem("Fly Swatter");
                }
                
        })
        */
        this.add.image(this.w * 0.3, this.w * 0.5, 'chemicals')
            .setScale(.3)
            .setInteractive()
            .on('pointerover', () => { 
                this.showMessage("Chemicals to fight off ground insects.");
        })
            .on('pointerdown', () => {
                    this.showMessage("You picked up the chemicals");
                    this.gainItem('Chemicals');
                    if(this.hasItem("Fly Swatter")){
                        this.loseItem("Fly Swatter");
                    }
                    
        })

        this.add.image(this.w * 0.5, this.w * 0.5, 'chemicals')
        .setScale(.3)
        .setInteractive()
        .on('pointerover', () => { 
            this.showMessage("Fly swatter to kill flying insects.");
    })
        .on('pointerdown', () => {
                this.showMessage("You picked up fly swatter");
                this.gainItem('Fly Swatter');
                if(this.hasItem("Chemicals")){
                    this.loseItem("Chemicals");
                }
    })

        let rightArrow = this.add.image(this.w * 0.6, this.w * 0.3, 'right')
            .setScale(.3)
            .setInteractive()
            .on('pointerover', () => { 
                    this.showMessage("Office.");
            })
            .on('pointerdown', () => {
                    this.showMessage("*walking noises*");
                    this.gotoScene('Scene2');
            })

        let upArrow = this.add.image(this.w * 0.4, this.w * 0.16, 'up')
            .setScale(.3)
            .setInteractive()
            .on('pointerover', () => {
                    this.showMessage("Upstairs.");
            })
            .on('pointerdown', () => {
                    this.showMessage("*walking noises*");
                    this.gotoScene('Scene3');
            })

        let leftArrow = this.add.image(this.w * 0.3, this.w * 0.3, 'left')
            .setScale(.3)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You have the key to Bathroom. unlock?");
                } else {
                    this.showMessage("Bathroom is locked. Find the key.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    this.showMessage("*unlocked*");
                    this.gotoScene('Scene4');
                }
            })

    }
}

class Scene2 extends AdventureScene {
    constructor() {
        super("Scene2", "Office");
    }
    preload(){
        this.load.image('office', 'assets/images/office.jpg');
        this.load.image('left', 'assets/images/arrowleft.png');
    }
    onEnter() {
        //background img
        this.imageObject = this.add.image(
            720,//x
            540,//y
            'office',
        )   
        let key = this.add.text(this.w * 0.45, this.w * 0.34, "🔑 Keys")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

            this.add.image(this.w * 0.04, this.w * 0.45, 'left')
            .setScale(.5)
            .setInteractive()
            .on('pointerover', () => {
                    this.showMessage("Entrance.");
            })
            .on('pointerdown', () => {
                    this.showMessage("*walking noises*");
                    this.gotoScene('Scene1');
            })

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Scene3 extends AdventureScene {
    constructor() {
        super("Scene3", "upstairs");
    }
    preload(){
        this.load.image('upstairs', 'assets/images/attic.jpg');
        this.load.image('down', 'assets/images/arrowdown.png');
    }
    onEnter() {
        //background img
        this.imageObject = this.add.image(
            720,//x
            540,//y
            'upstairs',
        )   

        this.add.image(this.w * 0.375, this.w * 0.525, 'down')
        .setScale(.5)
        .setInteractive()
        .on('pointerover', () => {
                this.showMessage("Back to the entrance.");
                
        })
        .on('pointerdown', () => {
                this.showMessage("*walking noises*");
                this.gotoScene('Scene1');
        })

    }
}

class Scene4 extends AdventureScene {
    constructor() {
        super("Scene4", "bathroom");
    }
    preload(){
        this.load.image('bathroom', 'assets/images/bathroom.jpg');
        this.load.image('right', 'assets/images/arrow.png');
    }
    onEnter() {
        //background img
        this.imageObject = this.add.image(
            720,//x
            540,//y
            'bathroom',
        )   
        
        let rightArrow = this.add.image(this.w * 0.725, this.w * 0.5, 'right')
        .setScale(.5)
        .setInteractive()
        .on('pointerover', () => { 
                this.showMessage("Entrance.");
        })
        .on('pointerdown', () => {
                this.showMessage("*walking noises*");
                this.gotoScene('Scene1');
        })

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Out with the Bugs!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('Scene1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    //scene: [Intro, Scene1, Scene2, Scene3, Scene4, Outro],
    scene: [Scene1, Intro, Scene2, Scene3, Scene4, Outro],
    //scene: [Scene2, Intro, Scene1, Scene3, Scene4, Outro],
    //scene: [Scene3, Intro, Scene1, Scene2, Scene4, Outro],
    //scene: [Scene4, Intro, Scene1, Scene2, Scene3, Outro],
    title: "Adventure Game",
});

