const data = [
    {
        id: 1,
        title: "Jah Khalib",
        autor: "Medina",
        src: "./files/audio/Jah Khalib - Медина.mp3",
        img: "./files/image/maxresdefault.jpg",
    },
    {
        id: 2,
        title: "Monica Belluci",
        autor: "Malena",
        src: "./files/audio/Monica Belluci - Malena.mp3",
        img: "./files/image/monica.webp",
    },
    {
        id: 3,
        title: "Savai",
        autor: "Dark Life",
        src: "./files/audio/Savai - Dark Life (Instrumental).mp3",
        img: "./files/image/darklife.jpg",

    },
    {
        id: 4,
        title: "SHOUSE",
        autor: "Love Tonight",
        src: "./files/audio/Lovetonight.mp3",
        img: "./files/image/LoveTonight.png",

    },
    {
        id: 5,
        title: "Tom Odell",
        autor: "Another Love",
        src: "./files/audio/Tom Odell - Another Love (Official Video).mp3",
        img: "./files/image/another.jpg",
    },
    {
        id: 6,
        title: "Xpert",
        autor: "Və bir də",
        src: "./files/audio/Xpert - Və bir də (Official Music Video).mp3",
        img: "./files/image/expert).jpg",
    }
]
// --------------------------------------------------------MUZICAPP~
const audio = document.querySelector('audio');
const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const marquee = document.querySelector(".music-info-active");
const image = document.querySelector('.music-image')
const cover = document.querySelector('.cover')
const musicList = document.querySelector('.music-list')
const scrollBar = document.querySelector('#scrollbar')
const currentTime = document.querySelector('.currentTime')
let index = 0

marquee.innerText = data[index].title;
let lastDuration;

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        cover.classList.remove("animation-pause");
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        cover.classList.add("animation-pause");
    }
});

data.forEach((muzic, i) => {
    musicList.innerHTML += `
    <div class="music" onclick="selectMuzic(this,${i})">
        <img src="${muzic.img}">
        <div class="info">
        <p title="${muzic.title}">${muzic.title}</p>
        <p title="${muzic.title}">${muzic.autor}</p>
        </div>
    </div>
    `
})
activeMuzic()
prevBtn.addEventListener('click', () => {
    if (index === 0) {
        index = data.length - 1
    } else {
        index--;
    }
    muzicPlay()
    activeMuzic()
    scrollBar.value = 0
})
nextBtn.addEventListener('click', () => {
    if (index === data.length - 1) {
        index = 0
    } else {
        index++;
    }
    muzicPlay()
    activeMuzic()
    scrollBar.value = 0
})

function muzicPlay() {
    audio.src = data[index].src;
    marquee.innerText = data[index].title;
    audio.play()
    scrollBar.max
    image.src = data[index].img
    cover.classList.remove("animation-pause")
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

audio.addEventListener('loadedmetadata', () => {
    scrollBar.max = Math.floor(audio.duration);
})

audio.addEventListener('timeupdate', () => {
    scrollBar.value = audio.currentTime;
    let time = audio.currentTime;
    let minute = Math.floor(time / 60);
    let second = Math.floor(time % 60);
    currentTime.innerHTML = `${minute < 10 ? '0' + minute : minute}  :  ${second < 10 ? '0' + second : second}`
})

audio.addEventListener("ended", () => {
    if (index === data.length - 1) {
        index = 0
    } else {
        index++;
    }
    muzicPlay()
    activeMuzic()
    scrollBar.value = 0
})

scrollBar.addEventListener("input", () => {
    audio.currentTime = scrollBar.value
})


function selectMuzic(muzicDiv, i) {
    const music = document.querySelectorAll('.music')
    music.forEach(item => item.classList.remove("music-active"))
    muzicDiv.classList.add('music-active')
    index = i;
    scrollBar.value = 0
    muzicPlay()
}

function activeMuzic() {
    const music = document.querySelectorAll('.music')
    music.forEach(item => item.classList.remove("music-active"))
    music.forEach((item, i) => {
        i === index && item.classList.add('music-active')
    })
}

