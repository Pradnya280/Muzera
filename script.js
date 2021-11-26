console.log("Welcome to Muzera");
//initialize the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif1 = document.getElementById('gif1');
let masterSongName = document.getElementById('masterSongName');
let songsItem = Array.from(document.getElementsByClassName('songsItem'));
let songs = [
    {songName: "Fearless", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Lovely", filePath:"song/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Never Say Never", filePath:"song/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Who Says", filePath:"song/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Blank Space", filePath:"song/5.mp3", coverPath:"covers/1.jpg"},
    {songName: "Aal Izz well", filePath:"song/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Zindagi do pal ki", filePath:"song/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Phir le aaya", filePath:"song/8.mp3", coverPath:"covers/8.jpg"},
   
]
songsItem.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})

// audioElemnt.play();
//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif1.style.opacity = 1;
    }
    
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif1.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=> {
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})
 
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    }
    
    
    
    /*audioElement.play();
    gif1.style.opacity = 1;
    masterPlay.classList.remove('fa-play-cicle');
    masterPlay.classList.add('fa-pause-cicle');*/
     if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif1.style.opacity = 1;
    }
    
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif1.style.opacity = 0;
    }
    
    

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex=0;
    }
    else{
        songIndex += 1;      
    }
   
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-cicle');
    masterPlay.classList.add('fa-pause-cicle');
    })


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;      
    }
    
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-cicle');
    masterPlay.classList.add('fa-pause-cicle');

})