var listLanguage=[
    "img/BAT.png", "img/C++.png", "img/JS.png", "img/java.png", "img/CS.png", "img/python.png", "img/PASCAL.png"
];

var section=document.getElementById("languages");

for (let i of listLanguage) {
    let block=document.createElement("img");
    block.className="language";
    block.src=i;
    section.appendChild(block);
};