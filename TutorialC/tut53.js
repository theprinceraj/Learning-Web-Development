console.log("This is tutorial 53");

function greetText(name, greetText = 'Greetings from Jaavscript') {
    console.log(`${name} is a good boy`);
}

let name = ['harry', 'bhaalu', 'rohan'];
greetText(name[0]);
greetText(name[1]);
greetText(name[2]);
greetText(name[1], 'Ayoyoyoyo');