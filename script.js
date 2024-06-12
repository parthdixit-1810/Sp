let currentAudio = null;
let currentSong = '';
const currentTimeElement = document.getElementById('current-time');
const totalTimeElement = document.getElementById('total-time');

function playAudio(audio) {
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
    }
    currentAudio = audio;
    audio.play();
    audio.ontimeupdate = updateProgress;
    audio.onloadedmetadata = () => {
        totalTimeElement.textContent = formatTime(audio.duration);
    };
}

function pauseAudio() {
    if (currentAudio) {
        currentAudio.pause();
    }
}

function updateProgress() {
    if (currentAudio) {
        currentTimeElement.textContent = formatTime(currentAudio.currentTime);
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsPart = Math.floor(seconds % 60);
    return `${minutes}:${secondsPart < 10 ? '0' : ''}${secondsPart}`;
}

function handlePlay(au) {
    const audioUrl = `/songs/${au}`;
    playNewAudio(audioUrl);
    updateSongInfo(audioUrl);
}

function handlePlay2(au, q) {
    const audioUrl = `/songs/${au}`;
    playNewAudio(audioUrl);
    updateSongInfo2(q);
}

function handlePause() {
    pauseAudio();
}

function handleResume() {
    if (currentAudio) {
        currentAudio.play();
    }
}

function updateSongInfo(song) {
    if (typeof song !== 'undefined') {
        let v = document.getElementsByClassName('songinfo');
        if (v.length > 0) {
            v[0].innerHTML = song.replace('/songs/', '').replace('.mp3', '');
        }
    }
}

async function p1(q) {
    try {
        let a = await fetch('/songs/');
        let response = await a.text();
        let div = document.createElement('div');
        div.innerHTML = response;
        let as = div.getElementsByTagName('a');
        let songs = [];

        for (let index = 0; index < as.length; index++) {
            const element = as[index];
            if (element.href.endsWith(".mp3")) {
                songs.push(element.href);
            }
        }

        if (songs.length >= q) {
            handlePlay2(songs[q - 1], q);
        }
    } catch (error) {
        console.error("Error fetching songs:", error);
    }
}

function play1() {
    handlePlay('The Path.mp3');
}

function pause1() {
    handlePause();
}

function resume1() {
    handleResume();
}

function play2() {
    handlePlay('still rollin.mp3');
}

function pause2() {
    handlePause();
}

function resume2() {
    handleResume();
}

function play3() {
    handlePlay('fortnight.mp3');
}

function pause3() {
    handlePause();
}

function resume3() {
    handleResume();
}

function play4() {
    handlePlay('Husn.mp3');
}

function pause4() {
    handlePause();
}

function resume4() {
    handleResume();
}

function play5() {
    handlePlay('Ghost.mp3');
}

function pause5() {
    handlePause();
}

function resume5() {
    handleResume();
}

function updateSongInfo2(q) {
    let v = document.getElementsByClassName('songinfo');
    const songNames = [
        'Heeriye Heeriye Aa',
        'Husn X Choo Lo Remix - DJ Shadow Dubai',
        'Janiye',
        'Kahani Suno',
        'O Sajni Re',
        'Oh Sajna Ve',
        'Pehle Bhi Main',
        'Samjho Na'
    ];
    if (v.length > 0 && q > 0 && q <= songNames.length) {
        v[0].innerHTML = songNames[q - 1];
    }
}

let m;
let index = 0;
let songs = [];

async function pn(mi) {
    m = mi;
    index = 0;
    songs = [];
    let fetchUrl = '';
    switch (m) {
        case 0: fetchUrl = '/Drake2/'; break;
        case 1: fetchUrl = '/s2/'; break;
        case 2: fetchUrl = '/selena/'; break;
        case 3: fetchUrl = '/Weeknd/'; break;
        case 4: fetchUrl = '/Shawn/'; break;
        case 5: fetchUrl = '/One/'; break;
        case 6: fetchUrl = '/travis/'; break;
        default: return;
    }

    try {
        let a = await fetch(fetchUrl);
        let response = await a.text();
        let div = document.createElement('div');
        div.innerHTML = response;
        let as = div.getElementsByTagName('a');

        for (let i = 0; i < as.length; i++) {
            const element = as[i];
            if (element.href.endsWith(".mp3")) {
                songs.push(element.href);
            }
        }

        if (songs.length > 0) {
            handlePlay3(songs[index]);
        }
    } catch (error) {
        console.error("Error fetching songs:", error);
    }
}

async function pq() {
    if (index < songs.length - 1) {
        index += 1;
        handlePlay3(songs[index]);
    }
}

async function pp() {
    if (index > 0) {
        index -= 1;
        handlePlay3(songs[index]);
    }
}

function handlePlay3(au) {
    playNewAudio(au);
    updateSongInfo3(au);
}

function playNewAudio(audioUrl) {
    if (currentAudio && currentSong === audioUrl) {
        currentAudio.play();
    } else {
        if (currentAudio) {
            currentAudio.pause();
        }
        currentAudio = new Audio(audioUrl);
        currentAudio.play();
        currentAudio.ontimeupdate = updateProgress;
        currentAudio.onloadedmetadata = () => {
            totalTimeElement.textContent = formatTime(currentAudio.duration);
        };
        currentSong = audioUrl;
    }
}

function updateSongInfo3(song) {
    if (typeof song !== 'undefined') {
        let v = document.getElementsByClassName('songinfo');
        if (v.length > 0) {
            let songName = song;
            switch (m) {
                case 0:
                    songName = song.replace('/Drake2/Drake%20%E2%80%93%20', '')
                                   .replace(/\/Drake2\/Drake/g, '')
                                   .replace(/%E2%80%93/g, '')
                                   .replace(/Kyla|,|%20|Wizkid/g, '')
                                   .replace('.mp3', '');
                    break;
                case 1:
                    songName = song.replace('/s2/', '')
                                   .replace(/%20|%E2%80%93|MileyCyrus/g, '')
                                   .replace('.mp3', '');
                    break;
                case 2:
                    songName = song.replace('/selena/', '')
                                   .replace(/%20|\(PaglaSongs\)|\(PagalNew.Com.Se\)/g, '')
                                   .replace('.mp3', '');
                    break;
                case 3:
                    songName = song.replace('/Weeknd/', '')
                                   .replace(/%20|\(PagalNew.Com.Se\)|\(PaglaSongs\)|Mp3SongDownload\(OyeDjSurendra.Com\)/g, '')
                                   .replace('.mp3', '');
                    break;
                case 4:
                    songName = song.replace('/Shawn/', '')
                                   .replace(/%20|_320\(PaglaSongs\)|ShawnMendes%E2%80%93/g, '')
                                   .replace('.mp3', '');
                    break;
                case 5:
                    songName = song.replaceAll('/One', '')
                                   .replace(/%20|\/OneDirection|%E2%80%93|\/1-12/g, '')
                                   .replace('.mp3', '');
                    break;
                case 6:
                    songName = song.replace('/travis/', '')
                                   .replace(/%20|\(trendingmusic.cc\)|-(Pagallworld)|TravisScott%E2%80%93|%CC%81A/g, '')
                                   .replace('.mp3', '');
                    break;
            }
            v[0].innerHTML = songName;
        }
    }
}
