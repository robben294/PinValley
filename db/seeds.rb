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
Pin.delete_all
PinBoard.delete_all

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


pin21 = Pin.new({title: "GRAND CANYON NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/grand-canyon-national-park"})
grandcanyon = open('https://s3.amazonaws.com/pin-valley-seeds/grandcanyon.png')
pin21.photo.attach(io: grandcanyon, filename: 'grandcanyon.png')
pin21.save!
PinBoard.create(pin_id: pin21.id, 
    board_id: board.id, 
    description: "Offering rim to rim hiking, donkey rides, and whitewater rafting, Grand Canyon National Park is a hugely popular national park destination.")


pin22 = Pin.new({title: "GRAND TETON NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/grand-teton-national-park"})
grandteton = open('https://s3.amazonaws.com/pin-valley-seeds/grandteton.png')
pin22.photo.attach(io: grandteton, filename: 'grandteton.png')
pin22.save!
PinBoard.create(pin_id: pin22.id, 
    board_id: board.id, 
    description: "Located only 10 miles from Yellowstone National Park, Grand Teton National Park is a stunning national park in Wyoming.")


pin23 = Pin.new({title: "GREAT BASIN NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/great-basin-national-park"})
greatbasin = open('https://s3.amazonaws.com/pin-valley-seeds/greatbasin.png')
pin23.photo.attach(io: greatbasin, filename: 'greatbasin.png')
pin23.save!
PinBoard.create(pin_id: pin23.id, 
    board_id: board.id, 
    description: "This national park is home to ancient bristlecone pine trees, abundant wildlife, lakes and streams, and limestone caverns, including the stunning Lehman Caves.")


