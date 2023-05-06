let elimCount = 0;

class Scene1 extends AdventureScene {
    constructor() {
        super("Scene1", "Entrance",);
    }
    preload(){
        this.load.image('entrance', 'assets/images/entrance.png');
        this.load.image('left', 'assets/images/arrowleft.png');
        this.load.image('right', 'assets/images/arrow.png');
        this.load.image('up', 'assets/images/arrowup.png');
        this.load.image('down', 'assets/images/arrowdown.png');
        this.load.image('chemicals', 'assets/images/chemicals.png');
        this.load.image('fly', 'assets/images/fly.png');
        this.load.image('weirdbug', 'assets/images/bug2.png');
        this.load.image('beetle', 'assets/images/bug3.png');
        this.load.image('termite', 'assets/images/bug4.png');
        this.load.image('fly swatter', 'assets/images/flyswatter.png');
    }
    onEnter() {
        //background img
        this.imageObject = this.add.image(
                    720,//x
                    540,//y
            'entrance',
        )

        this.addChemicals();
        this.addFlySwatter();

        let button = this.add.text(this.w * 0.01, this.w * 0.01, "Tell Owner I am Finished.")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => {
            button.setFill('#FFFF00');
            if (elimCount >= 15) {
                this.showMessage("You have elimated enough bugs to call it a day!");
            } else {
                this.showMessage("You need to elimate more bugs before you can head home from work.");
            }
        })
        .on('pointerout', () => {
            button.setFill('#FFFFFF');
        })
        .on('pointerdown', () => {
            this.shakeText(button);
            if (elimCount >= 15) {
                this.gotoScene('outro1');
            }
            else{
                this.gotoScene('outro2');
            }
        })
 

