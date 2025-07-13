let Docks = { //starting map 0
  
  backgroundMap: [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 5],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 5],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 5],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
    [2, 2, 3, 3, 3, 3, 3, 3, 3, 1],
    [2, 2, 3, 3, 3, 3, 3, 3, 3, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 5],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 5],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 5],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 5]
  ],
  
  collisionMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  
  foregroundMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 19, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 19, 0],
    [0, 0, 74, 76, 78, 0, 0, 0, 19, 0],
    [0, 0, 75, 77, 79, 0, 0, 0, 19, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 74, 76, 78, 0, 0, 0, 0, 19, 0],
    [0, 75, 77, 79, 0, 0, 0, 0, 19, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 19, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 19, 0]
  ],
    
  interactMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  
  dialogueMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1,  0,  0, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1,  2, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1,  1,  1,  1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ],
  
  dialogueArray: [
    [{dialogue: "The Ferryman's boat."}],
    
    [{dialogue: "Another boat, did the village welcome another traveller?"}],
    
    [{character: "Ferryman", dialogue: "Mage, we're here."},
     {character: "You", dialogue: "Indeed, thank you for your service."},
     {character: "Ferryman", dialogue: "Hehehehehe!"},
     {character: "Ferryman", dialogue: "Ah, don't mention it. Safe travels mage."},
     {character: "You", dialogue: "Thank you, and safe travels to you too. Farewell."}]
  ],
  
  newDialogue: [
    [{dialogue: "The Ferryman's boat"}],
    
    [{dialogue: "Another boat, did the village welcome another traveller?"}],
    
    [{character: "Ferryman", dialogue: "Did you forget something?"},
     {character: "Ferryman", dialogue: "Hehehe."},
     {character: "Ferryman", dialogue: "The village isn't back here, use your legs and move forwards."},
     {character: "Ferryman", dialogue: "Hehehehehehehehehe!"}]
  ],
  
  transitionMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1,  1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1,  1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  ]
} 

let Cave = { //1
  
  backgroundMap: [
    [5, 5, 5, 5, 1, 1, 4, 4, 5, 5],
    [5, 5, 5, 5, 1, 1, 0, 0, 4, 5],
    [5, 5, 5, 5, 5, 0, 0, 0, 0, 5],
    [4, 4, 5, 5, 5, 5, 5, 0, 0, 5],
    [0, 0, 4, 5, 5, 5, 4, 0, 0, 5],
    [0, 0, 0, 5, 5, 4, 0, 0, 0, 5],
    [5, 0, 0, 4, 4, 1, 1, 0, 5, 5],
    [5, 0, 0, 0, 1, 1, 1, 5, 5, 5],
    [5, 5, 0, 1, 1, 1, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  ],
  
  collisionMap: [
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  
  foregroundMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 29, 25, 0, 0, 0, 0, 0, 0],
    [0, 0, 19, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  
  interactMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  
  dialogueMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1,  0, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ],
  
  dialogueArray: [
    [{dialogue: "Village Ahead"}, 
     {dialogue: "Act appropriately."}]
  ],
  
  transitionMap: [
    [-1, -1, -1, -1,  2,  2, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ 0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ 0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  ]
}

let VillageEntrance = { //2

  backgroundMap: [
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],

  collisionMap: [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], //0 is collision, 1 is free
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ],
  
  newCollision: [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], //0 is collision, 1 is free
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ],

  foregroundMap: [
    [18,  0,  0,  0,  0,  0,  0,  0,  0, 62],
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [0, 18, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [101, 101, 101, 101, 98, 103, 106, 106, 106, 106],
    [102, 102, 102, 102, 99, 104, 107, 107, 107, 107],
    [102, 102, 102, 102, 100, 105, 107, 107, 107, 107],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 43, 0, 0, 0, 0, 0, 0, 43, 0],
    [40, 40, 40, 42, 0, 0, 41, 40, 40, 40]
  ],
  
  newFG: [
    [18,  0,  0,  0,  0,  0,  0,  0,  0, 62],
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [0, 18, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [101, 101, 101, 98, 0, 0, 103, 106, 106, 106],
    [102, 102, 102, 99, 0, 0, 104, 107, 107, 107],
    [102, 102, 102, 100, 0, 0, 105, 107, 107, 107],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 43, 0, 0, 0, 0, 0, 0, 43, 0],
    [40, 40, 40, 42, 0, 0, 41, 40, 40, 40]
  ],

  interactMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 8, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 7, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  dialogueMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //start from 0 to insert new dialogue, corresponds to index below
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1,  1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1,  0, -1, -1,  0, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ],

  dialogueArray: [
    
    [{character: "Guard", dialogue: "Hold it! State your business."},
     {character: "You", dialogue: "I’m the mage that has been sent to obtain the Orb of the First Stargazer located in this village. *shows papers*"},
     {character: "Guard", dialogue: "Lemme see... I see, you may pass through."},
     {character: "Guard 2", dialogue: "Hold it... Why do you think you have the right to the orb, we were the ones to find it!"},
     {character: "You", dialogue: "The kingdom requires it."},
     {character: "Guard 2", dialogue: " And why should we care!? The kingdom didn’t when we were struggling!"},
     {character: "Guard", dialogue: "Calm yourself! The Mayor says he is going to give it to them and that’s the end of it! We may not know her nor her land, true, but the Mayor's word is final."},
     {character: "Guard 2", dialogue: "Why should I give a rat's ass about that!? We are gonna suffer for this!"},
     {character: "Guard", dialogue: "The Mayor is going to get a lot of coin for it, so the village could still live on, and we won’t have to put all of our trust in some “magic”."},
     {character: "Guard 2", dialogue: "..."},
     {character: "You", dialogue: "Look, I have documents from the mayor saying I have the right to do this. If you have any complaints you can talk to him."},
     {character: "You", dialogue: "Now, please let me through, I have important business to get to."},
     {character: "Guard 2", dialogue: "Bastard!"},
     {character: "You", dialogue: "Also, could you possibly point me in the direction of a tavern? I could use a drink after that journey."},
     {character: "Guard", dialogue: "Sure thing. Go straight ahead then turn right and you'll spot it easily. Also apologies for him over there. He can be a bit techy at times."},
     {character: "You", dialogue: "Thank you"}], //Multi page dialogue, if no character, remove character section
    
    [{dialogue: "Villager: *Shakes his head* Not another one..."}]
  ],
  
  newDialogue: [
    [{character: "Guard", dialogue: "Remember, the Tavern is on the East side of town."},
     {character: "Guard 2", dialogue: "Get out of here, damn mage!"}],
    
    [{dialogue: "Villager: *Shakes his head* Not another one..."}]
  ],

  transitionMap: [
    [-1,  3,  3,  3,  3,  3,  3,  3,  3, -1], //change -1 to correct map transition ID (check loadMap)
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1,  1,  1, -1, -1, -1, -1]
  ]

}

