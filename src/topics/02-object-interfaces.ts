

const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    hometown?: string;
    skills: string[];
}

const strider: Character = {
    name : 'Strider',
    hp   : 100,
    hometown : 'Los Yébenes',
    skills : ['Bash', 'Counter'],
}

console.table(strider);


export {};