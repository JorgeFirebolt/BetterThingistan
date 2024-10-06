const HOME_HTML = `<img src="icons/thingistan-logo.png" width="130" height="130" style="margin-bottom: -15px"> <p style="color: #AD802B"><i>Version 1.0.0</i></p> <h1 style="color:#faebd7">Better<span style="color: #3fcb94">Thingistan</span></h1> <p style="color:#faebd7">A better Thingistan experience.</p> <div id="turnpage" style="float: right; margin-right: -33px; padding-right: 7px; margin-top: 25px; cursor: pointer; color: #AD802B; font-size: 20px"><span style="position: absolute; font-size: 10px; right: 32px; padding-top: 5px"><i>About</i></span>→</div>`
const ABOUT_HTML = `<p style="color:antiquewhite; line-height: 25px; margin: 15px; font-size: 15px; margin-top: 50px; margin-bottom: 30px; inline-size: 400px;"><span style="color: #3fcb94">BetterThingistan</span> is a project designed to make <span style="color: #3fcb94">Thingistan</span> better through a collection of <span style="color: #3fcb94">quality of life</span> modifications and useful gameplay additions.<span style="color: #3fcb94">TODO</span>. I'll do my best to keep this maintained and fix any bugs or add any suggested features that you are more than welcome to share with me via my discord at <span style="color: #3fcb94">jorgefirebolt</span>. See instructions for an in depth guide on how to actually use this thing. <span style="color: #3fcb94">Pandora's Box!</span> TODO <span style="font-style: italic; color: #3fcb94">~Jorge Firebolt</span></p><p style="color: #3fcb94; font-size: 18px; font-style: italic; font-weight: bold;"><a href="https://zoltarml.github.io/BetterML/" target="_blank" style="padding-right: 40px; text-decoration: none; color: #00cb94;">Instructions</a></p> <div id="turnpage" style="float: left; margin-left: -33px; padding-right: 7px; margin-top: 25px; cursor: pointer; color: #AD802B; font-size: 20px"><span style="position: absolute; font-size: 10px; left: 32px; padding-top: 5px"><i>Home</i></span>←</div>`

const innerdiv = document.getElementById('innerdiv');
let count = 0;


function pageTurn() {

    if (count === 0) {
        innerdiv.innerHTML = ABOUT_HTML;
        count = 1;
    } else if (count === 1) {
        innerdiv.innerHTML = HOME_HTML;
        count = 0;
    }
    document.getElementById('turnpage').addEventListener("click", pageTurn);
}


document.getElementById('turnpage').addEventListener("click", pageTurn);