let VillageMain = { //3
  
  backgroundMap: [
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 7, 1, 7, 7, 1, 7, 1, 1],
    [6, 6, 6, 6, 7, 7, 6, 6, 6, 6],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 9, 9, 1, 1, 1, 1]
  ],
  
  collisionMap: [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  ],
  
  foregroundMap: [
    [31, 0, 16, 0,  0,  0,  0,  0,  0,  62],
    [18, 13, 14, 15, 0, 0, 13, 14, 15, 18],
    [0, 10, 11, 12, 0, 0, 10, 11, 12,  16],
    [ 0, 7,  8,  9,  0,  0,  7,  8,  9, 0],
    [0, 17, 0, 17, 0,  0,  17,  0,  0, 0],
    [0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
    [0,  0,  0,  0,  0,  0,  0,  0,  0, 0],
    [0, 16, 0, 0,  0,  0,  0,  0,  16,  0],
    [0, 0, 0, 16,  0,  0,  0,  18,  0, 0],
    [18, 0,  0,  0,  0,  0,  0,  0,  0, 31],
  ],
  
  interactMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 8, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 9, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  
  dialogueMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1,  2, -1, -1, -1, -1,  2, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1,  0, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1,  1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ],
  
  dialogueArray: [
    [{dialogue: "Man: Never seen you around here before."}],
    
    [{dialogue: "Elderly Woman: Lovely weather we're having today."}],
    
    [{dialogue: "The door is locked and this is not my house."},
     {dialogue: "Let's show some respect to the locals."}]
  ],
  
  transitionMap: [
    [-1,  9,  9,  9,  9,  9,  9,  9,  9,  -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1,  6],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1,  6],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1,  6],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1,  6],
    [4, -1, -1, -1, -1, -1, -1, -1, -1,  6],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1,  6],
    [4, -1, -1, -1, -1, -1, -1, -1, -1,  6],
    [4, -1, -1, -1, -1, -1, -1, -1, -1,  6],
    [-1, 2,  2,  2,  2,  2,  2,  2,  2, -1]
  ]
}

