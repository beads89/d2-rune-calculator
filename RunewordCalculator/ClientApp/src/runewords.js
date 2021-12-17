// Make object array with "name", "gearType", "lvlReq", "runes", "stats"

let runewords = [
  {
    name: "Breath of the Dying",
    sockets: 6,
    gearType: "All Ranged and Melee Weapons",
    lvlReq: 69,
    runes: ["Vex", "Hel", "El", "Eld", "Zod", "Eth"],
    stats: ["50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy", "Indestructible", "+60% Increased Attack Speed", "+350-400% Enhanced Damage", "-25% Target Defense", "+50 To Attack Rating", "+200% Damage To Undead", "+50 To Attack Rating Against Undead", "7% Mana Stolen Per Hit", "12-15% Life Stolen Per Hit", "Prevent Monster Heal", "+30 TO All Attributes", "+1 To Light Radius", "Requirements -20%"]
  }, {
    name: "Pride",
    sockets: 4,
    gearType: "Polearms",
    lvlReq: 67,
    runes: ["Cham", "Sur", "Io", "Lo"],
    stats: ["25% Chance To Cast Level 17 Fire Wall When Struck", "Level 16-20 Concentration Aura When Equipped", "260-300% Bonus To Attack Rating", "+(Player Lvl)% Damage To Demons", "Adds 50-280 Lightning Damage", "20% Deadly Strike", "Hit Blinds Target", "Freezes Target +3", "+10 To Vitality", "Replenish Life +8", "(1.875 * Player Lvl)% Extra Gold From Monsters"]
  }, {
    name: "Hand of Justice",
    sockets: 4,
    gearType: "All Ranged and Melee Weapons",
    lvlReq: 67,
    runes: ["Sur", "Cham", "Amn", "Lo"],
    stats: ["100% Chance To Cast Level 36 Blaze When You Level-Up", "100% Chance To Cast Level 48 Meteor When You Die", "Level 16 Holy Fire Aura When Equipped", "+33% Increased Attack Speed", "+280-330% Enhanced Damage", "Ignores Target's Defense", "-20% To Enemy Fire Resistance", "7% Life Stolen Per Hit", "20% Deadly Strike", "Hit Blinds Target", "Freezes Target +3"]
  }, {
    name: "Doom",
    sockets: 5,
    gearType: "Axes, Hammers and Polearms",
    lvlReq: 67,
    runes: ["Hel", "Ohm", "Um", "Lo", "Cham"],
    stats: ["5% Chance To Cast Level 18 Volcano On Striking", "Level 12 Holy Freeze Aura When Equipped", "+2 To All Skills", "+45% Increased Attack Speed", "+330-370% Enhanced Damage", "-40-60% To Enemy Cold Resistance", "50% Deadly Strike", "25% Chance of Open Wounds", "Prevent Monster Heal", "Freezes Target +3", "Requirements -20%"]
  }, {
    name: "Last Wish",
    sockets: 6,
    gearType: "Axes, Hammers and Swords",
    lvlReq: 65,
    runes: ["Jah", "Mal", "Jah", "Sur", "Jah", "Ber"],
    stats: ["6% Chance To Cast Level 11 Fade When Struck", "10% Chance To Cast Level 18 Life Tap On Striking", "20% Chance To Cast Level 20 Charged Bolt On Attack", "Level 17 Might Aura When Equipped", "+330-375% Enhanced Damage", "Ignore Target's Defense", "60-70% Chance of Crushing Blow", "Prevent Monster Heal", "Hit Blinds Target", "(0.5 * Player Lvl)% Chance of Getting Magic Items"]
  }, {
    name: "Destruction",
    sockets: 5,
    gearType: "Polearms and Swords",
    lvlReq: 65,
    runes: ["Vex", "Lo", "Ber", "Jah", "Ko"],
    stats: ["23% Chance To Cast Level 12 Volcano On Striking", "5% Chance To Cast Level 23 Molten Boulder On Striking", "100% Chance To Cast level 45 Meteor When You Die", "15% Chance To Cast Level 22 Nova On Attack", "+350% Enhanced Damage", "Ignore Target's Defense", "Adds 100-180 Magic Damage", "7% Mana Stolen Per Hit", "20% Chance of Crushing Blow", "20% Deadly Strike", "Prevent Monster Heal", "+10 To Dexterity"]
  }, {
    name: "Enigma",
    sockets: 3,
    gearType: "Body Armor",
    lvlReq: 65,
    runes: ["Jah", "Ith", "Ber"],
    stats: ["+2 To All Skills", "+45% Faster Run/Walk", "+1 To Teleport", "+750-775 Defense", "+(0.75 * Player Lvl) To Strength", "Increase Maximum Life 5%", "Damage Reduced By 8%", "+14 Life After Each Kill", "15% Damage Taken Goes To Mana", "(Player Lvl)% Better Chance of Getting Magic Items"]
  }, {
    name: "Phoenix",
    sockets: 4,
    gearType: "All Ranged and Melee Weapons and All Shields",
    lvlReq: 65,
    runes: ["Vex", "Vex", "Lo", "Jah"],
    stats: ["BOTH:", "100% Chance To Cast level 40 Blaze When You Level-up", "40% Chance To Cast Level 22 Firestorm On Striking", "Level 10-15 Redemption Aura When Equipped", "+350-400% Enhanced Damage", "-28% To Enemy Fire Resistance", "+350-400 Devense Vs. Missle", "+15-21 Fire Absorb", "WEAPONS ONLY:", "Ignores Target's Defense", "14% Mana Stolen Per Hit", "20% Deadly Strike", "SHIELDS ONLY:", "+50 to Life", "+5% To Maximum Lightning Resistance", "+10% To Maximum Fire Resistance"]
  }, {
    name: "Brand",
    sockets: 4,
    gearType: "Bows and Crossbows",
    lvlReq: 65,
    runes: ["Jah", "Lo", "Mal", "Gul"],
    stats: ["35% Chance To Cast Level 14 Amplify Damage When Struck", "100% Chance To Cast Level 18 Bone Spear On Striking", "Fires Explosive Arrows or Bolts", "+260-340% Enhanced Damage", "Ignores Target's Defense", "20% Bonus to Attack Rating", "+280-330% Damage to Demons", "20% Deadly Strike", "Prevent Monster Heal", "Knockback"]
  }, {
    name: "Faith",
    sockets: 4,
    gearType: "Bows and Crossbows",
    lvlReq: 65,
    runes: ["Ohm", "Jah", "Lem", "Eld"],
    stats: ["Level 12-15 Fanaticism Aura When Equipped", "+1-2 To All Skills", "+330% Enhanced Damage", "Ignores Target's Defense", "300% Bonus to Attack Rating", "+75% Damage To Undead", "+50 To Attack Rating Against Undead", "+120 Fire Damage", "All Resistances +15", "10% Reanimated As: Returned", "75% Extra Gold From Monsters"]
  }, {
    name: "Famine",
    sockets: 4,
    gearType: "Axes and Hammers",
    lvlReq: 65,
    runes: ["Fal", "Ohm", "Ort", "Jah"],
    stats: ["+30% Increased Attack Speed", "+320-370% Enhanced Damage", "Ignores Target's Defense", "Adds 180-200 Magic Damage", "Adds 50-200 Fire Damage", "Adds 51-250 Lightning Damage", "Adds 50-200 Cold Damage", "12% Life Stolen Per Hit", "Prevent Monster Heal", "+10 To Strength"]
  }, {
    name: "Fury",
    sockets: 3,
    gearType: "All Melee Weapons",
    lvlReq: 65,
    runes: ["Jah", "Gul", "Eth"],
    stats: ["40% Increased Attack Speed", "+209% Enhanced Damage", "Ignores Target's Defense", "-25% Target Defense", "20% Bonus to Attack Rating", "6% Life Stolen Per Hit", "33% Chance Of Deadly Strike", "66% Chance Of Open Wounds", "+5 To Frenzy(Barbarian Only)", "Prevent Monster Heal"]
  }, {
    name: "Dream",
    sockets: 3,
    gearType: "All Shields and Helmets",
    lvlReq: 65,
    runes: ["Io", "Jah", "Pul"],
    stats: ["BOTH:", "10% Chance To Cast Level 15 Confuse When Struck", "Level 15 Holy Shock Aura When Equipped", "+20-30% Faster Hit Recovery", "30% Enhanced Defense", "+150-220 Defense", "+10 To Vitality", "+(0.625 * Player Lvl) To Mana", "All Resistances +5-20", "12-25% Better Chance of Getting Magic Items", "HELMETS ONLY:", "Increase Maximum Life 5%", "SHIELDS ONLY:", "+50 to Life"]
  }, {
    name: "Ice",
    sockets: 4,
    gearType: "Bows and Crossbows",
    lvlReq: 65,
    runes: ["Amn", "Shael", "Jah", "Lo"],
    stats: ["100% Chance To Cast Level 40 Blizzard When You Level-up", "25% Chance To Cast Level 22 Frost Nova On Striking", "Level 18 Holy Freeze Aura When Equipped", "+20% Increased Attack Speed", "+140-210% Enhanced Damage", "Ignores Target's Defense", "+25-30% To Cold Skill Damage", "7% Life Stolen Per Hit", "-20% To Enemy Cold Resistance", "20% Deadly Strike", "(3.125 * Player Lvl)% Extra Gold From Monsters"]
  }, {
    name: "Eternity",
    sockets: 5,
    gearType: "All Melee Weapons",
    lvlReq: 63,
    runes: ["Amn", "Ber", "Ist", "Sol", "Sur"],
    stats: ["Indestructible", "+260-310% Enhanced Damage", "+9 To Minimum Damage", "7% Life Stolen Per Hit", "20% Chance of Crushing Blow", "Hit Blinds Target", "Slows Target By 30%", "Replenish Mana 16%", "Cannot Be Frozen", "30% Chance Of Getting Magic Items", "Level 8 Revive (88 Charges)"]
  }, {
    name: "Infinity",
    sockets: 4,
    gearType: "Polearms",
    lvlReq: 63,
    runes: ["Ber", "Mal", "Ber", "Ist"],
    stats: ["50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy", "Level 12 Conviction Aura When Equipped", "+35% Faster Run/Walk", "+255-325% Enhanced Damage", "-45-55% To Enemy Lightning Resistance", "40% Chance of Crushing Blow", "+(0.5 * Player Lvl) To Vitality", "30% Better Chance of Getting Magic Items", "Level 21 Cyclone Armor (30 Charges)"]
  }, {
    name: "Chains of Honor",
    sockets: 4,
    gearType: "Body Armor",
    lvlReq: 63,
    runes: ["Dol", "Um", "Ber", "Ist"],
    stats: ["+2 To All Skills", "+200% Damage To Demons", "+100% Damage To Undead", "8% Life Stolen Per Hit", "+70% Enhanced Defense", "+20 To Strength", "Replenish Life +7", "All Resistances +65", "Damage Reduced By 8%", "25% Better Chance of Getting Magic Items"]
  }, {
    name: "Beast",
    sockets: 5,
    gearType: "Axes, Hammers and Scepters",
    lvlReq: 63,
    runes: ["Ber", "Tir", "Um", "Mal", "Lum"],
    stats: ["Level 9 Fanaticism Aura When Equipped", "+40% Increased Attack Speed", "+240-270% Enhanced Damage", "20% Chance of Crushing Blow", "25% Chance of Open Wounds", "+3 To Werebear", "+3 To Lycanthropy", "Prevent Monster Heal", "+25-40 To Strength", "+10 TO Energy", "+2 To Mana After Each Kill", "Level 13 Summon Grizzly (5 Charges)"]
  }, {
    name: "Wrath",
    sockets: 4,
    gearType: "Bows and Crossbows",
    lvlReq: 63,
    runes: ["Pul", "Lum", "Ber", "Mal"],
    stats: ["30% Chance To Cast Level 1 Decrepify On Striking", "5% Chance To Cast Level 10 Life Tap On Striking", "+375% Damage To Demons", "+100 To Attack Rating Against Demons", "+250-300% Damage To Undead", "Adds 85-120 Magic Damage", "Adds 41-240 Lightning Damage", "20% Chance of Crushing Blow", "Prevent Monster Heal", "+10 To Energy", "Cannot Be Frozen"]
  }, {
    name: "Dragon",
    sockets: 3,
    gearType: "Body Armor and Shields",
    lvlReq: 61,
    runes: ["Sur", "Lo", "Sol"],
    stats: ["BOTH:", "20% Chance to Cast Level 18 Venom When Struck", "12% Chance To Cast Level 15 Hydra On Striking", "Level 14 Holy Fire Aura When Equipped", "+360 Defense", "+230 Defense Vs. Missile", "+3-5 To All Attributes", "+(0.375 * Player Lvl) To Strength", "+5% To Maximum Lightning Resist", "Damage Reduced by 7", "BODY ARMOR ONLY:", "Increase Maximum Mana 5%", "SHIELDS ONLY:", "+50 To Mana"]
  }, {
    name: "Bramble",
    sockets: 4,
    gearType: "Body Armor",
    lvlReq: 61,
    runes: ["Ral", "Ohm", "Sur", "Eth"],
    stats: ["Level 15-21 Thorns Aura When Equipped", "+50% Faster Hit Recovery", "+25-50% To Poison Skill Damage", "+300 Defense", "Increase Maximum Mana 5%", "Regenerate Mana 15%", "+5% To Maximum Cold Resist", "Fire Resist +30%", "Poison Resist +100%", "+13 Life After Each Kill", "Level 13 Spirit of Barbs (33 Charges)"]
  }, {
    name: "Wind",
    sockets: 2,
    gearType: "All Melee Weapons",
    lvlReq: 61,
    runes: ["Sur", "El"],
    stats: ["10% Chance To Cast Level 9 Tornado On Striking", "+20% Faster Run/Walk", "+40% Increased Attack Speed", "+15% Faster Hit Recovery", "+120-160% Enhanced Damage", "-50% Target Defense", "+50 To Attack Rating", "Hit Blinds Target", "+1 To Light Radius", "Level 13 Twister (127 Charges)"]
  }, {
    name: "Grief",
    sockets: 5,
    gearType: "Axes and Swords",
    lvlReq: 59,
    runes: ["Eth", "Tir", "Lo", "Mal", "Ral"],
    stats: ["35% Chance To Cast Level 15 Venom On Striking", "+30-40% Increased Attack Speed", "Damage +340-400", "Ignore Target's Defense", "-25% Target Defense", "+(1.875 * Player Lvl)% Damage To Demons", "Adds 5-30 Fire Damage", "-20-25% To Enemy Poison Resistance", "20% Deadly Strike", "Prevent Monster Heal", "+2 To Mana After Each Kill", "+10-15 Life After Each Kill"]
  }, {
    name: "Fortitude",
    sockets: 4,
    gearType: "All Ranged and Melee Weapons and Body Armor",
    lvlReq: 59,
    runes: ["El", "Sol", "Dol", "Lo"],
    stats: ["BOTH", "20% Chance To Cast Level 15 Chilling Armor when Struck", "+25% Faster Cast Rate", "+300% Enhanced Damage", "+200% Enhanced Defense", "+((8-12) * Player Lvl) To Life", "All Resistances +25-30", "12% Damage Taken Goes To Mana", "+1 To Light Radius", "WEAPONS:", "+9 To Minimum Damage", "+50 To Attack Rating", "20% Deadly Strike", "Hit Causes Monster To Flee 25%", "ARMOR:", "+15 Defense", "Replenish Life +7", "+5% To Maximum Lightning Resist", "Damage Reduced By 7"]
  }, {
    name: "Exile",
    sockets: 4,
    gearType: "Paladin Shields",
    lvlReq: 57,
    runes: ["Vex", "Ohm", "Ist", "Dol"],
    stats: ["15% Chance To Cast Level 5 Life Tap On Striking", "Level 13-16 Defiance Aura When Equipped", "+2 To Offensive Auras (Paladin Only)", "+30% Faster Block Rate", "Freezes Target", "+220-260% Enhanced Defense", "Replenish Life +7", "+5% To Maximum Cold Resist", "+5% To Maximum Fire Resist", "25% Better Chance Of Getting Magic Items", "Repairs 1 Durability every 4 seconds"]
  }, {
    name: "Call to Arms",
    sockets: 5,
    gearType: "All Ranged and Melee Weapons",
    lvlReq: 57,
    runes: ["Amn", "Ral", "Mal", "Ist", "Ohm"],
    stats: ["+1 To All Skills", "+40% Increased Attack Speed", "+240-290% Enhanced Damage", "Adds 5-30 Fire Damage", "7% Life Stolen Per Hit", "+2-6 To Battle Command", "+1-6 To Battle Orders", "+1-4 To Battle Cry", "Prevent Monster Heal", "Replenish Life +12", "30% Better Chance of Getting Magic Items"]
  }, {
    name: "Chaos",
    sockets: 3,
    gearType: "Claws",
    lvlReq: 57,
    runes: ["Fal", "Ohm", "Um"],
    stats: ["9% Chance To Cast Level 11 Frozen Orb On Striking", "11% Chance To Cast Level 9 Charged Bolt On Striking", "+35% Increased Attacked Speed", "+240-290% Enhanced Damage", "Adds 216-471 Magic Damage", "25% Chance of Open Wounds", "+1 To Whirlwind", "+10 To Strength", "+15 Life After Each Demon Kill"]
  }, {
    
  }

]