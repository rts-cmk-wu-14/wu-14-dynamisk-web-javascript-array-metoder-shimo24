document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 
    //opgave 1: Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle de tal som er større end 20.

     let over20 = numbersArray.filter(num => num > 20);
     console.log("Opgave 1", over20);

    // Opgave 2
    // Tilføj katten "Sniffles" til catsArray.
    // Udskriv arrayet i konsollen.
    // console.log("Opgave 2", ...)

     catsArray.push("Sniffles");
     console.log("Opgave 2", catsArray);
    

    // Opgave 3a
    // Check om der i dogsArray er en hund som hedder "Trixie".
    // Udskriv "true" eller "false" i konsollen afhængig af svaret.
    // console.log("Opgave 3a", ...)
    console.log("Opgave 3a", dogsArray.includes("Trixie"));
    // Opgave 3b
    // Check om der i dogsArray er en hund som hedder "Baxter".
    // Udskriv "true" eller "false" i konsollen afhængig af svaret.
    // console.log("Opgave 3b", ...)

    console.log("Opgave 3b", dogsArray.includes("Baxter"));

    //     Opgave 4a
    // Check om der i catsArray er en kat som hedder "Bagheera".
    // Udskriv katten i konsollen hvis den findes og ellers "undefined".
    // console.log("Opgave 4a", ...)

    let bagheera = catsArray.find(cat => cat === "Bagheera");
    console.log("Opgave 4a", bagheera);

    // Opgave 4b
    // Check om der i catsArray er en kat som hedder "Salem".
    // Udskriv katten i konsollen hvis den findes og ellers "undefined".
    // console.log("Opgave 4b", ...)

    let salem = catsArray.find(cat => cat === "Salem");
    console.log("Opgave 4b", salem);

    //     Opgave 5
    // Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle tallene i arrayet ganget med 3.
    // Udskriv det nye array i konsollen:
    // console.log("Opgave 5", ...)

    let tripleNumbers = numbersArray.map(num => num * 3);
    console.log("Opgave 5", tripleNumbers);

    //     Opgave 6
    // Udskriv alle hundene i dogsArray i én lang streng.
    // (Sådan her: BarneyMollyBaxter...)
    // Udskriv strengen konsollen:
    // console.log("Opgave 6", ...)

     let dogsString = dogsArray.join("");
     console.log("Opgave 6", dogsString);

    //     Opgave 7a
    // Find ud af hvilket index "Mango" har i fruitsArray.
    // Udskriv indexet i konsollen.

    console.log("Opgave 7a", fruitsArray.indexOf("Mango"));


    // Opgave 7b
    // Find ud af hvilket index "Blåbær" har i fruitsArray.
    // Udskriv indexet i konsollen.

    console.log("Opgave 7b", fruitsArray.indexOf("Blåbær"));


    // Opgave 8
    // Lad os forestille os, at dogsArray er en liste af tilmeldte hunde til en udstilling.
    // Den familie der har hunden "Polly" er desværre blevet forhindret i at deltage i udstillingen.
    // Fjern hunden "Polly" fra dogsArray og udskriv det nye array i konsollen
    //  ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];

    dogsArray = dogsArray.filter(dog => dog !== "Polly");
    // console.log("Opgave 8", dogsArray);

    // let del1 = dogsArray.slice(0, 3);
    // console.log(del1);

    // let del2 = dogsArray.slice(4)
    // console.log(del2);
    // del2.forEach((elm)=>{
    //     console.log(elm);

    //     const count = del1.push(elm);
    //     console.log(del1);
        
    // })  

    // console.log(dogsArray.slice(2, 4));

    // console.log(dogsArray.slice(1, 5));

    // console.log(dogsArray.slice(-2));

    // console.log(dogsArray.slice(2, -1));

    // console.log(dogsArray.slice());


    const array1 = [",molly", "baxter"];
    const array2 = ["buddy", "suki", "watson"];
    const array3 = array1.concat(array2);

console.log(array3);

let array4=[...array1, ...array2]
console.log(array4);






}) // ends DOMContentLoaded