let VillageLeft = { //4

  backgroundMap: [
    [1, 1, 1, 1, 1, 1,   1,   1,   1,   1],
    [1, 1, 1, 1, 1, 1,   1,   1,   1,   1],
    [1, 1, 1, 1, 1, 1,   1,   1,   1,   1],
    [1, 1, 1, 1, 1, 1,   1,   1,   1,   1],
    [1, 1, 7, 1, 1, 1,   1,   7,   1,   1],
    [6, 6, 6, 6, 6, 6,   6,   6,   6,   6],
    [1, 1, 1, 1, 1, 1,   1,   1,   1,   1],
    [1, 10, 10, 10, 10, 10, 10, 10, 10, 1],
    [1, 10, 10, 10, 10, 10, 10, 10, 10, 1],
    [1, 1, 1, 1, 1, 1,   1,   1,   1,   1]
  ],

  collisionMap: [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  
  newCollision: [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  

  foregroundMap: [
    [56, 48, 48, 48,   48,   48,   48,   48,   48,   53],
    [0, 13, 14,   15,   0,   0, 13, 14, 15, 62],
    [0, 10, 11,   12,   0,   0, 10, 11, 12, 0],
    [0, 7, 8, 9,   0,   0,   7,   8,   9,   0],
    [0, 17, 0, 17, 0, 0,  0,   0,   0,   0],
    [0, 0, 0, 0,   0,   0,   0,   0,   0,   0],
    [0, 17, 17,   17,   17, 17, 17, 17, 17, 0],
    [0, 0, 0, 0,   0,   0,   0,   0,   0,   0],
    [0, 0, 0, 0,   0,   0,   0,   0,   0,   0],
    [18, 17, 17,   17,   17, 17, 17, 17, 17, 18]
  ],

  interactMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 0, 8, 0, 0, 0, 0, 0, 0],
    [0, 9, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  
  newInteract: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 8, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  dialogueMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //start from 0 to insert new dialogue, corresponds to index below
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1,  1, -1, -1, -1, -1,  1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1,  2, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ 2, -1, -1,  0, -1, -1, -1, -1, -1, -1],
    [-1,  2, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ],
  
  dialogueArray: [
    [{dialogue: "Farmer: Could you not step on my crops!!"},
     {dialogue: "Farmer: Such a rude traveller!"}],
    
    [{dialogue: "The door is locked and this is not my house."},
     {dialogue: "I doubt home invasion would benefit my already shaky standing with the locals."}],
    
    [{dialogue: "Looks like a father trying to control his energetic daughters."},
     {dialogue: "I am much too tired for this, I should head to the Tavern."}]
  ],
  
   newDialogue1: [
     [{dialogue: "Farmer: Could you not step on my crops!!"},
     {dialogue: "Farmer: Such a rude traveller!"}],
    
    [{dialogue: "The door is locked and this is not my house."},
     {dialogue: "I doubt home invasion would benefit my already shaky standing with the locals."}],
    
    [{dialogue: "I guess he's managed to control them."},
     {dialogue: "Looks like they're playing in the farm now."},
     {dialogue: "Yet I'm the rude one for walking off the path. I should find the Librarian."}]
   ],
  
  newDialogue2: [
     [{dialogue: "Farmer: Could you not step on my crops!!"},
     {dialogue: "Farmer: Such a rude traveller!"}],
    
    [{dialogue: "The door is locked and this is not my house."},
     {dialogue: "I doubt home invasion would benefit my already shaky standing with the locals."}],
   ],

  transitionMap: [
    [5, -1, -1, -1, -1, -1, -1, -1, -1, -1], //change -1 to correct map transition ID (check loadMap)
    [5, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [5, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [5, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [5, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [5, -1, -1, -1, -1, -1, -1, -1, -1,  3],
    [5, -1, -1, -1, -1, -1, -1, -1, -1,  3],
    [5, -1, -1, -1, -1, -1, -1, -1, -1,  3],
    [5, -1, -1, -1, -1, -1, -1, -1, -1,  3],
    [5, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ]
}

let VillageCliff = { //5

  backgroundMap: [
    [2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 1, 1, 1, 6, 6],
    [2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 1, 1, 1, 1, 1, 1]
  ],

  collisionMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0 is collision, 1 is free
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  foregroundMap: [
    [0, 0, 0, 0, 0, 56, 48, 48, 48,  18],
    [0, 0, 0, 0, 0, 18, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,  0],
    [0, 0, 0, 0, 0, 0, 0, 0, 19,  0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,  0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,  0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,  0],
    [0, 0, 0, 0, 0, 54, 50, 51, 0, 0],
    [0, 0, 0, 0, 0, 55, 49, 52, 0, 0],
    [0, 0, 0, 0, 0, 56, 48, 53, 16, 31],
  ],

  interactMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 6, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  
  dialogueMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //start from 0 to insert new dialogue, corresponds to index below
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1,  0, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ],

  dialogueArray: [
    [{character: "Mayor", dialogue: "Who might you be?"},
     {character: "You", dialogue: "The mage you hired sir."},
     {character: "Mayor", dialogue: " Ah, it’s you eh? Show me the papers so I know you aren’t just some quack."},
     {character: "You", dialogue: "*Hands over papers*"},
     {character: "Mayor", dialogue: "So, you are an honest to god Mage?"},
     {character: "You", dialogue: "That's what I said."},
     {character: "Mayor", dialogue: "So you want the orb? You know the deal, show some coin would you?"},
     {character: "You", dialogue: "*Gives 2 bags of coin to the Mayor*"},
     {character: "Mayor", dialogue: "Now that’s what I like to see! Well go on, go get it."},
     {character: "You", dialogue: "What do you mean?"},
     {character: "Mayor", dialogue: "Go get the orb, it’s in the mountain."},
     {character: "You", dialogue: "You don’t have it on you?"},
     {character: "Mayor", dialogue: "Nah, why would I?"},
     {character: "You", dialogue: "Not even in the village?"},
     {character: "Mayor", dialogue: "Haha, of course not!"},
     {character: "You", dialogue: "I see... May I ask why?"},
     {character: "Mayor", dialogue: "Just don't have it on me, my legs do hurt a lot nowadays!"},
     {character: "Mayor", dialogue: "And it's much too valuable to vault in the village."},
     {character: "You", dialogue: "Why wasn’t I informed of this!?"},
     {character: "Mayor", dialogue: "Didn’t have the means to. Not that it really matters."},
     {character: "Mayor", dialogue: "A little hike never hurt anyone, hahaha!"},
     {character: "You", dialogue: "..."},
     {character: "Mayor", dialogue: "Come on, jog on or were you just handing me money for free?"},
     {character: "Mayor", dialogue: "You're not the only mage that came seeking the orb after all..."}]//Multi page dialogue, if no character, remove character section
  ],
  
  newDialogue: [
    [{character: "Mayor", dialogue: "I've let the guards know that you have my permission."},
     {character: "Mayor", dialogue: "Head north of the village square and you'll reach the gate"},
     {character: "Mayor", dialogue: "Chop Chop, hurry along then!"}]
  ],

  transitionMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //change -1 to correct map transition ID (check loadMap)
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1,  4],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1,  4],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1,  4],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ]
}

let VillageRight = { //6

  backgroundMap: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 7, 1, 1, 1, 1, 1, 1, 1],
    [6, 6, 7, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 7, 6, 6, 6, 6, 6, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 2, 2, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 1, 1, 1, 1, 1]
  ],

  collisionMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0 is collision, 1 is free
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  
  newCollision: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0 is collision, 1 is free
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  foregroundMap: [
    [56, 48, 48, 48, 48, 48, 48, 48, 48, 53],
    [0, 80, 83, 86, 0, 0, 0, 0, 0, 0],
    [0, 81, 84, 87, 0, 0, 0, 0, 0, 0],
    [0, 82, 85, 88, 0, 0, 89, 92, 95, 0],
    [0, 0, 0, 0, 0, 0, 90, 93, 96, 0],
    [0, 0, 0, 0, 0, 0, 91, 94, 97, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 54, 50, 51, 0, 0],
    [0, 0, 0, 0, 0, 55, 49, 52, 0, 0],
    [16, 0, 0, 0, 0, 56, 48, 53, 31, 18]
  ],

  interactMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 8, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  dialogueMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //start from 0 to insert new dialogue, corresponds to index below
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1,  0, -1,  1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ],
  
  dialogueArray: [
    [{dialogue: "Villager: You're the second mage I've seen here today."},
     {dialogue: "Villager: At least you look more stable than the last guy."}
    ],
    
    [{dialogue: "The door is locked shut. The Librarian must be out right now."}]
  ],
  
  newDialogue: [
    [{dialogue: "Villager: You're the second mage I've seen here today."},
     {dialogue: "Villager: At least you look more stable than the last guy."}
    ]
  ],

  transitionMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //change -1 to correct map transition ID (check loadMap)
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, 7,  -1, -1, -1, -1, -1, -1, -1],
    [ 3, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ 3, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ 3, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ 3, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ 3, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ],
  
  newTransition: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //change -1 to correct map transition ID (check loadMap)
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, 7,  -1, -1, -1, -1, -1, -1, -1],
    [ 3, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ 3, -1, -1, -1, -1, -1, -1,  8, -1, -1],
    [ 3, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ 3, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [ 3, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ]
}
  
