//gallery code














//Image editor code
function editImage()
{
    //filtervalues
    var blurValue=document.getElementById("blur").value 
    var brightnessValue=document.getElementById("brightness").value
    var contrastValue=document.getElementById("contrast").value
    var grayscaleValue=document.getElementById("grayscale").value
    var huerotateValue=document.getElementById("huerotate").value
    var invertValue=document.getElementById("invert").value
    var opacityValue=document.getElementById("opacity").value
    var saturateValue=document.getElementById("saturate").value
    var sepiaValue=document.getElementById("sepia").value
    //onchaning 
    document.getElementById("image").style.filter=`blur(${blurValue}px) 
    brightness(${brightnessValue}%) contrast(${contrastValue}%)
    grayscale(${grayscaleValue}%) hue-rotate(${huerotateValue}deg)
    invert(${invertValue}%) opacity(${opacityValue}%)
    saturate(${saturateValue}%) sepia(${sepiaValue}%)`
    //displaying values
    document.getElementById("displayBlurValue").innerHTML=blurValue;
    document.getElementById("displayBrightnessValue").innerHTML=brightnessValue;
    document.getElementById("displayContrastValue").innerHTML=contrastValue;
    document.getElementById("displayGrayScaleValue").innerHTML=grayscaleValue;
    document.getElementById("displayHuerotateValue").innerHTML=huerotateValue;
    document.getElementById("displayInvertValue").innerHTML=invertValue;
    document.getElementById("displayOpacityValue").innerHTML=opacityValue;
    document.getElementById("displaySaturateValue").innerHTML=saturateValue;
    document.getElementById("displaySepiaValue").innerHTML=sepiaValue;

    //transformvalues
    var rotatezValue=document.getElementById("rotatez").value
    var rotatexValue=document.getElementById("rotatex").value
    var rotateyValue=document.getElementById("rotatey").value
    // var scalezValue=document.getElementById("scalez").value
    var scalexValue=document.getElementById("scalex").value
    var scaleyValue=document.getElementById("scaley").value
    var translatexValue=document.getElementById("translatex").value
    var translateyValue=document.getElementById("translatey").value
    var skewxValue=document.getElementById("skewx").value
    var skewyValue=document.getElementById("skewy").value
    //onchanging
    document.getElementById("image").style.transform=`rotateZ(${rotatezValue}deg)
    rotateX(${rotatexValue}deg) rotateY(${rotateyValue}deg)
    scaleX(${scalexValue}) scaleY(${scaleyValue}) translateX(${translatexValue}px)
    translateY(${translateyValue}px) skewX(${skewxValue}deg)
    skewY(${skewyValue}deg)`
}