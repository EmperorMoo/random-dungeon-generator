




// Note to self, I NEED TO LEARN TO STICK TO A CASING CONVENTION.
// Choose either camelCase or snake_case and stick to it.
// I have been mixing them up and it is making my code look messy and unprofessional.
// I will probably choose camelCase because it is the most common convention in JavaScript.
// And it looks better in my opinion.
// While variable names can be most anything, sticking to a convention will make my code look more professional and easier to read.

// snake_case involves almost all lowercase letters with underscores between words. For example: my_variable_name

// camelCase involves starting with a lowercase letter and capitalizing the first letter of each subsequent word. For example: myVariableName



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
    let rooms = Number(roomInput);
    let maxMonstersInput = document.getElementById("maxMonsters").value;
    let minMonstersInput = document.getElementById("minMonsters").value;
    let maxTreasuresInput = document.getElementById("maxTreasures").value;
    let minTreasuresInput = document.getElementById("minTreasures").value;



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

        for (let i = 0; i < monster_count; i++) {
            let randomMonsterIndex = Math.floor(Math.random() * monsterTypes.length);
            let randomMonster = monsterTypes[randomMonsterIndex];

            generatedMonsters.push(randomMonster);
        }
        
        let treasure_count = Math.floor(Math.random() * (maxTreasures - minTreasures + 1)) + minTreasures;

        let generatedTreasures = [];

        for (let i = 0; i < treasure_count; i++) {
            let randomTreasureIndex = Math.floor(Math.random() * treasureTypes.length);
            let randomTreasure = treasureTypes[randomTreasureIndex];

            generatedTreasures.push(randomTreasure)
        }
        dungeonRooms.push({
            roomNumber: i + 1,
            monsters: generatedMonsters,
            treasures: generatedTreasures
        });
    }




    //All the alerts for if the user does something wrong
    if (dungeonName === "") {
        alert("Please enter a dungeon name.");
        return;
    } 
    if (roomInput === "") {
        alert("Please enter the number of rooms.");
        return;
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

for (let i = 0; i < dungeonRooms.length; i++) {
    let room = document.createElement("div");
    room.className = "room_card";

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





