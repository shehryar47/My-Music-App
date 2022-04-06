
let playButton = document.getElementById("play");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");
let rotateImg = document.getElementById("rotateimg");
let seekBar = document.getElementById("musicTime");
let songList = Array.from( document.getElementsByClassName("songLists"));
let songIndex = 7;
let currentSong = document.getElementById("currentSong");
//Place your song here
let songs=[
    {"songName":"Warrior","filePath":"songs/1.mp3","cover":"./img/1.png"},
    {"songName":"Arcando - In My Head ","filePath":"songs/2.mp3","cover":"./img/2.png"},
    {"songName":"Abstrakt - Nobody Else [NCS Release]","filePath":"songs/3.mp3","cover":"./img/3.png"},
    {"songName":"Cartoon & Andromedik - Whatever ","filePath":"songs/4.mp3","cover":"./img/4.png"},
    {"songName":"DigEx - Fall In Love","filePath":"songs/5.mp3","cover":"./img/5.png"},
    {"songName":"Millbrook - Lost Without You","filePath":"songs/6.mp3","cover":"./img/6.png"},
    {"songName":"NIVIRO - The Edge ","filePath":"songs/7.mp3","cover":"./img/7.png"}
]

let song = new Audio(songs[0].filePath);


//Playing Pausing the Audio

playButton.addEventListener('click', () => {
    if (song.duration <= 0 || song.paused == true) {
        
        // rotateImg.src =songs[0].cover;
        // currentSong.innerText=songs[0].songName;
        song.play();
        element = document.getElementById('play');
        element.src = "pause-solid.svg"
        rotateImg.classList.add("rotating");
    } 
    else 
    {
        // currentSong.innerText="Paused";
        
        console.log("pause");
        song.pause();
        element = document.getElementById('play');
        element.src = "play-solid.svg"
        rotateImg.classList.remove("rotating");
    }

})


// Upading Seekbar
song.ontimeupdate= function(e){
    songPercent= Math.floor( (song.currentTime/song.duration)*100);
    console.log("playing",songPercent);
    seekBar.value = songPercent;
    if (seekBar.value>=100){
        if (songIndex>=6)
    {
        songIndex=0;
        nextPrevious();
    }
    else
    {
        songIndex++;
        nextPrevious();
    }
        
    }
}
seekBar.addEventListener("change",()=>{
song.currentTime= (seekBar.value*song.duration)/100;
})


seekBar.addEventListener('change',()=>{
    console.log("changing")
})



// Song List Name

songList.forEach((element,i)=>{
    element.innerText=songs[i].songName;
    
})


// Song list Play according to click
songList.forEach((element,i)=>{
    
    element.addEventListener('click',(e)=>{
        song.src=songs[i].filePath;
        rotateImg.src =songs[i].cover;
        currentSong.innerText=songs[i].songName;
        if (song.duration <= 0 || song.paused == true) {
        
            song.play();
            element = document.getElementById('play');
            element.src = "pause-solid.svg"
            rotateImg.classList.add("rotating");
        } 
        else 
        {
            song.pause();
            element.src = "play-solid.svg"
            rotateImg.classList.remove("rotating");
        }
        
    })
})


// Playing Previous Song
function nextPrevious(){
    song.src=songs[songIndex].filePath;
    rotateImg.src =songs[songIndex].cover;
    currentSong.innerText=songs[songIndex].songName;
    console.log(songIndex, song.src);
    song.duration=0;
    song.play();
    element = document.getElementById('play');
    element.src = "pause-solid.svg"
    rotateImg.classList.add("rotating");
}


backward.addEventListener('click',()=>{

    if (songIndex<=0)
    {
        songIndex=6;
        nextPrevious();
    }
    else
    {
        songIndex--;
        nextPrevious();
    }})
    
// Playing Next Song
forward.addEventListener('click',()=>{

    if (songIndex>=6)
    {
        songIndex=0;
        nextPrevious();
    }
    else
    {
        songIndex++;
        nextPrevious();
        
    }})







    // let colorPickerBg = document.getElementById("colorPickerBg");
    let colorPickerIN = document.getElementById("colorPickerIN");
    let root = document.documentElement;
    // colorPickerBg.addEventListener('input',()=>{
    //      color = colorPickerBg.value;
    //     root.style.setProperty("--bg",color);
    // })
    //  root = document.documentElement;
    colorPickerIN.addEventListener('input',()=>{
         color = colorPickerBg.value;
        root.style.setProperty("--inbg",color);
    })