    let fly1 = this.add.image(this.w * 0.3, this.w * 0.2, 'fly')
       .setScale(.15)
       .setInteractive()
       .on('pointerover', () => {
           this.showMessage('*buzzzzzz*');
           this.flyMovement(fly1);
       })
       .on('pointerdown', () => {
        if(this.hasItem("Fly Swatter")){
            this.showMessage("SMACKED A FLY!");
            this.destroyBug(fly1);

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
           this.flyMovement(fly2);
       })
       .on('pointerdown', () => {
        if(this.hasItem("Fly Swatter")){
            this.showMessage("SMACKED A FLY!");
            this.destroyBug(fly2);            
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
           this.flyMovement(fly3);
       })
       .on('pointerdown', () => {
        if(this.hasItem("Fly Swatter")){
            this.showMessage("SMACKED A FLY!");
            this.destroyBug(fly3);
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
           this.flyMovement(fly4);
       })
       .on('pointerdown', () => {
        if(this.hasItem("Fly Swatter")){
            this.showMessage("SMACKED A FLY!");
            this.destroyBug(fly4);
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
           this.weirdBugMovement(weird1);
       })
       .on('pointerdown', () => {
        if(this.hasItem("Fly Swatter")){
            this.counter = this.counter+1;
            this.showMessage("SMACKED A weird bug!");
            this.destroyBug(weird1);
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
            this.weirdBugMovement(weird2);
       })
       .on('pointerdown', () => {
        if(this.hasItem("Fly Swatter")){
            this.showMessage("SMACKED A weird bug!");
            this.destroyBug(weird2);
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
           this.weirdBugMovement(weird3);
       })
       .on('pointerdown', () => {
        if(this.hasItem("Fly Swatter")){
            this.showMessage("SMACKED A weird bug!");
            this.destroyBug(weird3);
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
            this.beetleMovement(beetle1);
       })
       .on('pointerdown', () => {
            if(this.hasItem("Chemicals")){
                this.showMessage("Got a beetle!");
                this.destroyBug(beetle1);
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
            this.beetleMovement(beetle2);
       })
       .on('pointerdown', () => {
        if(this.hasItem("Chemicals")){
            this.showMessage("Got a beetle!");
            this.destroyBug(beetle2);
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
           this.beetleMovement(beetle3);
       })
       .on('pointerdown', () => {
        if(this.hasItem("Chemicals")){
            this.showMessage("Got a beetle!");
            this.destroyBug(beetle3);
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
           this.termiteMovement(termite1);
       })
       .on('pointerdown', () => {
        if(this.hasItem("Chemicals")){
            this.showMessage("Got a termite!");
            this.destroyBug(termite1);
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
           this.termiteMovement(termite2);
       })
       .on('pointerdown', () => {
        if(this.hasItem("Chemicals")){
            this.showMessage("Got a termite!");
            this.destroyBug(termite2);
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
           this.termiteMovement(termite3);
       })       
       .on('pointerdown', () => {
        if(this.hasItem("Chemicals")){
            this.showMessage("Got a termite!");
            this.destroyBug(termite3);
            }
            else{
                this.showMessage("Must have chemicals to exterminate termites.")
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
        update(){
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
        this.load.image('fly swatter', 'assets/images/flyswatter.png');
        this.load.image('chemicals', 'assets/images/chemicals.png');
        this.load.image('keys', 'assets/images/keys.png');
    }
    onEnter() {
        //background img
        this.imageObject = this.add.image(
            720,//x
            540,//y
            'office',
        )   
        this.addChemicals();
        this.addFlySwatter();

        let key = this.add.image(this.w * 0.5, this.w * 0.34, "keys")
            .setScale(.2)
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
                this.showMessage("*walking noises*");
                this.gotoScene('Scene1');
        })

    let fly1 = this.add.image(this.w * 0.3, this.w * 0.2, 'fly')
    .setScale(.15)
    .setInteractive()
    .on('pointerover', () => {
        this.showMessage('*buzzzzzz*');
        this.flyMovement(fly1);
    })
    .on('pointerdown', () => {
     if(this.hasItem("Fly Swatter")){
         this.showMessage("SMACKED A FLY!");
         this.destroyBug(fly1);
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
        this.flyMovement(fly2);
    })
    .on('pointerdown', () => {
     if(this.hasItem("Fly Swatter")){
         this.showMessage("SMACKED A FLY!");
         this.destroyBug(fly2);
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
        this.flyMovement(fly3);
    })
    .on('pointerdown', () => {
     if(this.hasItem("Fly Swatter")){
         this.showMessage("SMACKED A FLY!");
         this.destroyBug(fly3);
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
        this.weirdBugMovement(weird1);
    })
    .on('pointerdown', () => {
     if(this.hasItem("Fly Swatter")){
         this.showMessage("SMACKED A weird bug!");
         this.destroyBug(weird1);
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
        this.weirdBugMovement(weird2);
    })
    .on('pointerdown', () => {
     if(this.hasItem("Fly Swatter")){
         this.showMessage("SMACKED A weird bug!");
         this.destroyBug(weird2);
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
        this.weirdBugMovement(weird3);
    })
    .on('pointerdown', () => {
     if(this.hasItem("Fly Swatter")){
         this.showMessage("SMACKED A weird bug!");
         this.destroyBug(weird3);
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
        this.load.image('fly', 'assets/images/fly.png');
        this.load.image('weirdbug', 'assets/images/bug2.png');
        this.load.image('beetle', 'assets/images/bug3.png');
        this.load.image('termite', 'assets/images/bug4.png');
        this.load.image('chemicals', 'assets/images/chemicals.png');
        this.load.image('fly swatter', 'assets/images/flyswatter.png');
        this.load.image('smoker', 'assets/images/smoker.png');
        this.load.image('hive', 'assets/images/hive.png');
    }
    onEnter() {
        //background img
        this.imageObject = this.add.image(
            720,//x
            540,//y
            'upstairs',
        )   
        this.addChemicals();
        this.addFlySwatter();
        this.addSmoke(this.w * 0.4, this.w * 0.5);
        let hive = this.add.image(this.w * 0.22, this.w * 0.38, 'hive')
            .setScale(.3)
            .setInteractive()
            .on('pointerover', () => { 
                this.showMessage("Must have smoke to take out the hive! counts as 3 points.");
        })
            .on('pointerdown', () => {
                    if(this.hasItem("Smoker")){
                        this.destroyHive(hive);

                    }
                    
        })
        let fly1 =this.add.image(this.w * 0.3, this.w * 0.2, 'fly')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.flyMovement(fly1);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.destroyBug(fly1);
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
            this.flyMovement(fly2);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.destroyBug(fly2);
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
            this.flyMovement(fly3);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.destroyBug(fly3);
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
            this.flyMovement(fly4);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.destroyBug(fly4);
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
            this.weirdBugMovement(weird1);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A weird bug!");
             this.destroyBug(weird1);
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
            this.weirdBugMovement(weird2);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A weird bug!");
             this.destroyBug(weird2);
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
            this.weirdBugMovement(weird3);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A weird bug!");
             this.destroyBug(weird3);
         }
         else{
             this.showMessage("Must have a Fly Swatter to smack some weird bugs.")
         }
    })

    let downArrow = this.add.image(this.w * 0.575, this.w * 0.5, 'down')
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
        this.load.image('chemicals', 'assets/images/chemicals.png');
        this.load.image('smoker', 'assets/images/smoker.png');
        this.load.image('fly swatter', 'assets/images/flyswatter.png');
        this.load.image('hive', 'assets/images/hive.png');
    }
    onEnter() {
        //background img
        this.imageObject = this.add.image(
            720,//x
            540,//y
            'bathroom',
        )   
        this.addChemicals();
        this.addFlySwatter();
        this.addSmoke(this.w * 0.4, this.w * 0.5);
        let hive = this.add.image(this.w * 0.1, this.w * 0.48, 'hive')
            .setScale(.6)
            .setInteractive()
            .on('pointerover', () => { 
                this.showMessage("Must have smoke to take out the hive! counts as 3 points.");
        })
            .on('pointerdown', () => {
                    if(this.hasItem("Smoker")){
                        this.destroyHive(hive);
                    }
                    
        })

        let fly1 =this.add.image(this.w * 0.3, this.w * 0.2, 'fly')
        .setScale(.15)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*buzzzzzz*');
            this.flyMovement(fly1);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.destroyBug(fly1);
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
            this.flyMovement(fly2);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.destroyBug(fly2);
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
            this.flyMovement(fly3);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.destroyBug(fly3);
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
            this.flyMovement(fly4);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A FLY!");
             this.destroyBug(fly4);
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
            this.weirdBugMovement(weird1);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A weird bug!");
             this.destroyBug(weird1);
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
            this.weirdBugMovement(weird2);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A weird bug!");
             this.destroyBug(weird2);
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
            this.weirdBugMovement(weird3);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Fly Swatter")){
             this.showMessage("SMACKED A weird bug!");
             this.destroyBug(weird3);
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
            this.beetleMovement(beetle1);

        })
        .on('pointerdown', () => {
             if(this.hasItem("Chemicals")){
                 this.showMessage("Got a beetle!");
                 this.destroyBug(beetle1);
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
            this.beetleMovement(beetle2);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Chemicals")){
             this.showMessage("Got a beetle!");
             this.destroyBug(beetle2);
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
            this.beetleMovement(beetle3);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Chemicals")){
             this.showMessage("Got a beetle!");
             this.destroyBug(beetle3);
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
            this.termiteMovement(termite1);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Chemicals")){
             this.showMessage("Got a termite!");
             this.destroyBug(termite1);
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
            this.termiteMovement(termite2);
        })
        .on('pointerdown', () => {
         if(this.hasItem("Chemicals")){
             this.showMessage("Got a termite!");
             this.destroyBug(termite2);
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
            this.termiteMovement(termite3);
        })       
        .on('pointerdown', () => {
         if(this.hasItem("Chemicals")){
             this.showMessage("Got a termite!");
             this.destroyBug(termite3);
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
    preload(){
        this.load.image('house', 'assets/images/house.png');
        this.load.image('buggy', 'assets/images/buggyGamesPeach.png');
    }
    create() {
        this.add.text(535,150, "Out with the Bugs!").setFontSize(80);
        this.add.image(300,200, 'house').setScale(.3)
        this.add.image(900,650, 'buggy').setScale(.6)
        this.add.text(275, 400, "You are an exterminator and will need to get rid of all the bugs\n                   in this disgusting house...").setFontSize(35);
        this.add.text(525, 825, "Exterminate 15 bugs to finish your job.").setFontSize(35);
        this.add.text(775,950, "Click anywhere to begin.").setFontSize(20)
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('Scene1'));
        });
    }
}

class Outro1 extends Phaser.Scene {
    constructor() {
        super('outro1');
    }
    preload(){
        this.load.image('success', 'assets/images/success.png');
    }
    create() {
        elimCount = 0;
        this.add.text(200, 150, "Congratulations you have exterminated all the bugs! \n\n       Your clients were happy for the day :)").setFontSize(50).setFill("#00ff00");

        this.add.image(900,600, 'success').setScale(1)
        this.add.text(750, 900, "Click anywhere to restart.").setFontSize(20)   
            this.input.on('pointerdown', () => {
                this.scene.start('intro')
    });
    }
}
class Outro2 extends Phaser.Scene {
    constructor() {
        super('outro2');
    }
    preload(){
        this.load.image('failure', 'assets/images/failure.png');
    }
    create() {
        elimCount = 0;
        this.add.text(350, 150, "You couldn't even eliminate 15 bugs? \n\n What an exterminator you are.....").setFontSize(50).setFill("#ff0000");
        this.add.image(900,600, 'failure').setScale(1)
        this.add.text(750, 900, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.scene.start('intro')
    });
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Scene1, Scene2, Scene3, Scene4, Outro1, Outro2],
    //scene: [Scene1, Intro, Scene2, Scene3, Scene4, Outro1, Outro2],
    //scene: [Scene2, Intro, Scene1, Scene3, Scene4,  Outro1, Outro2],
    //scene: [Scene3, Intro, Scene1, Scene2, Scene4,  Outro1, Outro2],
    //scene: [Scene4, Intro, Scene1, Scene2, Scene3,  Outro1, Outro2],
    //scene: [ Outro1, Scene4, Intro, Scene1, Scene2, Scene3,  Outro2],
    //scene: [ Outro2, Scene4, Intro, Scene1, Scene2, Scene3,  Outro1],
    title: "Adventure Game",
});

