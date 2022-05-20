function preload() { } 
function setup() 
{ canvas = createCanvas(640, 480); canvas.position(110, 250); 
video = createCapture(VIDEO); video.hide(); tint_color = ""; } 
function draw() 
{ image(video, 230, 165, 220, 140); tint(tint_color); 
    ellipse(56, 32, 55, 55,);
    rect(77, 10, 530, 45);
    ellipse(600, 32, 55, 55,);
    ellipse(56, 426, 55, 55,);
    rect(34, 37, 45, 380);
    rect(75, 417, 530, 45);
    ellipse(600, 426, 55, 55,);
    rect(575, 37, 45, 380);
}
function take_snapshot()
{ save('me.png'); } 
function filter_tint()
 { tint_color = document.getElementById("colour_name").value; }