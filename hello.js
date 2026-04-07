fetch("https://wagenapi.onrender.com/api/cars")
  .then(res => res.json())
  .then(data => {
    data.forEach(car => {
      const carElement = document.createElement("div");
      carElement.innerHTML = `
        <h2>${car.name}</h2>
        <img src="${car.image}" alt="${car.name}" width="200">
      `;
      document.body.appendChild(carElement);
    });
  });