let Library = { //7

  backgroundMap: [
    [16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
    [13, 13, 13, 13, 17, 17, 17, 13, 13, 13],
    [22, 13, 13, 13, 13, 13, 13, 13, 13, 13],
    [13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
    [13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
    [13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
    [13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
    [13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
  ],

  collisionMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0 is collision, 1 is free
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
    
  foregroundMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 69, 68, 0, 0, 0, 0, 69, 68, 0],
    [70, 66, 67, 0, 0, 0, 0, 66, 67, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 70, 0],
    [0, 0, 0, 69, 68, 0, 0, 69, 68, 0],
    [0, 0, 0, 66, 67, 0, 0, 66, 67, 0],
    [0, 0, 0, 70, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 70, 0, 0, 0],
    [69, 68, 70, 69, 68, 0, 69, 68, 0, 0],
    [66, 67, 0, 66, 67, 70, 66, 67, 70, 70]
  ],

  interactMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 9, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  dialogueMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //start from 0 to insert new dialogue, corresponds to index below
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, 0, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1,  1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ],

  dialogueArray: [
    [{character: "Librarian", dialogue: "Well hello there, who might you be?"},
     {character: "You", dialogue: "A traveller. I just wanted to ask about the orb that is apparently in this village."},
     {character: "Librarian", dialogue: "Oh, you must be the mage!"},
     {character: "You", dialogue: "Yes, I even have papers to prove it."},
     {character: "Librarian", dialogue: "Oh wow! You're not the first traveller to ask me about the orb today, at least you seem more agreeable!"},
     {character: "Librarian", dialogue: "A busy day for our secluded little village. Hahaha!"},
     {character: "Librarian", dialogue: "Anyway, what would you like to learn about the orb?"},
     {character: "You", dialogue: "Well I want to know what the orb really does."},
     {character: "Librarian", dialogue: "Well, to be honest, we never really knew..."},
     {character: "You", dialogue: "How so?"},
     {character: "Librarian", dialogue: "We were just never told what the orb... did."},
     {character: "You", dialogue: "Well... how did the Mayor find it?"},
     {character: "Librarian", dialogue: "Well, he never told us how he found it, but good thing he did!"},
     {character: "You", dialogue: "...Right."},
     {character: "Librarian", dialogue: "It was around the time when everyone was losing hope in him and the village."},
     {character: "You", dialogue: "Why is that?"},
     {character: "Librarian", dialogue: "We had no money and our crops refused to grow, but then the orb came!"},
     {character: "Librarian", dialogue: "As if our lives were simply a tragic tale and the orb was our ray of hope!"},
     {character: "You", dialogue: "I see..."},
     {character: "Librarian", dialogue: "Don't feel too bad about taking the orb though, we'll be fine now!"},
     {character: "You", dialogue: "Right, about that, where would your Mayor usually be at the moment?"},
     {character: "Librarian", dialogue: "Oh Cliff? He's at the Cliff?"},
     {character: "You", dialogue: "I beg your pardon?"},
     {character: "Librarian", dialogue: "The Mayor's name is 'Cliff' and he's at the Cliff. As if he was destined to be there!"},
     {character: "Librarian", dialogue: "Hahaha! *Snort*"},
     {character: "You", dialogue: "I see..."},
     {character: "Librarian", dialogue: "The cliff is the western edge of the village, past the farms."},
     {character: "You", dialogue: "Thank you for your time, and for the history lesson"},
     {character: "Librarian", dialogue: "No problem, I always love to tell a story. Farewell!"}],
    
    [{dialogue: "Villager: You look like a mage"},
     {dialogue: "Villager: You must be very knowledgable, just like our Librarian"}]
  ],
  
  newDialogue: [
    [{character: "Librarian", dialogue: "Still here are we? Did you get lost, I might have a local map somewhere!"},
     {character: "Librarian", dialogue: "Although I doubt I will find it unfortunately."},
     {character: "Librarian", dialogue: "Or maybe you're indulging in a book? Ahhhh the joys of being scholars!"},
     {character: "Librarian", dialogue: "I'm sure you can agree as a fellow person of intellect!"},
     {character: "Librarian", dialogue: "Oh yes, the Cliff, I forgot! Just head west to the edge of the village. The Mayor should be there!"}],
    
    [{dialogue: "Villager: You look like a mage"},
     {dialogue: "Villager: You must be very knowledgable, just like our Librarian"}]
  ],

  transitionMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //change -1 to correct map transition ID (check loadMap)
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [6, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ]

}

let Tavern = { //8

  backgroundMap: [
    [16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [13, 24, 13, 13, 13, 13, 13, 13, 13, 13],
    [13, 15, 17, 17, 17, 17, 17, 17, 17, 17],
    [13, 18, 19, 13, 13, 13, 13, 18, 19, 13],
    [13, 20, 21, 13, 13, 13, 13, 20, 21, 13],
    [13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
    [13, 18, 19, 13, 13, 13, 13, 18, 19, 13],
    [13, 20, 21, 13, 13, 13, 13, 20, 21, 13],
    [13, 13, 13, 12, 13, 13, 13, 13, 13, 13]
  ],

  collisionMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0 is collision, 1 is free
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
  ],

  foregroundMap: [
    [0, 64, 0, 0, 63, 0, 0, 64, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 65, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 108],
    [0, 0, 65, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [108, 0, 0, 0, 0, 0, 108, 0, 0, 0]
  ],

  interactMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
    [0, 0, 0, 8, 0, 0, 0, 0, 0, 0],
    [0, 0, 8, 0, 0, 0, 0, 9, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 9, 7, 0, 0, 0, 0]
  ],

  dialogueMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //start from 0 to insert new dialogue, corresponds to index below
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, 0, -1, -1, -1, -1],
    [-1, -1, -1,  2, -1, -1, -1, -1, -1, -1],
    [-1, -1,  4, -1, -1, -1, -1,  3, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1,  1,  1, -1, -1, -1, -1]
  ],

  dialogueArray: [
    [{character: "Tavernkeep", dialogue: "Bar's busy, hope you don't mind the noise."},
     {character: "You", dialogue: "Not really, just relaxing, I had a long journey."},
     {character: "Tavernkeep", dialogue: "Long journey? You that mage?"},
     {character: "You", dialogue: "Oh my god please don't shout at me, it's not my cho-"},
     {character: "Tavernkeep", dialogue: "Hey, don't worry about it! I don't really care about the orb."},
     {character: "You", dialogue: "Oh thank god!"},
     {character: "Tavernkeep", dialogue: "But... You are the reason why my sales have been bad."},
     {character: "You", dialogue: "On the behalf of the kingdom, we are sor-"},
     {character: "Tavernkeep", dialogue: "I'm kidding! Haha! Don't worry about it and loosen up a bit!"},
     {character: "Tavernkeep", dialogue: "Although maybe not as much as that other traveller, the guy was a nutter."},
     {character: "Tavernkeep", dialogue: "Anyway, have a drink and get some rest, all you've done is travel."},
     {character: "You", dialogue: "I suppose you're right. I'll have a drink."},
     {character: "Tavernkeep", dialogue: "Good on ya!"},
     {dialogue: "*2 hours later*"},
     {character: "You", dialogue: "I feel refreshed. Thanks for the hospitality."},
     {character: "You", dialogue: "Anyways, I'll be going now."},
     {character: "Tavernkeep", dialogue: "Haha, good luck! However if I were you I'd go home."},
     {character: "You", dialogue: "Why would that be?"},
     {character: "Tavernkeep", dialogue: "I never believed in the nonsense the Mayor told me. Nothing ever grew better besides Cliff's pockets."},
     {character: "You", dialogue: "How so?"},
     {character: "Tavernkeep", dialogue: "Crops were still bad and the people... even more annoying."},
     {character: "You", dialogue: "I see...?"},
     {character: "Tavernkeep", dialogue: "You don't buy that, eh?"},
     {character: "You", dialogue: "I don't really care what it is, I just need the orb."},
     {character: "Tavernkeep", dialogue: "A lap dog eh?"},
     {character: "You", dialogue: "Might you know where the Mayor is?"},
     {character: "Tavernkeep", dialogue: "Not a clue, the old fart disappears whenever he wants. Talk to the Librarian, he might know, we're good buddies."},
     {character: "Tavernkeep", dialogue: "He's literally next door. A tavern and a library next to each other, hahaha, it's absurd!"},
     {character: "You", dialogue: "Thank you."}],
    
    [{dialogue: "Villager: Did you hear, another one's entered town"},
     {dialogue: "Guard: Aye, luckily I'm on break, so that's not my problem!"},
     {dialogue: "Villager: Sometimes I wonder what the Mayor is thinking..."}],
    
    [{dialogue: "Drunk: Oiii, I've ne'er seen you 'round 'ere"},
     {dialogue: "Drunk: Yoou be'er not be doing an'thing... shtoopid"}],
    
    [{dialogue: "Villager: Can I get some peace and quiet please?"}],//Multi page dialogue, if no character, remove character section
    
    [{dialogue: "Villager: Is it half full, or half empty?"},
     {dialogue: "Villager: Either way, I'm half conscious."}]
  ],
  
  newDialogue: [
    [{character: "Tavernkeep", dialogue: "You look well rested now, care for another drink? Haha."},
     {character: "Tavernkeep", dialogue: "No? Damn, ah well."},
     {character: "Tavernkeep", dialogue: "The Library is right around the corner. The old bookworm is probably back now."}],
    
    [{dialogue: "Villager: Did you hear, another one's entered town"},
     {dialogue: "Guard: Aye, luckily I'm on break, so that's not my problem!"},
     {dialogue: "Villager: Sometimes I wonder what the Mayor is thinking..."}],
    
    [{dialogue: "Drunk: Oiii, I've ne'er seen you 'round 'ere"},
     {dialogue: "Drunk: Yoou be'er not be doing an'thing... shtoopid"}],
    
    [{dialogue: "Villager: Can I get some peace and quiet please?"}],//Multi page dialogue, if no character, remove character section
    
    [{dialogue: "Villager: Is it half full, or half empty?"},
     {dialogue: "Villager: Either way, I'm half conscious."}]
  ],

  transitionMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //change -1 to correct map transition ID (check loadMap)
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1,  6, -1, -1, -1, -1, -1, -1]
  ]
}
  
