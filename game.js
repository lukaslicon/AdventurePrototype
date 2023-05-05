let counter = 0;

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
        this.load.image('fly', 'assets/images/fly.png');
        this.load.image('weirdbug', 'assets/images/bug2.png');
        this.load.image('beetle', 'assets/images/bug3.png');
        this.load.image('termite', 'assets/images/bug4.png');
    }
    onEnter() {
        //background img
        this.imageObject = this.add.image(
                    720,//x
                    540,//y
            'entrance',
        )

    let fly1 =this.add.image(this.w * 0.3, this.w * 0.2, 'fly')
       .setScale(.15)
       .setInteractive()
       .on('pointerover', () => {
           this.showMessage('*buzzzzzz*');
           this.tweens.add({
               targets: fly1,
               x: this.s + (this.h - 2 * this.s) * Math.random(),
               y: this.s + (this.h - 2 * this.s) * Math.random(),
               ease: 'Sine.out',
               duration: 1000
           });
       })
       .on('pointerdown', () => {
        if(this.hasItem("Fly Swatter")){
            this.showMessage("SMACKED A FLY!");
            this.tweens.add({
                targets: fly1,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => fly1.destroy()
        });
        }
        else{
            this.showMessage("Must have a Fly Swatter to smack some flies.")
        }
        })
       let fly2 =this.add.image(this.w * 0.2, this.w * 0.2, 'fly')
       .setScale(.15)
       .setInteractive()
       .on('pointerover', () => {
           this.showMessage('*buzzzzzz*');
           this.tweens.add({
               targets: fly2,
               x: this.s + (this.h - 2 * this.s) * Math.random(),
               y: this.s + (this.h - 2 * this.s) * Math.random(),
               ease: 'Sine.out',
               duration: 1000
           });
       })
       .on('pointerdown', () => {
        if(this.hasItem("Fly Swatter")){
            this.showMessage("SMACKED A FLY!");
            this.tweens.add({
                targets: fly2,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => fly2.destroy()
        });
        }
        else{
            this.showMessage("Must have a Fly Swatter to smack some flies.")
        }
        })
       let fly3 =this.add.image(this.w * 0.18, this.w * 0.3, 'fly')
       .setScale(.15)
       .setInteractive()
       .on('pointerover', () => {
           this.showMessage('*buzzzzzz*');
           this.tweens.add({
               targets: fly3,
               x: this.s + (this.h - 2 * this.s) * Math.random(),
               y: this.s + (this.h - 2 * this.s) * Math.random(),
               ease: 'Sine.out',
               duration: 1000
           });
       })
       .on('pointerdown', () => {
        if(this.hasItem("Fly Swatter")){
            this.showMessage("SMACKED A FLY!");
            this.tweens.add({
                targets: fly3,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => fly3.destroy()
        });
        }
        else{
            this.showMessage("Must have a Fly Swatter to smack some flies.")
        }
        })
       let fly4 =this.add.image(this.w * 0.4, this.w * 0.35, 'fly')
       .setScale(.15)
       .setInteractive()
       .on('pointerover', () => {
           this.showMessage('*buzzzzzz*');
           this.tweens.add({
               targets: fly4,
               x: this.s + (this.h - 2 * this.s) * Math.random(),
               y: this.s + (this.h - 2 * this.s) * Math.random(),
               ease: 'Sine.out',
               duration: 1000
           });
       })
       .on('pointerdown', () => {
        if(this.hasItem("Fly Swatter")){
            this.showMessage("SMACKED A FLY!");
            this.tweens.add({
                targets: fly4,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => fly4.destroy()
        });
        }
        else{
            this.showMessage("Must have a Fly Swatter to smack some flies.")
        }
        })
        let weird1 =this.add.image(this.w * 0.1, this.w * 0.1, 'weirdbug')
       .setScale(.15)
       .setInteractive()
       .on('pointerover', () => {
           this.showMessage('*buzzzzzz*');
           this.tweens.add({
               targets: weird1,
               x: this.s + (this.h - 2 * this.s) * Math.random(),
               y: this.s + (this.h - 2 * this.s) * Math.random(),
               ease: 'Sine.out',
               duration: 3000
           });
       })
       .on('pointerdown', () => {
        if(this.hasItem("Fly Swatter")){
            this.showMessage("SMACKED A weird bug!");
            this.tweens.add({
                targets: weird1,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => weird1.destroy()
         });
        }
        else{
            this.showMessage("Must have a Fly Swatter to smack some weird bugs.")
        }
         })
       let weird2 =this.add.image(this.w * 0.5, this.w * 0.07, 'weirdbug')
       .setScale(.15)
       .setInteractive()
       .on('pointerover', () => {
           this.showMessage('*buzzzzzz*');
           this.tweens.add({
               targets: weird2,
               x: this.s + (this.h - 2 * this.s) * Math.random(),
               y: this.s + (this.h - 2 * this.s) * Math.random(),
               ease: 'Sine.out',
               duration: 3000
           });
       })
       .on('pointerdown', () => {
        if(this.hasItem("Fly Swatter")){
            this.showMessage("SMACKED A weird bug!");
            this.tweens.add({
                targets: weird2,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => weird2.destroy()
        });
        }
        else{
            this.showMessage("Must have a Fly Swatter to smack some weird bugs.")
        }
        })
       let weird3 =this.add.image(this.w * 0.6, this.w * 0.2, 'weirdbug')
       .setScale(.15)
       .setInteractive()
       .on('pointerover', () => {
           this.showMessage('*buzzzzzz*');
           this.tweens.add({
               targets: weird3,
               x: this.s + (this.h - 2 * this.s) * Math.random(),
               y: this.s + (this.h - 2 * this.s) * Math.random(),
               ease: 'Sine.out',
               duration: 3000
           });
       })
       .on('pointerdown', () => {
        if(this.hasItem("Fly Swatter")){
            this.showMessage("SMACKED A weird bug!");
            this.tweens.add({
                targets: weird3,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => weird3.destroy()
    });
        }
        else{
            this.showMessage("Must have a Fly Swatter to smack some weird bugs.")
        }
   })
       let beetle1 =this.add.image(this.w * 0.6, this.w * 0.45, 'beetle')
       .setScale(.15)
       .setInteractive()
       .on('pointerover', () => {
           this.showMessage('*beetle noises*');
           this.tweens.add({
               targets: beetle1,
               x: this.s + (this.h - 2 * this.s) * Math.random(),
               ease: 'Sine.out',
               duration: 5000
           });
       })
       .on('pointerdown', () => {
            if(this.hasItem("Chemicals")){
                this.showMessage("Got a beetle!");
                this.tweens.add({
                    targets: beetle1,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => beetle1.destroy()
        });
            }
            else{
                this.showMessage("Must have chemicals to exterminate beetles.")
            }
       })


       let beetle2 =this.add.image(this.w * 0.6, this.w * 0.55, 'beetle')
       .setScale(.15)
       .setInteractive()
       .on('pointerover', () => {
           this.showMessage('*beetle noises*');
           this.tweens.add({
               targets: beetle2,
               x: this.s + (this.h - 2 * this.s) * Math.random(),
               ease: 'Sine.out',
               duration: 3500
           });
       })
       .on('pointerdown', () => {
        if(this.hasItem("Chemicals")){
            this.showMessage("Got a beetle!");
            this.tweens.add({
                targets: beetle2,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => beetle2.destroy()
        });
            }
            else{
                this.showMessage("Must have chemicals to exterminate beetles.")
            }
        })
       let beetle3 =this.add.image(this.w * 0.425, this.w * 0.4, 'beetle')
       .setScale(.15)
       .setInteractive()
       .on('pointerover', () => {
           this.showMessage('*beetle noises*');
           this.tweens.add({
               targets: beetle3,
               y: this.s + (this.h - 2 * this.s) * Math.random(),
               ease: 'Sine.out',
               duration: 3500
           });
       })
       .on('pointerdown', () => {
        if(this.hasItem("Chemicals")){
            this.showMessage("Got a beetle!");
            this.tweens.add({
                targets: beetle3,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => beetle3.destroy()
        });
            }
            else{
                this.showMessage("Must have chemicals to exterminate beetles.")
            }
        })
       let termite1 =this.add.image(this.w * 0.3, this.w * 0.4, 'termite')
       .setScale(.15)
       .setInteractive()
       .on('pointerover', () => {
           this.showMessage('*bug noises*');
           this.tweens.add({
               targets: termite1,
               x: this.s + (this.h - 2 * this.s) * Math.random(),
               y: this.s + (this.h - 2 * this.s) * Math.random(),
               ease: 'Sine.inout',
               duration: 5000
           });
       })
       .on('pointerdown', () => {
        if(this.hasItem("Chemicals")){
            this.showMessage("Got a termite!");
            this.tweens.add({
                targets: termite1,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => termite1.destroy()
        });
            }
            else{
                this.showMessage("Must have chemicals to exterminate termites.")
            }
        })
       let termite2 =this.add.image(this.w * 0.35, this.w * 0.35, 'termite')
       .setScale(.15)
       .setInteractive()
       .on('pointerover', () => {
           this.showMessage('*bug noises*');
           this.tweens.add({
               targets: termite2,
               x: this.s + (this.h - 2 * this.s) * Math.random(),
               y: this.s + (this.h - 2 * this.s) * Math.random(),
               ease: 'Sine.inout',
               duration: 5000
           });
       })
       .on('pointerdown', () => {
        if(this.hasItem("Chemicals")){
            this.showMessage("Got a termite!");
            this.tweens.add({
                targets: termite2,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => termite2.destroy()
        });
            }
            else{
                this.showMessage("Must have chemicals to exterminate termites.")
            }
        })
       let termite3 =this.add.image(this.w * 0.375, this.w * 0.375, 'termite')
       .setScale(.15)
       .setInteractive()
       .on('pointerover', () => {
           this.showMessage('*bug noises*');
           this.tweens.add({
               targets: termite3,
               x: this.s + (this.h - 2 * this.s) * Math.random(),
               y: this.s + (this.h - 2 * this.s) * Math.random(),
               ease: 'Sine.inout',
               duration: 5000
           });
       })       
       .on('pointerdown', () => {
        if(this.hasItem("Chemicals")){
            this.showMessage("Got a termite!");
            this.tweens.add({
                targets: termite3,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => termite3.destroy()
        });
            }
            else{
                this.showMessage("Must have chemicals to exterminate termites.")
            }
        })

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
                    this.showMessage("You must find the key to the Bathroom.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
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
        this.load.image('fly', 'assets/images/fly.png');
        this.load.image('weirdbug', 'assets/images/bug2.png');
        this.load.image('beetle', 'assets/images/bug3.png');
        this.load.image('termite', 'assets/images/bug4.png');
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

    let leftArrow = this.add.image(this.w * 0.05, this.w * 0.5, 'left')
        .setScale(.5)
        .setInteractive()
        .on('pointerover', () => {
                this.showMessage("Entrance");
        })
        .on('pointerdown', () => {
            if (this.hasItem("key")) {
                this.showMessage("*walking noises*");
                this.gotoScene('Scene1');
            }
        })
    let fly1 =this.add.image(this.w * 0.3, this.w * 0.2, 'fly')
    .setScale(.15)
    .setInteractive()
    .on('pointerover', () => {
        this.showMessage('*buzzzzzz*');
        this.tweens.add({
            targets: fly1,
            x: this.s + (this.h - 2 * this.s) * Math.random(),
            y: this.s + (this.h - 2 * this.s) * Math.random(),
            ease: 'Sine.out',
            duration: 1000
        });
    })
    .on('pointerdown', () => {
     if(this.hasItem("Fly Swatter")){
         this.showMessage("SMACKED A FLY!");
         this.tweens.add({
             targets: fly1,
             y: `-=${2 * this.s}`,
             alpha: { from: 1, to: 0 },
             duration: 500,
             onComplete: () => fly1.destroy()
     });
     }
     else{
         this.showMessage("Must have a Fly Swatter to smack some flies.")
     }
     })
    let fly2 =this.add.image(this.w * 0.2, this.w * 0.2, 'fly')
    .setScale(.15)
    .setInteractive()
    .on('pointerover', () => {
        this.showMessage('*buzzzzzz*');
        this.tweens.add({
            targets: fly2,
            x: this.s + (this.h - 2 * this.s) * Math.random(),
            y: this.s + (this.h - 2 * this.s) * Math.random(),
            ease: 'Sine.out',
            duration: 1000
        });
    })
    .on('pointerdown', () => {
     if(this.hasItem("Fly Swatter")){
         this.showMessage("SMACKED A FLY!");
         this.tweens.add({
             targets: fly2,
             y: `-=${2 * this.s}`,
             alpha: { from: 1, to: 0 },
             duration: 500,
             onComplete: () => fly2.destroy()
     });
     }
     else{
         this.showMessage("Must have a Fly Swatter to smack some flies.")
     }
     })
    let fly3 =this.add.image(this.w * 0.18, this.w * 0.3, 'fly')
    .setScale(.15)
    .setInteractive()
    .on('pointerover', () => {
        this.showMessage('*buzzzzzz*');
        this.tweens.add({
            targets: fly3,
            x: this.s + (this.h - 2 * this.s) * Math.random(),
            y: this.s + (this.h - 2 * this.s) * Math.random(),
            ease: 'Sine.out',
            duration: 1000
        });
    })
    .on('pointerdown', () => {
     if(this.hasItem("Fly Swatter")){
         this.showMessage("SMACKED A FLY!");
         this.tweens.add({
             targets: fly3,
             y: `-=${2 * this.s}`,
             alpha: { from: 1, to: 0 },
             duration: 500,
             onComplete: () => fly3.destroy()
     });
     }
     else{
         this.showMessage("Must have a Fly Swatter to smack some flies.")
     }
     })

     let weird1 =this.add.image(this.w * 0.1, this.w * 0.1, 'weirdbug')
    .setScale(.15)
    .setInteractive()
    .on('pointerover', () => {
        this.showMessage('*buzzzzzz*');
        this.tweens.add({
            targets: weird1,
            x: this.s + (this.h - 2 * this.s) * Math.random(),
            y: this.s + (this.h - 2 * this.s) * Math.random(),
            ease: 'Sine.out',
            duration: 3000
        });
    })
    .on('pointerdown', () => {
     if(this.hasItem("Fly Swatter")){
         this.showMessage("SMACKED A weird bug!");
         this.tweens.add({
             targets: weird1,
             y: `-=${2 * this.s}`,
             alpha: { from: 1, to: 0 },
             duration: 500,
             onComplete: () => weird1.destroy()
      });
     }
     else{
         this.showMessage("Must have a Fly Swatter to smack some weird bugs.")
     }
      })
    let weird2 =this.add.image(this.w * 0.5, this.w * 0.07, 'weirdbug')
    .setScale(.15)
    .setInteractive()
    .on('pointerover', () => {
        this.showMessage('*buzzzzzz*');
        this.tweens.add({
            targets: weird2,
            x: this.s + (this.h - 2 * this.s) * Math.random(),
            y: this.s + (this.h - 2 * this.s) * Math.random(),
            ease: 'Sine.out',
            duration: 3000
        });
    })
    .on('pointerdown', () => {
     if(this.hasItem("Fly Swatter")){
         this.showMessage("SMACKED A weird bug!");
         this.tweens.add({
             targets: weird2,
             y: `-=${2 * this.s}`,
             alpha: { from: 1, to: 0 },
             duration: 500,
             onComplete: () => weird2.destroy()
     });
     }
     else{
         this.showMessage("Must have a Fly Swatter to smack some weird bugs.")
     }
     })
    let weird3 =this.add.image(this.w * 0.6, this.w * 0.2, 'weirdbug')
    .setScale(.15)
    .setInteractive()
    .on('pointerover', () => {
        this.showMessage('*buzzzzzz*');
        this.tweens.add({
            targets: weird3,
            x: this.s + (this.h - 2 * this.s) * Math.random(),
            y: this.s + (this.h - 2 * this.s) * Math.random(),
            ease: 'Sine.out',
            duration: 3000
        });
    })
    .on('pointerdown', () => {
     if(this.hasItem("Fly Swatter")){
         this.showMessage("SMACKED A weird bug!");
         this.tweens.add({
             targets: weird3,
             y: `-=${2 * this.s}`,
             alpha: { from: 1, to: 0 },
             duration: 500,
             onComplete: () => weird3.destroy()
 });
     }
     else{
         this.showMessage("Must have a Fly Swatter to smack some weird bugs.")
     }
})
    }
}

