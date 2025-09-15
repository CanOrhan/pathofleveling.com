export class LocationSteps {
  title: string;
  steps: React.JSX.Element[];
  hasWaypoint: boolean;

  constructor(title: string, steps: React.JSX.Element[], hasWaypoint: boolean) {
    this.title = title;
    this.steps = steps;
    this.hasWaypoint = hasWaypoint;
  }
}

export const actToAlmostLocationSteps: Record<string, Array<{
  title: string;
  steps: string[];
  hasWaypoint: boolean;}>> = {
  "Act 1": [
    {
      title: "In The Riverbank",
      steps: ["Kill The Bloated Miller then enter town"],
      hasWaypoint: false,
    },
    {
      title: "In Town",
      steps: ["Hand in quests and head out to Clearfell"],
      hasWaypoint: false,
    },
    {
      title: "In Clearfell",
      steps: [
        "Kill Beira of the Rotten Pack. She's North/North East of the waypoint. Rewards 10% Cold Res.",
        "Find the entrance to The Grelwood.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Grelwood",
      steps: [
        "Find the waypoint and talk to the quest NPC. Usually central.",
        "Find the entrance to The Grim Tangle, take the waypoint, and go back to The Grelwood.",
        "Find the entrance to The Red Vale and go through.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Red Vale",
      steps: [
        "Find the three obelisks and get the three quest items.",
        "After getting the third, WP to town and talk to Renly to acquire the Runed Spikes. WP to The Grelwood.",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Grelwood",
      steps: [
        "Summon and talk to Una.",
        "Stab the tree with your runed spikes then talk to Una.",
        "Go back to town, talk to NPCs, then head to The Grim Tangle via waypoint to The Grelwood.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Grim Tangle",
      steps: [
        "Find the entrance to the Cemetery of The Eternals. The Druid boss can be skipped.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Cemetary of The Eternals",
      steps: [
        "Find Mausoleum of the Praetor and kill the boss in there.",
        "Find the Tomb of the Consort and kill the boss in there.",
        "Talk to Lachlann, open the gate, and kill him. ☹",
        "Enter Hunting Grounds",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Hunting Grounds",
      steps: [
        "Find and kill The Crowbell. Rewards two skill points.",
        "Find and enter Ogham Farmlands.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Ogham Farmlands",
      steps: [
        "Find Una's lute. Usually around the center of the zone. Rewards 2 skill points.",
        "Find and kill Vargir The Feral Mutt in the Crop Circle. Drops a level 4 skill gem.",
        "Find and take the entrance to Ogham Village and WP back to the Hunting Grounds.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Hunting Grounds",
      steps: ["Find and enter Freythorn."],
      hasWaypoint: true,
    },
    {
      title: "In Freythorn",
      steps: [
        "Do all 4 rituals, killing The King in the Mists at the end. Rewards 30 spirit.",
        "TP back to town and waypoint to Ogham Village.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Ogham Village",
      steps: [
        "If it's your first character of the league; Find Smithing Tools.",
        "Find and kill The Executioner",
        "Go to The Manor Ramparts",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Manor Ramparts",
      steps: [
        "Find the entrance to to Ogham Manor. This is always in the opposite direction of the waypoint after you zone in.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Ogham Manor",
      steps: [
        "Find and kill Candlemass, the Living Rite",
        "Find and go down stairs twice",
        "Find elevator to boss, kill boss, go back to town",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "If it's your first character of the league; Talk to Renly to turn in the smithing tools",
        "Talk to The Hooded One to go to act 2",
      ],
      hasWaypoint: false,
    },
  ],
  "Act 2": [
    {
      title: "In Vastiri Outskirts",
      steps: [
        "Find and kill Rathbreaker",
        "Portal back to camp, enter The Ardura Caravan",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Speak to everyone then use the desert map to go to Mawdun Quarry",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Mawdun Quarry",
      steps: ["Find and take the entrance to Mawdun Mine"],
      hasWaypoint: true,
    },
    {
      title: "In Mawdun Mine",
      steps: ["Find and kill Rudja, the Dread Engineer", "Talk to Risu then portal back to town"],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Talk to Risu, then use desert map to go to The Halani Gates gates",
        "Talk to Sekhema Asala at the gates, go back to the caravan, talk to Risu again, then to Sekhema Asala again",
        "Use desert map to go to The Halani Gates gates again",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Traitor's Passage",
      steps: [
        "Find and kill Basala, pick up the Djinn Barya quest item",
        "Find the entrance to The Halani Gates",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Halani Gates",
      steps: [
        "Find and kill Jamanra, the Risen King. Stay close to the canyon. Cross the canyon 3 times to find the boss.",
        "Go down the stairs and to the bottom right of the zone, then back to town",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Use the desert map to go to the Trial of Sekhemas",
        "Talk to everyone, then use desert map to go to Keth",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Keth",
      steps: [
        "Kill Kabala, Constrictor Queen, the constrictor queen. Rewards 2 skill points.",
        "Kill snakes until you find the Kabala Clan relic.",
        "Find and enter The Lost City",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Lost City",
      steps: [
        "Find Entrance and go to Buried Shrines, then the Heart of Keth",
        "Kill Azarian, the Forsaken Son",
        "Talk to Halani, the Water Goddess, loot the cinders, burn the goddess, loot the essence of water.",
        "Head back to town.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: ["Use desert map to go to Mastodon Badlands"],
      hasWaypoint: false,
    },
    {
      title: "In Mastodon Badlands",
      steps: ["Find the Entrance to The Bone Pits"],
      hasWaypoint: true,
    },
    {
      title: "In The Bone Pits",
      steps: [
        "Find and kill the zone boss and loot the horn",
        "Kill Hyenas until you found the sun clan relic",
        "TP back to town.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: ["Use desert map to go to Valley of the Titans"],
      hasWaypoint: false,
    },
    {
      title: "In Valley of the Titans",
      steps: [
        "Find and click the three ancient seals",
        "Find the medallion and place the two relics in there. Rewards a permanent buff.",
        "Find and take the entrance to The Titan Grotto",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Titan Grotto",
      steps: ["Find and kill the boss, then go back to town"],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Talk to Zarka, then Sekhema Asala",
        "Use the desert map to travel to the halani gates",
        "Go to the front of the caravan and sound the horn",
        "Use the desert map to travel to Deshar",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Deshar",
      steps: [
        "Find the final letter on a corpse on the ground. Rewards two skill points on hand in.",
        "Find the entrance to the path of mourning",
        "Go the The Path of Mourning",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Path of Mourning",
      steps: ["Find the entrance to The Spires of Deshar"],
      hasWaypoint: true,
    },
    {
      title: "In The Spires of Deshar",
      steps: [
        "Find the sisters of Garukhan",
        "Find and kill Tor Gul, the Defiler",
        "Portal back to town",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Turn in the final letter at Shambrin",
        "Talk to everyone, then use desert map to go to The Dreadnought",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Dreadnought",
      steps: [
        "Find the entrance to The Dreadnought vanguard, then find and kill Jamanra, the Abomination",
        "Portal back to town",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Leave the Caravan and talk to The Hooded One",
        "Go back to the Caravan and talk to Sekhema Asala to go to Act 3",
      ],
      hasWaypoint: false,
    },
  ],
  "Act 3": [
    {
      title: "In Sandswept Marsh",
      steps: ["Find the entrance to the Ziggurat Encampment (town)."],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: ["Talk to everyone and entrance into Jungle Ruins"],
      hasWaypoint: false,
    },
    {
      title: "In Jungle Ruins",
      steps: [
        "Find the entrance to The Venom Crypts (near waypoint)",
        "Find and kill Mighty Silverfist",
        "Find and go through the entrance to Infested Barrens",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Infested Barrens",
      steps: [
        "Find the entrance to Chimeral Wetlands. Enter zone, take waypoint, backtrack to Infested Barrens.",
        "Find the entrance to The Azak Bog. Enter zone, take waypoint, backtrack to Infested Barrens.",
        "Find the entrance to The Matlan Waterways and the waypoint.",
        "Zone Note: Whichever waypoint you find last, use it to travel back to Jungle Ruins.",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Jungle Ruins",
      steps: ["Enter The Venom Crypts"],
      hasWaypoint: true,
    },
    {
      title: "In Venom Crypts",
      steps: ["Find the corpse for the venom phial, then go back to town"],
      hasWaypoint: false,
    },
    {
      title: "In Town",
      steps: [
        "Go back to town, turn in phial at Servi for a reward. This can not be changed later.",
        "Go to The Azak Bog.",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Azak Bog",
      steps: [
        "Optional: Find the Flameskin ritual and activate all, it gives 25% fire res and rarity for the rest of the zone",
        "Find and kill Ignagduk, the Bog Witch. Rewards 30 spirit.",
        "Go back to town and then to The Chimeral Wetlands",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Chimeral Wetlands",
      steps: [
        "Find the temple/Trial of Chaos. ",
        "Find and kill Xyclucian, the Chimera",
        "Enter Jiquani's Machinarium",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Jiquani's Machinarium",
      steps: [
        "Find the first small soul core, then open the door",
        "Find two more small soul cores",
        "Find the entrance towards Jiquani's Sanctum",
        "Find and kill Blackjaw, the Remnant. Rewards 10% fire res.",
        "Checkpoint port to the entrance, then go to Jiquani's Sanctum",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Jiquani's Sanctum",
      steps: [
        "Don't forget the activate the waypoint right after the entry.",
        "Talk to Alva",
        "Find two medium soul cores",
        "Activate both generators. Place down a portal BEFORE you activate the second generator.",
        "Portal back to town and waypoint back to the Jiquani's Sanctum.",
        "Kill Zicoatl, Warden of the Core and loot the large soul core",
        "Go back to Infested Barrens waypoint",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Infested Barrens",
      steps: [
        "Insert the large soul core and go to The Matlan Waterways afterwards",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Matlan Waterways",
      steps: [
        "Activate every single lever to navigate through the zone, then activate the big one at the end",
        "Tp back to town",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Town",
      steps: [
        "Go down the stairs near the well / The Hooded One",
        "Talk to Alva, enter The Drowned City",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Drowned City",
      steps: [
        "If it's your first character of the league; Find the entrance to The Molten Vault. Enter zone, take waypoint, backtrack to The Drowned City.",
        "Find the entrance to The Apex of Filth. Enter zone, take waypoint, and if it's your first character of the league; backtrack to The Drowned City.",
        "If it's your first character of the league; Enter the Molten Vault. Otherwise enter The Apex of Filth.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Molten Vault",
      steps: [
        "Find and kill the boss, then talk to Oswald back in town",
        "Enter The Apex of Filth",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Apex of Filth",
      steps: ["Find and kill The Queen of Filth, then portal back to town"],
      hasWaypoint: true,
    },
    {
      title: "In Town",
      steps: [
        "Go down the stairs near the well / The Hooded One again, and enter The Temple of Kopec",
      ],
      hasWaypoint: false,
    },
    {
      title: "In The Temple of Kopec",
      steps: [
        "Go up the stairs twice, then kill Ketzuli, High Priest of the Sun",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Town",
      steps: [
        "Talk to Alva and ride the elevator up",
        "Go through the gateway, then down the stairs again to enter Utzaal",
      ],
      hasWaypoint: false,
    },
    {
      title: "In Utzaal",
      steps: [
        "Search and kill Viper Napuatzi.",
        "Find the entrance to Aggorat and enter Aggorat.",
      ],
      hasWaypoint: true,
    },
    {
      title: "In Aggorat",
      steps: [
        "Follow the voices of the Trial of Atziri, go through to find the next checkpoint",
        "Find the entrance towards The Black Chambers",
        "Find the sacrificial table",
        "Farm The Sacrificial Heart if you haven't found it yet.",
        "Use the checkpoint to go the sacrificial table, loot the dagger, place the heart, stab the heart",
        "Use the checkpoint to go to The Black Chambers",
      ],
      hasWaypoint: true,
    },
    {
      title: "In The Black Chambers",
      steps: [
        "Find and defeat Doryani, Royal Thaumaturge",
        "Port back to town, walk through the gateway to enter Act 4",
      ],
      hasWaypoint: true,
    },
  ],
  "Act 4": [
    {
      title: "In Kingsmarch",
      steps: [
        "Speak to Doryani, Alva, Rog, Tujen and Ange",
        "Head down to the docks, speak to Kanu and Makoru",
        "Get the Boat Charter from Rog",
        "Return to Makoru to begin sailing"
      ],
      hasWaypoint: true
    },
    {
      title: "In Isle of Kin",
      steps: [
        "Optional: Find and defeat The Blind Beast for 2 Weapon Set Passive Skill Points",
        "Find the entrance to the Volcanic Warrens"
      ],
      hasWaypoint: true
    },
    {
      title: "In Volcanic Warrens",
      steps: [
        "Find and defeat Krutog, Lord of Kin",
        "Free Matiki from their cage",
        "Return to town and speak to Matiki to unlock Eye of Hinekora"
      ],
      hasWaypoint: true
    },
    {
      title: "In Kedge Bay",
      steps: [
        "Progress to Journey's End",
        "Optional: Find Dead Man's Chest for Forgotten Bounty quest"
      ],
      hasWaypoint: true
    },
    {
      title: "In Journey's End",
      steps: [
        "Find and defeat Captain Hartlin",
        "Get the Verisium and return to town",
        "Talk to Dannig for Verisium Spikes",
        "Return and free Freya Hartlin",
        "Defeat Omniphobia",
        "Return to Tujen for Uncut Skill Gem Level 13"
      ],
      hasWaypoint: true
    },
    {
      title: "In Abandoned Prison",
      steps: [
        "Search for Solitary Confinement",
        "Optional: Find Chapel Key and choose a permanent flask bonus",
        "Optional: Find the Armoury secret room"
      ],
      hasWaypoint: true
    },
    {
      title: "In Solitary Confinement",
      steps: [
        "Find and defeat The Prisoner (Use ballistas at 50%, 25%, and 10% HP)",
        "Speak to the Hooded One and return to town"
      ],
      hasWaypoint: true
    },
    {
      title: "In Eye of Hinekora",
      steps: [
        "Speak to Matiki and Navali",
        "Look into the Well of Passing",
        "Complete Kaom's, Maata's, and Rakiata's Tests",
        "Optional: Find Silent Hall for +5% Maximum Mana"
      ],
      hasWaypoint: true
    },
    {
      title: "In Halls of the Dead",
      steps: [
        "Find and defeat Yama, the White",
        "Optional: Complete strength/resist tests for permanent tattoos",
        "Enter Trial of the Ancestors",
        "Speak to Navali for 2 Weapon Set Points",
        "Return to town"
      ],
      hasWaypoint: true
    },
    {
      title: "In Whakapanu Island",
      steps: [
        "Find entrance to Singing Caverns",
        "Optional: Kill Great White One for rewards from Kaimana",
        "Optional: Find Torn Map Piece for Forgotten Bounty quest"
      ],
      hasWaypoint: true
    },
    {
      title: "In Singing Caverns",
      steps: [
        "Find and defeat Diamora, Song of Death",
        "Optional: Find Beckoning Clam for Rare Pearlescent Amulet",
        "Speak to Hooded One and return to town"
      ],
      hasWaypoint: true
    },
    {
      title: "In Shrike Island",
      steps: [
        "Find and defeat Scourge of the Skies",
        "Speak to the Hooded One and Makoru",
        "Optional: Find Corpse Nest for final Torn Map Piece"
      ],
      hasWaypoint: true
    },
    {
      title: "In Arastas",
      steps: [
        "Speak to Missionary Lorandis",
        "Break the barrier and survive the ambush",
        "Find and defeat Torvian, Hand of the Saviour",
        "Optional: Find Morning and Evening Bells for currency"
      ],
      hasWaypoint: true
    },
    {
      title: "In The Excavation",
      steps: [
        "Find and defeat Benedictus, First Herald",
        "Follow Tavakai and Makoru",
        "Witness the Hooded One's attempt to reforge the Weapon",
        "Return to town and sail to Ngakanu"
      ],
      hasWaypoint: true
    },
    {
      title: "In Ngakanu",
      steps: [
        "Fight through the blood-fevered tribe members",
        "Find the entrance to Heart of the Tribe"
      ],
      hasWaypoint: true
    },
    {
      title: "In Heart of the Tribe",
      steps: [
        "Optional: Find Meeting House for extra loot",
        "Find and defeat Tavakai, the Chieftain",
        "Witness the Hooded One cure Tavakai and Makoru",
        "Return to Kingsmarch and speak to the Hooded One"
      ],
      hasWaypoint: true
    }
  ],
  "Interlude 1": [
    {
      title: "In The Refuge",
      steps: [
        "Speak to the Hooded One, Renly, Finn & Una",
        "Head to the Scorched Farmlands"
      ],
      hasWaypoint: true
    },
    {
      title: "In Scorched Farmlands",
      steps: [
        "Find and defeat Isolde of the White Shroud and Heldra of the Black Pyre",
        "Progress to the Stones of Serle"
      ],
      hasWaypoint: true
    },
    {
      title: "In Stones of Serle",
      steps: [
        "Activate all 6 Megaliths around the edge of the zone",
        "Head to the Stone Circle and defeat Siora, Blade of the Mists",
        "Speak to Una and return to Scorched Farmlands"
      ],
      hasWaypoint: true
    },
    {
      title: "In The Blackwood",
      steps: [
        "Optional: Find Omen Altars for crafting materials",
        "Find the entrance to Holten"
      ],
      hasWaypoint: true
    },
    {
      title: "In Holten",
      steps: [
        "Optional: Defeat Sigbert and Godwin for loot",
        "Optional: Visit the Soul of the Ferryman for Greater Runes",
        "Find entrances to Wolvenhold and Holten Estate"
      ],
      hasWaypoint: true
    },
    {
      title: "In Wolvenhold",
      steps: [
        "Find and defeat Oswin, the Dread Warden",
        "Consume Warden's Ledger for 2 Weapon Set Points"
      ],
      hasWaypoint: true
    },
    {
      title: "In Holten Estate",
      steps: [
        "Find and defeat Thane Wulfric and Lady Elyswyth",
        "Return to town and speak to the Hooded One"
      ],
      hasWaypoint: true
    }
  ],
  "Interlude 2": [
    {
      title: "In The Khari Bazaar",
      steps: [
        "Speak to the Hooded One and Sekhema Asala",
        "Head to the Khari Crossing"
      ],
      hasWaypoint: true
    },
    {
      title: "In The Khari Crossing",
      steps: [
        "Find Molten Shrine for +5% Maximum Life",
        "Defeat Akthi and Anundr",
        "Return to Risu for 2 Weapon Set Points",
        "Collect waypoints from connected zones"
      ],
      hasWaypoint: true
    },
    {
      title: "In Pools of Khatal",
      steps: [
        "Progress to Sel Khari Sanctuary"
      ],
      hasWaypoint: true
    },
    {
      title: "In Sel Khari Sanctuary",
      steps: [
        "Find and defeat Elzarah, the Cobra Lord",
        "Optional: Find Yoon's and Rangeen's Barya for rewards",
        "Speak to Sekhema Asala"
      ],
      hasWaypoint: true
    },
    {
      title: "In The Galai Gates",
      steps: [
        "Find and defeat Vornas, the Fell Flame",
        "Enter Qimah"
      ],
      hasWaypoint: true
    },
    {
      title: "In Qimah",
      steps: [
        "Find ceremony site and speak to Jado",
        "Optional: Find Orbala's Pillar for permanent buff",
        "Enter Qimah Reservoir"
      ],
      hasWaypoint: true
    },
    {
      title: "In Qimah Reservoir",
      steps: [
        "Find and defeat Azmadi, the Faridun Prince",
        "Optional: Find Sacred Wells for currency",
        "Interact with Grand Barya",
        "Speak to Jado and Sekhema Asala",
        "Return to town and speak to the Hooded One"
      ],
      hasWaypoint: true
    }
  ],
  "Interlude 3": [
    {
      title: "In The Glade",
      steps: [
        "Speak to the Hooded One, Doryani, Hilda and Delwyn",
        "Head to the Ashen Forest"
      ],
      hasWaypoint: true
    },
    {
      title: "In Ashen Forest",
      steps: [
        "Optional: Find Ancient Monument for Uncut Skill Gem Level 14",
        "Find entrance to Kriar Village"
      ],
      hasWaypoint: true
    },
    {
      title: "In Kriar Village",
      steps: [
        "Find and defeat Lythara, the Wayward Spear",
        "Consume Gemcrust Skull for +40 Spirit and Uncut Spirit Gem",
        "Progress to Glacial Tarn"
      ],
      hasWaypoint: true
    },
    {
      title: "In Glacial Tarn",
      steps: [
        "Find entrance to Howling Caves",
        "Defeat Rakkar, the Frozen Talon",
        "Progress to Kriar Peaks"
      ],
      hasWaypoint: true
    },
    {
      title: "In Howling Caves",
      steps: [
        "Find and defeat the Abominable Yeti",
        "Return Icy Tusks to Hilda for 2 Weapon Set Points"
      ],
      hasWaypoint: true
    },
    {
      title: "In Kriar Peaks",
      steps: [
        "Optional: Speak to Elder Madox for a free unique item",
        "Take the platform to Etched Ravine"
      ],
      hasWaypoint: true
    },
    {
      title: "In Etched Ravine",
      steps: [
        "Find and defeat Stormgore, the Guardian",
        "Enter the Cuachic Vault"
      ],
      hasWaypoint: true
    },
    {
      title: "In The Cuachic Vault",
      steps: [
        "Find and defeat Zelina and Zolin",
        "Speak to Doryani",
        "Return to Act 4: Kingsmarch",
        "Speak to the Hooded One for 2 Weapon Set Points"
      ],
      hasWaypoint: true
    }
  ],
};