let MountEntrance = { //9

  backgroundMap: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1],
    [1, 1, 1, 1, 7, 7, 1, 1, 1, 1]
  ],

  collisionMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0 is collision, 1 is free
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ],
  
  newCollision: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0 is collision, 1 is free
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ],
  
  foregroundMap: [
    [61, 61, 61, 61, 61, 61, 61, 61, 61, 61],
    [61, 61, 61, 61, 61, 61, 61, 61, 61, 61],
    [61, 61, 61, 61, 61, 61, 61, 61, 61, 61],
    [61, 61, 61, 61, 61, 61, 61, 61, 61, 61],
    [60, 60, 60, 60, 57, 58, 59, 60, 60, 60],
    [101, 101, 101, 101, 98, 103, 106, 106, 106, 106],
    [102, 102, 102, 102, 100, 105, 107, 107, 107, 107],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 62, 0, 0, 0, 0, 62, 31, 0],
    [62, 18, 0, 31, 0, 0, 18, 0, 0, 31],
  ],
  
  newFG: [
    [61, 61, 61, 61, 61, 61, 61, 61, 61, 61],
    [61, 61, 61, 61, 61, 61, 61, 61, 61, 61],
    [61, 61, 61, 61, 61, 61, 61, 61, 61, 61],
    [61, 61, 61, 61, 61, 61, 61, 61, 61, 61],
    [60, 60, 60, 60, 57, 58, 59, 60, 60, 60],
    [101, 101, 101, 101, 98, 0, 103, 106, 106, 106],
    [102, 102, 102, 102, 100, 0, 105, 107, 107, 107],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 62, 0, 0, 0, 0, 62, 31, 0],
    [62, 18, 0, 31, 0, 0, 18, 0, 0, 31],
  ],

  interactMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 7, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  dialogueMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //start from 0 to insert new dialogue, corresponds to index below
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1,  0, -1, -1,  1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ],
  
  dialogueArray: [
    [{character: "Guard", dialogue: "Halt, you are not permitted past this point"},
     {character: "Guard", dialogue: "Head back to the village traveller and show some respect for our rules"}],
    
    [{character: "Guard 2", dialogue: "Nobody enters the mountain without the Mayors permission"}]
  ],
  
  newDialogue: [
    [{character: "Guard", dialogue: "Cause no trouble mage"}],
    
    [{character: "Guard 2", dialogue: "The Orb huh?"},
     {character: "Guard 2", dialogue: "The Mayor informed us about you, run along"}]
  ],


  transitionMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //change -1 to correct map transition ID (check loadMap)
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, 10, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, 10, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1,  3,  3, -1, -1, -1, -1]
  ]

}

