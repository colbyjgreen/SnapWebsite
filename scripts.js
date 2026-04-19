/**
 *  The data set used is full of data we don't want the user to be able to change, due to this
 *  when parsing data we use an array that can be changed, this means we don't lose data, but
 *  can still change what is being show on screen.
 */
const Characters = {
  Abrams: {
    name: "Abrams",
    iconURL: "https://deadlock.wiki/images/thumb/6/6d/Abrams_card.png/190px-Abrams_card.png",
    titleURL: "https://deadlock.wiki/images/thumb/1/11/Abrams_name.png/121px-Abrams_name.png",
    abilities: ["Siphon Life","Shoulder Charge","Infernal Resilience","Seismic Impact"],
    health: 810,
    style: "Tank - Brawler - Bull-Headed"
  },
  Apollo: {
    name: "Apollo",
    iconURL: "https://deadlock.wiki/images/thumb/0/0f/Apollo_card.png/190px-Apollo_card.png",
    titleURL: "https://deadlock.wiki/images/thumb/f/f2/Apollo_name.png/107px-Apollo_name.png",
    abilities: ["Disengaging Sigil","Riposte","Flawless Advance","Itani Lo Sahn"],
    health: 780,
    style: "Finesse - Mobility - A Cut Above"
  } ,
  Bebop: {
    name: "Bebop",
    iconURL: "https://deadlock.wiki/images/thumb/4/49/Bebop_card.png/190px-Bebop_card.png",
    titleURL: "https://deadlock.wiki/images/thumb/5/5b/Bebop_name.png/71px-Bebop_name.png",
    abilities: ["Exploding Uppercut","Sticky Bomb","Grapple Arm","Hyper Beam"],
    health: 890,
    style: "Hook - Bomb - Punch"
  },
  Billy: {
    name: "Billy",
    iconURL: "https://deadlock.wiki/images/thumb/e/e5/Billy_card.png/190px-Billy_card.png",
    titleURL: "https://deadlock.wiki/images/thumb/5/57/Billy_name.png/97px-Billy_name.png",
    abilities: ["Bashdown","Rising Ram","Blasted","Chain Gang"],
    health: 830,
    style: "Punk - Chaotic - G.O.A.T."
  },
  Calico: { 
    name: "Calico", 
    iconURL: "https://deadlock.wiki/images/thumb/e/e4/Calico_card.png/190px-Calico_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/d/d5/Calico_name.png/80px-Calico_name.png" ,
    abilities: ["Gloom Bombs","Leaping Slash","Ava","Return to Shadows"],
    health: 740,
    style: "Tricksy - Slippery - Burst Damage"
  },
  Celeste: { 
    name: "Celeste", 
    iconURL: "https://deadlock.wiki/images/thumb/9/90/Celeste_card.png/190px-Celeste_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/e/ee/Celeste_name.png/80px-Celeste_name.png" ,
    abilities: ["Light Eater","Dazzing Trick","Radiant Daggers","Shining Wonder"],
    health: 700,
    style: "Performer - Disruptive - Dazzling"
  },
  Doorman: { 
    name: "Doorman", 
    iconURL: "https://deadlock.wiki/images/thumb/6/6f/The_Doorman_card.png/190px-The_Doorman_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/1/15/The_Doorman_name.png/156px-The_Doorman_name.png" ,
    abilities: ["Call Bell","Doorway","Luggage Cart","Hotel Guest"],
    health: 765,
    style: "Disorienting - Map Control - Mind Games"
  },
  Drifter: { 
    name: "Drifter", 
    iconURL: "https://deadlock.wiki/images/thumb/4/4d/Drifter_card.png/190px-Drifter_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/3/32/Drifter_name.png/137px-Drifter_name.png" ,
    abilities: ["Rend","Stalker's Mark","Bloodscent","Eternal Night"],
    health: 765,
    style: "Stalker - Bloodthirsty - Cruel"
  },
  Dynamo: { 
    name: "Dynamo", 
    iconURL: "https://deadlock.wiki/images/thumb/7/70/Dynamo_card.png/190px-Dynamo_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/8/8f/Dynamo_name.png/131px-Dynamo_name.png" ,
    abilities: ["Kinetic Pulse","Quantum Entanglement","Rejuvenating Aura","Singularity"],
    health: 890,
    style: "Teamplay - Initiator - Clutch"
  },
  Graves: { 
    name: "Graves", 
    iconURL: "https://deadlock.wiki/images/thumb/3/35/Graves_card.png/190px-Graves_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/e/e6/Graves_name.png/165px-Graves_name.png" ,
    abilities: ["Jar of Dead","Grasping Hands","Essence Theft","Borrowed Decree"],
    health: 740,
    style: "Morbid - Area Denial - Necromancer"
  },
  GreyTalon: { 
    name: "GreyTalon", 
    iconURL: "https://deadlock.wiki/images/thumb/5/5a/Grey_Talon_card.png/190px-Grey_Talon_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/f/f4/Grey_Talon_name.png/186px-Grey_Talon_name.png" ,
    abilities: ["Charged Shot","Rain of Arrows","Spirit Snare","Guided Owl"],
    health: 790,
    style: "Precision - Hunter - Area Denial"
  },
  Haze: { 
    name: "Haze", 
    iconURL: "https://deadlock.wiki/images/thumb/1/1b/Haze_card.png/190px-Haze_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/7/75/Haze_name.png/238px-Haze_name.png" ,
    abilities: ["Sleep Dagger","Smoke Bomb","Fixation","Bullet Dance"],
    health: 740,
    style: "Assassin - Stealthy - Lethal"
  },
  Holliday: { 
    name: "Holliday", 
    iconURL: "https://deadlock.wiki/images/thumb/1/10/Holliday_card.png/190px-Holliday_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/4/49/Holliday_name.png/126px-Holliday_name.png" ,
    abilities: ["Powder Keg","Bounce Pad","Crackshot","Spirit Lasso"],
    health: 790,
    style: "Crackshot - Explosive - Apprehender"
  },
  Infernus: { 
    name: "Infernus", 
    iconURL: "https://deadlock.wiki/images/thumb/6/6b/Infernus_card.png/190px-Infernus_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/e/e1/Infernus_name.png/167px-Infernus_name.png" ,
    abilities: ["Napalm","Flame Dash","Afterburn","Concussive Combustion"],
    health: 840,
    style: "Arsonist - Explosive - Burn Rubber"
  },
  Ivy: { 
    name: "Ivy", 
    iconURL: "https://deadlock.wiki/images/thumb/2/2c/Ivy_card.png/190px-Ivy_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/a/a6/Ivy_name.png/88px-Ivy_name.png" ,
    abilities: ["Entangling Thorns","Kudzu Connection","Stone Form","Air Drop"],
    health: 765,
    style: "Team-up - Disruptor - Rock Solid"
  },
  Kelvin: { 
    name: "Kelvin", 
    iconURL: "https://deadlock.wiki/images/thumb/7/76/Kelvin_card.png/190px-Kelvin_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/1/1c/Kelvin_name.png/98px-Kelvin_name.png" ,
    abilities: ["Frost Grenade","Ice Path","Arctic Beam","Frozen Shelter"],
    health: 890,
    style: "Protector - Explorer - Ice Cold"
  },
  LadyGeist: { 
    name: "LadyGeist", 
    iconURL: "https://deadlock.wiki/images/thumb/e/e8/Lady_Geist_card.png/190px-Lady_Geist_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/3/3e/Lady_Geist_name.png/183px-Lady_Geist_name.png" ,
    abilities: ["Essence Bomb","Life Drain","Malice","Soul Exchange"],
    health: 890,
    style: "Lifesteal - Self Damage - Fatale"
  },
  Lash: { 
    name: "Lash", 
    iconURL: "https://deadlock.wiki/images/thumb/5/5a/Lash_card.png/190px-Lash_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/f/f7/Lash_name.png/100px-Lash_name.png" ,
    abilities: ["Ground Strike","Grapple","Flog","Death Slam"],
    health: 790,
    style: "Initiator - High Flying - Arrogant"
  },
  McGinnis: { 
    name: "McGinnis", 
    iconURL: "https://deadlock.wiki/images/thumb/5/55/McGinnis_card.png/190px-McGinnis_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/c/c4/McGinnis_name.png/141px-McGinnis_name.png" ,
    abilities: ["Mini Turret","Medicinal Specter","Spectral Wall","Heavy Barrage"],
    health: 790,
    style: "Inventor - Support - Disruption"
  },
  Mina: { 
    name: "Mina", 
    iconURL: "https://deadlock.wiki/images/thumb/a/a5/Mina_card.png/190px-Mina_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/a/a7/Mina_name.png/91px-Mina_name.png" ,
    abilities: ["Rake","Sanguine Retreat","Love Bites","Nox Nostra"],
    health: 670,
    style: "Harasser - Nimble - Vexing"
  },
  Mirage: { 
    name: "Mirage", 
    iconURL: "https://deadlock.wiki/images/thumb/7/77/Mirage_card.png/190px-Mirage_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/e/e9/Mirage_name.png/83px-Mirage_name.png" ,
    abilities: ["Fire Scarabs","Dust Devil","Djinn's Mark","Traveler"],
    health: 740,
    style: "Bodyguard - Traveller - Focused"
  },
  MoKrill: { 
    name: "MoKrill", 
    iconURL: "https://deadlock.wiki/images/thumb/a/a1/Mo_%26_Krill_card.png/190px-Mo_%26_Krill_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/0/02/Mo_%26_Krill_name.png/114px-Mo_%26_Krill_name.png" ,
    abilities: ["Scorn","Burrow","Sand Blast","Combo"],
    health: 940,
    style: "Tag-Team - Initiator - Burrower"
  },
  Paige: { 
    name: "Paige", 
    iconURL: "https://deadlock.wiki/images/thumb/b/b0/Paige_card.png/190px-Paige_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/d/d6/Paige_name.png/69px-Paige_name.png" ,
    abilities: ["Bookwyrm","Plot Armor","Captivating Read","Rallying Charge"],
    health: 690,
    style: "Helpful - Protector - Booksmart"
  },
  Paradox: {
    name: "Paradox", 
    iconURL: "https://deadlock.wiki/images/thumb/0/08/Paradox_card.png/190px-Paradox_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/6/6e/Paradox_name.png/225px-Paradox_name.png" ,
    abilities: ["Pulse Grenade","Time Wall","Kinetic Carbine","Pardoxical Swap"],
    health: 740,
    style: "Calculated - Disruptor - Tactician"
  },
  Pocket: { 
    name: "Pocket", 
    iconURL: "https://deadlock.wiki/images/thumb/0/06/Pocket_card.png/190px-Pocket_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/6/62/Pocket_name.png/53px-Pocket_name.png" ,
    abilities: ["Barrage","Flying Cloak","Enchanter's Shovel","Affliction"],
    health: 790,
    style: "Trickster - Burst Damage - Frogs"
  },
  Rem: { 
    name: "Rem", 
    iconURL: "https://deadlock.wiki/images/thumb/2/2a/Rem_card.png/190px-Rem_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/8/81/Rem_name.png/36px-Rem_name.png" ,
    abilities: ["Pillow Toss","Tag Along","Lil Helpers","Naptime"],
    health: 690,
    style: "Helpful - Tiny - zZzzZ"
  },
  Seven: { 
    name: "Seven", 
    iconURL: "https://deadlock.wiki/images/thumb/c/cf/Seven_card.png/190px-Seven_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/9/93/Seven_name.png/114px-Seven_name.png" ,
    abilities: ["Lightning Ball","Static Charge","Power Surge","Storm Cloud"],
    health: 740,
    style: "High Voltage - Merciless - Area Denial"
  },
  Shiv: { 
    name: "Shiv", 
    iconURL: "https://deadlock.wiki/images/thumb/b/b8/Shiv_card.png/190px-Shiv_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/9/9d/Shiv_name.png/102px-Shiv_name.png" ,
    abilities: ["Serrated Knives","Slice and Dice","Bloodletting","Killing Blow"],
    health: 840,
    style: "Rage - Bleed - Repeat"
  },
  Silver: { 
    name: "Silver", 
    iconURL: "https://deadlock.wiki/images/thumb/1/1e/Silver_card.png/190px-Silver_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/b/b5/Silver_name.png/86px-Silver_name.png" ,
    abilities: ["Slam Fire","Boot Kick","Entangling Bola","Lycan Curse"],
    health: 840,
    style: "Feral - Hot Mess - Transformation"
  },
  Sinclair: { 
    name: "Sinclair", 
    iconURL: "https://deadlock.wiki/images/thumb/4/41/Sinclair_card.png/190px-Sinclair_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/f/f0/Sinclair_name.png/94px-Sinclair_name.png" ,
    abilities: ["Vexing Bolt","Spectral Assistant","Rabbit Hex","Audience Participation"],
    health: 740,
    style: "Trickster - Copycat - Versatile"
  },
  Venator: { 
    name: "Venator", 
    iconURL: "https://deadlock.wiki/images/thumb/6/6e/Venator_card.png/190px-Venator_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/4/4f/Venator_name.png/127px-Venator_name.png" ,
    abilities: ["Consecrating Grenade","Gutshot","Hex-Lined Snap Trap","Ira Domina"],
    health: 790,
    style: "Devout - Arms Expert - Tactical"
  },
  Victor: { 
    name: "Victor", 
    iconURL: "https://deadlock.wiki/images/thumb/3/3d/Victor_card.png/190px-Victor_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/5/5a/Victor_name.png/138px-Victor_name.png" ,
    abilities: ["Pain Battery","Jumpstart","Aura of Suffering","Shocking Reanimation"],
    health: 810,
    style: "You - Can't - Kill Me"
  },
  Vindicta: { 
    name: "Vindicta", 
    iconURL: "https://deadlock.wiki/images/thumb/6/69/Vindicta_card.png/190px-Vindicta_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/a/a7/Vindicta_name.png/189px-Vindicta_name.png" ,
    abilities: ["Stake","Flight","Crow Familiar","Assassinate"],
    health: 765,
    style: "Sniper - Soaring - One Shot Kill"
  },
  Viscous: { 
    name: "Viscous", 
    iconURL: "https://deadlock.wiki/images/thumb/5/53/Viscous_card.png/190px-Viscous_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/3/3f/Viscous_name.png/108px-Viscous_name.png" ,
    abilities: ["Splatter","The Cube","Puddle Punch","Goo Ball"],
    health: 790,
    style: "Evasive - Disruptor - Gooey"
  },
  Vyper: { 
    name: "Vyper", 
    iconURL: "https://deadlock.wiki/images/thumb/b/bd/Vyper_card.png/190px-Vyper_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/c/c6/Vyper_name.png/76px-Vyper_name.png" ,
    abilities: ["Screwjab Dagger","Lethal Venom","Slither","Petrifying Bola"],
    health: 790,
    style: "Gunner - Slippery - Rat-a-Tat"
  },
  Warden: { 
    name: "Warden", 
    iconURL: "https://deadlock.wiki/images/thumb/1/10/Warden_card.png/190px-Warden_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/3/31/Warden_name.png/195px-Warden_name.png" ,
    abilities: ["Alchemical Flask","Willpower","Binding Word","Last Stand"],
    health: 815,
    style: "Initiator - Fearless - One Man Army"
  },
  Wraith: { 
    name: "Wraith", 
    iconURL: "https://deadlock.wiki/images/thumb/8/85/Wraith_card.png/190px-Wraith_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/9/98/Wraith_name.png/143px-Wraith_name.png" ,
    abilities: ["Card Trick","Project Mind","Full Auto","Telekinesis"],
    health: 740,
    style: "Duelist - Isolator - Telekinetic"
  },
  Yamato: { 
    name: "Yamato", 
    iconURL: "https://deadlock.wiki/images/thumb/2/2b/Yamato_card.png/190px-Yamato_card.png", 
    titleURL: "https://deadlock.wiki/images/thumb/8/8c/Yamato_name.png/189px-Yamato_name.png" ,
    abilities: ["Power Slash","Flying Slash","Crimson Slash","Shadow Transformation"],
    health: 740,
    style: "Relentless - Acrobatics - Pursuer"
  }
};


