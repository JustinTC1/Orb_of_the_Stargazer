function preload()
{ //assigning textures to the bgTextures array with specific indexes used when building the Tilemap
  bgTextures[0] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Stone.png?v=1677671466511");
  bgTextures[1] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Grass.png?v=1677671552970");
  bgTextures[2] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Water.gif?v=1677671599322");
  bgTextures[3] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/planks.png?v=1678709982487");
  bgTextures[4] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/rockwall.png?v=1678024874781");
  bgTextures[5] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/stoneroof.png?v=1678025356847");
  bgTextures[6] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/mountain%20floor.png?v=1679322625674");
  bgTextures[7] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/mountain%20floor.png?v=1679322625674");
  bgTextures[8] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(5).png?v=1678712235178");
  bgTextures[9] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/mountain%20floor.png?v=1679322625674");
  bgTextures[10] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0.png?v=1679075654226");
  bgTextures[11] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0.png?v=1679320067040");
  bgTextures[12] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/door%20inside%20tavern%20texture.png?v=1679321044196");
  bgTextures[13] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/wood%20floor%20tavern%20texture.png?v=1679239842277");
  bgTextures[14] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/bar%20corner%20tavern%204.png?v=1679249765693");
  bgTextures[15] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/bar%20corner%20tavern%202.png?v=1679249726061");
  bgTextures[16] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/back%20wall%20tavern.png?v=1679243005517");
  bgTextures[17] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/bar%20middle%20tavern.png?v=1679249740370");
  bgTextures[18] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/table%20tavern%201.png?v=1679241886121");
  bgTextures[19] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/table%20tavern%202.png?v=1679241891628");
  bgTextures[20] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/table%20tavern%203.png?v=1679241898603");
  bgTextures[21] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/table%20tavern%204.png?v=1679241906301");
  bgTextures[22] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/image(1).png?v=1679333053865");
  bgTextures[23] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Wall%20Test.png?v=1678013756444");
  bgTextures[24] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/bar%20corner%20tavern%201.png?v=1679249714026");
  bgTextures[25] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/grassrockwall.png?v=1679146494613");
  
  //assigning textures to the fgTextures array with specific indexes used when building the Tilemap, [0] is null allowing for previous layer to show when fg is empty
  fgTextures[0] = null;
  
  fgTextures[1] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/BoatMidUp.png?v=1678018620601");
  fgTextures[2] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/BoatMidDown.png?v=1678018621003");
  fgTextures[3] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/BoatBR.png?v=1678020069701");
  fgTextures[4] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/BoatTR.png?v=1678020070327");
  fgTextures[5] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/BoatBL.png?v=1678020070606");
  fgTextures[6] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/BoatTL.png?v=1678020069992");
  
  fgTextures[7] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/house(%201).png?v=1678714690044");
  fgTextures[8] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/house(%202).png?v=1678714690348");
  fgTextures[9] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/house(%203).png?v=1678714690653");
  fgTextures[10] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/house(%204).png?v=1678714690941");
  fgTextures[11] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/house(%205).png?v=1678714691229");
  fgTextures[12] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/house(%206).png?v=1678714691498");
  fgTextures[13] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/house(%207).png?v=1678714691765");
  fgTextures[14] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/house(%208).png?v=1678714692030");
  fgTextures[15] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/house(%209).png?v=1678714692315");
  fgTextures[16] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(8).png?v=1678713951638");
  fgTextures[17] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(9).png?v=1678714682703");
  fgTextures[18] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(1).png?v=1679064712459");
  
  fgTextures[19] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(17).png?v=1679146495676");
  fgTextures[20] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(18).png?v=1679146495352");
  fgTextures[21] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(15).png?v=1679146491450");
  fgTextures[22] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(16).png?v=1679146490698");
  fgTextures[23] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(11).png?v=1679146492733");
  fgTextures[24] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(13).png?v=1679146492091");
  fgTextures[25] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(12).png?v=1679146492441");
  fgTextures[26] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(14).png?v=1679146491755");
  fgTextures[27] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(19).png?v=1679147148396");
  fgTextures[28] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(20).png?v=1679147145793");
  fgTextures[29] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(21).png?v=1679147145390");
  fgTextures[30] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(22).png?v=1679147146207");
  fgTextures[31] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(1).png?v=1679149280940");
  fgTextures[32] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(3).png?v=1679151231556");
  fgTextures[33] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(2).png?v=1679151231988");
  fgTextures[34] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(9).png?v=1679151232889");
  fgTextures[35] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(16).png?v=1679152821528");
  fgTextures[36] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(14).png?v=1679152819810");
  fgTextures[37] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(15).png?v=1679152819432");
  fgTextures[38] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(17).png?v=1679152821107");
  fgTextures[39] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(18).png?v=1679152820710");
  fgTextures[40] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(22).png?v=1679156055121");
  fgTextures[41] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(21).png?v=1679155926049");
  fgTextures[42] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(20).png?v=1679155928186");
  fgTextures[43] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(25).png?v=1679165400581");
  //fgTexutres[44] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(24).png?v=1679165401320");
  fgTextures[45] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(23).png?v=1679165401848");
  fgTextures[46] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(26).png?v=1679165402448");
  fgTextures[46] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(24).png?v=1679165401320");
  fgTextures[47] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/villager%202%20sprite.png?v=1678713067547");
  fgTextures[48] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(31).png?v=1679171192163");
  fgTextures[49] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(28).png?v=1679171193425");
  fgTextures[50] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(25).png?v=1679171190635");
  fgTextures[51] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(26).png?v=1679171194133");
  fgTextures[52] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(29).png?v=1679171193055");
  fgTextures[53] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(32).png?v=1679171191809");
  fgTextures[54] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(24).png?v=1679171196745");
  fgTextures[55] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(27).png?v=1679171193782");
  fgTextures[56] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0%20(30).png?v=1679171192530");
  fgTextures[57] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(29).png?v=1679227869551");
  fgTextures[58] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(31).png?v=1679227945542");
  fgTextures[59] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(30).png?v=1679227869206");
  fgTextures[60] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(32).png?v=1679229804864");
  fgTextures[61] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(33).png?v=1679230211889");
  fgTextures[62] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(35).png?v=1679250591556");
  fgTextures[63] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/glasses%20on%20shelf%20tavern.png?v=1679325675260");
  fgTextures[64] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/bottles%20on%20shelf%20tavern.png?v=1679324949830");
  fgTextures[65] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/glasses%20on%20shelf%20tavern.png?v=1679398106295");
  fgTextures[66] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/book%20shelf%203%20library.png?v=1679318966492");
  fgTextures[67] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/book%20shelf%204%20library.png?v=1679318969301");
  fgTextures[68] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/book%20shelf%202%20library.png?v=1679318963562");
  fgTextures[69] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/book%20shelf%201%20library.png?v=1679318957885");
  fgTextures[70] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/books%20for%20library%20table.png?v=1679325757208");
  fgTextures[71] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/orb%20pixel%20version.png?v=1679238789691");
  fgTextures[72] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0.png?v=1679401109570");
  fgTextures[73] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/pixil-frame-0(39).png?v=1679419757315");
  fgTextures[74] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/boat%20front%20top.png?v=1679404717339");
  fgTextures[75] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/boat%20front%20bottom.png?v=1679404737199");
  fgTextures[76] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/boat%20mid%20top.png?v=1679404747427");
  fgTextures[77] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/boat%20mid%20bottom.png?v=1679404754419");
  fgTextures[78] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/boat%20end%20top.png?v=1679404772245");
  fgTextures[79] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/boat%20end%20bottom.png?v=1679404786035");
  fgTextures[80] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/tavern%20exterior%201.png?v=1679488481379");
  fgTextures[81] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/tavern%20exterior%202.png?v=1679488487234");
  fgTextures[82] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/tavern%20exterior%203.png?v=1679488496258");
  fgTextures[83] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/tavern%20exterior%204.png?v=1679488511721");
  fgTextures[84] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/tavern%20exterior%205.png?v=1679488527629");
  fgTextures[85] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/tavern%20exterior%206.png?v=1679488552312");
  fgTextures[86] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/tavern%20exterior%207.png?v=1679488559193");
  fgTextures[87] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/tavern%20exterior%208.png?v=1679488564782");
  fgTextures[88] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/tavern%20exterior%209.png?v=1679488572065");
  fgTextures[89] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/library%20exterior%201.png?v=1679493507595");
  fgTextures[90] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/library%20exterior%202.png?v=1679493515734");
  fgTextures[91] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/library%20exterior%203.png?v=1679493522568");
  fgTextures[92] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/library%20exterior%204.png?v=1679493528269");
  fgTextures[93] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/library%20exterior%205.png?v=1679493535557");
  fgTextures[94] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/library%20exterior%206.png?v=1679493541640");
  fgTextures[95] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/library%20exterior%207.png?v=1679493547994");
  fgTextures[96] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/library%20exterior%208.png?v=1679493553502");
  fgTextures[97] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/library%20exterior%209.png?v=1679493561052");
  fgTextures[98] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/gate%20left%20pillar%20top.png?v=1679495849651");
  fgTextures[99] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/gate%20left%20pillar%20mid.png?v=1679495862261");
  fgTextures[100] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/gate%20left%20pillar%20bottom.png?v=1679495870596");
  fgTextures[101] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/gate%20left%20bars%20top.png?v=1679496017483");
  fgTextures[102] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/gate%20left%20bars%20mid%20and%20bottom.png?v=1679496027930");
  fgTextures[103] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/gate%20right%20pillar%20top.png?v=1679496042860");
  fgTextures[104] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/gate%20right%20pillar%20mid.png?v=1679496055417");
  fgTextures[105] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/gate%20right%20pillar%20bottom.png?v=1679496062950");
  fgTextures[106] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/gate%20right%20bars%20top.png?v=1679496072279");
  fgTextures[107] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/gate%20right%20bars%20mid%20and%20bottom.png?v=1679496082906");
  fgTextures[108] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/stool%20tavern%20texture.png?v=1679246296435");
  
  //assigning textures to the interactTextures array with specific indexes used when building the Tilemap, [0] is null allowing for previous layer to show when interact is empty
  interactTextures[0] = null;
  interactTextures[1] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Sign.png?v=1677098752583");
  interactTextures[2] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Rival.png?v=1677412385991");
  interactTextures[3] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Librarian.png?v=1677670041065");
  interactTextures[4] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Tavernkeep.png?v=1677670041732");
  interactTextures[5] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/ferryman%20sprite.png?v=1679237247830");
  interactTextures[6] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/mayor%20sprite.png?v=1678711216227");
  interactTextures[7] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/guard%20sprite.png?v=1679320013631");
  interactTextures[8] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/villager%202%20sprite.png?v=1678713067547");
  interactTextures[9] = loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/villager%20sprite.png?v=1678712493600");
  
  //assigning sprites to the PlayerSprites object in key-value pairs, 2 Sprites for each Cardinal Direction the Player can move in, 1 static and 1 animated walk
  playerSprites = {
    up: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Player%20Up.png?v=1676908316321"),
    down: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Player%20Down.png?v=1676908316629"),
    left: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Player%20Left.png?v=1676908315734"),
    right: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Player%20Right.png?v=1676908316043"),
    walkUp: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Player%20walk%20Up.gif?v=1676922247546"),
    walkDown: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Player%20walk%20Down.gif?v=1676922247860"),
    walkLeft: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Player%20walk%20Left.gif?v=1676922246714"),
    walkRight: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Player%20walk%20Right.gif?v=1676922247168")
  }
  
  dialogueSprites = {
    box: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Text%20Box%20Test.png?v=1677186994976"),
    playerPortrait: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Player%20Portrait.png?v=1678029833670"),
    rivalPortrait: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/rival%20portrait.png?v=1678029833966"),
    librarianPortrait: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Librarian%20Portrait.png?v=1678029833059"),
    tavernkeepPortrait: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/Tavernkeep%20portrait.png?v=1678029834297"),
    ferrymanPortrait: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/ferryman%20portrait.png?v=1679152601494"),
    mayorPortrait: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/mayor%20portrait.png?v=1678715509357"),
    guardPortrait: loadImage("https://cdn.glitch.global/30e3888c-9df0-4010-892e-57e8c15cc01f/guard%20portrait.png?v=1679397552841")
  }
}