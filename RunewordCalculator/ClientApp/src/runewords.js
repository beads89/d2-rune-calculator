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
  }, {}

]