//Array that can be changed, used for actual info parsing.
let CharacterList=[]

//Function to initialize data/buttons
function initialize(){

  const characterbtn = document.getElementById("characterButton");
  characterbtn.addEventListener("click", characterSearch);

  const healthbtn = document.getElementById("healthButton");
  healthbtn.addEventListener("click", healthSearch);
  
  const abilitybtn = document.getElementById("abilityButton");
  abilitybtn.addEventListener("click", abilitySearch);

  const reversebtn = document.getElementById("reverseButton");
  reversebtn.addEventListener("click", reverseList);
  
  for (const characterData of Object.values(Characters)) {
    CharacterList.push(characterData);
  }

  showCards();

}
function reverseList(){

  CharacterList.reverse();
  showCards();

}

function healthSearch(){

  const searchText = document.getElementById("search").value;

  //Only searches if user entered number/number is below 670
  if(!Number(searchText)||Number(searchText<670)){
    alert("Error, Enter Number Larger than 670 (Least Health in Roster)");
  }

  else {

    CharacterList.length=0;

    for (const characterData of Object.values(Characters)) {
      if(characterData.health <= Number(searchText)){
        CharacterList.push(characterData);
      }
    }
    //function for easier readablity
    sortByHealth();

  }

  showCards();
  
}

function abilitySearch(){

  CharacterList.length = 0;
  const searchText = document.getElementById("search").value;
  let abilityNumbers = []
  for(const characterData of Object.values(Characters)){
    for(let i=0; i<4;i++){
      if(characterData.abilities[i].toLowerCase().includes(searchText.toLowerCase())){

        console.log(characterData.abilities[i]);
        
        CharacterList.push(characterData);
        abilityNumbers.push(characterData.abilities[i].toLowerCase());
        i=4;
      }
    }
  }
  showCards();

}


