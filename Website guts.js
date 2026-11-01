





const monsterTypeInput = document.getElementById("monsterType");
const monsterTypes = ["Goblin", "Orc", "Skeleton", "Kobold", "Zombie", "Wolf", "Gremlin"];


// Adds a new monster type to the monsterTypes array when the user presses Enter in the input field. It also clears the input field and logs the updated monster types to the console.
monsterTypeInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const newTypes = monsterTypeInput.value.split(",").map(type => type.trim()).filter(type => type !== "");
        if (newTypes !== undefined && newTypes.length > 0) {
            monsterTypes.push(...newTypes);
        }
        monsterTypeInput.value = "";

        renderMonsterTypes(); // re-render the monster types after adding new ones
    }
});

const monsterListDisplay = document.getElementById("monsterList");

// simple render function for displaying types of monsters
function renderMonsterTypes() {
    monsterListDisplay.textContent = monsterTypes.join(", ");
    document.getElementById("monsterClear").hidden = monsterTypes.length === 0; // Hide the clear button if there are no monster types
}

//render the monster types on page load
renderMonsterTypes();

document.getElementById("monsterClear").addEventListener("click", function() {
    monsterTypes.length = 0; // Clear the array
    renderMonsterTypes(); // Re-render the monster types after clearing
});



const treasureTypeInput = document.getElementById("treasureType");
const treasureTypes = ["Gold Coins", "Platinum Coins", "Ruby", "Greatsword", "Emerald"];

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
    "Eterenal",
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
    "Colluseum",
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



const treasureListDisplay = document.getElementById("treasureList");

// simple render function for displaying types of treasures
function renderTreasureTypes() {
    treasureListDisplay.textContent = treasureTypes.join(", ");
    document.getElementById("treasureClear").hidden = treasureTypes.length === 0; // Hide the clear button if there are no treasure types
}

//render the treasure types on page load
renderTreasureTypes();

document.getElementById("treasureClear").addEventListener("click", function() {
    treasureTypes.length = 0; // Clear the array
    renderTreasureTypes(); // Re-render the treasure types after clearing
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
        maxMonsters = Math.floor(Math.random() * (101 - minMonsters)) + minMonsters;
        }
        else if (minMonstersInput === "") {
        maxMonsters = Number(maxMonstersInput);
        minMonsters = Math.floor(Math.random() * maxMonsters) + 1;
        }
        else {
        maxMonsters = Number(maxMonstersInput);
        minMonsters = Number(minMonstersInput);
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
        maxTreasures = Math.floor(Math.random() * (11 - minTreasures)) + minTreasures;
        }
        else if (minTreasuresInput === "") {
        maxTreasures = Number(maxTreasuresInput);
        minTreasures = Math.floor(Math.random() * maxTreasures) + 1;
        }
        else {
        maxTreasures = Number(maxTreasuresInput);
        minTreasures = Number(minTreasuresInput);
        }




    //Dungeon room generation code.
    let dungeonRooms = [];

    for (let i = 0; i < rooms; i++) {
        let monster_count = Math.floor(Math.random() * (maxMonsters - minMonsters + 1)) + minMonsters;
    
        let generatedMonsters = [];

        if (monsterTypes.length > 0) {
            for (let i = 0; i < monster_count; i++) {
                let randomMonsterIndex = Math.floor(Math.random() * monsterTypes.length);
                let randomMonster = monsterTypes[randomMonsterIndex];

                generatedMonsters.push(randomMonster);
            }
        }
        
        let treasure_count = Math.floor(Math.random() * (maxTreasures - minTreasures + 1)) + minTreasures;

        let generatedTreasures = [];

        if (treasureTypes.length > 0) {
            for (let i = 0; i < treasure_count; i++) {
                let randomTreasureIndex = Math.floor(Math.random() * treasureTypes.length);
                let randomTreasure = treasureTypes[randomTreasureIndex];

                generatedTreasures.push(randomTreasure)
            }
        }
        dungeonRooms.push({
            roomNumber: i + 1,
            monsters: generatedMonsters,
            treasures: generatedTreasures
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
    dungeonDisplay += "\nMonsters: " + dungeonRooms[i].monsters.join(", ");
    dungeonDisplay += "\nTreasures: " + dungeonRooms[i].treasures.join(", ");
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







    let monsters = document.createElement("p");
    monsters.textContent = "Monsters:";

    room.appendChild(room_title);
    room.appendChild(monsters);
    

    let monsterCounts = {};

    for (let j = 0; j < dungeonRooms[i].monsters.length; j++) {
        let monster = dungeonRooms[i].monsters[j];

        if (monsterCounts[monster] === undefined) {
            monsterCounts[monster] = 1;
        }
        else {
            monsterCounts[monster]++;
        }
    }

    for (let monster in monsterCounts) {
        let monsterLine = document.createElement("p");
        monsterLine.textContent = monster + " x " + monsterCounts[monster];

        room.appendChild(monsterLine);
    }
    //let monsters = document.createElement("p");
    //monsters.textContent = "Monsters: " + dungeonRooms[i].monsters.join(', ');








    let treasures = document.createElement("p");
    treasures.textContent = "Treasures: ";

    room.appendChild(treasures);

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

    results.appendChild(room);

}
});





