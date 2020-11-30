Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,
    
    constraints:{
        facingMode:'environment'
    }
});
Cam = document.getElementById("camera");
Webcam.attach(Cam);

classifier = ml5.imageClassifier('MobileNet',loaded);
console.log(ml5.version);

function loaded(){
    console.log("model loaded!!")
}

function capture(){
    Webcam.snap(function(image){
        document.getElementById("result").innerHTML = "<img id='resultImage' src="+image+">";
    });
}

function identify(){
    classifier.classify(document.getElementById("resultImage"),check);
}
function check(error,result){
    if(error){
        console.log(error);
    }else if(result){
        console.log(result);
        document.getElementById("output_text").innerHTML = result[0].label;
    }
}