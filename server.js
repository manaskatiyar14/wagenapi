const express = require("express");
const app = express();

// 🔥 Your API Data
const cars = [
  { id: 1, name: "HW Car 1", image: "https://1.hotwheelsunleashed.com/wp-content/uploads/2022/04/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_088_Camera_Marketing.png" },
  { id: 2, name: "HW Car 2", image: "https://1.hotwheelsunleashed.com/wp-content/uploads/2022/04/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_084_Camera_Marketing.png" },
  { id: 3, name: "HW Car 3", image: "https://1.hotwheelsunleashed.com/wp-content/uploads/2022/04/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_160_Camera_Marketing.png" },
  { id: 4, name: "Rodger Dodger", image: "https://1.hotwheelsunleashed.com/wp-content/uploads/2021/02/htw-veichles-rodger-dodger.png" },
  { id: 5, name: "Night Shifter", image: "https://1.hotwheelsunleashed.com/wp-content/uploads/2021/03/htw-veichles-night-shifter.png" },
  { id: 6, name: "Sandivore", image: "https://1.hotwheelsunleashed.com/wp-content/uploads/2021/04/htw-veichles-sandivore.png" },
  { id: 7, name: "HW Car 4", image: "https://1.hotwheelsunleashed.com/wp-content/uploads/2022/04/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_142_Camera_Marketing.png" }
];

// 🎯 API Route
app.get("/api/cars", (req, res) => {
  res.json(cars);
});

// 🚀 Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});