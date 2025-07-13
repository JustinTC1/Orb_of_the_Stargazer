class Tile
{ 
  constructor(texture, row, column, size)
  {
    this.texture = texture; //references Textures array
    this.row = row; //references Row index
    this.column = column; //reference Column index
    this.size = size; //references assigned Size (64)
    
    this.x = column * size; //references exact horizontal position of Tile corner origin
    this.y = row * size; //references exact vertical position of Tile corner origin
  }
  
  display()
  {
    push(); //start of display data isolation (safety habit)
    
    if(this.texture !== null) //displays any Texture that is not null, allowing for Texture layers
    {
      imageMode(CORNER); //image drawn from top-left corner to be exact with Tile corner origin
      image(this.texture, this.x, this.y, this.size, this.size); //image that will be displayed references Texture from array and transform data assigned previously
    }
    pop(); //end of display data isolation
  }
}