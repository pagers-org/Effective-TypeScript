enum Flavor {
  VANILLA = 0,
  CHOCOLATE = 1,
  STRAWBERRY = 2,
}

const flavor = Flavor.CHOCOLATE; // Type is Flavor

Flavor; // Autocomplete shows: VANILLA, CHOCOLATE, STRAWBERRY
Flavor[0]; // Value is 'VANILLA'