let Mount1 = { //10

  backgroundMap: [
    [5, 5, 5, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 1, 4, 5, 5, 5],
    [5, 5, 5, 5, 0, 1, 1, 5, 5, 5],
    [5, 5, 5, 5, 0, 1, 1, 5, 5, 5],
    [5, 5, 5, 5, 1, 1, 1, 5, 5, 5],
    [5, 5, 5, 5, 5, 1, 5, 5, 5, 5]
  ],

  collisionMap: [
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0]
  ],

  foregroundMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  interactMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  dialogueMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //start from 0 to insert new dialogue, corresponds to index below
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ],

  transitionMap: [
    [-1, -1, -1, 11, 11, 11, 11, -1, -1, -1], //change -1 to correct map transition ID (check loadMap)
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, 9, 9, 9, -1, -1]
  ]

}

let Mount2 = { //11

  backgroundMap: [
    [5, 5, 0, 0, 0, 5, 5, 5, 5, 5],
    [5, 5, 0, 0, 0, 5, 5, 5, 5, 5],
    [5, 5, 0, 0, 0, 4, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 1, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 5, 5, 5, 5]
  ],

  collisionMap: [
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
  ],

  foregroundMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  interactMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  dialogueMap: [
    [-1, -1, -1, 12, 12, 12, -1, -1, -1, -1], //start from 0 to insert new dialogue, corresponds to index below
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, 10, 10, 10, -1, -1, -1]
  ],

  transitionMap: [
    [-1, -1, 12, 12, 12, 12, -1, -1, -1, -1], //start from 0 to insert new dialogue, corresponds to index below
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, 10, 10, 10, 10, -1, -1, -1]
  ]

}

