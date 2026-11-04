const monsterTypeInput = document.getElementById("monsterType");
const monsterTypes = [
    { name: "Goblin", cr: 0.25 },
    { name: "Orc", cr: 0.5 },
    { name: "Skeleton", cr: 0.25 },
    { name: "Kobold", cr: 0.125 },
    { name: "Zombie", cr: 0.25 },
    { name: "Wolf", cr: 0.25 },
    { name: "Gremlin", cr: 0.25 },
    ];


// Adds a new monster type to the monsterTypes array when the user presses Enter in the input field. It also clears the input field and logs the updated monster types to the console.
monsterTypeInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const newTypes = monsterTypeInput.value.split(",").map(type => type.trim()).filter(type => type !== "");
        if (newTypes !== undefined && newTypes.length > 0) {
            newTypes.forEach(type => {
                monsterTypes.push({
                    name: type,
                    cr:0.25
                })
            });
        }
        monsterTypeInput.value = "";

        renderMonsterTypes(); // re-render the monster types after adding new ones
    }
});

const monsterListDisplay = document.getElementById("monsterList");

// simple render function for displaying types of monsters
function renderMonsterTypes() {

    // Clear the previous content before updating
    monsterListDisplay.innerHTML = "";
    monsterTypes.forEach(monster => {
       // monsterTypes.push({
       //     name: type,
       //     cr: 0.25
       // });
        const button = document.createElement("button");
        button.textContent = monster.name;

        monsterListDisplay.appendChild(button);

        // lock natural width of button to prevent resizing when text changes on hover
        const naturalWidth = button.offsetWidth;
        button.style.width = `${naturalWidth}px`;
        // add hover effect to each button
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "#ff0000c0"; // Change to desired hover color
            button.textContent = "X"; // Change text on hover
        });
        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = ""; // Reset to original color
            button.textContent = monster.name; // Reset text on mouse out
        });
        // add remove functionality to each button
        button.addEventListener("click", function() {
            monsterTypes.splice(monsterTypes.indexOf(monster), 1);
            renderMonsterTypes();
        });

    });
    document.getElementById("monsterClear").hidden = monsterTypes.length === 0; // Hide the clear button if there are no monster types
}

//render the monster types on page load
renderMonsterTypes();

document.getElementById("monsterClear").addEventListener("click", function() {
    monsterTypes.length = 0; // Clear the array
    renderMonsterTypes(); // Re-render the monster types after clearing
});

document.getElementById("monsterClear").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#ff0000c0"; // Change to desired hover color
});

document.getElementById("monsterClear").addEventListener("mouseout", function() {
    this.style.backgroundColor = ""; // Reset to original color
});


const treasureTypeInput = document.getElementById("treasureType");
const treasureTypes = ["Gold Coins", "Platinum Coins", "Ruby", "Greatsword", "Emerald"];
const treasureListDisplay = document.getElementById("treasureList");

// Adds a new treasure type to the treasureTypes array when the user presses Enter in the input field. It also clears the input field and logs the updated treasure types to the console.
treasureTypeInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        // local variables are nifty! I can use the same name for 2 different variables in different scopes and they won't interfere. 
        const newTypes = treasureTypeInput.value.split(",").map(type => type.trim()).filter(type => type !== "");
        if (newTypes !== undefined && newTypes.length > 0) {
            treasureTypes.push(...newTypes);
        }
        treasureTypeInput.value = "";

        renderTreasureTypes(); // re-render the treasure types after adding new ones
    }
});

//function renderTreasureTypes() {
//    treasureListDisplay.innerHTML = "";

//    treasureTypes.forEach(trap => {
//        const button = document.createElement("button");
//            button.textContent = trap;
//treasureListDisplay.appendChild(button);
//    });
//}
//renderTreasureTypes();

const trapTypeInput = document.getElementById("trapType");
const trapTypes = ["Spike Pit", "Swinging Blades", "Fire Rune", "Lightning Glyph", "Gravity Reversal", "Illusionary Floor", "Mimic Floor Tiles"];
const trapListDisplay = document.getElementById("trapList");

