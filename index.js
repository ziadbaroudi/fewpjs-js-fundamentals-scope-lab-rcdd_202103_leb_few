let animal = ""

function myAnimal(dog) {
  animal = dog;
  return animal
}
myAnimal("dog")
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

yourAnimal("cat")

function add2(n) {
  

  // Feel free to move things around!
  const two = 2;
  return n + two
}