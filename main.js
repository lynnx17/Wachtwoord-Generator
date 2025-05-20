const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generatePasswordButton = document.getElementById("generate");
let passwordinput = document.getElementById("password");

let passwordLength = 12;

function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generatePassword() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += getRandomCharacter();
    }
    return password;
}

passwordinput.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordinput.value)
        .then(() => {
            alert("Wachtwoord is gekopieerd!!");
            setTimeout(() => {
                passwordinput.textContent = "copy";
            }, 2000);
        }
).catch(err => {
            console.error("Error copying text: ", err);
        }
);
}
);

generatePasswordButton.addEventListener("click", function() {
    let password = generatePassword();
    passwordinput.value = password;
}
);

passwordinput.textContent = generatePassword();
