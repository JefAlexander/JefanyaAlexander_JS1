//if else
function buahBerdasarkanWarna(buah) {
  if (buah === "apel") {
    return "buah berwarna Merah";
  } else {
    return "buah mungkin tidak berwarna merah";
  }
}

let buah = "apel";
console.log(buahBerdasarkanWarna(buah));


//nested if
console.log("")

let colors = ["red", "yellow", "green", "blue", "purple", "orange", "black", "white"];

function fruitColors(color) {
    if (colors.includes(color)) {
        if (color === "red") {
            return "Apple";
        } else if (color === "yellow") {
            return "Banana";
        } else if (color === "green") {
            return "Lime";
        } else if (color === "blue") {
            return "Blueberry";
        } else if (color === "purple") {
            return "Grapes";
        } else if (color === "orange") {
            return "Orange";
        } else if (color === "black") {
            return "Blackberry";
        } else if (color === "white") {
            return "White Cherries";
        }
    } else {
        return "Unknown fruit color";
    }
}

let fruitColor = "purple";  
let fruitName = fruitColors(fruitColor);  
console.log("A fruit with color " + fruitColor + " is " + fruitName + ".");


//switch case
function classDescription(characterClass) {
  switch (characterClass) {
    case "Warrior":
      console.log("Not very smart guy but they are strong, used weapon to bonk the enemy ");
      break; 

    case "Mage":
      console.log("Smart guy but weak, magic go boom");
      break;

    case "Thief":
      console.log("not very smart not strong either, atleast they r sneaky");
      break;

    default:
      console.log("Other class not implemented yet");
  }
}


console.log("Class Descriptions:");
classDescription("Warrior");
classDescription("Mage");
classDescription("Thief");
classDescription("Paladin");
 

//for statement
let fruits = ["Apple", "Lemon", "Orange", "Manggis", "Durian"];

console.log("List Of Fruits(for statement):");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//while loop
let nama_buah = ["Apel", "Lemon", "Jeruk", "Manggis", "Durian"];
let index = 0;

console.log("Daftar Buah(while loop):");

while (index < nama_buah.length) {
  console.log((index + 1) + ". " + nama_buah[index]);
  index++;
}

//do while
let fruit_name = ["Apple", "Lemon", "Orange", "Manggis", "Durian"];
let counter = fruit_name.length;

console.log("List Of Fruits(do-while loop):");

do {
  console.log((counter - 1) + " ) " + fruit_name[counter - 1]);  // Corrected array name
  counter--;
} while (counter > 0);  // Corrected loop condition using 'counter'

//function
function masakAyam() {
  const menu = ['Ayam Rendang', 'Ayam Goreng', 'Ayam Penyet', 'Ayam Bakar', 'Ayam Panggang', 'Ayam Semur']; // Daftar makanan
  return menu[Math.floor(Math.random() * menu.length)]; // Mengembalikan makanan yang terpilih secara acak
}

const masakHariIni = masakAyam();
console.log('Hari ini masak:', masakHariIni);
