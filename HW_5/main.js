const movies = [
    { id: 1, name: "Snatch", cost: 3.29 },
    { id: 2, name: "Garfield", cost: 5.79 },
    { id: 3, name: "The Wolf of Wall Street", cost: 4.99 },
    { id: 4, name: "Spider-Man: No Way Home", cost: 9.99 },
    { id: 5, name: "Mortal Combat", cost: 13.99 },
    { id: 6, name: "Free Guy", cost: 7.99 },
  ];
  
  const cart = [];
  
  
  function addToCart(id) {
    const selectedMovie = movies.find((movie) => movie.id === id);
    selectedMovie && cart.push(selectedMovie);
  }
  
  function printCheck() {
    cart.forEach((movie, i) => {
      console.log(`${i + 1} - ${movie.name} - $${movie.cost}`);
    });
  }
  
  console.clear();
  
  addToCart(3);
  addToCart(5);

  printCheck();