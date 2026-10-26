import random 

 #Eventually need to allow for selection of variables by user.

dungeon_name = input("Enter the name of the dungeon: ") 

room_choice = input("Would you like to choose the number of rooms? (y/n): ").lower().strip()#Need to figure out how to keep the code from malfunctioning when a user inputs incorrectly.
if room_choice == "y":
    while True: 
        try:
            rooms = int(input("Enter a number: "))
            print(f"There are {rooms} rooms in the dungeon.")
            break
        except ValueError:
            print("Invalid input. Please enter a valid number.")

    while rooms < 1 or rooms > 20:#Need to figure out how to combine this with the above while loop to avoid code duplication.
        print("Invalid number of rooms. Try again")

    else:
        rooms = int(input("Enter the number of rooms between 1 and 20: "))
       
        print(f"Generating {rooms} rooms.")
elif room_choice == "n":
    rooms = random.randint(3, 8)
else:
    print("Invalid input. Defaulting to random number of rooms.")
    rooms = random.randint(3, 8)

   
monster_types = ["Goblin", "Orc", "Skeleton", "Kobold", "Zombie", "Wolf", "Gremlin"] 

treasure_types = ["Gold Coins", "Platinum Coins", "Ruby", "Greatsword", "Emerald"] 

print(f"Welcome to {dungeon_name}") 

 

for room in range(1, rooms + 1): #Have to figure out how loops work. I fixed it with indents!


  



    print(f"Room {room}") 
    room_type = random.randint(1, 3)
    if room_type == 1:
        monsters = random.randint(1, 4) 
        for monster in range(1, monsters + 1):
            encounter = random.choice(monster_types) 
            print(f"Monster {monster}: {encounter}")
    elif room_type == 2:
        loot = random.choice(treasure_types) 
        print(f"You find a {loot}") 
    else:
        print("The room is empty.")        






