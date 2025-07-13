//We are using an older version of p5.js because the newest version has broken gifs

let numRows = 10; //number of Rows for the Tilemap
let numCols = 10; //number of Columns for the Tilemap
let tileSize = 64; //size of individual Tiles in the Tilemap

let bgTiles = []; //array that will store all instances of bgTile objects later initialised
let bgTextures = []; //array that wil store different Textures used by bgTiles in the Tilemap

let fgTiles = []; //array that will store all instances of fgTile objects later initialised 
let fgTextures = []; //array that wil store different Textures used by fgTiles in the Tilemap

let interactTiles = []; //array that will store all instance of interactTile objects later initialised
let interactTextures = []; //array that wil store different Textures used by interactTiles in the Tilemap

let player, playerSprites; //declaring 2 unassigned variables used by Player class: the Player Object and a KVP storing the Directional Sprites of the Player

let dialogueID = -1; //keeps track of the element at target Tile in the Dialogue Maps

let dialogueBox, dialogueSprites; //declaring unassigned variables used by DialogueBox class: the DialogueBox Object and a KVP storing the different states of the box

let prevMapID = 0; //numerical value of previous map

let pageID = 0; //pageID used to iterate through paginated dialogue

let speaker = null; //speaker determines which portraits are displayed in dialogue

let gamestate = 0; //gamestates of 0 or 1, 1 ending the game

let docksFin = false; //event bools that will become true ones progression has been achieved
let villageEntry = false;
let libraryEntry = false;
let cliffEntry = false;
let mountEntry = false;


function setup()
{
  createCanvas(640, 640); //creating a canvas with the size of TileSize * numRows (or numCols)

  buildMap(Docks); //calls the buildMap function, default is mapDocks (first map)
  
  player = new Player(playerSprites, 4, 2, tileSize, Docks); //initialise a new Player object
  
  dialogueBox = new DialogueBox(dialogueSprites); //initialise a new DialogueBox object
}

function draw()
{
  if (gamestate == 0); //while in playable gamestate
  {
    background(0); //default black background (will not show)
  
  //same for loop to loop through 2D array
    for(row = 0; row < numRows; row++) 
    {
      for(col = 0; col < numCols; col++)
      {
        bgTiles[row][col].display(); //every instance of bgTile object will run its display function and appear on the canvas with its determined Texture
        fgTiles[row][col].display(); //every instance of fgTile object will run its display function and appear on the canvas with its determined Texture
        interactTiles[row][col].display(); //every instance of interactTile object will run its display function and appear on the canvas with its determined Texture
      }
    }
  
    if(!player.inDialogue) //if the player is not in dialogue
    {
      if(player.isMoving) //if the Player can move
      {
        player.move(); //calls Player move
      
        if(player.checkTransition() > -1) //if the target tile is a map transition
        {
          let newMapID = player.checkTransition(); //assigns new variable to store the index of transition tile
          loadMap(newMapID); //load map based on the transition index
        }
      }

      if(keyIsPressed) //if a key is pressed, called once per key press
      {
        player.setMoveDir(); //calls Player setMoveDir
      }
    }
  
    player.setSpriteDir(); //calls Player setSpriteDir
    player.display(); //calls Player display
  
    if(dialogueID > -1) //if there is dialogue 
    {     
      let dialogueObject = player.map.dialogueArray[dialogueID][pageID] //assigns dialogueObject for ease
    
    
      if(pageID <= player.map.dialogueArray[dialogueID].length - 1) //if the dialogue is not exhausted
      {
        player.inDialogue = true; //sets player in dialogue
      
        speaker = dialogueObject.character; //references the "character" key in dialogueObject
      
        dialogueBox.setChar(speaker); //calls setChar to change portrait and text color
      
        dialogueBox.boxDisplay(); //draws the dialogue box
        dialogueBox.infoDisplay(dialogueObject); //displays dialogue in the dialogue box 
      }
      else
      {
        player.inDialogue = false; //sets player out of dialogue
      }
    }
    
    //events that remap certain maps to offer new dialogue/collisions/art
    if(docksFin)
    {
      Docks.dialogueArray = Docks.newDialogue;
    }
    
    while(villageEntry) 
    { //due to the player being in the same map during the event, the event must happen once to alter maps and end immediately to prevent the player from being
      //locked in buildMap
      VillageEntrance.foregroundMap = VillageEntrance.newFG;
      VillageEntrance.collisionMap = VillageEntrance.newCollision;
      VillageEntrance.dialogueArray = VillageEntrance.newDialogue;
        
      buildMap(VillageEntrance);
      player.newSpawn(VillageEntrance, player.row, player.col);
        
      villageEntry = false;
    }
    
    if(libraryEntry)
    {
      VillageRight.collisionMap = VillageRight.newCollision;
      VillageRight.dialogueArray = VillageRight.newDialogue;
      VillageRight.transitionMap = VillageRight.newTransition;
    }
    
    if(libraryEntry && !cliffEntry) //simple event bridge that offers change in dialogue but no progression
    {
      Tavern.dialogueArray = Tavern.newDialogue;
      
      VillageLeft.dialogueArray = VillageLeft.newDialogue1;
    }
    
    if(cliffEntry)
    {
      Library.dialogueArray = Library.newDialogue;
      
      VillageLeft.collisionMap = VillageLeft.newCollision;
      VillageLeft.interactMap = VillageLeft.newInteract;
      VillageLeft.dialogueArray = VillageLeft.newDialogue2;
    }  
    
    if(mountEntry)
    {
      VillageCliff.dialogueArray = VillageCliff.newDialogue;
      
      MountEntrance.foregroundMap = MountEntrance.newFG;
      MountEntrance.collisionMap = MountEntrance.newCollision;
      MountEntrance.dialogueArray = MountEntrance.newDialogue;
    }
  }
  
  if(gamestate == 1) //game ends
  {
    background(0);
    push();
    textAlign(CENTER, CENTER);
    textSize(40);
    fill(255);
    text("To be continued...", 0, 0, width, height); //displays white text over black background
    pop();
  }
  
}

