import random 

 #Eventually need to allow for selection of variables by user.
 #Ultimate goal is to publish it as a website


min_monsters = 1

dungeon_name = input("Enter the name of the dungeon: ") 
dungeon_difficulty = input("Enter the difficulty of the dungeon (Easy, Normal, Hard): ").lower().strip()
if dungeon_difficulty == "easy":
    min_monsters = 1
    max_monsters = 5
elif dungeon_difficulty == "normal":
    min_monsters = 3
    max_monsters = 10
elif dungeon_difficulty == "hard":
    min_monsters = 5
    max_monsters = 20
else:
    print("Invalid input. Defaulting to Normal difficulty.")
    dungeon_difficulty = "normal"

room_choice = input("Would you like to choose the number of rooms? (y/n): ").lower().strip()#Need to figure out how to keep the code from malfunctioning when a user inputs incorrectly.
if room_choice == "y":
    while True: 
        try:
            rooms = int(input("Enter a number of rooms between 1 and 20: "))
            if rooms < 1 or rooms > 20:
                print("Invalid number of rooms. Try again.")
            else:
                print(f"Generating {rooms} rooms.")
                break

        except ValueError:
            print("Invalid input. Please enter a valid number.")

elif room_choice == "n":
    rooms = random.randint(3, 8)
else:
    print("Invalid input. Defaulting to random number of rooms.")
    rooms = random.randint(3, 8)


monster_choice = input("Would you like to choose the types of monsters? (y/n): ").lower().strip()
if monster_choice == "y":
    monster_types = []
    while True:
        monster = input("Enter a monster type (or type 'done' to finish): ").strip().lower()
        if monster.lower() == "done":
            break
        elif monster == "":
            print("Monster type cannot be empty. Please enter a valid monster type.")
        else:
            monster_types.append(monster)
    if not monster_types:
        print("No monsters entered. Using default monster types.")
        monster_types = ["Goblin", "Orc", "Skeleton", "Kobold", "Zombie", "Wolf", "Gremlin"]

elif monster_choice == "n":
    monster_types = ["Goblin", "Orc", "Skeleton", "Kobold", "Zombie", "Wolf", "Gremlin"]
else:
    print("Invalid input. Using default monster types.")
    monster_types = ["Goblin", "Orc", "Skeleton", "Kobold", "Zombie", "Wolf", "Gremlin"]

monster_max = input("Would you like to choose the maximum number of monsters per room? (y/n): ").lower().strip()
if monster_max == "y":
    while True:
        try:
            max_monsters = int(input("Enter the maximum number of monsters per room (1-100): "))
            if max_monsters < 1 or max_monsters > 100:
                print("Invalid number. Please enter a number between 1 and 100")
            else:
                print(f"Maximum number of monsters set to {max_monsters}.")
                break
        except ValueError:
            print("Invalid input. Please enter a valid number.")
else:
    max_monsters = 10

monster_min = input("Would you like to choose the minimum number of monsters per room? (y/n): ").lower().strip()
if monster_min == "y":
    while True:
        try:
            min_monsters = int(input("Enter the minimum number of monsters per room (1-100): "))
            if min_monsters < 1 or min_monsters > 100:
                print("Invalid number. Please enter a number between 1 and 100")
            elif min_monsters > max_monsters:
                print("Minimum number of monsters cannot be greater than the maximum number of monsters.")
                print(f"Your maximum is currently set to {max_monsters}. Please enter a valid minimum number.")
                continue
            else:
                print(f"Minimum number of monsters set to {min_monsters}.")
                break

        except ValueError:
            print("Invalid input. Please enter a valid number.")
else:
    min_monsters = 1

treasure_choice = input("Would you like to choose the types of treasure? (y/n): ").lower().strip()
if treasure_choice == "y":
    treasure_types = []
    while True:
        treasure = input("Enter a treasure type (or type 'done' to finish): ").strip()
        if treasure.lower() == "done":
            break
        elif treasure == "":
            print("Treasure type cannot be empty. Please enter a valid treasure type.")
        else:
            treasure_types.append(treasure)
    if not treasure_types:
        print("No treasures entered. Using default treasure types.")
        treasure_types = ["Gold Coins", "Platinum Coins", "Ruby", "Greatsword", "Emerald"]
elif treasure_choice == "n":
    treasure_types = ["Gold Coins", "Platinum Coins", "Ruby", "Greatsword", "Emerald"]

else:
    print("Invalid input. Using default treasure types.")
    treasure_types = ["Gold Coins", "Platinum Coins", "Ruby", "Greatsword", "Emerald"]

print(f"Welcome to {dungeon_name}") 

 

for room in range(1, rooms + 1): #Have to figure out how loops work. I fixed it with indents!


  



    print(f"Room {room}") 
    room_type = random.randint(1, 3)
    if room_type == 1:
        monsters = random.randint(min_monsters, max_monsters)
        for monster in range(1, monsters + 1):
            encounter = random.choice(monster_types) 
            print(f"Monster {monster}: {encounter}")
    elif room_type == 2:
        loot = random.choice(treasure_types) 
        print(f"You find a {loot}") 
    else:
        print("The room is empty.")        