function renderTrapTypes() {
    trapListDisplay.innerHTML = "";

    trapTypes.forEach(trap => {
        const button = document.createElement("button");
            button.textContent = trap;

trapListDisplay.appendChild(button);

        // Lock the natural width of the button
        const naturalWidth = button.offsetWidth;
        button.style.width = `${naturalWidth}px`;

        // Add hover effects
    button.addEventListener("mouseover",function() {

    button.style.backgroundColor = "#ff0000c0"
                button.textContent = "X";
    });
    
    button.addEventListener("mouseout", function() {

        button.style.backgroundColor = "";
                button.textContent = trap;
            });

        // Remove the trap when clicked
    button.addEventListener("click", function() {
    trapTypes.splice(trapTypes.indexOf(trap), 1);
            renderTrapTypes();
        });
    });
}
renderTrapTypes();



// Adds a new trap type to the trapTypes array when the user presses Enter in the input field. It also clears the input field and logs the updated treasure types to the console.
trapTypeInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        // local variables are nifty! I can use the same name for 2 different variables in different scopes and they won't interfere. 
        const newTypes = trapTypeInput.value.split(",").map(type => type.trim()).filter(type => type !== "");
        if (newTypes !== undefined && newTypes.length > 0) {
            trapTypes.push(...newTypes);
        }
        trapTypeInput.value = "";

        renderTrapTypes(); // re-render the trap types after adding new ones
    }
});



const dungeonAdjectives = [
    "Forgotten",
    "Cursed",
    "Ancient",
    "Hollow",
    "Lost",
    "Forsaken",
    "Shadowed",
    "Sunken",
    "Haunted",
    "Crumbling",
    "Dark",
    "Blighted",
    "Forbidden",
    "Eternal",
    "Whispering",
    "Silent",
    "Ruined",
    "Abandoned",
    "Frozen",
    "Burning",
    "Shattered",
    "Twisted",
    "Corrupted",
    "Sacred",
    "Hidden",
    "Buried",
    "Desolate",
    "Restless",
    "Nameless",
    "Crimson",
    "Obsidian",
    "Emerald",
    "Golden",
    "Silver",
    "Ivory",
    "Bloodstained",
    "Ashen",
    "Withered",
    "Fallen",
    "Ruthless",
    "Savage",
    "Eldritch",
    "Arcane",
    "Mystic",
    "Enchanted",
    "Magical",
    "Runic",
    "Celestial",
    "Infernal",
    "Abyssal",
    "Draconic",
    "Jagged",
    "Rotting",
    "Molten",
    "Glacial",
    "Gloomy",
    "Storming",
    "Barren",
    "Veiled",
    "Sealed",

];

const dungeonNouns = [
    "Catacombs",
    "Citadel",
    "Abyss",
    "Tower",
    "Fortress",
    "Temple",
    "Labyrinth",
    "Dungeon",
    "Stronghold",
    "Keep",
    "Sanctum",
    "Vault",
    "Necropolis",
    "Mausoleum",
    "Tomb",
    "Caverns",
    "Depths",
    "Chasm",
    "Pit",
    "Castle",
    "Palace",
    "Bastion",
    "Monastery",
    "Shrine",
    "Sepulcher",
    "Prison",
    "Gauntlet",
    "Maze",
    "Ruins",
    "Warren",
    "Grotto",
    "Den",
    "Lair",
    "Nest",
    "Burrow",
    "Observatory",
    "Library",
    "Archive",
    "Armory",
    "Forge",
    "Foundry",
    "Quarry",
    "Altar",
    "Domain",
    "Kingdom",
    "Empire",
    "Throne",
    "Arena",
    "Colosseum",
    "Basilica",
    "Monument",
    "Pyramid",
    "Ziggurat",
    "Obelisk",
    "Rift",
    "Void",
    "Mountain",
    "Swamp",
    "Bog",
    "Outpost",
    "Watchtower",
    "Frontier",
    "Barracks",
    "Threshold",
];

function generateDungeonName() {
    let randomAdjective = dungeonAdjectives[
        Math.floor(Math.random() * dungeonAdjectives.length)];
    let randomNoun = dungeonNouns[
        Math.floor(Math.random() * dungeonNouns.length)];
    
        return "The " + randomAdjective + " " + randomNoun;
}



