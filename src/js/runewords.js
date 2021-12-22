export { runewords };

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
    name: "Oath",
    sockets: 4,
    gearType: "Axes, Maces and Swords",
    lvlReq: 59,
    runes: ["Shael", "Pul", "Mal", "Lum"],
    stats: ["Indestructible", "30% Chance To Cast Level 20 Bone Spirit On Striking", "+50% Increased Attack Speed", "+210-240% Enhanced Defense", "+75% Damage To Demons", "+100 To Attack Rating Against Demons", "Prevent Monster Heal", "+10 To Energy", "+10-15 Magic Absorb", "Level 16 Heart of Wolverine (20 Charges)", "Level 17 Iron Golem (14 Charges)"]
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
    name: "Death",
    sockets: 5,
    gearType: "Swords and Axes",
    lvlReq: 55,
    runes: ["Hel", "El", "Vex", "Ort", "Gul"],
    stats: ["Indestructible", "100% Chance To Cast Level 44 Chain Lightning When You Die", "25% Chance To Cast Level 18 Glacial Spike On Attack", "+300-385% Enhanced Damage", "20% Bonus To Attack Rating", "+50 To Attack Rating", "Adds 1-50 Lightning Damage", "7% Mana Stolen Per Hit", "50% Chance of Crushing Blow", "(0.5 * Player Lvl)% Deadly Strike", "+1 To Light Radius", "Level 22 Blood Golem (15 Charges)", "Requirements -20%"]
  }, {
    name: "Silence",
    sockets: 6,
    gearType: "All Ranged and Melee Weapons",
    lvlReq: 55,
    runes: ["Dol", "Eld", "Hel", "Ist", "Tir", "Vex"],
    stats: ["+2 To All Skills", "+20% Increased Attack Speed", "+20% Faster Hit Recovery", "+200% Enhanced Damage", "+75% Damage To Undead", "+50 To Attack Rating Against Undead", "11% Mana Stolen Per Hit", "Hit Blinds Target +33", "Hit Causes Monster to Flee 25%", "All Resistances +75", "+2 to Mana After Each Kill", "30% Better Chance of Getting Magic Items", "Requirements -20%"]
  }, {
    name: "Heart of the Oak",
    sockets: 4,
    gearType: "Staves and Maces",
    lvlReq: 55,
    runes: ["Ko", "Vex", "Pul", "Thul"],
    stats: ["+3 To All Skills", "+40% Faster Cast Rate", "+75% Damage To Demons", "+100 To Attack Rating Against Demons", "Adds 3-14 Cold Damage", "7% Mana Stolen Per Hit", "+10 To Dexterity", "Replenish Life +20", "Increase Maximum Mana 15%", "All Resistances +30-40", "Level 4 Oak Sage (25 Charges)", "Level 14 Raven (60 Charges)"]
  }, {
    name: "Principle",
    sockets: 3,
    gearType: "Body Armor",
    lvlReq: 55,
    runes: ["Ral", "Gul", "Eld"],
    stats: ["100% Chance To Cast Level 5 Holy Bolt On Striking", "+2 To Paladin Skill Levels", "+50% Damage To Undead", "+100-150 to Life", "15% Slower Stamina Drain", "+5% To Maximum Poison Resist", "Fire Resist +30%"]
  }, {
    name: "Kingslayer",
    sockets: 4,
    gearType: "Swords and Axes",
    lvlReq: 53,
    runes: ["Mal", "Um", "Gul", "Fal"],
    stats: ["+30% Increased Attack Speed", "+230-270% Enhanced Damage", "-25% Target Defense", "20% Bonus to Attack Rating", "33% Chance of Crushing Blow", "50% Chance of Open Wounds", "+1 To Vengeance", "Prevent Monster Heal", "+10 To Strength", "40% Extra Gold From Monsters"]
  }, {
    name: "Rift",
    sockets: 4,
    gearType: "Polearms and Scepters",
    lvlReq: 53,
    runes: ["Hel", "Ko", "Lem", "Gul"],
    stats: ["20% Chance To Cast Level 16 Tornado On Striking", "16% Chance To Cast Level 21 Frozen Orb On Attack", "20% Bonus to Attack Rating", "Adds 160-250 Magic Damage", "Adds 60-180 Fire Damage", "+5-10 To All Attributes", "+10 To Dexterity", "38% Damage Taken Goes To Mana", "75% Extra Gold From Monsters", "Level 15 Iron Maiden (40 Charges)", "Requirements -20%"]
  }, {
    name: "Delirium",
    sockets: 3,
    gearType: "All Helmets",
    lvlReq: 51,
    runes: ["Lem", "Ist", "Io"],
    stats: ["1% Chance To Cast lvl 50 Delirium When Struck", "6% Chance To Cast lvl 14 Mind Blast When Struck", "14% Chance To Cast lvl 13 Terror When Struck", "11% Chance To Cast lvl 18 Confuse On Striking", "+2 To All Skills", "+261 Defense", "+10 To Vitality", "50% Extra Gold From Monsters", "25% Better Chance of Getting Magic Items", "Level 17 Attract (60 Charges)"]
  }, {
    name: "Sanctuary",
    sockets: 3,
    gearType: "All Shields",
    lvlReq: 49,
    runes: ["Ko", "Ko", "Mal"],
    stats: ["+20% Faster Hit Recovery", "+20% Faster Block Rate", "20% Increased Chance of Blocking", "+130-160% Enhanced Defense", "+250 Defense vs. Missle", "+20 To Dexterity", "All Resistances +50-70", "Magic Damage Reduced By 7", "Level 12 Slow Missles (60 Charges)"]
  }, {
    name: "Venom",
    sockets: 3,
    gearType: "All Ranged and Melee Weapons",
    lvlReq: 49,
    runes: ["Tal", "Dol", "Mal"],
    stats: ["Ignore Target's Defense", "+273 Poison Damage Over 6 Seconds", "7% Mana Stolen Per Hit", "Prevent Monster Heal", "Hit Causes Monster To Flee 25%", "Level 13 Poison Nova (11 Charges)", "Level 15 Poison Explosion (27 Charges)"]
  }, {
    name: "Rain",
    sockets: 3,
    gearType: "Body Armor",
    lvlReq: 49,
    runes: ["Ort", "Mal", "Ith"],
    stats: ["5% Chance To Cast Level 15 Cyclone Armor When Struck", "5% Chance To Cast Level 15 Twister On Striking", "+2 To Druid Skills", "+100-150 To Mana", "Lightning Resist +30%", "Magic Damage Reduced By 7", "15% Damage Taken Goes to Mana"]
  }, {
    name: "Prudence",
    sockets: 2,
    gearType: "Body Armor",
    lvlReq: 49,
    runes: ["Mal", "Tir"],
    stats: ["+25% Faster Hit Recovery", "+140-170% Enhanced Defense", "All Resistances +25-35", "Damage Reduced by 3", "Magic Damage Reduced By 17", "+2 To Mana After Each Kill", "+1 To Light Radius", "Repairs Durability 1 In 4 Seconds"]
  }, {
    name: "Bone",
    sockets: 3,
    gearType: "Body Armor",
    lvlReq: 47,
    runes: ["Sol", "Um", "Um"],
    stats: ["15% Chance To Cast level 10 Bone Armor When Struck", "15% Chance To Cast level 10 Bone Spear On Striking", "+2 To Necromancer Skills", "+100-150 To Mana", "All Resistances +30", "Damage Reduced By 7"]
  }, {
    name: "Gloom",
    sockets: 3,
    gearType: "Body Armor",
    lvlReq: 47,
    runes: ["Fal", "Um", "Pul"],
    stats: ["15% Chance To Cast Level 3 Dim Vision When Struck", "+10% Faster Hit Recovery", "+200-260% Enhanced Defense", "+10 To Strength", "All Resistances +45", "Half Freeze Duration", "5% Damage Taken Goes To Mana", "-3 To Light Radius"]
  }, {
    name: "Stone",
    sockets: 4,
    gearType: "Body Armor",
    lvlReq: 47,
    runes: ["Shael", "Um", "Pul", "Lum"],
    stats: ["+60% Faster Hit Recovery", "+250-290% Enhanced Defense", "+16 To Strength", "+16 To Vitality", "+10 To Energy", "All Resistances +15", "Level 16 Molten Boulder (80 Charges)", "Level 16 Clay Golem (16 Charges)"]
  }, {
    name: "Duress",
    sockets: 3,
    gearType: "Body Armor",
    lvlReq: 47,
    runes: ["Shael", "Um", "Thul"],
    stats: ["40% Faster Hit Recovery", "+10-20% Enhanced Damage", "Adds 37-133 Cold Damage", "15% Crushing Blow", "33% Open Wounds", "+150-200% Enhanced Defense", "-20% Slower Stamina Drain", "Cold Resist +45%", "Lightning Resist +15%", "Fire Resist +15%", "Poison Resist +15%"]
  }, {
    name: "Crescent Moon",
    sockets: 3,
    gearType: "Axes, Polearms and Swords",
    lvlReq: 47,
    runes: ["Shael", "Um", "Tir"],
    stats: ["10% Chance To Cast Level 17 Chain Lightning On Striking", "7% Chance To Cast Level 13 Static Field On Striking", "+20% Increased Attack Speed", "+180-220% Enhanced Damage", "Ignore Target's Defense", "-35% To Enemy Lightning Resistance", "25% Chance of Open Wounds", "+9-11 Magic Absorb", "+2 To Mana After Each Kill", "Level 18 Summon Spirit Wolf (30 Charges)"]
  }, {
    name: "Enlightenment",
    sockets: 3,
    gearType: "Body Armor",
    lvlReq: 45,
    runes: ["Pul", "Ral", "Sol"],
    stats: ["5% Chance To Cast Level 15 Blaze When Struck", "5% Chance To Cast level 15 Fire Ball On Striking", "+2 To Sorceress Skill Levels", "+1 To Warmth", "+30% Enhanced Defense", "Fire Resist +30%", "Damage Reduced By 7"]
  }, {
    name: "Lawbringer",
    sockets: 3,
    gearType: "Hammers, Scepters and Swords",
    lvlReq: 43,
    runes: ["Anm", "Lem", "Ko"],
    stats: ["20% Chance To Cast Level 15 Decrepify On Striking", "Level 16-18 Sanctuary Aura When Equipped", "-50% Target Defense", "Adds 150-210 Fire Damage", "Adds 130-180 Cold Damage", "7% Life Stolen Per Hit", "Slain Monsters Rest In Peace", "+200-250 Defense vs. Missle", "+10 To Dexterity", "75% Extra Gold From Monsters"]
  }, {
    name: "Wealth",
    sockets: 3,
    gearType: "Body Armor",
    lvlReq: 43,
    runes: ["Lem", "Ko", "Tir"],
    stats: ["+10 To Dexterity", "+2 to Mana After Each Kill", "300% Extra Gold From Monsters", "100% Better Chance of Getting Magic Items"]
  }, {
    name: "Voice of Reason",
    sockets: 4,
    gearType: "Maces and Swords",
    lvlReq: 43,
    runes: ["Lem", "Ko", "El", "Eld"],
    stats: ["15% Chance To Cast Level 13 Frozen Orb On Striking", "18% Chance To Cast Level 20 Ice Blast On Striking", "+50 To Attack Rating", "+220-350% Damage To Demons", "+335-375% Damage To Undead", "+50 To Attack Rating Against Undead", "Adds 100-220 Cold Damage", "-24% To Enemy Cold Resistance", "+10 TO Dexterity", "Cannot Be Frozen", "75% Extra Gold From Monsters", "+1 To Light Radius"]
  }, {
    name: "Passion",
    sockets: 4,
    gearType: "All Ranged and Melee Weapons",
    lvlReq: 43,
    runes: ["Dol", "Ort", "Eld", "Lem"],
    stats: ["+25% Increased Attack Speed", "+160-210% Enhanced Damage", "50-80% Bonus To Attack Rating", "75% Damage To Undead", "+50 To Attack Rating Against Undead", "Adds 1-50 Lightning Damage", "+1 To Berserk", "+1 To Zeal", "Hit Blinds Target +10", "Hit Causes Monster To Flee 25%", "75% Extra Gold From Monsters", "Level 3 Heart of Wolverine (12 Charges)"]
  }, {
    name: "Treachery",
    sockets: 3,
    gearType: "Body Armor",
    lvlReq: 43,
    runes: ["Shael", "Thul", "Lem"],
    stats: ["5% Chance To Cast Level 15 Fade When Struck", "25% Chance To Cast level 15 Venom On Striking", "+2 To Assassin Skills", "+45% Increased Attack Speed", "+20% Faster Hit Recovery", "Cold Resist +30%", "50% Extra Gold From Monsters"]
  }, {
    name: "Obedience",
    sockets: 5,
    gearType: "Polearms",
    lvlReq: 41,
    runes: ["Hel", "Ko", "Thul", "Eth", "Fal"],
    stats: ["30% Chance To Cast Level 21 Enchant When You Kill An Enemy", "+40% Faster Hit Recovery", "+370% Enhanced Damage", "-25% Target Defense", "Adds 3-14 Cold Damage", "-25% To Enemy Fire Resistance", "40% Chance of Crushing Blow", "+200-300 Defense", "+10 To Strength", "+10 To Dexterity", "All Resistance +20-30", "Requirements -20%"]
  }, {
    name: "Lionheart",
    sockets: 3,
    gearType: "Body Armor",
    lvlReq: 41,
    runes: ["Hel", "Lum", "Fal"],
    stats: ["+20% Enhanced Damage", "+25 To Strength", "+15 To Dexterity", "+20 To Vitality", "+10 To Energy", "+50 To Life", "All Resistences +30", "Requirements -15%"]
  }, {
    name: "Melody",
    sockets: 3,
    gearType: "Bows and Crossbows",
    lvlReq: 39,
    runes: ["Shael", "Ko", "Nef"],
    stats: ["+3 To Bow and Crossbow Skills (Amazon Only)", "+20% Increased Attack Speed", "+50% Enhanced Damage", "+300% Damage To Undead", "+3 To Slow Missiles (Amazon Only)", "+3 To Dodge (Amazon Only)", "+3 To Critical Strike (Amazon Only)", "Knockback", "+10 TO Dexterity"]
  }, {
    name: "Harmony",
    sockets: 4,
    gearType: "Bows and Crossbows",
    lvlReq: 39,
    runes: ["Tir", "Ith", "Sol", "Ko"],
    stats: ["Level 10 Vigor Aura When Equipped", "+200-275% Enhanced Damage", "+9 To Minimum Damage", "+9 To Maximum Damage", "Adds 55-160 Fire Damage", "Adds 55-160 Lightning Damage", "Adds 55-160 Cold Damage", "+2-6 To Valkyrie", "+10 To Dexterity", "Regenerate Mana 20%", "+2 To Mana After Each Kill", "+2 To Light Radius", "Level 20 Revive (25 Charges)"]
  }, {
    name: "Memory",
    sockets: 4,
    gearType: "Staves",
    lvlReq: 37,
    runes: ["Lum", "Io", "Sol", "Eth"],
    stats: ["+3 To Sorceress Skill Levels", "33% Faster Cast Rate", "+9 To Minimum Damage", "-25% Target Defense", "+3 To Energy Shield (Sorceress Only)", "+2 To Static Field (Sorceress Only)", "+50% Enhanced Defense", "+10 To Vitality", "+10 To Energy", "Increase Maximum Mana 20%", "Magic Damage Reduced By 7"]
  }, {
    name: "Splendor",
    sockets: 2,
    gearType: "All Shields",
    lvlReq: 37,
    runes: ["Eth", "Lum"],
    stats: ["+1 To All Skills", "+10% Faster Cast Rate", "+20% Faster Block Rate", "+60-100% Enhanced Defense", "+10 TO Energy", "Regenerate Mana 15%", "50% Extra Gold From Monsters", "20% Better Chance of Getting Magic Items", "+30 TO Light Radius"]
  }, {
    name: "Smoke",
    sockets: 2,
    gearType: "Body Armor",
    lvlReq: 37,
    runes: ["Nef", "Lum"],
    stats: ["+20% Faster Hit Recovery", "+75% Enhanced Defense", "+250 Defense vs. Missle", "+10 To Energy", "All Resistances +50", "-1 To Light Radius", "Level 6 Weaken (18 Charges"]
  }, {
    name: "White",
    sockets: 2,
    gearType: "Wands",
    lvlReq: 35,
    runes: ["Dol", "Io"],
    stats: ["+3 to Poison and Bone Skills (Necromancer Only)", "+20% Faster Cast Rate", "+2 to Bone Spear (Necromancer Only)", "+4 to Skeleton Mastery (Necromancer Only)", "+3 to Bone Armor (Necromancer Only)", "Hit Causes Monster To Flee 25%", "+10 To Vitality", "+13 To Mana", "Magic Damage Reduced By 4"]
  }, {
    name: "Black",
    sockets: 3,
    gearType: "Clubs, Hammers and Maces",
    lvlReq: 35,
    runes: ["Thul", "Io", "Nef"],
    stats: ["+15% Increased Attack Speed", "+120% Enhanced Damage", "+200 To Attack Rating", "Adds 3-14 Cold Damage", "40% Chance of Crushing Blow", "Knockback", "+10 To Vitality", "Magic Damage Reduced By 2", "Level 4 Corpse Explosion (12 Charges)"]
  }, {
    name: "Myth",
    sockets: 3,
    gearType: "Body Armor",
    lvlReq: 25,
    runes: ["Hel", "Anm", "Nef"],
    stats: ["3% Chance To Cast Level 1 Howl When Struck", "10% Chance To Cast Level 1 Taunt On Striking", "+2 To Barbarian Skill Levels", "+30 Defense Vs. Missile", "Replenish Life +10", "Attacker Takes Damage of 14", "Requirements -15%"]
  }, {
    name: "Peace",
    sockets: 3,
    gearType: "Body Armor",
    lvlReq: 29,
    runes: ["Shael", "Thul", "Amn"],
    stats: ["4% Chance To Cast Level 5 Slow Missiles When Struck", "2% Chance To Cast level 15 Valkyrie On Striking", "+2 To Amazon Skill Levels", "+20% Faster Hit Recovery", "+2 To Critical Strike", "Cold Resist +30%", "Attacker Takes Damage of 14"]
  }, {
    name: "Rhyme",
    sockets: 2,
    gearType: "All Shields",
    lvlReq: 29,
    runes: ["Shael", "Eth"],
    stats: ["+40% Faster Block Rate", "20% Increased Chance of Blocking", "Regenerate Mana 15%", "All Resistances +25", "Cannot Be Frozen", "50% Extra Gold From Monsters", "25% Better Chance of Getting Magic Items"]
  }, {
    name: "Honor",
    sockets: 5,
    gearType: "All Melee Weapons",
    lvlReq: 27,
    runes: ["Anm", "El", "Ith", "Tir", "Sol"],
    stats: ["+1 To All Skills", "+160% Enhanced Damage", "+9 To Minimum Damage", "+9 To Maximum Damage", "+250 to Attack Rating", "7% Life Stolen Per Hit", "25% Deadly Strike", "+10 To Strength", "Replenish Life +10", "+2 to Mana After Each Kill", "+1 To Light Radius"]
  }, {
    name: "Lore",
    sockets: 2,
    gearType: "All Helmets",
    lvlReq: 27,
    runes: ["Ort", "Sol"],
    stats: ["+1 To All Skills", "+10 TO Energy", "Lightning Resist +30%", "Damage Reduced By 7", "+2 To Mana After Each Kill", "+2 To Light Radius"]
  }, {
    name: "Insight",
    sockets: 4,
    gearType: "Polearms and Staves",
    lvlReq: 27,
    runes: ["Ral", "Tir", "Tal", "Sol"],
    stats: ["Level 12-17 Meditation Aura When Equipped", "+35% Faster Cast Rate", "+200-260% Enhanced Damage", "+9 To Minimum Damage", "180-250% Bonus to Attack Rating", "Adds 5-30 Fire Damage", "+75 Poison Damage Over 5 Seconds", "+1-6 To Critical Strike", "+5 To All Attributes", "+2 To Mana After Each Kill", "23% Better Chance of Getting Magic Items"]
  }, {
    name: "Radiance",
    sockets: 3,
    gearType: "All Helmets",
    lvlReq: 27,
    runes: ["Nef", "Sol", "Ith"],
    stats: ["+75% Enhanced Defense", "+30 Defense vs. Missiles", "+10 To Vitality", "+10 To Energy", "+33 To Mana", "Damage Reduced By 7", "Magic Damage Reduced By 3", "15% Damage Taken Goes To Mana", "+5 to Light Radius"]
  }, {
    name: "Spirit",
    sockets: 4,
    gearType: "Shields and Swords",
    lvlReq: 25,
    runes: ["Tal", "Thul", "Ort", "Anm"],
    stats: ["BOTH:", "+2 To All Skills", "+25-35% Faster Cast Rate", "+55% Faster Hit Recovery", "+250 Defense Vs. Missile", "+22 To Vitality", "+89-112 To Mana", "+3-8 Magic Absorb", "SHIELDS:", "Cold Resist +35%", "Lightning Resist +35%", "Poison Resist +35%", "Attacker Takes Damage of 14", "SWORDS:", "Adds 1-50 Lightning Damage", "Adds 3-14 Cold Damage", "+75 Poison Damage Over 5 Seconds", "7% Life Stolen Per Hit",]
  }, {
    name: "King's Grace",
    sockets: 3,
    gearType: "Swords and Scepters",
    lvlReq: 25,
    runes: ["Anm", "Ral", "Thul"],
    stats: ["+100% Enhanced Damage", "+150 To Attack Rating", "+100% Damage To Demons", "+100 To Attack Rating Against Demons", "+50% Damage To Undead", "+100 To Attack Rating Against Undead", "Adds 5-30 Fire Damage", "Adds 3-14 Cold Damage", "7% Life Stolen Per Hit"]
  }, {
    name: "Edge",
    sockets: 3,
    gearType: "Bows and Crossbows",
    lvlReq: 25,
    runes: ["Tir", "Tal", "Anm"],
    stats: ["Level 15 Thorns Aura When Equipped", "+35% Increased Attack Speed", "+320-380% Damage To Demons", "+280% Damage To Undead", "+75 Poison Damage Over 5 Seconds", "7% Life Stolen Per Hit", "Prevent Monster Heal", "+5-10 To All Attributes", "+2 To Mana After Each Kill", "Reduces All Vendor Prices By 15%"]
  }, {
    name: "Strength",
    sockets: 2,
    gearType: "All Melee Weapons",
    lvlReq: 25,
    runes: ["Anm", "Tir"],
    stats: ["+35% Enhanced Damage", "7% Life Stolen Per Hit", "25% Chance of Crushing Blow", "+20 To Strength", "+10 To Vitality", "+2 To Mana After Each Kill"]
  }, {
    name: "Holy Thunder",
    sockets: 4,
    gearType: "Scepters",
    lvlReq: 23,
    runes: ["Eth", "Ral", "Ort", "Tal"],
    stats: ["+60% Enhanced Damage", "+10 To Maximum Damage", "-25% Target Defense", "Adds 5-30 Fire Damage", "Adds 21-110 Lightning Damage", "+75 Poison Damage Over 5 Seconds", "+3 to Holy Shock (Paladin Only)", "+5% to Maximum Lightning Resist", "Lightning Resist +60%", "Level 7 Chain Lightning (60 charges)"]
  }, {
    name: "Ancient's Pledge",
    sockets: 3,
    gearType: "All Shields",
    lvlReq: 21,
    runes: ["Ral", "Ort", "Tal"],
    stats: ["+50% Enhanced Defense", "Cold Resist +43%", "Lightning Resist +48%", "Fire Resist +48%", "Poison Resist +48%", "10% Damage Taken Goes To Mana"]
  }, {
    name: "Zephyr",
    sockets: 2,
    gearType: "Bows and Crossbows",
    lvlReq: 21,
    runes: ["Ort", "Eth"],
    stats: ["7% Chance to Cast Level 1 Twister When Struck", "+25% Faster Run/Walk", "+25% Increased Attack Speed", "+33% Enhanced Damage", "-25% Target Defense", "+66 To Attack Rating", "Adds 1-50 Lightning Damage", "+25 Defense"]
  }, {
    name: "Leaf",
    sockets: 2,
    gearType: "Staves",
    lvlReq: 19,
    runes: ["Tir", "Ral"],
    stats: ["+3 To Fire Skills", "Adds 5-30 Fire Damage", "+3 to Inferno (Sorceress Only)", "+3 to Warmth (Sorceress Only)", "+3 to Fire Bolt (Sorceress Only)", "+(2 * Player Lvl) Defense", "Cold Resist +33%", "+2 To Mana After Each Kill"]
  }, {
    name: "Stealth",
    sockets: 2,
    gearType: "Body Armor",
    lvlReq: 19,
    runes: ["Tal", "Eth"],
    stats: ["+25% Faster Run/Walk", "+25% Faster Cast Rate", "+25 Faster Hit Recovery", "+6 To Dexterity", "Regenerate Mana 15%", "+15 Maximum Stamina", "Poison Resist +30%", "Magic Damage Reduced By 3"]
  }, {
    name: "Malice",
    sockets: 3,
    gearType: "All Melee Weapons",
    lvlReq: 15,
    runes: ["Ith", "El", "Eth"],
    stats: ["+33% Enhanced Damage", "+9 To Maximum Damage", "-25% Target Defense", "+50 To Attack Rating", "100% Chance of Open Wounds", "Prevent Monster Heal", "-100 To Monster Defense Per Hit", "Drain Life -5"]
  }, {
    name: "Nadir",
    sockets: 2,
    gearType: "All Helmets",
    lvlReq: 13,
    runes: ["Nef", "Tir"],
    stats: ["+50% Enhanced Defense", "+10 Defense", "+30 Defense vs. Missiles", "+5 To Strength", "+2 To Mana After Each Kill", "-33% Extra Gold From Monsters", "-3 To Light Radius", "Level 13 Cloak of Shadows (9 Charges)"]
  }, {
    name: "Steel",
    sockets: 2,
    gearType: "Swords, Axes and Maces",
    lvlReq: 13,
    runes: ["Tir", "El"],
    stats: ["+25% Increased Attack Speed", "+20% Enhanced Damage", "+3 To Minimum Damage", "+3 To Maximum Damage", "+50 To Attack Rating", "50% Chance of Open Wounds", "+2 To Mana After Each Kill", "+1 To Light Radius"]
  }
];