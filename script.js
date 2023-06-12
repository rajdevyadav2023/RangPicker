const genBtn = document.getElementById("gen-btn");
const box = document.getElementById("box");
const codeScreen = document.getElementById("code-screen");
const copyBtn = document.getElementById("copy-btn");
const colorRowMaterial = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

// function to generate random colors 
genBtn.addEventListener("click", function(){
    const c1 = Math.floor(Math.random()*16);
    const c2 = Math.floor(Math.random()*16);
    const c3 = Math.floor(Math.random()*16);
    const c4 = Math.floor(Math.random()*16);
    const c5 = Math.floor(Math.random()*16);
    const c6 = Math.floor(Math.random()*16);

    let color = `#${colorRowMaterial[c1]+colorRowMaterial[c2]+colorRowMaterial[c3]+colorRowMaterial[c4]+colorRowMaterial[c5]+colorRowMaterial[c6]}`;

    box.style.backgroundColor = color;
    codeScreen.value = color;
});