// simple render function for displaying types of treasures
function renderTreasureTypes() {
    // Clear the previous content before updating
    treasureListDisplay.innerHTML = "";
    treasureTypes.forEach(treasure => {
        const button = document.createElement("button");
        button.textContent = treasure;

        treasureListDisplay.appendChild(button);

        //lock natural width of button to prevent resizing when text changes on hover
        const naturalWidth = button.offsetWidth;
        button.style.width = `${naturalWidth}px`;
        // add hover effect to each button
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "#ff0000c0"; // Change to desired hover color
            button.textContent = "X"; // Change text on hover
        });
        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = ""; // Reset to original color
            button.textContent = treasure; // Reset text on mouse out
        });
        // add remove functionality to each button
        button.addEventListener("click", function() {
            treasureTypes.splice(treasureTypes.indexOf(treasure), 1);
            renderTreasureTypes();
        });
    });
    document.getElementById("treasureClear").hidden = treasureTypes.length === 0; // Hide the clear button if there are no treasure types
}

//render the treasure types on page load
renderTreasureTypes();

document.getElementById("treasureClear").addEventListener("click", function() {
    treasureTypes.length = 0; // Clear the array
    renderTreasureTypes(); // Re-render the treasure types after clearing
});

document.getElementById("treasureClear").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#ff0000c0"; // Change to desired hover color
});

document.getElementById("treasureClear").addEventListener("mouseout", function() {
    this.style.backgroundColor = ""; // Reset to original color
});


function limitRange(input) {
    let value = input.value.replace(/\D/g, ''); // Remove non-digit characters

    if (value !== "") {
        let numericValue = parseInt(value, 10);
        let min = parseInt(input.min, 10);
        let max = parseInt(input.max, 10);

        if (numericValue > max) {
            value = String(max);
        } else if (numericValue < min) {
            value = String(min);
        } else {
            value = String(numericValue); // Set the value to the numeric value if it's within range
        }
    }
    input.value = value; // Update the input field with the validated value
}


