import random 

 #Eventually need to allow for selection of variables by user.
 #Ultimate goal is to publish it as a website


min_monsters = 1

dungeon_name = input("Enter the name of the dungeon: ") 

dungeon_difficulty = input("Enter the difficulty of the dungeon (Easy, Normal, Hard): ").lower().strip()

if dungeon_difficulty == "easy":
    print("Difficulty set to Easy.")
elif dungeon_difficulty == "normal":
    print("Difficulty set to Normal.")
elif dungeon_difficulty == "hard":
    print("Difficulty set to Hard.")
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
    max_monsters = 5

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

treasure_max_choice = input("Would you like to choose the maximum number of treasures per room? (y/n): ").lower().strip()

if treasure_max_choice == "y":
    while True:
        try:
            max_treasure = int(input("Enter the maximum number of treasures per room (1-10): "))

            if max_treasure < 1 or max_treasure > 10:
                print("Invalid number. Please enter a number between 1 and 10")
            else:
                print(f"Maximum number of treasures set to {max_treasure}.")
                break

        except ValueError:
            print("Invalid input. Please enter a valid number.")
else:
    max_treasure = 3

treasure_min_choice = input("Would you like to choose the minimum number of treasures per room? (y/n): ").lower().strip()

if treasure_min_choice == "y":
    while True:
        try:
            min_treasure = int(input("Enter the minimum number of treasures per room (1-10): "))
            if min_treasure < 1 or min_treasure > 10:
                print("Invalid number. Please enter a number between 1 and 10")
            elif min_treasure > max_treasure:
                print("Minimum number of treasures cannot be greater than the maximum number of treasures.")
                print(f"Your maximum is currently set to {max_treasure}. Please enter a valid minimum number.")
                continue
            else:
                print(f"Minimum number of treasures set to {min_treasure}.")
                break

        except ValueError:
            print("Invalid input. Please enter a valid number.")
else:
    min_treasure = 1






for room in range(1, rooms + 1): #Have to figure out how loops work. I fixed it with indents!

    print(f"Room {room}")

    room_type = random.randint(1, 6) #Difficulty of the dungeon will affect the number of rooms and the types of monsters and treasure.

   #Set difficulty limits.
    if dungeon_difficulty == "easy":
        monster_limit = 2
        treasure_limit = 4
    elif dungeon_difficulty == "normal":
        monster_limit = 3
        treasure_limit = 5
    elif dungeon_difficulty == "hard":
        monster_limit = 4
        treasure_limit = 6



    #Room generation
    if room_type <= monster_limit:
        monsters = random.randint(min_monsters, max_monsters) #Too many monsters breaks the generation of the dungeon. Need to either make a smaller min and max or figure out how to just make the code not crash with so many monsters.
       #print(f"DEBUG: Minimum = {min_monsters}, Maximum ={max_monsters}")
       #print(f"DEBUG: Monsters to generate = {monsters}")
        for monster in range(1, monsters + 1):
            encounter = random.choice(monster_types)
            print(f"Monster {monster}: {encounter}")
            
    elif room_type <= treasure_limit:
        treasure_count = random.randint(min_treasure, max_treasure)
        for treasure in range(1, treasure_count + 1):

            loot = random.choice(treasure_types)
            print(f"You find {loot}")
    else:
            print("The room is empty.")
   
   
   #print(f"Room {room}") 
   #room_type = random.randint(1, 6) #Difficulty of the dungeon will affect the number of rooms and the types of monsters and treasure.
   #if room_type == 1:
   #    monsters = random.randint(min_monsters, max_monsters)
   #   for monster in range(1, monsters + 1):
   #        encounter = random.choice(monster_types) 
   #        print(f"Monster {monster}: {encounter}")
   #elif room_type == 2:
   #    loot = random.choice(treasure_types) 
   #    print(f"You find a {loot}") 
   #else:
   #    print("The room is empty.")        






