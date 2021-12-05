var numFigures;
var randX;
var randY;
var randP;
var dedic;
var asd;

function drawSquares(){
    numFigures = document.querySelector("input[name='number']").value;
    for (var i = 0; i < numFigures; i++){
        randP = getRandomNum(50, 300);
        var figure = document.createElement("div");
        figure.style.width = randP + "px";
        figure.style.height = randP + "px";
        figure.style.left = getRandomNum(0, 1400) + "px";
        figure.style.top = getRandomNum(30, 800) + "px";
        figure.classList.add('square');
        
        figure.onclick = function(){
            if(dedic == this){}
            else{
                if(dedic != null){
                    dedic.style.borderBottomColor = "";
                    dedic.style.background = "";
                }
                this.style.background = "rgba(255, 240, 0, 0.9)";
                dedic = this;
            }   
        }

        figure.ondblclick = function(){
            this.remove();
        }

        document.body.appendChild(figure);
    }
}

function drawTriangles(){
    numFigures = document.querySelector("input[name='number']").value;
    for (var i = 0; i < numFigures; i++){

        randP = getRandomNum(50, 300);
        var figure = document.createElement("div");
        figure.style.left = getRandomNum(0, 1400) + "px";
        figure.style.top = getRandomNum(30, 800) + "px";
        figure.classList.add('triangle');

        figure.onclick = function(){
            if(dedic == this){}
            else{
                if(dedic != null){
                    dedic.style.borderBottomColor = "";
                    dedic.style.background = "";
                }
                this.style.borderBottomColor = "rgba(255, 240, 0, 0.9)";
                dedic = this;
            }   
        }

        figure.ondblclick = function(){
            this.remove();
        }

        document.body.appendChild(figure);
    }
}

function drawCircles(){
    numFigures = document.querySelector("input[name='number']").value;
    for (var i = 0; i < numFigures; i++){

        randP = getRandomNum(50, 300);
        var figure = document.createElement("div");
        figure.style.width = randP + "px";
        figure.style.height = randP + "px";
        figure.style.left = getRandomNum(0, 1400) + "px";
        figure.style.top = getRandomNum(30, 800) + "px";
        figure.classList.add('circle');
        
        figure.onclick = function(){
            if(dedic == this){}
            else{
                if(dedic != null){
                    dedic.style.borderBottomColor = "";
                    dedic.style.background = "";
                }
                this.style.background = "rgba(255, 240, 0, 0.9)";
                dedic = this;
            }   
        }

        figure.ondblclick = function(){
            this.remove();
        }

        document.body.appendChild(figure);
    }
}

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}