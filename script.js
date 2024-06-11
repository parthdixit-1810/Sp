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
    updateSongInfo(audioUrl);
}

function handlePlay2(au, q) {
    const audioUrl = `/songs/${au}`;
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

    for (let index = 0; index < songs.length; index++) {
        if (index == q - 1) {
            handlePlay2(songs[index], q);
        }
    }
}

function play1() {
    const au = 'The Path.mp3';
    handlePlay(au);
}

function pause1() {
    handlePause();
}

function resume1() {
    handleResume();
}

function play2() {
    const au = 'still rollin.mp3';
    handlePlay(au);
}

function pause2() {
    handlePause();
}

function resume2() {
    handleResume();
}

function play3() {
    const au = 'fortnight.mp3';
    handlePlay(au);
}

function pause3() {
    handlePause();
}

function resume3() {
    handleResume();
}

function play4() {
    const au = 'Husn.mp3';
    handlePlay(au);
}

function pause4() {
    handlePause();
}

function resume4() {
    handleResume();
}

function play5() {
    const au = 'Ghost.mp3';
    handlePlay(au);
}

function pause5() {
    handlePause();
}

function resume5() {
    handleResume();
}

function updateSongInfo2(q) {
    let v = document.getElementsByClassName('songinfo');
    if (q == 1) {
        v[0].innerHTML = 'Heeriye Heeriye Aa';
    } else if (q == 2) {
        v[0].innerHTML = 'Husn X Choo Lo Remix - DJ Shadow Dubai';
    } else if (q == 3) {
        v[0].innerHTML = 'Janiye';
    } else if (q == 4) {
        v[0].innerHTML = 'Kahani Suno';
    } else if (q == 5) {
        v[0].innerHTML = 'O Sajni Re';
    } else if (q == 6) {
        v[0].innerHTML = 'Oh Sajna Ve';
    } else if (q == 7) {
        v[0].innerHTML = 'Pehle Bhi Main';
    } else if (q == 8) {
        v[0].innerHTML = 'Samjho Na';
    }
}

let m;
let index = 0;
let songs = [];

async function pn(mi) {
    m = mi;
    index = 0;
    songs = [];
    let a;
    if (m == 0) {
        a = await fetch('/Drake2/');
    } else if (m == 1) {
        a = await fetch('/s2/');
    } else if (m == 2) {
        a = await fetch('/selena/');
    } else if (m == 3) {
        a = await fetch('/Weeknd/');
    } else if (m == 4) {
        a = await fetch('/Shawn/');
    } else if (m == 5) {
        a = await fetch('/One/');
    } else if (m == 6) {
        a = await fetch('/travis/');
    }

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
    if (currentAudio && currentSong === au) {
        currentAudio.play();
    } else {
        if (currentAudio) {
            currentAudio.pause();
        }
        currentAudio = new Audio(au);
        currentAudio.play();
        currentAudio.ontimeupdate = updateProgress;
        currentAudio.onloadedmetadata = () => {
            totalTimeElement.textContent = formatTime(currentAudio.duration);
        };
        currentSong = au;
    }
    updateSongInfo3(au);
}

function updateSongInfo3(song) {
    if (typeof song !== 'undefined') {
        let v = document.getElementsByClassName('songinfo');
        if (m == 0) {
            if (v.length > 0) {
                let d = song.replace('/Drake2/Drake%20%E2%80%93%20', '');
                d=d.replaceAll('/Drake2/Drake','')
                d=d.replaceAll('%E2%80%93','')
                d=d.replaceAll('Kyla','')
                d=d.replaceAll(',','')
                d = d.replaceAll('%20', '');
                d=d.replaceAll('Wizkid','')
                v[0].innerHTML = d.replaceAll('.mp3', '');
            }
        } else if (m == 1) {
            if (v.length > 0) {
                let d = song.replace('/s2/', '');
                d = d.replaceAll('%20', '');
                d = d.replaceAll('%E2%80%93', '');
                d = d.replaceAll('MileyCyrus', '');
                v[0].innerHTML = d.replaceAll('.mp3', '');
            }
        } else if (m == 2) {
            if (v.length > 0) {
                let d = song.replace('/selena/', '');
                d = d.replaceAll('%20', '');
                d = d.replaceAll('(PaglaSongs)', '');
                d = d.replaceAll('(PagalNew.Com.Se)', '');
                v[0].innerHTML = d.replaceAll('.mp3', '');
            }
        } else if (m == 3) {
            if (v.length > 0) {
                let d = song.replace('/Weeknd/', '');
                d = d.replaceAll('%20', '');
                d = d.replaceAll('(PagalNew.Com.Se)', '');
                d = d.replaceAll('(PaglaSongs)', '');
                d = d.replaceAll('Mp3SongDownload(OyeDjSurendra.Com)', '');
                v[0].innerHTML = d.replaceAll('.mp3', '');
            }
        } else if (m == 4) {
            if (v.length > 0) {
                let d = song.replace('/Shawn/', '');
                d = d.replaceAll('%20', '');
                d = d.replaceAll('_320(PaglaSongs)', '');
                d = d.replaceAll('ShawnMendes%E2%80%93', '');
                v[0].innerHTML = d.replaceAll('.mp3', '');
            }
        } else if (m == 5) {
            if (v.length > 0) {
                let d = song.replaceAll('/One', '');
                d = d.replaceAll('%20', '');
                d = d.replaceAll('/OneDirection', '');
                d = d.replaceAll('%E2%80%93', '');
                d = d.replaceAll('/1-12', '');
                v[0].innerHTML = d.replaceAll('.mp3', '');
            }
        } else if (m == 6) {
            if (v.length > 0) {
                let d = song.replace('/travis/', '');
                d = d.replaceAll('%20', '');
                d = d.replaceAll('(trendingmusic.cc)', '');
                d = d.replaceAll('-(Pagallworld)', '');
                d = d.replaceAll('TravisScott%E2%80%93', '');
                d = d.replaceAll('%CC%81A', '');
                v[0].innerHTML = d.replaceAll('.mp3', '');
            }
        }
    }
}
