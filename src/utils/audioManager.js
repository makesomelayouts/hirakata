import getAudioPath from "./audioPaths";

const audioElements = new Map();
let currentAudio = null;

async function play(romaji) {
  try {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    if (!audioElements.has(romaji)) {
      const audioPath = await getAudioPath(romaji);
      if (!audioPath) return;

      const audio = new Audio(audioPath);
      audio.volume = 0.3;
      audioElements.set(romaji, audio);
    }

    currentAudio = audioElements.get(romaji);
    await currentAudio.play();
  } catch (error) {
    console.error("Playback error:", error);
  }
}

// Экспортируем объект с методами
export const AudioManager = {
  play,
};
