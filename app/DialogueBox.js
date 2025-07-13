class DialogueBox //class controlling all dialogue elements
{
  constructor(sprites)
  {
    this.sprites = sprites; //sprite KVP
    
    this.h = tileSize * 3; //height of box
    this.y = height - this.h; //vertical position of box
    this.margin = tileSize/2; //text margin
    
    this.nameCol = color(0); //name color changes depending on char
    this.textCol = color(0); //text color changes depending on char
    this.portrait = sprites.playerPortrait; //portrait changes to match speaker
  }
  
  boxDisplay()
  {
    push();
    imageMode(CORNER);
    image(this.sprites.box, 0, this.y, width, this.h); //draws the box
    pop();
  }
  
  setChar(speaker)
  { 
    if(speaker != null) //if the dialogue is between speakers
    {
      switch(speaker) //changes speaker based on dialogue array character
      {   
        case "You":
          this.nameCol = color(150, 0, 0); //rgb format
          this.textCol = color(100, 0, 0);
          this.portrait = this.sprites.playerPortrait;
          break;
        case "Ferryman":
          this.nameCol = color(100); //greyscale format
          this.textCol = color(50);
          this.portrait = this.sprites.ferrymanPortrait;
          break;
        case "Rival":
          this.nameCol = color(0, 0, 150);
          this.textCol = color(0, 0, 100);
          this.portrait = this.sprites.rivalPortrait;
          break;
        case "Librarian":
          this.nameCol = color(150, 0, 150);
          this.textCol = color(100, 0, 100);
          this.portrait = this.sprites.librarianPortrait;
          break;
        case "Tavernkeep":
          this.nameCol = color(0, 150, 0);
          this.textCol = color(0, 100, 0);
          this.portrait = this.sprites.tavernkeepPortrait;
          break;
        case "Mayor":
          this.nameCol = color(100, 100, 0);
          this.textCol = color(50, 50, 0);
          this.portrait = this.sprites.mayorPortrait;
          break;
        case "Guard":
          this.nameCol = color(50);
          this.textCol = color(0);
          this.portrait = this.sprites.guardPortrait;
          break;
        case "Guard 2":
          this.nameCol = color(100);
          this.textCol = color(50);
          this.portrait = this.sprites.guardPortrait;
          break;
        case "Villager":
          this.nameCol = color(50);
          this.textCol = color(0);
          this.portrait = null;
          break;
      }
    }
    else
    {
      this.textCol = color(255); //color of text for general interact
    }
  }
  
  infoDisplay(dialogueObject)
  {
    let speaker = dialogueObject.character; //speaker is based on character string
    let dialogue = dialogueObject.dialogue; //dialogue is based on dialogue string/s
    
    textWrap(WORD);
    textAlign(LEFT, CORNER);
    
    let x = 0;
    let size = tileSize * 5;
    let y = height - size;
    
    if(speaker != null) //if the dialogue is between speakers
    {
      if(speaker === "You") //player is always on the left side of the dialogue box, changes position of text to match
      { 
        x = 0; //changes portrait x position
        
      //name
        push();
        textSize(20);
        fill(this.nameCol);
        text(speaker, (tileSize * 4) + this.margin, this.y + this.margin, width - this.margin, this.h - this.margin);
        pop();
      //dialogue
        push();
        textSize(18);
        fill(this.textCol);
        text(dialogue, (tileSize * 4) + this.margin, this.y + (this.margin * 2), width / 2, this.h / 2);
        pop();
        
      }
      else //other speaker is always on the right side of the dialogue box, changes position of text to match
      {
        x = width - size; //changes portrait x position

      //name
        push();
        textSize(20);
        fill(this.nameCol);
        text(speaker, this.margin, this.y + this.margin, (width / 2) + this.margin, this.h);
        pop();
      //dialogue
        push();
        textSize(18);
        fill(this.textCol);
        text(dialogue, this.margin, this.y + (this.margin * 2), width / 2, this.h / 2);
        pop();
      }
      
      push();
      image(this.portrait, x, y, size, size); //draws the portrait
      pop();
    }
    else //if the dialogue is generic
    {
      textSize(20); //text size
      textAlign(CENTER, CENTER);
      
      push();
      fill(0);
      text(dialogue, this.margin, this.y + this.margin, width - (this.margin * 2), this.h - (this.margin * 2)); //text fills the whole dialogue box from the center
      pop();
    }
  }
  
  
}