function keyPressed()
{
  if(gamestate == 0) //while in gamestate 0
  {
    if(!player.inDialogue) //if the player is not currently in dialogue
    {
      if(keyCode == 69 || keyCode == 13 || keyCode == 32) //e, enter, space
      {
        dialogueID = player.returnDialogueID(); //sets dialogueID to the numerical value found in return
        pageID = 0; //sets pageID to 0 to start the instance of dialogue from the beginning
      }
      else
      {
        dialogueID = -1; //sets dialogueID to -1 representing no dialogue found
      }
    }
  
    if(player.inDialogue) //if the player is currently in dialogue
    {
      if(keyCode == 69 || keyCode == 13 || keyCode == 32) //e, enter, space
      {
        pageID ++; //interacting moves through the dialogue pages
      }
      
      //events that trigger once the player has exhausted initial dialogue with important NPCs
      if(player.map == Docks && pageID >= player.map.dialogueArray[2].length)
      {
        docksFin = true;
      }
      if(player.map == VillageEntrance && pageID >= player.map.dialogueArray[0].length)
      {
        villageEntry = true;
      }
      if(player.map == Tavern && pageID >= player.map.dialogueArray[0].length)
      {
        libraryEntry = true;
      }
      if(player.map == Library && pageID >= player.map.dialogueArray[0].length)
      {
        cliffEntry = true;
      }
      if(player.map == VillageCliff && pageID >= player.map.dialogueArray[0].length)
      {
        mountEntry = true;
      }
      
      if(player.map == MountEnd && pageID >= player.map.dialogueArray[dialogueID].length)
      {
          gamestate = 1; //ends the game
      }
      
    }
  }
}

function buildMap(map) //function used to initialise all Tile objects in the Map parameter
{
  for(row = 0; row < numRows; row++) //for loop iterating through numRows
  {
    bgTiles[row] = []; //initialises column array for every row
    fgTiles[row] = []; // ||
    interactTiles[row] = []; // ||
    
    for(col = 0; col < numCols; col++) //for loop iterationg through numCols
    {
      let bgID = map.backgroundMap[row][col]; //tileID stores the numerical value of the element at index position [row][col] of the Tilemap itself and will be used to determine Texture
      let fgID = map.foregroundMap[row][col]; // ||
      let interactID = map.interactMap[row][col]; // ||
      
      bgTiles[row][col] = new Tile(bgTextures[bgID], row, col, tileSize); //initialise a new Tile object at every index in the 2D array with its Texture determined by above TileID and size of TileSize
    
      fgTiles[row][col] = new Tile(fgTextures[fgID], row, col, tileSize); // ||
    
      interactTiles[row][col] = new Tile(interactTextures[interactID], row, col, tileSize); // ||
    }
  }
}
