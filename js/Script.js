var nt="img/notepad.png";

var listProg=[
    ["Hello World", "2018", "img/Hello World(batch).png", "My first program"],
    ["Password", "2018", "img/Hello World(batch).png", "Checking the correctness of the input"],
    ["Rock Papper Scissors", "2018", "img/Hello World(batch).png", "A game against the computer with a random choice"],
    ["Calculator", "2018", "img/Hello World(batch).png", "Simple calculator for Bat"],
    ["Deducer", "2018", "img/Hello World(batch).png", "The simplest program repeating after you"],
    ["Parser", "2018", "img/Hello World(batch).png", "A program that breaks words into parts"],
    ["Square", "2018", "img/Hello World(batch).png", "The program that draws a square"],
    ["Triangle", "2018", "img/Hello World(batch).png", "The program that draws a triangle"],
    ["Sprite", "2018", "img/Hello World(batch).png", "A simple sprite on a batch"],
    ["More less", "2018", "img/Hello World(batch).png", "The game is more less on a batch"],
    ["Space Zombies", "2019", "img/Hello World(batch).png", "My first android game"],
    ["Multiplication table", "2018", "img/Hello World(batch).png", "Multiplication table in C ++"],
    ["More less", "2018", "img/Hello World(batch).png", "The game is more less on a C++"],
    ["Snake", "2019", "img/Hello World(batch).png", "A simple snake"],
    ["Bubble Sort", "2019", "img/Hello World(batch).png", "Bubble sort on pascal"],
    ["AuxProg", "2021", "img/Hello World(batch).png", "Simple autoclicker"],
    ["WebInfo", "2021", "img/Hello World(batch).png", "Python program with web interface"],
    ["Tetris", "2019", "img/Hello World(batch).png", "Java tetris"],
    ["Aquarium", "2020", "img/Hello World(batch).png", "Aquarium with fish"],
    ["Fractal", "2019", "img/Hello World(batch).png", "Sierpinski triangle"],
    ["Library", "2020", "img/Hello World(batch).png", "Mini library for 2D games"],
    ["Osu", "2020", "img/Hello World(batch).png", "My osu parody"],
    ["Tanks", "2020", "img/Hello World(batch).png", "Tank game"],
    ["Rock Papper Scissors", "2020", "img/Hello World(batch).png", "A game against the computer with a random choice"]
];

var programs=document.getElementById("programs");

for (let i of listProg) {
    let block=document.createElement("article");
    block.className="program";

    let year_bg=document.createElement("div");
    year_bg.className="prog-year-bg";
    block.appendChild(year_bg);

    let year=document.createElement("div");
    year.className="prog-year";
    block.appendChild(year);

    block.textContent=i[0];
    programs.appendChild(block);
};