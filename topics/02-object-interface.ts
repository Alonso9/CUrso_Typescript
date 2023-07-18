const skills: String[] = ['Bash', 'COunter', 'healing'];

interface Character {
  name: String;
  hp: number;
  skills: string[];
  homeTown?: string;
}

const strider: Character = {
  name: 'Alonso',
  hp: 100,
  skills: ['Bash', 'Counter'],
  homeTown: '',
};

strider.homeTown = 'Rivedell';

console.table(strider);