class Scene3 extends AdventureScene {
    constructor() {
        super("Scene3", "upstairs");
    }
    preload(){
        this.load.image('upstairs', 'assets/images/attic.jpg');
        this.load.image('down', 'assets/images/arrowdown.png');
        this.load.image('fly', 'assets/images/fly.jpg');
        this.load.image('weirdbug', 'assets/images/bug2.png');
        this.load.image('beetle', 'assets/images/bug3.png');
        this.load.image('termite', 'assets/images/bug4.png');
    }
    onEnter() {
        //background img
        this.imageObject = this.add.image(
            720,//x
            540,//y
            'upstairs',
        )   

        let fly1 =this.add.image(this.w * 0.3, this.w * 0.2, 'fly')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.tweens.add({
                targets: fly1,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 1000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.tweens.add({
                 targets: fly1,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => fly1.destroy()
         });
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some flies.")
         }
         })
        let fly2 =this.add.image(this.w * 0.2, this.w * 0.2, 'fly')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.tweens.add({
                targets: fly2,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 1000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.tweens.add({
                 targets: fly2,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => fly2.destroy()
         });
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some flies.")
         }
         })
        let fly3 =this.add.image(this.w * 0.18, this.w * 0.3, 'fly')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.tweens.add({
                targets: fly3,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 1000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.tweens.add({
                 targets: fly3,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => fly3.destroy()
         });
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some flies.")
         }
         })
        let fly4 =this.add.image(this.w * 0.4, this.w * 0.35, 'fly')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.tweens.add({
                targets: fly4,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 1000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.tweens.add({
                 targets: fly4,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => fly4.destroy()
         });
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some flies.")
         }
         })
         let weird1 =this.add.image(this.w * 0.1, this.w * 0.1, 'weirdbug')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.tweens.add({
                targets: weird1,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 3000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A weird bug!");
             this.tweens.add({
                 targets: weird1,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => weird1.destroy()
          });
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some weird bugs.")
         }
          })
        let weird2 =this.add.image(this.w * 0.5, this.w * 0.07, 'weirdbug')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.tweens.add({
                targets: weird2,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 3000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A weird bug!");
             this.tweens.add({
                 targets: weird2,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => weird2.destroy()
         });
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some weird bugs.")
         }
         })
        let weird3 =this.add.image(this.w * 0.6, this.w * 0.2, 'weirdbug')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.tweens.add({
                targets: weird3,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 3000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A weird bug!");
             this.tweens.add({
                 targets: weird3,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => weird3.destroy()
     });
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some weird bugs.")
         }
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
        this.load.image('fly', 'assets/images/fly.png');
        this.load.image('weirdbug', 'assets/images/bug2.png');
        this.load.image('beetle', 'assets/images/bug3.png');
        this.load.image('termite', 'assets/images/bug4.png');
    }
    onEnter() {
        //background img
        this.imageObject = this.add.image(
            720,//x
            540,//y
            'bathroom',
        )   

        let fly1 =this.add.image(this.w * 0.3, this.w * 0.2, 'fly')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.tweens.add({
                targets: fly1,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 1000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.tweens.add({
                 targets: fly1,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => fly1.destroy()
         });
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some flies.")
         }
         })
        let fly2 =this.add.image(this.w * 0.2, this.w * 0.2, 'fly')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.tweens.add({
                targets: fly2,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 1000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.tweens.add({
                 targets: fly2,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => fly2.destroy()
         });
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some flies.")
         }
         })
        let fly3 =this.add.image(this.w * 0.18, this.w * 0.3, 'fly')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.tweens.add({
                targets: fly3,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 1000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.tweens.add({
                 targets: fly3,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => fly3.destroy()
         });
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some flies.")
         }
         })
        let fly4 =this.add.image(this.w * 0.4, this.w * 0.35, 'fly')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.tweens.add({
                targets: fly4,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 1000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.tweens.add({
                 targets: fly4,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => fly4.destroy()
         });
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some flies.")
         }
         })
         let weird1 =this.add.image(this.w * 0.1, this.w * 0.1, 'weirdbug')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.tweens.add({
                targets: weird1,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 3000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A weird bug!");
             this.tweens.add({
                 targets: weird1,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => weird1.destroy()
          });
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some weird bugs.")
         }
          })
        let weird2 =this.add.image(this.w * 0.5, this.w * 0.07, 'weirdbug')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.tweens.add({
                targets: weird2,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 3000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A weird bug!");
             this.tweens.add({
                 targets: weird2,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => weird2.destroy()
         });
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some weird bugs.")
         }
         })
        let weird3 =this.add.image(this.w * 0.6, this.w * 0.2, 'weirdbug')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.tweens.add({
                targets: weird3,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 3000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A weird bug!");
             this.tweens.add({
                 targets: weird3,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => weird3.destroy()
     });
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some weird bugs.")
         }
    })
        let beetle1 =this.add.image(this.w * 0.6, this.w * 0.45, 'beetle')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*beetle noises*');
            this.tweens.add({
                targets: beetle1,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 5000
            });
        })
        .on('pointerdown', () => {
             if(this.hasItem("Chemicals")){
                 this.showMessage("Got a beetle!");
                 this.tweens.add({
                     targets: beetle1,
                     y: `-=${2 * this.s}`,
                     alpha: { from: 1, to: 0 },
                     duration: 500,
                     onComplete: () => beetle1.destroy()
         });
             }
             else{
                 this.showMessage("Must have chemicals to exterminate beetles.")
             }
        })
 
 
        let beetle2 =this.add.image(this.w * 0.6, this.w * 0.55, 'beetle')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*beetle noises*');
            this.tweens.add({
                targets: beetle2,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 3500
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Chemicals")){
             this.showMessage("Got a beetle!");
             this.tweens.add({
                 targets: beetle2,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => beetle2.destroy()
         });
             }
             else{
                 this.showMessage("Must have chemicals to exterminate beetles.")
             }
         })
        let beetle3 =this.add.image(this.w * 0.425, this.w * 0.4, 'beetle')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*beetle noises*');
            this.tweens.add({
                targets: beetle3,
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.out',
                duration: 3500
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Chemicals")){
             this.showMessage("Got a beetle!");
             this.tweens.add({
                 targets: beetle3,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => beetle3.destroy()
         });
             }
             else{
                 this.showMessage("Must have chemicals to exterminate beetles.")
             }
         })
        let termite1 =this.add.image(this.w * 0.3, this.w * 0.4, 'termite')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*bug noises*');
            this.tweens.add({
                targets: termite1,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.inout',
                duration: 5000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Chemicals")){
             this.showMessage("Got a termite!");
             this.tweens.add({
                 targets: termite1,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => termite1.destroy()
         });
             }
             else{
                 this.showMessage("Must have chemicals to exterminate termites.")
             }
         })
        let termite2 =this.add.image(this.w * 0.35, this.w * 0.35, 'termite')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*bug noises*');
            this.tweens.add({
                targets: termite2,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.inout',
                duration: 5000
            });
        })
        .on('pointerdown', () => {
         if(this.hasItem("Chemicals")){
             this.showMessage("Got a termite!");
             this.tweens.add({
                 targets: termite2,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => termite2.destroy()
         });
             }
             else{
                 this.showMessage("Must have chemicals to exterminate termites.")
             }
         })
        let termite3 =this.add.image(this.w * 0.375, this.w * 0.375, 'termite')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*bug noises*');
            this.tweens.add({
                targets: termite3,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.inout',
                duration: 5000
            });
        })       
        .on('pointerdown', () => {
         if(this.hasItem("Chemicals")){
             this.showMessage("Got a termite!");
             this.tweens.add({
                 targets: termite3,
                 y: `-=${2 * this.s}`,
                 alpha: { from: 1, to: 0 },
                 duration: 500,
                 onComplete: () => termite3.destroy()
         });
             }
             else{
                 this.showMessage("Must have chemicals to exterminate termites.")
             }
         })
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
        this.add.text(50, 50, "Congratulations you have exterminated all the bugs!").setFontSize(50);
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

