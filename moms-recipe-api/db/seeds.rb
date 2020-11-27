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


soup = Category.create(name: "Soup Dish")
noodle = Category.create(name: "Noodle Dish")
salad = Category.create(name: "Salad Dish")
meat = Category.create(name: "Meat Dish")
rice = Category.create(name: "Rice Dish")
dessert = Category.create(name: "Dessert")
snack = Category.create(name: "Snack")

# chowder = Ingredient.create(item1: "3 cans of Sweet Corn", item2: "4-5 Yukon Gold Potatos", item3: "2-3 cans of Chicken Broth", item4: "1 package of Thick Cut Bacon", item5: "2 ladels of Heavy Cream or Milk", item6: "1/2 large Onion, minced", item7: "5-6 cloves of Garlic, minced", item8: "Lee Kum Chicken Bullion to taste", item9: "Cilantro, Enough for topping", item10: "Green Onion Enough for topping")

Recipe.create(name: "Mama's Chili", memory: "Mom loved it spicy and you always knew when her and my dad were fighting by how spicy my dad thought it was.", directions: "Brown your meat, add everything else. Cook for 30 min. Taste test and season to taste. Allow to simmer until everything is to your liking.", category: soup)
Recipe.create(name: "Mama's Corn Chowder", memory: "You always knew when it was getting colder because the first thing you would hear mom say is 'Baby, it's soup weather! Want me to make some cooooorn chowder?' And on the rare occasion where she knew my depression and anorexia was bad, she would make this blended and coax me to eat something.", directions: "Cut potatoes and soak in cold water. Preheat Oven to 450, chop onions and spread on lined baking sheet. Cut bacon into bite sized pieces and spread over onions. Let bacon and onions cook until onions transluscent. Add potatoes, corn, garlic, and onions/bacon to pot and pour enough stock over until all ingredients covered. Cook until potatoes soft. Add 1-2 ladels of cream/milk and adjust seasoning to liking. Heat up, serve with desired toppings, enjoy.", category: soup)
Recipe.create(name: "Grandma's Shortbread Cookies", memory: "Mama always said, NEVER GIVE THIS OUT. It was the family's secret recipe. So if you know, you know.", directions: "Top Secret Cookies, ask someone for the paper.", category: dessert)
Recipe.create(name: "Aunty's Somen Salad", memory: "When I was young, Mama and Aunty Lee would make this. The last time we were all in Hawai'i together, we ate this because it was mom's favorite summer dish.", directions: "Boil each bundle of somen seperatly, by somen package instructions. Coat Somen litely in seseme oil. Make little nests with noodles (about one bundle per nest) and top with toppings. Pour or dip in dashi before eating.", category: noodle)
Recipe.create(name: "Grandma's Curry Cabbage", memory: "When times were a bit harder or we were just feeling lazy, this was our favorite to make and eat together. It was, as Mama said, 'Ugly but ono' and I couldn't argue that. ", directions: "Brown meat until only lightly pink. Add in can of cream of mushroom and curry powder to taste. Add shredded cabbage until wilted. Adjust seasoning to taste. Serve over hot rice and enjoy.", category: meat)

Ingredient.create(name: "3 cans Canned Sweet Corn",recipe_id: 2)
Ingredient.create(name: "Yukon Gold Potatos", recipe_id: 2)
Ingredient.create(name: "Chicken Broth", recipe_id: 2)
Ingredient.create(name: "Thick Cut Bacon", recipe_id: 2)
Ingredient.create(name: "Heavy Cream", recipe_id: 2)
Ingredient.create(name: "Onion", recipe_id: 2)
Ingredient.create(name: "Garlic", recipe_id: 2)
Ingredient.create(name: "Lee Kum Chicken Bullion", recipe_id: 2)
Ingredient.create(name: "Cilantro",  recipe_id: 2)
Ingredient.create(name: "Green Onion",  recipe_id: 2)

# Ingredient.create(recipe_id: 1,item1: "1 lb", item2: "1 package Portuges Sausage", item3: "1 can Crushed Tomatoes", item4: "1 can Pinto Beans", item5: "3 cans Chicken Broth", item6: "Salt", item7: "Oregeno", item8: "Cayane Pepper", item9: "Shredded Cheese for topping")
# Ingredient.create(recipe_id: 2, item1: "3 cans of Sweet Corn", item2: "4-5 Yukon Gold Potatos", item3: "2-3 cans of Chicken Broth", item4: "1 package of Thick Cut Bacon", item5: "2 ladels of Heavy Cream or Milk", item6: "1/2 large Onion, minced", item7: "5-6 cloves of Garlic, minced", item8: "Lee Kum Chicken Bullion to taste", item9: "Cilantro, Enough for topping", item10: "Green Onion Enough for topping")
# Ingredient.create(recipe_id: 3,item1: "Flour", item2: "Sugar", item3: "SECRETS")
# Ingredient.create(recipe_id: 4,item1: "Somen Noodles", item2: "Somen Dashi", item3: "Eggs", item4: "Basil", item5: "Obah", item6: "Ikura", item7: "Sesame Oil")
# Ingredient.create(recipe_id: 5,item1: "Ground Meet", item2: "Cream of Mushroom", item3: "Shredded Cabbage", item4: "Salt", item5: "Pepper", item6: "Curry Powder")

# Ingredient.create(item1: "", item2: "", item3: "", item4: "", item5: "", item6: "", item7: "", item8: "", item9: "", item10: "", item11: "", item12: "")

