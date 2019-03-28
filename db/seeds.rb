# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
    {email: 'bjluo@bu.edu', password: '123456', firstname: 'Binjie', lastname: 'Luo'},
    {email: 'xchen@gamil.com', password: '123456', firstname: 'Xi', lastname: 'Chen'},
    {email: 'john@gamil.com', password: '123456', firstname: 'John', lastname: 'last'},
    {email: 'Hope you enjoy!', password: '111111', firstname: 'Dog', lastname: 'Fooler'},
])