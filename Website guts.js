




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

// I'll come back to this mess later.
document.getElementById("generate_button").addEventListener("click", function() {
    let results = document.getElementById("dungeon_results");          

    //Common variables used throughout the program
    let dungeon_name = document.getElementById("dungeon_name").value;
    let room_input = document.getElementById("room_number").value;
    let difficulty = document.getElementById("difficulty").value;   
    let rooms = Number(room_input);
    let max_monsters_input = document.getElementById("max_monsters").value;
    let min_monsters_input = document.getElementById("min_monsters").value;
    let max_treasures_input = document.getElementById("max_treasures").value;
    let min_treasures_input = document.getElementById("min_treasures").value;


    let treasure_types = treasureTypes;
    if (treasure_types.length === 0) {
        treasure_types = ["Gold Coins", "Platinum Coins", "Ruby", "Greatsword", "Emerald"];
    }
    let random_treasure_index = Math.floor(Math.random() * treasure_types.length);
    let random_treasure = treasure_types[random_treasure_index];




    //Max and min monster user choice or random generation
    let max_monsters;
    let min_monsters;

        if(max_monsters_input === "" && min_monsters_input === "") {
        max_monsters = Math.floor(Math.random() * 10) + 1;
        min_monsters = Math.floor(Math.random() * max_monsters) + 1;
        }
        else if (max_monsters_input === "") {
        min_monsters = Number(min_monsters_input);
        max_monsters = Math.floor(Math.random() * (101 - min_monsters)) + min_monsters;
        }
        else if (min_monsters_input === "") {
        max_monsters = Number(max_monsters_input);
        min_monsters = Math.floor(Math.random() * max_monsters) + 1;
        }
        else {
        max_monsters = Number(max_monsters_input);
        min_monsters = Number(min_monsters_input);
        }
    



    //Max and min treasure user choice or random generation
    let min_treasures
    let max_treasures

        if (max_treasures_input === "" && min_treasures_input === "") {
        max_treasures = Math.floor(Math.random() * 10) + 1;
        min_treasures = Math.floor(Math.random() * max_treasures) + 1;
        }
        else if (max_treasures_input === "") {
        min_treasures = Number(min_treasures_input);
        max_treasures = Math.floor(Math.random() * (11 - min_treasures)) + min_treasures;
        }
        else if (min_treasures_input === "") {
        max_treasures = Number(max_treasures_input);
        min_treasures = Math.floor(Math.random() * max_treasures) + 1;
        }
        else {
        max_treasures = Number(max_treasures_input);
        min_treasures = Number(min_treasures_input);
        }




    //Dungeon room generation code.
    let dungeon_rooms = [];

    for (let i = 0; i < rooms; i++) {
        let monster_count = Math.floor(Math.random() * (max_monsters - min_monsters + 1)) + min_monsters;
    
        let generated_monsters = [];

        for (let i = 0; i < monster_count; i++) {
            let random_monster_index = Math.floor(Math.random() * monsterTypes.length);
            let random_monster = monsterTypes[random_monster_index];

            generated_monsters.push(random_monster);
        }
        
        let treasure_count = Math.floor(Math.random() * (max_treasures - min_treasures + 1)) + min_treasures;

        let generated_treasures = [];

        for (let i = 0; i < treasure_count; i++) {
            let random_treasure_index = Math.floor(Math.random() * treasureTypes.length);
            let random_treasure = treasureTypes[random_treasure_index];

            generated_treasures.push(random_treasure)
        }
        dungeon_rooms.push({
            room_number: i + 1,
            monsters: generated_monsters,
            treasures: generated_treasures
        });
    }




    //All the alerts for if the user does something wrong
    if (dungeon_name === "") {
        alert("Please enter a dungeon name.");
        return;
    } 
    if (room_input === "") {
        alert("Please enter the number of rooms.");
        return;
    }
    
    if (rooms < 1 || rooms > 20) {
        alert("Please enter a number of rooms between 1 and 20.");
        return;
    }
    if (min_monsters > max_monsters) {
        alert("Minimum monsters cannot be greater than maximum monsters.");
        return;
    }
    if (min_treasures > max_treasures) {
        alert("Minimum treasures cannot be greater than maximum treasures.")
        return;
    }
    if (difficulty === "") {
        alert("Please select a difficulty level.");   
        return;
     }
    if (max_monsters < 1 || max_monsters > 100) {
        alert("Maximum monsters must be between 1 and 100.");
        return;
    }
    if (min_monsters < 1 || min_monsters > 100) {
        alert("Minimum monsters must be between 1 and 100.");
        return;
    }
    if (max_treasures < 1 || max_treasures > 10) {
        alert("Maximum treasures must be between 1 and 10.");
        return;
    }
    if (min_treasures < 1 || min_treasures > 10 ) {
        alert("Minimum treasures must be between 1 and 10.");
        return;
    }




//Makes sure each room displays what it should
let dungeon_display = "";

for (let i = 0; i < dungeon_rooms.length; i++) {
    dungeon_display += "\nRoom: " + dungeon_rooms[i].room_number;
    dungeon_display += "\nMonsters: " + dungeon_rooms[i].monsters.join(", ");
    dungeon_display += "\nTreasures: " + dungeon_rooms[i].treasures.join(", ");
}

// Where everything is displayed. Includes the old displays that I combined and or replaced in case I ever need to look at and debug them specifically.
//alert("Welcome to: " + dungeon_name 
 // + "\nRooms: " + rooms 
 // + "\nDifficulty: " + difficulty 
 // + "\nMax Monsters: " + max_monsters  
 // + "\nMin Monsters: " + min_monsters 
 // + "\nMax Treasures: " + max_treasures
 // + "\nMin Treasures: " + min_treasures
 // + "\nMonster Types: " + monsterTypes.join(", ")
 // + "\nTreasure Types: " + treasureTypes.join(", ") 
 // + "\nRandom Monster: " + random_monster
 // + "\nRandom Treasure: " + random_treasure
 // + "\nMonster Count: " + monster_count
 // + "\nTreasure Count: " + treasure_count
 // + "\nGenerated Monsters: " + generated_monsters.join(", ")
 // + "\nGenerated Treasures: " + generated_treasures.join(", ")
 // + "\nGenerated Rooms: " + rooms
 // + "\n\nDungeon Rooms: " + dungeon_display
//);




      

results.replaceChildren();

let dungeon_title = document.createElement("h2");
dungeon_title.textContent = "Welcome to: " + dungeon_name;
results.appendChild(dungeon_title);

for (let i = 0; i < dungeon_rooms.length; i++) {
    let room = document.createElement("div");
    room.className = "room_card";

    let room_title = document.createElement("h3");
    room_title.textContent = "Room " + dungeon_rooms[i].room_number;







    let monsters = document.createElement("p");
    monsters.textContent = "Monsters:";

    room.appendChild(room_title);
    room.appendChild(monsters);
    

    let monster_counts = {};

    for (let j = 0; j < dungeon_rooms[i].monsters.length; j++) {
        let monster = dungeon_rooms[i].monsters[j];

        if (monster_counts[monster] === undefined) {
            monster_counts[monster] = 1;
        }
        else {
            monster_counts[monster]++;
        }
    }

    for (let monster in monster_counts) {
        let monster_line = document.createElement("p");
        monster_line.textContent = monster + " x " + monster_counts[monster];

        room.appendChild(monster_line);
    }
    //let monsters = document.createElement("p");
    //monsters.textContent = "Monsters: " + dungeon_rooms[i].monsters.join(', ');








    let treasures = document.createElement("p");
    treasures.textContent = "Treasures: ";

    room.appendChild(treasures);

    let treasure_counts = {};

    for (let j = 0; j < dungeon_rooms[i].treasures.length; j++) {
        let treasure = dungeon_rooms[i].treasures[j];

        if (treasure_counts[treasure] === undefined) {
            treasure_counts[treasure] = 1;
        }
        else {
            treasure_counts[treasure]++;
        }
    }
    
    for (let treasure in treasure_counts) {
        let treasure_line = document.createElement("p");
        treasure_line.textContent = treasure + " x " + treasure_counts[treasure];

        room.appendChild(treasure_line);
    }

    results.appendChild(room);

}
});





