document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 
    //opgave 1: Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle de tal som er større end 20.
    let res1 = numbersArray.filter((elm) => elm > 20)
    console.log(res1);

    // Opgave 2
    // Tilføj katten "Sniffles" til catsArray.
    // Udskriv arrayet i konsollen.
    // console.log("Opgave 2", ...)
    catsArray.push("Sniffles")
    console.log(catsArray);

    // Opgave 3a
    // Check om der i dogsArray er en hund som hedder "Trixie".
    // Udskriv "true" eller "false" i konsollen afhængig af svaret.
    // console.log("Opgave 3a", ...)
    console.log(dogsArray.filter((dog) => dog === "Trixie").length > 0);
    // Opgave 3b
    // Check om der i dogsArray er en hund som hedder "Baxter".
    // Udskriv "true" eller "false" i konsollen afhængig af svaret.
    // console.log("Opgave 3b", ...)
    console.log(dogsArray.filter((dog) => dog === "Baxter").length > 0);

    //     Opgave 4a
    // Check om der i catsArray er en kat som hedder "Bagheera".
    // Udskriv katten i konsollen hvis den findes og ellers "undefined".
    // console.log("Opgave 4a", ...)
    console.log(catsArray.includes("Bagheera") ? "Bagheera" : undefined);

    // Opgave 4b
    // Check om der i catsArray er en kat som hedder "Salem".
    // Udskriv katten i konsollen hvis den findes og ellers "undefined".
    // console.log("Opgave 4b", ...)
    console.log(catsArray.includes("Salem") ? "Salem" : undefined);
    console.log(catsArray.indexOf("Salem") != -1 ? catsArray[catsArray.indexOf("Salem")] : undefined);

    //     Opgave 5
    // Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle tallene i arrayet ganget med 3.
    // Udskriv det nye array i konsollen:
    // console.log("Opgave 5", ...)
    console.log([...numbersArray].map((number) => number * 3));

    //     Opgave 6
    // Udskriv alle hundene i dogsArray i én lang streng.
    // (Sådan her: BarneyMollyBaxter...)
    // Udskriv strengen konsollen:
    // console.log("Opgave 6", ...)
    console.log(dogsArray.map((dog) => dog).join(""));

    //     Opgave 7a
    // Find ud af hvilket index "Mango" har i fruitsArray.
    // Udskriv indexet i konsollen.
    console.log("Opgave 7a:", fruitsArray.indexOf("Mango"));

    // Opgave 7b
    // Find ud af hvilket index "Blåbær" har i fruitsArray.
    // Udskriv indexet i konsollen.
    console.log("Opgave 7b:", fruitsArray.indexOf("Blåbær"));

}) // ends DOMContentLoaded