pin24 = Pin.new({title: "GREAT SAND DUNES NATIONAL PARK AND PRESERVE", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/great-sand-dunes-national-park-and-preserve"})
greatsanddunes = open('https://s3.amazonaws.com/pin-valley-seeds/greatsanddunes.png')
pin24.photo.attach(io: greatsanddunes, filename: 'greatsanddunes.png')
pin24.save!
PinBoard.create(pin_id: pin24.id, 
    board_id: board.id, 
    description: "Nestled in southern Colorado, this park features North America's tallest dunes, which rise over 750 feet high against the rugged Sangre de Cristo Mountains.")


pin25 = Pin.new({title: "GREAT SMOKY MOUNTAINS NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/glacier-national-park"})
greatsmoky = open('https://s3.amazonaws.com/pin-valley-seeds/greatsmoky.png')
pin25.photo.attach(io: greatsmoky, filename: 'greatsmoky.png')
pin25.save!
PinBoard.create(pin_id: pin25.id, 
    board_id: board.id, 
    description: "ANCIENT MOUNTAINS, ANCIENT WONDERS")


pin26 = Pin.new({title: "GUADALUPE MOUNTAINS NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/guadalupe-mountains-national-park"})
guadalupemountains = open('https://s3.amazonaws.com/pin-valley-seeds/guadalupemountains.png')
pin26.photo.attach(io: guadalupemountains, filename: 'guadalupemountains.png')
pin26.save!
PinBoard.create(pin_id: pin26.id, 
    board_id: board.id, 
    description: "Guadalupe Mountains National Park includes the world's finest fossilized reef, unique flora and fauna, and West Texas' only legally designated wilderness.")


pin27 = Pin.new({title: "HALEAKALĀ NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/haleakala-national-park"})
haleakala = open('https://s3.amazonaws.com/pin-valley-seeds/haleakala.png')
pin27.photo.attach(io: haleakala, filename: 'haleakala.png')
pin27.save!
PinBoard.create(pin_id: pin27.id, 
    board_id: board.id, 
    description: "Haleakalā National Park, a national park on the Hawai'ian island of Maui, is a superb example of the Hawai'ian Islands' native ecosystems.")


pin28 = Pin.new({title: "HAWAI'I VOLCANOES NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/hawaii-volcanoes-national-park"})
hawaiivolcanoes = open('https://s3.amazonaws.com/pin-valley-seeds/hawaiivolcanoes.png')
pin28.photo.attach(io: hawaiivolcanoes, filename: 'hawaiivolcanoes.png')
pin28.save!
PinBoard.create(pin_id: pin28.id, 
    board_id: board.id, 
    description: "SACRED CAULDRON")


pin29 = Pin.new({title: "HOT SPRINGS NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/hot-springs-national-park"})
hotsprings = open('https://s3.amazonaws.com/pin-valley-seeds/hotsprings.png')
pin29.photo.attach(io: hotsprings, filename: 'hotsprings.png')
pin29.save!
PinBoard.create(pin_id: pin29.id, 
    board_id: board.id, 
    description: "Hot Springs National Park, a popular vacationing spot, contains 40 hot springs where visitors can use soothing waters to heal and relax.")


pin30 = Pin.new({title: "INDIANA DUNES NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/indiana-dunes-national-park"})
indianadunes = open('https://s3.amazonaws.com/pin-valley-seeds/indianadunes.png')
pin30.photo.attach(io: indianadunes, filename: 'indianadunes.png')
pin30.save!
PinBoard.create(pin_id: pin30.id, 
    board_id: board.id, 
    description: "At the Indiana Dunes National Park, visitors can explore 15,000 acres of natural terrain including hiking through forests.")


pin31 = Pin.new({title: "ISLE ROYALE NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/isle-royale-national-park"})
isleroyale = open('https://s3.amazonaws.com/pin-valley-seeds/isleroyale.png')
pin31.photo.attach(io: isleroyale, filename: 'isleroyale.png')
pin31.save!
PinBoard.create(pin_id: pin31.id, 
    board_id: board.id, 
    description: "Isle Royale National Park in Lake Superior off the shore of Michigan encompasses 850 square miles of natural wilderness, spacious lands, and aquatic life.")


pin32 = Pin.new({title: "JOSHUA TREE NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/joshua-tree-national-park"})
joshuatree = open('https://s3.amazonaws.com/pin-valley-seeds/joshuatree.png')
pin32.photo.attach(io: joshuatree, filename: 'joshuatree.png')
pin32.save!
PinBoard.create(pin_id: pin32.id, 
    board_id: board.id, 
    description: "THE OUTER LIMITS OF REALITY")


pin33 = Pin.new({title: "KATMAI NATIONAL PARK AND PRESERVE", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/katmai-national-park-and-preserve"})
katmai = open('https://s3.amazonaws.com/pin-valley-seeds/katmai.png')
pin33.photo.attach(io: katmai, filename: 'katmai.png')
pin33.save!
PinBoard.create(pin_id: pin33.id, 
    board_id: board.id, 
    description: "Katmai National Park and Preserve in Alaska is home to spectacular and unique volcanoes, and wildlife including fish, flowers, and bears.")


pin34 = Pin.new({title: "KENAI FJORDS NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/kenai-fjords-national-park"})
kenaifjords = open('https://s3.amazonaws.com/pin-valley-seeds/kenaifjords.png')
pin34.photo.attach(io: kenaifjords, filename: 'kenaifjords.png')
pin34.save!
PinBoard.create(pin_id: pin34.id, 
    board_id: board.id, 
    description: "Experience the glacial hiking trails at Kenai Fjords National Park, where this rugged landscape promises a life-changing experience for visitors.")


pin35 = Pin.new({title: "KOBUK VALLEY NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/kobuk-valley-national-park"})
kobukvalley = open('https://s3.amazonaws.com/pin-valley-seeds/kobukvalley.png')
pin35.photo.attach(io: kobukvalley, filename: 'kobukvalley.png')
pin35.save!
PinBoard.create(pin_id: pin35.id, 
    board_id: board.id, 
    description: "Follow the tracks of nearly a half-million caribou who migrate through the Great Kobuk Sand Dunes twice a year. Travel with the wildlife along the Kobuk River.")


pin36 = Pin.new({title: "LAKE CLARK NATIONAL PARK AND PRESERVE", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/lake-clark-national-park-and-preserve"})
lakeclark = open('https://s3.amazonaws.com/pin-valley-seeds/lakeclark.png')
pin36.photo.attach(io: lakeclark, filename: 'lakeclark.png')
pin36.save!
PinBoard.create(pin_id: pin36.id, 
    board_id: board.id, 
    description: "See the spectacular scenery of mountains, glaciers and volcanoes that stretch from the shores of Cook Inlet to the tundra-covered hills.")


pin37 = Pin.new({title: "LASSEN VOLCANIC NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/lassen-volcanic-national-park"})
lassenvolcanic = open('https://s3.amazonaws.com/pin-valley-seeds/lassenvolcanic.png')
pin37.photo.attach(io: lassenvolcanic, filename: 'lassenvolcanic.png')
pin37.save!
PinBoard.create(pin_id: pin37.id, 
    board_id: board.id, 
    description: "Nestled in the peaceful forests and wilderness of Northern California is Lassen Volcanic National Park, home to hissing fumaroles and boiling mud pots.")


pin38 = Pin.new({title: "MAMMOTH CAVE NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/mammoth-cave-national-park"})
mammothcave = open('https://s3.amazonaws.com/pin-valley-seeds/mammothcave.png')
pin38.photo.attach(io: mammothcave, filename: 'mammothcave.png')
pin38.save!
PinBoard.create(pin_id: pin38.id, 
    board_id: board.id, 
    description: "A UNIVERSE BENEATH")

    
pin39 = Pin.new({title: "MESA VERDE NATIONAL PARK", 
    author_id: master.id, 
    website: "https://www.nationalparks.org/explore-parks/mesa-verde-national-park"})
mesaverde = open('https://s3.amazonaws.com/pin-valley-seeds/mesaverde.png')
pin39.photo.attach(io: mesaverde, filename: 'mesaverde.png')
pin39.save!
PinBoard.create(pin_id: pin39.id, 
    board_id: board.id, 
    description: "A UNIVERSE BENEATH")


