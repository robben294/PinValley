# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
User.delete_all
Board.delete_all


User.create([
    {email: 'bjluo@bu.edu', password: '123456', firstname: 'Binjie', lastname: 'Luo', location: "Boston"},
    {email: 'xchen@gamil.com', password: '123456', firstname: 'Xi', lastname: 'Chen', location: "Philadelphia"},
    {email: 'john@gamil.com', password: '123456', firstname: 'John', lastname: 'last'},
    {email: 'Hope you enjoy!', password: '111111', firstname: 'Dog', lastname: 'Fooler', location:"New York"},
    {email: 'guest@gmail.com', password: '111111', firstname: 'Guest', lastname: '1', location:"New York"},
])

master = User.create(email: 'national_park_master@gmail.com', password: '123456', firstname: 'National Park', lastname: 'Master', location:"New York")


board = Board.create({title: "nation_park", creator_id: master.id})



pin1 = Pin.new({title: "Acadia National Park", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/acadia-national-park"})
acadia = open('https://s3.amazonaws.com/pin-valley-seeds/acadia.png')
pin1.photo.attach(io: acadia, filename: 'acadia.png')
pin1.save!
PinBoard.create(pin_id: pin1.id, 
    board_id: board.id, 
    description: "The first national park east of the Mississippi River, Acadia National Park offers hiking, biking, camping, breathtaking views of jagged coastlines, and pristine lakes.")


pin2 = Pin.new({title: "Arches National Park", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/arches-national-park"})
arches = open('https://s3.amazonaws.com/pin-valley-seeds/arches.png')
pin2.photo.attach(io: arches, filename: 'arches.png')
pin2.save!
PinBoard.create(pin_id: pin2.id, 
    board_id: board.id, 
    description: "Arches National Park in Moab offers the largest density of natural sandstone arches in the world. Visitors can enjoy biking, camping, rock climbing, and hiking.")


pin3 = Pin.new({title: "BADLANDS NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/badlands-national-park"})
badlands = open('https://s3.amazonaws.com/pin-valley-seeds/badlands.png')
pin3.photo.attach(io: badlands, filename: 'badlands.png')
pin3.save!
PinBoard.create(pin_id: pin3.id, 
    board_id: board.id, 
    description: "The Badlands provide some of the most mysterious sights to see in the national park system, from fossil beds to spired rocks formations.")


pin4 = Pin.new({title: "BIG BEND NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/big-bend-national-park"})
bigbend = open('https://s3.amazonaws.com/pin-valley-seeds/bigbend.png')
pin4.photo.attach(io: bigbend, filename: 'bigbend.png')
pin4.save!
PinBoard.create(pin_id: pin4.id, 
    board_id: board.id, 
    description: "Big Bend offers plenty of activities for visitors of all ages. The park boasts 150 miles of hiking trails through mountainous desert terrain and along rivers.")


pin5 = Pin.new({title: "BISCAYNE NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/biscayne-national-park"})
biscayne = open('https://s3.amazonaws.com/pin-valley-seeds/biscayne.png')
pin5.photo.attach(io: biscayne, filename: 'biscayne.png')
pin5.save!
PinBoard.create(pin_id: pin5.id, 
    board_id: board.id, 
    description: "Popular activities at Biscayne National Park, located within sight of downtown Miami, include boating, snorkeling, camping, and wildlife watching.")


pin6 = Pin.new({title: "BRYCE CANYON NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/bryce-canyon-national-park"})
bryce = open('https://s3.amazonaws.com/pin-valley-seeds/bryce.png')
pin6.photo.attach(io: bryce, filename: 'bryce.png')
pin6.save!
PinBoard.create(pin_id: pin6.id, 
    board_id: board.id, 
    description: "Bryce Canyon National Park in Southwestern Utah is famous for the largest collection of hoodoos—the distinctive rock formations at Bryce—in the world.")
  
    
pin7 = Pin.new({title: "CANYONLANDS NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/canyonlands-national-park"})
canyonlands = open('https://s3.amazonaws.com/pin-valley-seeds/canyonlands.png')
pin7.photo.attach(io: canyonlands, filename: 'canyonlands.png')
pin7.save!
PinBoard.create(pin_id: pin7.id, 
    board_id: board.id, 
    description: "Carved by the Colorado River, Canyonlands National Park offers visitors hiking, stargazing, camping, and technical rock climbing.")

    
pin8 = Pin.new({title: "CAPITOL REEF NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/capitol-reef-national-park"})
capitolreef = open('https://s3.amazonaws.com/pin-valley-seeds/capitolreef.png')
pin8.photo.attach(io: capitolreef, filename: 'capitolreef.png')
pin8.save!
PinBoard.create(pin_id: pin8.id, 
    board_id: board.id, 
    description: "Capitol Reef National Park, one of the many national parks in Utah, contains nearly a quarter million acres in 'slickrock country'.")

    
pin9 = Pin.new({title: "CARLSBAD CAVERNS NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/carlsbad-caverns-national-park"})
carlsbad = open('https://s3.amazonaws.com/pin-valley-seeds/carlsbad.png')
pin9.photo.attach(io: carlsbad, filename: 'carlsbad.png')
pin9.save!
PinBoard.create(pin_id: pin9.id, 
    board_id: board.id, 
    description: "Carlsbad Caverns National Park in New Mexico contains some of the largest caves in North America—a must-visit stop for vacations in New Mexico.")


pin10 = Pin.new({title: "CHANNEL ISLANDS", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/channel-islands-national-park"})
channel = open('https://s3.amazonaws.com/pin-valley-seeds/channel.png')
pin10.photo.attach(io: channel, filename: 'channel.png')
pin10.save!
PinBoard.create(pin_id: pin10.id, 
    board_id: board.id, 
    description: "The entire park consists of 249,354 acres, half of which are under the ocean, and is home to a wide variety of nationally and internationally significant natural and cultural resources. The park provides truly unique opportunities for visitors to experience California’s natural beauty beneath the sea.")


pin11 = Pin.new({title: "CONGAREE NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/congaree-national-park"})
congaree = open('https://s3.amazonaws.com/pin-valley-seeds/congaree.png')
pin11.photo.attach(io: congaree, filename: 'congaree.png')
pin11.save!
PinBoard.create(pin_id: pin11.id, 
    board_id: board.id, 
    description: "Some of the tallest trees in the eastern United States find their home at Congaree National Park, a national park in South Carolina.")


pin12 = Pin.new({title: "CRATER LAKE NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/crater-lake-national-park"})
craterlake = open('https://s3.amazonaws.com/pin-valley-seeds/craterlake.png')
pin12.photo.attach(io: craterlake, filename: 'craterlake.png')
pin12.save!
PinBoard.create(pin_id: pin12.id, 
    board_id: board.id, 
    description: "The deepest lake in the United States and the seventh deepest lake in the world is at Crater Lake National Park in Southern Oregon at the Cascade Mountains.")


pin13 = Pin.new({title: "DEATH VALLEY NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/death-valley-national-park"})
deathvalley = open('https://s3.amazonaws.com/pin-valley-seeds/deathvalley.png')
pin13.photo.attach(io: deathvalley, filename: 'deathvalley.png')
pin13.save!
PinBoard.create(pin_id: pin13.id, 
    board_id: board.id, 
    description: "America’s lowest, hottest, and driest national park, adventurous visitors enjoy Death Valley for its many extremes and mysteries, such as the sailing stones.")


pin14 = Pin.new({title: "DENALI NATIONAL PARK AND PRESERVE", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/denali-national-park-and-preserve"})
denali = open('https://s3.amazonaws.com/pin-valley-seeds/denali.png')
pin14.photo.attach(io: denali, filename: 'denali.png')
pin14.save!
PinBoard.create(pin_id: pin14.id, 
    board_id: board.id, 
    description: "Mt. Denali, formerly Mt. McKinley, is North America's highest mountain, and is contained within Denali National Park in Alaska.")


pin15 = Pin.new({title: "DRY TORTUGAS NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/dry-tortugas-national-park"})
drytortugas = open('https://s3.amazonaws.com/pin-valley-seeds/drytortugas.png')
pin15.photo.attach(io: drytortugas, filename: 'drytortugas.png')
pin15.save!
PinBoard.create(pin_id: pin15.id, 
    board_id: board.id, 
    description: "Visitors to Dry Tortugas, near Key West, can bird watch, camp on the beach, and snorkel the surrounding waters filled with sea life and pristine coral reefs.

")


pin16 = Pin.new({title: "EVERGLADES NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/everglades-national-park"})
everglade = open('https://s3.amazonaws.com/pin-valley-seeds/everglade.png')
pin16.photo.attach(io: everglade, filename: 'everglade.png')
pin16.save!
PinBoard.create(pin_id: pin16.id, 
    board_id: board.id, 
    description: "Traveling in Florida isn’t complete without stopping at Everglades National Park—a swampland just outside Miami, where visitors can see alligators.")


pin17 = Pin.new({title: "GATES OF THE ARCTIC NATIONAL PARK AND PRESERVE", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/gates-arctic-national-park-and-preserve"})
gatesarctic = open('https://s3.amazonaws.com/pin-valley-seeds/gatesarctic.png')
pin17.photo.attach(io: gatesarctic, filename: 'gatesarctic.png')
pin17.save!
PinBoard.create(pin_id: pin17.id, 
    board_id: board.id, 
    description: "Lying north of the Arctic Circle, this remote park and preserve is the northernmost national park in the U.S. and the second largest, spanning 8,472,506 acres.")


pin18 = Pin.new({title: "GATEWAY ARCH NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/gateway-arch-national-park"})
gatewayarch = open('https://s3.amazonaws.com/pin-valley-seeds/gatewayarch.png')
pin18.photo.attach(io: gatewayarch, filename: 'gatewayarch.png')
pin18.save!
PinBoard.create(pin_id: pin18.id, 
    board_id: board.id, 
    description: "Gateway Arch National Park, formerly known as Jefferson National Expansion Memorial, captures the historical presence of the St. Louis' Old Courthouse where the Dred Scott case was held.")


pin19 = Pin.new({title: "GLACIER BAY NATIONAL PARK AND PRESERVE", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/glacier-bay-national-park-and-preserve"})
glacierbay = open('https://s3.amazonaws.com/pin-valley-seeds/glacierbay.png')
pin19.photo.attach(io: glacierbay, filename: 'glacierbay.png')
pin19.save!
PinBoard.create(pin_id: pin19.id, 
    board_id: board.id, 
    description: "Covering 3.3 million acres of mountains, glaciers, wild coastlines, and fjords, Glacier Bay is one of the world's largest international protected areas.")


pin20 = Pin.new({title: "GLACIER NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/glacier-national-park"})
glacier = open('https://s3.amazonaws.com/pin-valley-seeds/glacier.png')
pin20.photo.attach(io: glacier, filename: 'glacier.png')
pin20.save!
PinBoard.create(pin_id: pin20.id, 
    board_id: board.id, 
    description: "A hiker’s paradise, Glacier National Park provides an exceptional backcountry experience, the perfect summer vacation for families and adventurers.")


