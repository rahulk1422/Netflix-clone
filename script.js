
let currentIndex = 1;


const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
let next = document.querySelector('.next');
const totalCards = cards.length;
const visibleCards = 4; // Number of visible cards
const cardWidth = cards[0].offsetWidth; // Get width of a single card

document.querySelector('.next').addEventListener('click', () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    updateSliderPosition();
    
  }
});

document.querySelector('.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

var acc=document.getElementsByClassName("accordion");
for(var i=0; i<acc.length; i++){
  acc[i].addEventListener("click", function(){
    this.classList.toggle("active");

    var panel=this.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight=null;
    }
    else{
       panel.style.maxHeight=panel.scrollHeight+"px";
    }
  });
}


// Function to start video
function startVideo(videoId) {
  const videos = document.querySelectorAll('.video-container');
  // Hide all video containers
  videos.forEach(video => {
      video.style.display = 'none';
  });
      // Show the video based on card clicked
      const video = document.getElementById(videoId);
      video.style.display = 'block';
  }
  // Function to close the video
function closeVideo(videoId) {
  const video = document.getElementById(videoId);
  video.style.display = 'none';
}
