








document.getElementById("generate_button").addEventListener("click", function() {
              
    let dungeon_name = document.getElementById("dungeon_name").value;
    let room_input = document.getElementById("room_number").value;
    let difficulty = document.getElementById("difficulty").value;   
    let rooms = Number(room_input);
    let max_monsters_input = document.getElementById("max_monsters").value;
    let min_monsters_input = document.getElementById("min_monsters").value;
    let max_treasures_input = document.getElementById("max_treasures").value;
    let min_treasures_input = document.getElementById("min_treasures").value;

    let max_monsters;
        if (max_monsters_input === "") {
        max_monsters = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10 if a number is not provided
    }
        else {
            max_monsters = Number (max_monsters_input);
        }
    let min_monsters;
        if (min_monsters_input === "") {
        min_monsters = Math.floor(Math.random() * max_monsters) + 1; //Uses whatever is decided on for max_monsters to multiply the randomly chosen decimal and rounds to the nearest integer
    }
        else
            min_monsters = Number (min_monsters_input)
    let max_treasures;
        if (max_treasures_input === "") {
            max_treasures = Math.floor(Math.random() * 10) + 1;
        }
        else
            max_treasures = Number(max_treasures_input)
    let min_treasures 
        if (min_treasures_input === "") {
            min_treasures = Math.floor(Math.random() * max_treasures) + 1;
        }
        else
            min_treasures = Number(min_treasures_input)

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


alert("Generating dungeon..." + dungeon_name 
    + "\nRooms: " + rooms 
    + "\nDifficulty: " + difficulty 
    + "\nMax Monsters: " + max_monsters  
    + "\nMin Monsters: " + min_monsters 
    + "\nMax Treasures: " + max_treasures
    + "\nMin Treasures: " + min_treasures
);
        
});





