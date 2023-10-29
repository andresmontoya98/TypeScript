interface AudioPlayer {
  audioVolumen: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolumen: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const {
  song,
  details: { author },
} = audioPlayer;
// const { author } = details;

console.log(`Song: ${song} - author ${author}`);

const [, , trunks]: string[] = ["Goku", "vegeta", "trunks"];

console.log("Personaje 3: " + trunks);

export {};
