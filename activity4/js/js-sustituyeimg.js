'use strict'

function ImagenOk(img) {
    if (!img.complete) return false;
    if (typeof img.naturalWidth != undefined && img.naturalWidth == 0) return false;
    return true;
    }

function RevisarImagenesRotas() {
    let replacementImg = 'img/changed.png';
    for (let i = 0; i < document.images.length; i++) {
    if (!ImagenOk(document.images[i])) {
        document.images[i].src = replacementImg;
    }}}
    window.onload=RevisarImagenesRotas;