function characterSearch(){

  CharacterList.length=0;
  const searchText = document.getElementById("search").value;

  //First Finds only objects that start with value
  for (const characterData of Object.values(Characters)) {
    if(characterData.name.toLowerCase().startsWith(searchText.toLowerCase())){
      CharacterList.push(characterData);
    }
  }
  //Adds any object that contains the value, except objects already in array
  for (const characterData of Object.values(Characters)) {
    if(characterData.name.toLowerCase().includes(searchText.toLowerCase())){
      if(!CharacterList.includes(characterData)){
        CharacterList.push(characterData);
      }
    }
  }

  showCards();

}

function sortByHealth(){
  CharacterList.sort((a,b)=> b.health - a.health);
}

// This function adds cards the page to display the data in the array
function showCards() {
  
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  // Loop for creating new Cards from our changeable data set
  for (const characterData of CharacterList) {
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, characterData); // Edit Title, Image, Text
    cardContainer.appendChild(nextCard); // Add new card to the container
  }

}

function editCardContent(card, characterData) {

  card.style.display = "block";
  card.addEventListener("click", function(){alert(characterData.style)});

  const cardTitle = card.querySelector("#Name");
  cardTitle.src = characterData.titleURL;
  
  const cardImage = card.querySelector("#Hero");
  cardImage.src = characterData.iconURL;

  const element = card.querySelector("#ability1");
  element.textContent = characterData.abilities[0];
  const element1 = card.querySelector("#ability2");
  element1.textContent = characterData.abilities[1];
  const element2 = card.querySelector("#ability3");
  element2.textContent = characterData.abilities[2];
  const element3 = card.querySelector("#ability4");
  element3.textContent = characterData.abilities[3];

  const element4=card.querySelector("#health");
  element4.textContent = characterData.health;
  
  //Bug Testing Console Logger
  console.log("new card:", characterData.name, "- html: ", card);
}

// This calls the intialize() function when the page is first loaded
document.addEventListener("DOMContentLoaded", initialize);