let Mount3 = { //12

  backgroundMap: [
    [5, 5, 5, 0, 0, 0, 0, 0, 5, 5],
    [5, 5, 5, 0, 0, 0, 0, 0, 5, 5],
    [5, 5, 5, 5, 0, 0, 0, 5, 5, 5],
    [5, 5, 5, 5, 0, 0, 0, 5, 5, 5],
    [5, 5, 5, 5, 0, 0, 0, 5, 5, 5],
    [5, 5, 5, 4, 0, 0, 0, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 4, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 0, 0, 0, 5, 5, 5, 5, 5],
    [5, 5, 0, 0, 0, 5, 5, 5, 5, 5]
  ],

  collisionMap: [
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0]
  ],

  foregroundMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  interactMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  dialogueMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //start from 0 to insert new dialogue, corresponds to index below
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ],

  transitionMap: [
    [-1, -1, -1, 13, 13, 13, 13, 13, -1, -1], //change -1 to correct map transition ID (check loadMap)
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, 11, 11, 11, -1, -1, -1, -1, -1]
  ]

}

let MountEnd = { //13

  backgroundMap: [
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 4, 4, 4, 4, 4, 4, 4, 4, 5],
    [5, 0, 0, 0, 1, 0, 0, 0, 0, 5],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    [5, 5, 5, 0, 0, 0, 0, 5, 5, 5]
  ],

  collisionMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0]
  ],

  foregroundMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 71, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 31, 31, 31, 0, 31, 31, 31, 31, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  interactMap: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  dialogueMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //start from 0 to insert new dialogue, corresponds to index below
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, 0, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ],

  dialogueArray: [
    [{character: "Rival", dialogue: "So you’ve caught up huh?"},
     {character: "You", dialogue: "And who might you be?"},
     {character: "Rival", dialogue: "ME? Well... Call me the king of the new world!"},
     {character: "You", dialogue: "King? New World? Are you delusional?"},
     {character: "Rival", dialogue: "Hahahahahaha! Brave words, you are standing in the presense of the Orb holder!"},
     {character: "You", dialogue: "Are you going to use the Orb's powers for a silly power trip!?"},
     {character: "Rival", dialogue: "I don't know, am I!?"},
     {character: "Rival", dialogue: "HAHAHAHAHAHA!!"},
     {character: "You", dialogue: " We'll see about that! I wont allow you!"},
     {character: "You", dialogue: " The kingdom demands the Orb and it is my duty to bring it back!"},
     {character: "Rival", dialogue: "Don't make me laugh! You are merely an insect to me!"},
     {character: "Rival", dialogue: "Mwahahahaha! Only one way to solve this, a mage duel!"}] //Multi page dialogue, if no character, remove character section
  ],

  transitionMap: [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], //change -1 to correct map transition ID (check loadMap)
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, 12, 12, 12, 12, -1, -1, -1]
  ]

}