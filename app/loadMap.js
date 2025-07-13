function loadMap(mapID)
{
  switch(mapID)
  {
    case 0: //dock
      player.newSpawn(Docks, player.row, 8); 
      buildMap(Docks);
      break;
      
    case 1: //cave
      if(prevMapID == 0)
      {
        player.newSpawn(Cave, player.row, 1);
      }
      if(prevMapID == 2)
      {
        player.newSpawn(Cave, 1, player.col);
      }
      buildMap(Cave);
      break;
      
    case 2: //VillageEntrance
      if(prevMapID == 1)
      {
        player.newSpawn(VillageEntrance, 8, player.col); 
      }
      if(prevMapID == 3)
      {
        player.newSpawn(VillageEntrance, 1, player.col);
      }
      buildMap(VillageEntrance);
      break;
      
    case 3: //villageMain
      if(prevMapID == 2)
      {
        player.newSpawn(VillageMain, 8, player.col);
      }
      if(prevMapID == 9)
      {
        player.newSpawn(VillageMain, 1, player.col);
      }
      if(prevMapID == 4)
      {
        player.newSpawn(VillageMain, player.row, 1);
      }
      if(prevMapID == 6)
      {
        player.newSpawn(VillageMain, player.row, 8);
      }
      buildMap(VillageMain);
      break;
      
    case 4: //VillageLeft
      if(prevMapID == 3)
      {
        player.newSpawn(VillageLeft, player.row, 8); 
      }
      if(prevMapID == 5)
      {
        player.newSpawn(VillageLeft, player.row, 1); 
      }
      buildMap(VillageLeft);
      break;
      
    case 5: //VillageCliff 
      player.newSpawn(VillageCliff, player.row, 8); 
      buildMap(VillageCliff);
      break;
      
    case 6: //VillageRight
      if(prevMapID == 3)
      player.newSpawn(VillageRight, player.row, 1); 
      if(prevMapID == 7)
      player.newSpawn(VillageRight, 4, 2);
      if(prevMapID == 8)
      player.newSpawn(VillageRight, 6, 7);
      buildMap(VillageRight);
      break;
      
    case 7: //Tavern
      player.newSpawn(Tavern, 8, 3); 
      buildMap(Tavern);
      break;
      
    case 8: //Library
      player.newSpawn(Library, 4, 1); 
      buildMap(Library);
      break;
      
    case 9: //MountEntrance
      if(prevMapID == 3)
      player.newSpawn(MountEntrance, 8, player.col); 
      if(prevMapID == 10)
      player.newSpawn(MountEntrance, 5, player.col)
      buildMap(MountEntrance);
      break;
          
    case 10: //Mount1
      if(prevMapID == 9)
      player.newSpawn(Mount1, 8, player.col); 
      if(prevMapID == 11)
      {
        player.newSpawn(Mount1, 1, player.col); 
      }
      buildMap(Mount1);
      break;
      
      
    case 11: //Mount2
      if(prevMapID == 10)
      player.newSpawn(Mount2, 8, player.col); 
      
      if(prevMapID == 12)
      {
        player.newSpawn(Mount2, 1, player.col); 
      }
      buildMap(Mount2);
      break;
      
    case 12: //Mount3
      if(prevMapID == 11)
      player.newSpawn(Mount3, 8, player.col); 
      if(prevMapID == 13)
      player.newSpawn(Mount3, 1, player.col)
      buildMap(Mount3);
      break;
      
    case 13: //MountEnd
      player.newSpawn(MountEnd, 8, player.col); 
      buildMap(MountEnd);
      break;
      
    case 14:
      player.newSpawn(VilMayo, 8, player.col); 
      buildMap(VilMayo);
      break;
      
  }
  
  prevMapID = mapID;
}