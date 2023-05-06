A simple adventure game by {who?} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: unsatisfied (name at least 4 of the classes).
- **2+ scenes *not* based on `AdventureScene`**: unsatisfied (name the classes).
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: unsatisfied (name the method and explain the use of it).
    - Enhancement 2: unsatisfied (name the method and explain the use of it).

Experience requirements:
- **4+ locations in the game world**: Scene 1 (Entrance), Scene 2 (Office), Scene 3(Upstairs), Scene 4(Bathroom)
- **2+ interactive objects in most scenes**: In every scene you can interact between switching between chemicals and a fly swatter. You can also interact with the smoke in 2 rooms and the keys in the office and pick both up. All rooms have 2+, some rooms have 3.
- **Many objects have `pointerover` messages**: Almost every object created within the game has pointerover messages where it either says what it is or a random message like "buzzzz" for flies and little tooltips for messages to the player like (hives give 3 points)
- **Many objects have `pointerdown` effects**: Almost all object in the game have pointerdown effects. All bugs have pointerdown effects and all arrows/doors do as well.
- **Some objects are themselves animated**: I am using a lot of tween based functions so that all the flies are moving and my images such as chemicals, smoke, and flyswatter all move. Also the hives and all bees have fadeOut tweens for whne they die. 

Asset sources:
**Entrance**: cropped and resized pixels and changed saturation/hue
https://www.vectorstock.com/royalty-free-vector/dark-house-hallway-wood-interior-cartoon-vector-46624654 
**Bathroom**: recolored all gray to black and increased the hue so that there was different colors in the room https://www.freepik.com/free-vector/bathroom-interior-with-furniture-black-white-theme_18554433.htm#query=dark%20animated%20bathroom&position=48&from_view=search&track=robertav1_2_sidr 
**Upstairs**: cropped, resized pixels, and changed bottom of image to have stairs instead of a latter
https://www.freepik.com/free-vector/old-attic-abandoned-house-night-empty-garret-room-interior-with-broken-roof-walls_13524063.htm#query=dark%20room%20cartoon&position=3&from_view=keyword&track=robertav1_2_sidr 
**Office**: cropped, resized pixels, and slightly raised saturation
https://www.freepik.com/free-vector/luxury-office-classic-antique-style-night-empty-dark-interior-with-wooden-solid-furniture-secretaire-table_13243281.htm#query=dark%20room%20cartoon&position=21&from_view=keyword&track=robertav1_2_sidr
**Bugs**: All bugs are from this link… I cut them out from the larger image and changed some of their colors barely. I removed all backgrounds and made individual pictures.
https://www.freepik.com/free-vector/different-insects-collection-isolated-white-background_22302118.htm#query=cartoon%20bugs&position=38&from_view=keyword&track=robertav1_2_sidr 
**Mini house**: https://www.istockphoto.com/vector/little-house-gm164470145-21434438 I made the image have a transparent background
**Failure Sign**: https://www.cleanpng.com/png-failure-marketing-social-media-customer-service-bu-1734960/download-png.html I cropped the image, changed the color, and cleaned up background by making inside and outside transparent
**Success Sign**: https://pixabay.com/photos/career-road-path-way-of-life-479578/ I cut it out of this picture and then took out the word and changed some of the colors to make it my own sign
**Smoker**: https://www.gettyimages.fi/detail/kuvitus/pest-control-service-man-character-trying-killing-rojaltivapaa-kuvitus/848402348 I cut the smoke machine out of the guys hand from this image and changed the color of the smoke cloud
**Chemicals**: https://www.vectorstock.com/royalty-free-vector/sticker-of-a-cartoon-science-chemicals-vector-24129629 I cut out the background to make the image transparent and also cut the sticker looking part out of the picture to make it cleaner looking so it didnt have a bubble around it
**Fly Swatter**: https://www.vectorstock.com/royalty-free-vector/fly-swatter-isolated-on-white-background-vector-31112920 I cut one of the two fly swatters out into a new image then removed the white background and white squares in between meshing holes.
Keys: https://clipartix.com/key-clipart-image-29631/ I transferred from gif to png then removed background and changed colors of the keys. Also removed the tag dangling from the keys by filing in the colors.

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.