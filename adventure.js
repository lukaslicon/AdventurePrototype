class AdventureScene extends Phaser.Scene {

    init(data) {
        this.inventory = data.inventory || [];

    }

    constructor(key, name) {
        super(key);
        this.name = name;

    }

    create() {
        this.transitionDuration = 1000;

        this.w = this.game.config.width;
        this.h = this.game.config.height;
        this.s = this.game.config.width * 0.01;

        this.cameras.main.setBackgroundColor('#444');
        this.cameras.main.fadeIn(this.transitionDuration, 0, 0, 0);

        this.add.rectangle(this.w * 0.75, 0, this.w * 0.25, this.h).setOrigin(0, 0).setFillStyle(0);
        
        this.add.text(this.w * .75 + this.s, this.s)
            .setText(this.name)
            .setStyle({ fontSize: `${3 * this.s}px` })
            .setWordWrapWidth(this.w * 0.25 - 2 * this.s);

        this.add.text(this.w * .75 + this.s, this.h * .2)
            .setText("count: ")
            .setStyle({ fontSize: `${3 * this.s}px` })
            .setWordWrapWidth(this.w * 0.25 - 2 * this.s);

        let score = this.add.text(this.w * .875 + this.s, this.h * .2)
            .setText(elimCount)
            .setStyle({ fontSize: `${3 * this.s}px` })
            .setWordWrapWidth(this.w * 0.25 - 2 * this.s);
            
        this.add.text(this.w * .75 + this.s, this.h * .25)
            .setText("*updates with room swap*")
            .setStyle({ fontSize: `${1 * this.s}px` })
            .setWordWrapWidth(this.w * 0.25 - 2 * this.s);

        this.messageBox = this.add.text(this.w * 0.75 + this.s, this.h * 0.33)
            .setStyle({ fontSize: `${2 * this.s}px`, color: '#eea' })
            .setWordWrapWidth(this.w * 0.25 - 2 * this.s);

        this.inventoryBanner = this.add.text(this.w * 0.75 + this.s, this.h * 0.66)
            .setStyle({ fontSize: `${2 * this.s}px` })
            .setText("Inventory")
            .setAlpha(0);

        this.inventoryTexts = [];
        this.updateInventory();

        this.add.text(this.w-3*this.s, this.h-3*this.s, "📺")
            .setStyle({ fontSize: `${2 * this.s}px` })
            .setInteractive({useHandCursor: true})
            .on('pointerover', () => this.showMessage('Fullscreen?'))
            .on('pointerdown', () => {
                if (this.scale.isFullscreen) {
                    this.scale.stopFullscreen();
                } else {
                    this.scale.startFullscreen();
                }
            });

        this.onEnter();

    }

    addFlySwatter(){
        this.add.image(this.w * 0.5, this.w * 0.5, 'fly swatter')
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
    }
    addChemicals(){
        this.add.image(this.w * 0.28, this.w * 0.48, 'chemicals')
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
    }
    addSmoke(width, height){
        this.add.image(width, height, 'smoker')
            .setScale(.20)
            .setInteractive()
            .on('pointerover', () => { 
                this.showMessage("Smoker to fight off ground insects.");
        })
            .on('pointerdown', () => {
                    this.showMessage("You picked up the chemicals");
                    this.gainItem('Smoker');
                    if(this.hasItem("Fly Swatter")){
                        this.loseItem("Fly Swatter");
                    }
                    
        })
    }


    shakeText(txt){
        this.add.text(txt);
        this.tweens.add({
            targets: txt,
            x: '+=' + this.s,
            repeat: 2,
            yoyo: true,
            ease: 'Sine.inOut',
            duration: 100
        });
    }

    //destroy any bug
    destroyBug(image){
        elimCount++;
        this.add.image(image);
        this.tweens.add({
            targets: image,
            y: `-=${2 * this.s}`,
            alpha: { from: 1, to: 0 },
            duration: 100,
            onComplete: () => image.destroy()
     });
    }

    destroyHive(image){
        elimCount++;
        this.add.image(image);
        this.loseItem('Smoker');
        this.tweens.add({
            targets: image,
            y: `-=${2 * this.s}`,
            alpha: { from: 1, to: 0 },
            duration: 1000,
            onComplete: () => image.destroy()
     });
    }
    //all movement functions for bugs
    termiteMovement(image){
        let destX = this.s + (this.h - 2 * this.s) * Math.random();
        let destY = this.s + (this.h - 2 * this.s) * Math.random();
        var angle = Phaser.Math.Angle.BetweenPoints(image, { x: destX, y: destY });
        this.add.image(image);
        this.tweens.add({
            targets: image,
            x: destX,
            y: destY,
            angle: angle * Phaser.Math.RAD_TO_DEG,
            ease: 'Sine.inout',
            duration: 5000
        });
    }
    beetleMovement(image){
        let destX = this.s + (this.h - 2 * this.s) * Math.random();
        let destY = this.s + (this.h - 2 * this.s) * Math.random();
        var angle = Phaser.Math.Angle.BetweenPoints(image, { x: destX, y: destY });
        this.add.image(image);
        this.tweens.add({
            targets: image,
            x: destX,
            angle: angle * Phaser.Math.RAD_TO_DEG,
            ease: 'Sine.out',
            duration: 5000
        });
    }
    weirdBugMovement(image){
        let destX = this.s + (this.h - 2 * this.s) * Math.random();
        let destY = this.s + (this.h - 2 * this.s) * Math.random();
        var angle = Phaser.Math.Angle.BetweenPoints(image, { x: destX, y: destY });
        this.add.image(image);
        this.tweens.add({
            targets: image,
            x: destX,
            y: destY,
            angle: angle * Phaser.Math.RAD_TO_DEG,
            ease: 'Sine.out',
            duration: 3000
        });
    }
    flyMovement(image){
        let destX = this.s + (this.h - 2 * this.s) * Math.random();
        let destY = this.s + (this.h - 2 * this.s) * Math.random();
        var angle = Phaser.Math.Angle.BetweenPoints(image, { x: destX, y: destY });
        this.add.image(image);
        this.tweens.add({
            targets: image,
            x: destX,
            y: destY,
            angle: angle * Phaser.Math.RAD_TO_DEG,
            ease: 'Sine.out',
            duration: 2000
        });
    }

    showMessage(message) {
        this.messageBox.setText(message);
        this.tweens.add({
            targets: this.messageBox,
            alpha: { from: 1, to: 0 },
            easing: 'Quintic.in',
            duration: 4 * this.transitionDuration
        });
    }
    

    showMessage(message) {
        this.messageBox.setText(message);
        this.tweens.add({
            targets: this.messageBox,
            alpha: { from: 1, to: 0 },
            easing: 'Quintic.in',
            duration: 4 * this.transitionDuration
        });
    }

    updateInventory() {
        if (this.inventory.length > 0) {
            this.tweens.add({
                targets: this.inventoryBanner,
                alpha: 1,
                duration: this.transitionDuration
            });
        } else {
            this.tweens.add({
                targets: this.inventoryBanner,
                alpha: 0,
                duration: this.transitionDuration
            });
        }
        if (this.inventoryTexts) {
            this.inventoryTexts.forEach((t) => t.destroy());
        }
        this.inventoryTexts = [];
        let h = this.h * 0.66 + 3 * this.s;
        this.inventory.forEach((e, i) => {
            let text = this.add.text(this.w * 0.75 + 2 * this.s, h, e)
                .setStyle({ fontSize: `${1.5 * this.s}px` })
                .setWordWrapWidth(this.w * 0.75 + 4 * this.s);
            h += text.height + this.s;
            this.inventoryTexts.push(text);
        });
    }
    
    hasItem(item) {
        return this.inventory.includes(item);
    }

    gainItem(item) {
        if (this.inventory.includes(item)) {
            console.warn('gaining item already held:', item);
            return;
        }
        this.inventory.push(item);
        this.updateInventory();
        for (let text of this.inventoryTexts) {
            if (text.text == item) {
                this.tweens.add({
                    targets: text,
                    x: { from: text.x - 20, to: text.x },
                    alpha: { from: 0, to: 1 },
                    ease: 'Cubic.out',
                    duration: this.transitionDuration
                });
            }
        }
    }

    loseItem(item) {
        if (!this.inventory.includes(item)) {
            console.warn('losing item not held:', item);
            return;
        }
        for (let text of this.inventoryTexts) {
            if (text.text == item) {
                this.tweens.add({
                    targets: text,
                    x: { from: text.x, to: text.x + 20 },
                    alpha: { from: 1, to: 0 },
                    ease: 'Cubic.in',
                    duration: this.transitionDuration
                });
            }
        }
        this.time.delayedCall(500, () => {
            this.inventory = this.inventory.filter((e) => e != item);
            this.updateInventory();
        });
    }

    checkWin(counter){
        if(counter >= 1){
            this.gotoScene('outro');
        }
    }

    gotoScene(key) {
        this.cameras.main.fade(this.transitionDuration, 0, 0, 0);
        this.time.delayedCall(this.transitionDuration, () => {
            this.scene.start(key, { inventory: this.inventory });
        });
    }

    onEnter() {
        console.warn('This AdventureScene did not implement onEnter():', this.constructor.name);
    }
}