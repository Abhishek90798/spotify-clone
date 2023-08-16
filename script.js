console.log("my name is lakhan");
// varibales declaration
let songIdx = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif= document.getElementById("gif");
let songsItems=Array.from(document.getElementsByClassName('songItems'));
let masterSongName=document.getElementById('masterSongName');
// song items array 
let songs = [{ songName: "Let Me Love You", songPath: "songs/1.mp3", coverPath: "covers/1.jpg" },
{ songName: "kmariya Pagal kaile ba ", songPath: "songs/2.mp3", coverPath: "covers/2.jpg" },
{ songName: "Raja ji ke Dilwa ", songPath: "songs/3.mp3", coverPath: "covers/3.jpg" },
{ songName: "Kone Dewata Ke Gadhal ", songPath: "songs/4.mp3", coverPath: "covers/4.jpg" },
{ songName: "Radha Rani Meri Ye ", songPath: "songs/5.mp3", coverPath: "covers/5.jpg" },
{ songName: "Radha Radha ", songPath: "songs/6.mp3", coverPath: "covers/6.jpg" },
{ songName: "Natkhat Khanahiya", songPath: "songs/7.mp3", coverPath: "covers/7.jpg" }];

songsItems.forEach((element,i)=>{
    
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName
})
// handle play and pause button
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle-o');
        masterPlay.classList.add('fa-play-circle-o');
        gif.style.opacity=0;
    }
})
// lisen to events
myProgressBar.value=0; 
audioElement.addEventListener('timeupdate',()=>{
   
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;

});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value *audioElement.duration/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle-o');
        element.classList.add('fa-play-circle-o');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIdx=parseInt(e.target.id);
        audioElement.src=songs[songIdx].songPath;
        
        masterSongName.innerText=songs[songIdx].songName;
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
    })
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIdx==0){
        songIdx=6;
    }
    else{
        songIdx=songIdx-1;
    }
    audioElement.src=songs[songIdx].songPath;
    masterSongName.innerText=songs[songIdx].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle-o');
    masterPlay.classList.add('fa-pause-circle-o');
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIdx==6){
        songIdx=0;
    }
    else{
        songIdx=songIdx+1;
    }
    masterSongName.innerText=songs[songIdx].songName;
    audioElement.src=songs[songIdx].songPath;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle-o');
    masterPlay.classList.add('fa-pause-circle-o');
})
