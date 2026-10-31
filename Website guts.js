








document.getElementById("generate_button").addEventListener("click", function() {
              

    //Common variables used throughout the program
    let dungeon_name = document.getElementById("dungeon_name").value;
    let room_input = document.getElementById("room_number").value;
    let difficulty = document.getElementById("difficulty").value;   
    let rooms = Number(room_input);
    let max_monsters_input = document.getElementById("max_monsters").value;
    let min_monsters_input = document.getElementById("min_monsters").value;
    let max_treasures_input = document.getElementById("max_treasures").value;
    let min_treasures_input = document.getElementById("min_treasures").value;
    let monster_type_input = document.getElementById("monster_type").value;
    let treasure_type_input = document.getElementById("treasure_type").value;




    //Monster and treasure type choice
    let monster_types = monster_type_input.split("\n");
        monster_types = monster_types.map(type => type.trim()).filter(type => type !== "");
    if (monster_types.length === 0) {
        monster_types = ["Goblin", "Orc", "Skeleton", "Kobold", "Zombie", "Wolf", "Gremlin"];
    }
    

    let treasure_types = treasure_type_input.split("\n");
        treasure_types = treasure_types.map(type => type.trim()).filter(type => type !== "");
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
            let random_monster_index = Math.floor(Math.random() * monster_types.length);
            let random_monster = monster_types[random_monster_index];

            generated_monsters.push(random_monster);
        }
        
        let treasure_count = Math.floor(Math.random() * (max_treasures - min_treasures + 1)) + min_treasures;

        let generated_treasures = [];

        for (let i = 0; i < treasure_count; i++) {
            let random_treasure_index = Math.floor(Math.random() * treasure_types.length);
            let random_treasure = treasure_types[random_treasure_index];

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
alert("Generating dungeon..." + dungeon_name 
    + "\nRooms: " + rooms 
    + "\nDifficulty: " + difficulty 
 // + "\nMax Monsters: " + max_monsters  
 // + "\nMin Monsters: " + min_monsters 
 // + "\nMax Treasures: " + max_treasures
 // + "\nMin Treasures: " + min_treasures
 // + "\nMonster Types: " + monster_types.join(", ")
 // + "\nTreasure Types: " + treasure_types.join(", ") 
 // + "\nRandom Monster: " + random_monster
 // + "\nRandom Treasure: " + random_treasure
 // + "\nMonster Count: " + monster_count
 // + "\nTreasure Count: " + treasure_count
 // + "\nGenerated Monsters: " + generated_monsters.join(", ")
 // + "\nGenerated Treasures: " + generated_treasures.join(", ")
 // + "\nGenerated Rooms: " + rooms
    + "\n\nDungeon Rooms: " + dungeon_display
);
        
});





