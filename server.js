const express = require("express");
const app = express();


const cars = 
  [
  {"id":1,"name":"Rodger Dodger","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/02/htw-veichles-rodger-dodger.png","description":"A classic Hot Wheels muscle car with a massive exposed engine and aggressive styling.","rarity":["Rare","Legendary"]},
  {"id":2,"name":"Night Shifter","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/03/htw-veichles-night-shifter.png","description":"A futuristic muscle car with bold styling and exposed engine.","rarity":["Common","Rare"]},
  {"id":3,"name":"Sandivore","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/04/htw-veichles-sandivore.png","description":"A rugged off-road racer designed for desert performance.","rarity":["Common"]},

  {"id":4,"name":"Ford Mustang GT","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles-2918-ford-mustang-gt.png","description":"A powerful American muscle car with iconic V8 performance.","rarity":["Rare","Legendary"]},
  {"id":5,"name":"1956 Ford Truck","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles-1956-ford-truck.png","description":"A vintage pickup truck with classic styling.","rarity":["Common"]},
  {"id":6,"name":"Audi Sport Quattro","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles-audi-sport-quattro.png","description":"A legendary rally car with all-wheel drive performance.","rarity":["Rare","Legendary"]},
  {"id":7,"name":"Koenigsegg Jesko","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles-koenigsegg-jesko.png","description":"A hypercar engineered for extreme speed.","rarity":["Legendary"]},
  {"id":8,"name":"Dodge Charger Daytona","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles-69-dodge-charger-daytona.png","description":"A NASCAR icon with aerodynamic design.","rarity":["Rare"]},
  {"id":9,"name":"Copo Camaro","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles-copo-camaro.png","description":"A drag racing muscle car.","rarity":["Rare"]},
  {"id":10,"name":"Honda S2000","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles-honda-s2000.png","description":"A lightweight high-revving sports car.","rarity":["Common","Rare"]},

  {"id":11,"name":"Mini Cooper S Challenge","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles-mini-cooper-s-challenge.png","description":"A compact agile racing car.","rarity":["Common"]},
  {"id":12,"name":"Audi R8 Spyder","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles-audi-r8-spyder.png","description":"A luxury convertible supercar.","rarity":["Rare","Legendary"]},
  {"id":13,"name":"Fiat 500","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles-fiat-500.png","description":"A compact iconic city car.","rarity":["Common"]},
  {"id":14,"name":"KITT","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles_kitt.png","description":"An AI-powered futuristic car.","rarity":["Legendary"]},
  {"id":15,"name":"RD-02","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles-rd-02.png","description":"A sleek futuristic racer.","rarity":["Common"]},

  {"id":16,"name":"Rage Power","image":"(screenshot)","description":"A powerful fantasy Hot Wheels car with aggressive styling.","rarity":["Rare"]},
  {"id":17,"name":"Synkro","image":"(screenshot)","description":"A sleek modern racer with smooth aerodynamic design.","rarity":["Rare"]},
  {"id":18,"name":"Hollowback","image":"(screenshot)","description":"A unique Hot Wheels car with exposed structure design.","rarity":["Common"]},
  {"id":19,"name":"Mad Manga","image":"(screenshot)","description":"A Japanese-inspired drift car with bold graphics.","rarity":["Rare"]},
  {"id":20,"name":"Riveted","image":"(screenshot)","description":"A heavily armored car with riveted metal styling.","rarity":["Rare"]},

  {"id":21,"name":"Aston Martin Vulcan","image":"(screenshot)","description":"A track-only hypercar with extreme performance.","rarity":["Legendary"]},
  {"id":22,"name":"Black Manta","image":"(screenshot)","description":"A DC villain themed futuristic underwater car.","rarity":["Legendary"]},
  {"id":23,"name":"Velociraptor Blue","image":"(screenshot)","description":"A Jurassic World themed vehicle with wild styling.","rarity":["Legendary"]},
  {"id":24,"name":"Aquaman","image":"(screenshot)","description":"A water-themed superhero car with ocean styling.","rarity":["Legendary"]},
  {"id":25,"name":"Shazam","image":"(screenshot)","description":"A lightning-powered superhero themed vehicle.","rarity":["Legendary"]},

  {"id":26,"name":"Snoopy","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles_Snoopy.png","description":"A playful Snoopy themed car.","rarity":["Rare"]},
  {"id":27,"name":"Party Wagon","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles_Party-Wagon.png","description":"TMNT iconic van.","rarity":["Legendary"]},
  {"id":28,"name":"Cheetah","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/11/Car_080_Website_01.png","description":"A fast DC villain themed car.","rarity":["Rare"]},
  {"id":29,"name":"Deathstroke","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/11/Car_108_Website_01.png","description":"A tactical armored villain car.","rarity":["Legendary"]},
  {"id":30,"name":"Bane","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/11/Car_079_Website_01.png","description":"A heavy powerful vehicle.","rarity":["Legendary"]},

  {"id":31,"name":"Poison Ivy","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/11/Car_109_Website_01.png","description":"A plant themed villain car.","rarity":["Rare"]},
  {"id":32,"name":"Harley Quinn","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/11/Car_128_Website_01.png","description":"A chaotic colorful car.","rarity":["Legendary"]},
  {"id":33,"name":"Plankton","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2022/01/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_117_Camera_Marketing.png","description":"A quirky cartoon vehicle.","rarity":["Common"]},
  {"id":34,"name":"Patrick","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2022/01/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_144_Camera_Marketing.png","description":"A fun playful car.","rarity":["Common"]},

  {"id":35,"name":"McLaren Senna","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2022/02/Veicolo_HOT-WHEELS%CE%93ao-ScreenshotCollection_095_Camera_Marketing.png","description":"A track-focused hypercar.","rarity":["Legendary"]},
  {"id":36,"name":"BMW 3.0 CSL","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/11/Veicolo_HOT-WHEELS%E2%84%A2-Thanksgiving-Pack3-1.png","description":"A racing heritage BMW.","rarity":["Rare","Legendary"]},

  {"id":37,"name":"Bugs Bunny","image":"(screenshot)","description":"A fun cartoon car.","rarity":["Common"]},
  {"id":38,"name":"Daffy Duck","image":"(screenshot)","description":"A quirky cartoon vehicle.","rarity":["Common"]},
  {"id":39,"name":"Coyote","image":"(screenshot)","description":"A clever themed vehicle.","rarity":["Common"]},
  {"id":40,"name":"Twin Mill","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2022/04/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_088_Camera_Marketing.png","description":"An iconic twin-engine Hot Wheels car.","rarity":["Legendary"]},
  {"id":41,"name":"Bone Shaker","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2022/04/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_084_Camera_Marketing.png","description":"A skull-themed hot rod with aggressive design.","rarity":["Legendary"]},
  {"id":42,"name":"Shark Bite","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2022/04/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_160_Camera_Marketing.png","description":"A shark-inspired racing car.","rarity":["Rare"]},
  {"id":43,"name":"Fast Gassin","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2022/04/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_142_Camera_Marketing.png","description":"A hot rod built for speed.","rarity":["Common"]},
  {"id":44,"name":"Power Rocket","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2022/01/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_117_Camera_Marketing.png","description":"A futuristic rocket-powered vehicle.","rarity":["Rare"]},
  {"id":45,"name":"Street Creeper","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2022/01/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_144_Camera_Marketing.png","description":"A spooky creature-themed car.","rarity":["Common"]},
  {"id":46,"name":"Time Attaxi","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/11/Car_080_Website_01.png","description":"A time-travel themed taxi car.","rarity":["Rare"]},
  {"id":47,"name":"Loop Coupe","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/11/Car_108_Website_01.png","description":"A stunt-focused loop racing car.","rarity":["Common"]},
  {"id":48,"name":"Speed Slayer","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/11/Car_079_Website_01.png","description":"A high-speed futuristic racer.","rarity":["Rare"]},
  {"id":49,"name":"Mega Thrust","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/11/Car_109_Website_01.png","description":"A jet-powered racing machine.","rarity":["Rare"]},
  {"id":50,"name":"Track Ripper","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/11/Car_128_Website_01.png","description":"A car built for extreme track performance.","rarity":["Common"]},
  {"id":51,"name":"Blazing Fury","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles_Snoopy.png","description":"A fire-themed aggressive racer.","rarity":["Rare"]},
  {"id":52,"name":"Cyber Speeder","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles_Party-Wagon.png","description":"A digital futuristic speed machine.","rarity":["Legendary"]},
  {"id":53,"name":"Nitro Tailgater","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2022/02/Veicolo_HOT-WHEELS%CE%93ao-ScreenshotCollection_095_Camera_Marketing.png","description":"A nitro-powered muscle car.","rarity":["Rare"]},
  {"id":54,"name":"Phantom Racer","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/11/Veicolo_HOT-WHEELS%E2%84%A2-Thanksgiving-Pack3-1.png","description":"A ghost-like high-speed vehicle.","rarity":["Legendary"]},
  {"id":55,"name":"Turbo Beast","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles-koenigsegg-jesko.png","description":"A beast-inspired turbo racer.","rarity":["Rare"]},
  {"id":56,"name":"Lightning Racer","image":"https://1.hotwheelsunleashed.com/wp-content/uploads/2021/07/veichles-audi-r8-spyder.png","description":"A lightning-fast electric-themed car.","rarity":["Legendary"]}
];

app.use(cors());
app.get("/api/cars", (req, res) => {
  res.json(cars);
});

// 🚀 Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});