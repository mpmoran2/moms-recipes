# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Recipe.destroy_all
Ingredient.destroy_all
Direction.destroy_all

soup = Category.create(name: "Soup")
noodle = Category.create(name: "Noodle")
salad = Category.create(name: "Salad")
meat = Category.create(name: "Meat")
dessert = Category.create(name: "Dessert")

Recipe.create(name: "Mama's Chili", memory: "Mom loved it spicy and you always knew when her and my dad were fighting by how spicy my dad thought it was.", category: soup)
Recipe.create(name: "Mama's Corn Chowder", memory: "You always knew when it was getting colder because the first thing you would hear mom say is 'Baby, it's soup weather! Want me to make some cooooorn chowder?' And on the rare occasion where she knew my depression and anorexia was bad, she would make this blended and coax me to eat something.", category: soup)
Recipe.create(name: "Grandma's Shortbread Cookies", memory: "Mama always said, NEVER GIVE THIS OUT. It was the family's secret recipe. So if you know, you know.", category: dessert)
Recipe.create(name: "Aunty's Somen Salad", memory: "When I was young, Mama and Aunty Lee would make this. The last time we were all in Hawai'i together, we ate this because it was mom's favorite summer dish.", category: noodle)
Recipe.create(name: "Aunty's Korean Chicken", memory: "Mom always loved when her little sister came to visit us on the mainland. They cooked this together every time and as I got older, no other chicken really compaired for us.", category: meat)
Recipe.create(name: "Grandma's Curry Cabbage", memory: "When times were a bit harder or we were just feeling lazy, this was our favorite to make and eat together. It was, as Mama said, 'Ugly but ono' and I couldn't argue that. ", category: meat)

Ingredient.create(name: "Canned Sweet Corn", amount: "3 cans",recipe_id: 2)
Ingredient.create(name: "Yukon Gold Potatos",  amount: "4-5",recipe_id: 2)
Ingredient.create(name: "Chicken Broth",  amount: "Enough to cover all ingredients",recipe_id: 2)
Ingredient.create(name: "Thick Cut Bacon",  amount: "1 package",recipe_id: 2)
Ingredient.create(name: "Heavy Cream",  amount: "2 ladels",recipe_id: 2)
Ingredient.create(name: "Onion",  amount: "1/2 large",recipe_id: 2)
Ingredient.create(name: "Garlic",  amount: "5-6 cloves",recipe_id: 2)
Ingredient.create(name: "Lee Kum Chicken Bullion", amount: "To taste",recipe_id: 2)
Ingredient.create(name: "Cilantro", amount: "Enough for topping", recipe_id: 2)
Ingredient.create(name: "Green Onion", amount: "Enought for topping", recipe_id: 2)


Direction.create(name: "Chop potatoes and soak in cold water.", recipe_id: 2)
Direction.create(name: "Pre-heat oven to 450F.", recipe_id: 2)
Direction.create(name: "Dice onion and garlic and put to side.", recipe_id: 2)
Direction.create(name: "Cut bacon into bite sized pieces and spread out on lined baking sheet.", recipe_id: 2)
Direction.create(name: "When the oven is ready, put bacon in and let cook until fat is rendered and bacon is mostly cooked.", recipe_id: 2)
Direction.create(name: "Put bacon in pot and toss all but 2-3 spoonfuls of fat.", recipe_id: 2)
Direction.create(name: "Mix onion and garlic with bacon fat on the same sheet and return to onion until transluscent.", recipe_id: 2)
Direction.create(name: "When ready, add onions to pot with drained potatoes and add the cans of sweet corn.", recipe_id: 2)
Direction.create(name: "Add enough chicken broth to cover all the ingredients and give 3 stirs.", recipe_id: 2)
Direction.create(name: "Bring everything to a boil on high heat and then reduce to medium heat and let simmer for a minimum or 40 min or until potatoes are tender.", recipe_id: 2)
Direction.create(name: "Slowly add between a ladel of heave cream and a scoop of Lee Kim Chicken Bullion to taste.", recipe_id: 2)
Direction.create(name: "(OPTIONAL) Allow soup to cool and then blend half. Add blended portion back into soup and heat before serving.", recipe_id: 2)
Direction.create(name: "Server topped with cilantro and green onion.", recipe_id: 2)
