//inicializar variables, sirven para cambiar o colocar posiscion aleatoria  los dibujos
x = 0;
y = 0;


//almacenaran lo que escuche la compu
draw_circle = "";
draw_rect = "";


// sintesis de voz a textyo
var SpeechRecognition = window.webkitSpeechRecognition;
  // nuevo reconocimiento de voz
var recognition = new SpeechRecognition();


function start()
{
    document.getElementById("span").innerHTML = "El sistema está escuchando. Por favor, habla.";
    // empiece a funcionar la parte de reconocer la voz
    recognition.start();
}
 


//obtiene el resultado de reconocer la voz
recognition.onresult = function(event) {
 console.log(event);


// transcribe lo que escucha a texto
var content = event.results[0][0].transcript;
// muestra en status lo que reconocio en voz y lo muestra en texto
   document.getElementById("span").innerHTML = "La voz se reconoció como: " + content;
   // si reconoce circle
      if(content =="círculo")
      {


        //
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se empezó a dibujar un círculo ";
        draw_circle = "set";
      }
      if(content =="rectángulo")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("span").innerHTML = "Se empezó a dibujar un rectángulo ";
        draw_rect = "set";
      }
}


function setup() {
  //crea el canvas con ese altura y ancho
  canvas = createCanvas(900, 600);
}


function draw() {
  if(draw_circle == "set")
  {
    // la variable radius guardara un valor aleatorio
    radius = Math.floor(Math.random() * 100);
    // creara circulos en posiciones aleatorias y tamaños aleatorioas
    circle(x, y, radius);
    document.getElementById("span").innerHTML = "Se dibujó un círculo. ";
    draw_circle = "";
  }


  if(draw_rect == "set")
  {
    rect(x,y,70,50);
    document.getElementById("span").innerHTML = "Se dibujó un rectángulo. ";
    draw_rect = "";
  }


}






