console.log("js ok");

//generatore passworld

/*Inserire nome
    1: Inserire nome
    2:inserire cognome
    3:Inserire colore preferito
    4:Crea la passworld
    5:Stampa la password*/

    //inserito prompt per il nome
    const myName = prompt("Il tuo nome?");
    console.log(myName);

    //inserito prompt per il cognome
    const mySecondName = prompt("Il tuo cognome?");

    console.log(mySecondName);

    //inserito prompt per il colore
    const myColor = prompt("Il tuo colore preferito?");

    console.log(myColor);

    //crea la password
    const myPassword = myName + mySecondName + myColor + 21;

    console.log(myPassword);

    //stampa la password
    document.getElementById("passwordgen").innerHTML= "La tua password è" + " " +  myPassword;
    


