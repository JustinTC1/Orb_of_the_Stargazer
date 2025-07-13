class Player
{ 
  constructor(sprites, startRow, startCol, size, map)
  {
    this.sprites = sprites; //references PlayerSprites object and all KVPs
    this.currentSprite = sprites.down; //keeps track of the player's Current Sprite based on direction, default is down facing
    
    this.row = startRow; //references initialised spawn Row
    this.col = startCol; //references initialised spawn Column
    
    this.x = startCol * tileSize; //references exact horizontal position of Player corner origin
    this.y = startRow * tileSize; //references exact vertical position of Player corner origin
    this.tx = this.x; //assigns a target Tile on the X-axis which is used for movement and collision
    this.ty = this.y; //assigns a target Tile on the Y-axis which is used for movement and collision
    this.row = 0; //resets Row to 0 for later use
    this.col = 0; //resets Col to 0 for later use
    
    this.size = size; //references assigned Size (64)
    
    this.speed = 3; //Player's move speed
    this.isMoving = false; //bool that keeps track of the Player's move state
    this.moveDir = 0; //keeps track of which direction the Player will move in, set to 0 
    this.dirX = 0; //keeps track of the numerical value of the desired directional movement on the X-axis, set to 0
    this.dirY = 0; //keeps track of the numerical value of the desired directional movement on the Y-axis, set to 0
  
    this.map = map; //keeps track of the map for use in gathering data from tile map arrays
    
    this.inDialogue = false; //keeps track of whether the player is in dialogue
  }
  
  display() //Displays the Player using Sprites
  {
    push(); //start of display data isolation (safety habit)
    
    imageMode(CORNER); //image drawn from top-left corner to be exact with Player corner origin
    image(this.currentSprite, this.x, this.y, this.size, this.size); //image that will be displayed references KVPs from PlayerSprites object based on direction and transform data assigned previously
    
    pop(); //end of display data isolation
  }
  
  setMoveDir() //Registers movement inputs from the keyboard and assigns them numerical values to keep track of the direction
  {
    if(!this.isMoving) //Only done when the Player is not moving to a new Tile to avoid misalignment and conflicts
    {
      if(keyCode == 87 || keyCode == UP_ARROW) //w and up arrow
      {
        this.dirX = 0; //no effect on X-axis
        this.dirY = -1; //moving up the canvas is -1
        
        this.moveDir = 1; //up
      }
      
      if(keyCode == 83 || keyCode == DOWN_ARROW) //s and down arrow
      {
        this.dirX = 0; //no effect on X-axis
        this.dirY = 1; //moving down the canvas is +1
        
        this.moveDir = 2; //down
      }
      
      if(keyCode == 65 || keyCode == LEFT_ARROW) //a and left arrow
      {
        this.dirX = -1; //moving left of the canvas is -1
        this.dirY = 0; //no effect on the Y-axis
        
        this.moveDir = 3; //left
      }
      
      if(keyCode == 68 || keyCode == RIGHT_ARROW) //d and right arrow
      {
        this.dirX = 1; //moving right of the canvas is +1
        this.dirY = 0; //no effect on the Y-axis
        
        this.moveDir = 4; //right
      }
      
      this.checkTarget(); //calls CheckTarget function
    }
  }
  
  setSpriteDir() //sets the Player's Sprite using moveDir
  {
    switch(this.moveDir) //switch statement is more efficient than if statement here due to only 4 branches, breaks to terminate switch
    { //Try lowering frames
      case 1: //moving Up
        if(!this.isMoving) 
        {
          this.currentSprite = this.sprites.up; //static Up Sprite when not moving
        }
        else
        {
          this.currentSprite = this.sprites.walkUp; //animated Up walk while moving
        }
        break;
        
      case 2: //moving Down
        if(!this.isMoving)
        {
          this.currentSprite = this.sprites.down; //static Down Sprite when not moving
        }
        else
        {
          this.currentSprite = this.sprites.walkDown; //animated Down walk while moving
        }
        break;
        
      case 3: //moving Left
        if(!this.isMoving)
        {
          this.currentSprite = this.sprites.left; //static Left Sprite when not moving
        }
        else
        {
          this.currentSprite = this.sprites.walkLeft; //animated Left walk while moving
        }
        break;
      
      case 4: //moving Right
        if(!this.isMoving)
        {
          this.currentSprite = this.sprites.right; //static Right Sprite when not moving
        }
        else
        {
          this.currentSprite = this.sprites.walkRight; //animated Right walk while moving
        }
        break;
    }
  }
  
  move() //controls Player movement
  {
    if(!this.inDialogue) //if the player is not currently in dialogue, freezing movement while in dialogue
    {
      for(let steps = 0; steps < this.speed; steps++) 
      { //for loop that breaks up the speed into individual steps, and iterates through them. Gives more flexibility in choosing Player Speed as the Speed itself does not need to be a factor of tileSize as the speed is broken down into 1, which is a factor of everything.
        this.x += this.dirX; //for every step, increase the Player X value by dirX, this results in either positive or negative movement depending on direction chosen
        this.y += this.dirY; //for every step, increase the Player Y value by dirY, this results in either positive or negative movement depending on direction chosen

        if(this.x == this.tx && this.y == this.ty) //if statement to check if the Player has reached the Target Tile
        { 
          this.isMoving = false; //Player is no longer moving
          this.dirX = 0; //resets dirX to 0 as the Player is static
          this.dirY = 0; //resets dirY to 0 as the Player is static
        }
      }
    }
  }
  
  // sprint() //allows Player to move faster by holding down Shift, useful for a walking simulator
  // {
  //   if(keyIsDown(SHIFT))
  //   {
  //     this.speed = 5; //sprint Speed
  //   }
  //   else
  //   {
  //     this.speed = 3; //default Player Speed
  //   }
  // }
  
  checkTarget() //assigns a target Tile in front of the Player in the direction they are moving, then checks whether the Tile itself is walkable
  {
    this.row = floor(this.y / tileSize); //finds the numerical value of each row, index 0 - 9
    this.col = floor(this.x / tileSize); //finds the numerical value of each column, index 0 - 9
    
    let targetRow = this.row + this.dirY; //sets target Row as the next Row the player is travelling in, positive or negative
    let targetCol = this.col + this.dirX; //sets target Column as the next Col the player is travelling in, positive or negative
    
    if(this.row >= 0 && this.row < numRows && this.col >= 0 && this.col < numCols)
    { //checks if the Row or Column is within the bounds of the Canvas Size

      if(this.map.collisionMap[targetRow][targetCol] == 1)
      { //references the collision map, using targetRow and targetCol as indexes to check whether the element of the target Tile is 1 (walkable)
        this.tx = targetCol * tileSize; //sets target Tile on X-axis by finding the position of the Tile's corner origin
        this.ty = targetRow * tileSize; //sets target Tile on Y-axis by finding the position of the Tile's corner origin
        
        this.isMoving = true; //player can move
      }
    }
  }
  
  returnDialogueID()
  {
    if(!this.isMoving) 
    {
      let targetRow = this.row + this.dirY;
      let targetCol = this.col + this.dirX;
      
      if(this.row >= 0 && this.row < numRows && this.col >= 0 && this.col < numCols)
      {
        return this.map.dialogueMap[targetRow][targetCol]; //returns the numerical value of the dialogue map index
      }
      else
      {
        return -1; //returns -1 representing no dialogue
      }
    }
  }
  
  newSpawn(map, startRow, startCol)
  {
    this.map = map; //keeps track of the new map
    
    this.row = startRow; 
    this.col = startCol;
    this.x = startCol * tileSize;
    this.y = startRow * tileSize;
    
    this.isMoving = false; //set to no movement when loading into new map
  }
  
  checkTransition()
  {
    let targetRow = this.row + this.dirY;
    let targetCol = this.col + this.dirX;
      
    if(this.row >= 0 && this.row < numRows && this.col >= 0 && this.col < numCols)
    {
      return this.map.transitionMap[targetRow][targetCol]; //returns the numerical value of the transition map index
    }
    else
    {
      return -1; //returns -1 representing no transition
    }
  }
}