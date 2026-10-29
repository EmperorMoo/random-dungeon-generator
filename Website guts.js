








document.getElementById("generate_button").addEventListener("click", function() {
              
    let dungeon_name = document.getElementById("dungeon_name").value;
    let room_input = document.getElementById("room_number").value;
    let difficulty = document.getElementById("difficulty").value;   
    let rooms = Number(room_input);

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
    if (difficulty === "") {
        alert("Please select a difficulty level.");   
        return;
     }
    alert("Generating dungeon..." + dungeon_name + "\nRooms: " + rooms + "\nDifficulty: " + difficulty);
        
});





