
const inputColor = document.querySelector('.input-color');
const wrapperCamaleao = document.querySelector('.wrapper-camaleao');
const chamaleon = document.getElementById('chameleon');
const chamaleonBody = document.getElementById('body');
const chamaleonMouth = document.getElementById('mouth');
const chamaleonTail = document.getElementById('tail');
const chamaleonStripe = document.getElementById('stripe');
const chamaleonEyeChameleon = document.getElementById('eye-chameleon');
const btnApplyColor = document.getElementById('applycolor');
const iris = document.getElementById('iris');
const eye = document.getElementById('eye');


btnApplyColor.addEventListener('click', (e) => {
    applyColor(inputColor.value);
    wrapperCamaleao.style.backgroundColor = inputColor.value;
    wrapperCamaleao.style.transition = '0.5s all linear';
    iris.style.animation = "olhar 1s ease 0s";
    chamaleon.style.animation = "tremer 1.2s ease 1s";
    eye.style.animation = "piscar 1s ease 2.2s";
    setTimeout(()=>{
        iris.style.animation = "";
        chamaleon.style.animation = "";
        eye.style.animation = "";
    }, 3200)

});

// inputColor.addEventListener('input', (e) => {
//     wrapperCamaleao.style.backgroundColor = e.target.value;
// });

// inputColor.addEventListener('blur', (e) => {
//     applyColor(e.target.value);
// });




const getDarkColor = (color, factor) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    const darkerR = Math.max(0, Math.round(r * (1 - factor)));
    const darkerG = Math.max(0, Math.round(g * (1 - factor)));
    const darkerB = Math.max(0, Math.round(b * (1 - factor)));
    return `#${darkerR.toString(16).padStart(2, '0')}${darkerG.toString(16).padStart(2, '0')}${darkerB.toString(16).padStart(2, '0')}`;
}    

const getLightColor = (color, factor) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    const lighterR = Math.min(255, Math.round(r + (255 - r) * factor));
    const lighterG = Math.min(255, Math.round(g + (255 - g) * factor));
    const lighterB = Math.min(255, Math.round(b + (255 - b) * factor));
    return `#${lighterR.toString(16).padStart(2, '0')}${lighterG.toString(16).padStart(2, '0')}${lighterB.toString(16).padStart(2, '0')}`;
}    


const applyColor = (color) => {
    chamaleonBody.style.transition = '1s all linear 1.5s';
    chamaleonBody.style.fill = getDarkColor(color, 0.2)
    chamaleonMouth.style.transition = '1s all linear 1.5s';
    chamaleonMouth.style.fill = getLightColor(color, 0.1)
    chamaleonTail.style.transition = '1s all linear 1.5s';
    chamaleonTail.style.fill = getDarkColor(color, 0.4)
    chamaleonEyeChameleon.style.transition = '1s all linear 1.5s';
    chamaleonEyeChameleon.style.fill = getLightColor(color, 0.3)
    chamaleonStripe.style.transition = '1s all linear 1.5s';
    chamaleonStripe.style.fill = getLightColor(color, 0.2)

};    