// I'll come back to this mess later.
document.getElementById("generateButton").addEventListener("click", function() {
    let results = document.getElementById("dungeon_results");          

    //Common variables used throughout the program
    let dungeonName = document.getElementById("dungeonName").value;
    let roomInput = document.getElementById("roomNumber").value;
    let difficulty = document.getElementById("difficulty").value;   
    let maxMonstersInput = document.getElementById("maxMonsters").value;
    let minMonstersInput = document.getElementById("minMonsters").value;
    let maxTreasuresInput = document.getElementById("maxTreasures").value;
    let minTreasuresInput = document.getElementById("minTreasures").value;

    let rooms;
    if (roomInput === "") {
        rooms = Math.floor(Math.random() * 6) + 3;
    }
    else {
        rooms= Number(roomInput);
    }


    //Max and min monster user choice or random generation
    let maxMonsters;
    let minMonsters;

        if(maxMonstersInput === "" && minMonstersInput === "") {
        maxMonsters = Math.floor(Math.random() * 10) + 1;
        minMonsters = Math.floor(Math.random() * maxMonsters) + 1;
        }
        else if (maxMonstersInput === "") {
        minMonsters = Number(minMonstersInput);
        maxMonsters = Math.floor(Math.random() * (11 - minMonsters)) + minMonsters;
        }
        else if (minMonstersInput === "") {
        maxMonsters = Number(maxMonstersInput);
        minMonsters = Math.floor(Math.random() * maxMonsters) + 1;
        }
        else {
        maxMonsters = Number(maxMonstersInput);
        minMonsters = Number(minMonstersInput);
        }



    //Adjust randomly generated monster counts based on difficulty
    let monsterMultiplier = 1;
    
    if (difficulty === "easy") {
        monsterMultiplier = 0.5;
    }

    else if (difficulty === "hard") {
        monsterMultiplier = 1.5;
    }

    //Only scale values the user left blank
    if (minMonstersInput === "") {
        minMonsters = Math.min(100, Math.max(1, Math.round(minMonsters * monsterMultiplier))); 
    }


    if (maxMonstersInput === "") {
        maxMonsters = Math.max(minMonsters, Math.round(maxMonsters * monsterMultiplier));
    }



    //Max and min treasure user choice or random generation
    let minTreasures
    let maxTreasures

        if (maxTreasuresInput === "" && minTreasuresInput === "") {
        maxTreasures = Math.floor(Math.random() * 10) + 1;
        minTreasures = Math.floor(Math.random() * maxTreasures) + 1;
        }
        else if (maxTreasuresInput === "") {
        minTreasures = Number(minTreasuresInput);
        maxTreasures = Math.floor(Math.random() * (6 - minTreasures)) + minTreasures;
        }
        else if (minTreasuresInput === "") {
        maxTreasures = Number(maxTreasuresInput);
        minTreasures = Math.floor(Math.random() * maxTreasures) + 1;
        }
        else {
        maxTreasures = Number(maxTreasuresInput);
        minTreasures = Number(minTreasuresInput);
        }


    //Adjust randomly generated treasure counts based on difficulty
    let treasureMultiplier = 1;
    
    if (difficulty === "easy") {
        treasureMultiplier = 0.5;
    }

    else if (difficulty === "hard") {
        treasureMultiplier = 1.5;
    }

    //Only scale values the user left blank
    if (minTreasuresInput === "") {
        minTreasures = Math.min(100, Math.max(1, Math.round(minTreasures * treasureMultiplier))); 
    }
    

    if (maxTreasuresInput === "") {
        maxTreasures = Math.max(minTreasures, Math.round(maxTreasures * treasureMultiplier));
    }




    //Dungeon room generation code.
    let dungeonRooms = [];

    for (let i = 0; i < rooms; i++) {
        let roomType = Math.floor(Math.random() * 4) + 1;
 
        let generatedMonsters = [];
        let generatedTreasures = [];
        let generatedTraps = [];
    
         // Generate monsters in room types 1 and 4
         if (roomType === 1 || roomType === 4) {
            let monster_count = Math.floor(Math.random() * (maxMonsters - minMonsters + 1)) + minMonsters;

            if (monsterTypes.length > 0) {
            for (let j = 0; j < monster_count; j++) {
                let randomMonsterIndex = Math.floor(Math.random() * monsterTypes.length);
                let randomMonster = monsterTypes[randomMonsterIndex];

                generatedMonsters.push({
                    name: randomMonster.name,
                    cr: randomMonster.cr
                });
            }
         }

        
        }

        // Generate treasures in room types 2 and 4
        if (roomType === 2 || roomType === 4) {
            let treasure_count = Math.floor(Math.random() * (maxTreasures - minTreasures + 1)) + minTreasures;


            if (treasureTypes.length > 0) {
                for (let j = 0; j < treasure_count; j++) {
                    let randomTreasureIndex = Math.floor(Math.random() * treasureTypes.length);
                    let randomTreasure = treasureTypes[randomTreasureIndex];

            generatedTreasures.push(randomTreasure)
                }
            }
        }

        // Generate traps in room type 3
        if (roomType === 3) {
            let trap_count = Math.floor(Math.random() *4) + 1;

            if (trapTypes.length > 0) {
                for (let j = 0; j < trap_count; j++) {
                    let randomTrapIndex = Math.floor(Math.random() * trapTypes.length);
                    let randomTrap = trapTypes[randomTrapIndex];
        generatedTraps.push(randomTrap);
                }
            }
        }

        let roomCR = 0;

        for (let j = 0; j < generatedMonsters.length; j++) {
            roomCR += generatedMonsters[j].cr;
        }

        dungeonRooms.push({
            roomNumber: i + 1,
            monsters: generatedMonsters,
            treasures: generatedTreasures,
            traps: generatedTraps,
            // roomCR: roomCR,
        });
    }


    //All the alerts for if the user does something wrong
    if (dungeonName.trim() === "") {
        dungeonName = generateDungeonName();
    } 
    
    if (rooms < 1 || rooms > 20) {
        alert("Please enter a number of rooms between 1 and 20.");
        return;
    }
    if (minMonsters > maxMonsters) {
        alert("Minimum monsters cannot be greater than maximum monsters.");
        return;
    }
    if (minTreasures > maxTreasures) {
        alert("Minimum treasures cannot be greater than maximum treasures.")
        return;
    }
    if (difficulty === "") {
        alert("Please select a difficulty level.");   
        return;
     }
    if (maxMonsters < 1 || maxMonsters > 100) {
        alert("Maximum monsters must be between 1 and 100.");
        return;
    }
    if (minMonsters < 1 || minMonsters > 100) {
        alert("Minimum monsters must be between 1 and 100.");
        return;
    }
    if (maxTreasures < 1 || maxTreasures > 10) {
        alert("Maximum treasures must be between 1 and 10.");
        return;
    }
    if (minTreasures < 1 || minTreasures > 10 ) {
        alert("Minimum treasures must be between 1 and 10.");
        return;
    }


//Makes sure each room displays what it should
let dungeonDisplay = "";

for (let i = 0; i < dungeonRooms.length; i++) {
    dungeonDisplay += "\nRoom: " + dungeonRooms[i].roomNumber;
    if (dungeonRooms[i].monsters.length > 0) {
        dungeonDisplay += "\nMonsters: " + dungeonRooms[i].monsters.join(", ");
    }
    if (dungeonRooms [i].treasures.length > 0) {
        dungeonDisplay += "\nTreasures: " + dungeonRooms[i].treasures.join(", ");
    }
}

// Where everything is displayed. Includes the old displays that I combined and or replaced in case I ever need to look at and debug them specifically.
//alert("Welcome to: " + dungeonName 
 // + "\nRooms: " + rooms 
 // + "\nDifficulty: " + difficulty 
 // + "\nMax Monsters: " + maxMonsters  
 // + "\nMin Monsters: " + minMonsters 
 // + "\nMax Treasures: " + maxTreasures
 // + "\nMin Treasures: " + minTreasures
 // + "\nMonster Types: " + monsterTypes.join(", ")
 // + "\nTreasure Types: " + treasureTypes.join(", ") 
 // + "\nRandom Monster: " + randomMonster
 // + "\nRandom Treasure: " + random_treasure
 // + "\nMonster Count: " + monster_count
 // + "\nTreasure Count: " + treasure_count
 // + "\nGenerated Monsters: " + generatedMonsters.join(", ")
 // + "\nGenerated Treasures: " + generatedTreasures.join(", ")
 // + "\nGenerated Rooms: " + rooms
 // + "\n\nDungeon Rooms: " + dungeonDisplay
//);


results.replaceChildren();

let dungeon_title = document.createElement("h2");
dungeon_title.textContent = "Welcome to: " + dungeonName;
results.appendChild(dungeon_title);

let roomCountDisplay = document.createElement("h3");
roomCountDisplay.textContent = rooms + " Rooms Generated";
roomCountDisplay.className = "roomCountDisplay";
results.appendChild(roomCountDisplay);

for (let i = 0; i < dungeonRooms.length; i++) {
    let room = document.createElement("div");
    room.className = "roomCard";

    let room_title = document.createElement("h3");
    room_title.textContent = "Room " + dungeonRooms[i].roomNumber;

    room.appendChild(room_title);

    //let roomCRDisplay = document.createElement("p");
    //roomCRDisplay.textContent = "Challenge Rating: " + dungeonRooms[i].roomCR;
    //room.appendChild(roomCRDisplay);



    if (dungeonRooms [i].monsters.length > 0) {
        let monsters = document.createElement("p");
        monsters.textContent = "Monsters:";
        room.appendChild(monsters);
    }
    
    

    let monsterCounts = {};

    for (let j = 0; j < dungeonRooms[i].monsters.length; j++) {
        let monster = dungeonRooms[i].monsters[j];

        if (monsterCounts[monster.name] === undefined) {
            monsterCounts[monster.name] = 1;
        }
        else {
            monsterCounts[monster.name]++;
        }
    }

    for (let monster in monsterCounts) {
        let monsterLine = document.createElement("p");
        monsterLine.textContent = monster + " x " + monsterCounts[monster];

        room.appendChild(monsterLine);
    }
    //let monsters = document.createElement("p");
    //monsters.textContent = "Monsters: " + dungeonRooms[i].monsters.join(', ');



    
    if (dungeonRooms[i].treasures.length > 0) {
        let treasures = document.createElement("p");
        treasures.textContent = "Treasures: ";
        room.appendChild(treasures);
    }

    let treasureCounts = {};

    for (let j = 0; j < dungeonRooms[i].treasures.length; j++) {
        let treasure = dungeonRooms[i].treasures[j];

        if (treasureCounts[treasure] === undefined) {
            treasureCounts[treasure] = 1;
        }
        else {
            treasureCounts[treasure]++;
        }
    }
    
    for (let treasure in treasureCounts) {
        let treasureLine = document.createElement("p");
        treasureLine.textContent = treasure + " x " + treasureCounts[treasure];

        room.appendChild(treasureLine);
    }

    if (dungeonRooms[i].traps.length > 0) {
        let traps = document.createElement("p");
            traps.textContent = "Traps: " // + dungeonRooms[i].traps.join(", ");
            room.appendChild(traps);
    }

    for (let j = 0; j < dungeonRooms[i].traps.length; j++) {
        let trapLine = document.createElement("p");
        trapLine.textContent = dungeonRooms[i].traps[j];
        room.appendChild(trapLine);
    }
    results.appendChild(room);

}
});





