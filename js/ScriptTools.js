var listTools=[
    "img/PC.png", "img/VSC.png", "img/C4D.png", "img/VS.png", "img/PHS.png", "img/notepad.png", "img/AS.png", "img/QT.png", "img/ABC.png", "img/UNT.png", "img/FGM.png", "img/AC.png", "img/GH.png", "img/BD.png"
];

var section=document.getElementById("tools");

for (let i of listTools) {
    let block=document.createElement("img");
    block.className="tool";
    block.src=i;
    section.appendChild(block);
};