# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Recipe.destroy_all

soup = Category.create(name: "Soup")
noodle = Category.create(name: "Noodle")
salad = Category.create(name: "Salad")
meat = Category.create(name: "Meat")
dessert = Category.create(name: "Dessert")

Recipe.create(name: "Mama's Chili", family: "Rhona N. Kamoku", category: soup)
Recipe.create(name: "Mama's Corn Chowder", family: "Rhona N. Kamoku", category: soup)
Recipe.create(name: "Grandma's Shortbread Cookies", family: "Kuniko Kamoku", category: dessert)
Recipe.create(name: "Aunty's Somen Salad", family: "Leona Kamoku", category: noodle)
Recipe.create(name: "Aunty's Korean Chicken", family: "Penny Kamoku", category: meat)
Recipe.create(name: "Mama's Almond Asian Salad", family: "Rhona N. Kamoku", category: salad)
Recipe.create(name: "Grandma's Curry Cabbage", family: "Kuniko Kamoku", category: meat)