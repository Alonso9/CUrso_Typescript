interface AudioPlay {
  audioVolume: number;
  songDuraction: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlay = {
  audioVolume: 90,
  songDuraction: 36,
  song: 'Mess',
  details: {
    author: 'Ed sheen',
    year: 2015,
  },
};

// Destructuramos el objeto y renombramos algunas variables, para evitar el hilo
// destructuramos en otra linea, pero podemos hacerlo en una misma linea o const
const {
  song: nameSong,
  audioVolume,
  details: detailsSong,
  details: { year },
} = audioPlayer;
const { author } = detailsSong;
// console.log(nameSong);
// console.log(audioVolume);
// console.log(year);
// console.log(author);

/* Destructuracion de Arreglos */

// asignando una variable podemos evaluar si la posicion no existe
const dbz: string[] = ['Goku', 'Vegeta', 'Gohan'];
const [, , Gohan = 'Not found', cha4 = 'Not found'] = dbz;
console.log('Character 3: ', dbz[2] || 'Theres not character');
console.log('Character 3: ', Gohan || 'Theres not character');
console.log('Character 4: ', cha4);
