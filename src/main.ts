import {magic} from "./magic";

interface Animal {
    name: string;
    age: number;
    sex?: 'male' | 'female';
}

interface Cat extends Animal {
    walkTree: boolean;
}

type Dog = Animal & {
    digHole: boolean;
};

let cat: Cat = {
    name: 'Edward',
    age: 3,
    walkTree: true
};

let dog: Dog = {
    name: 'Snow',
    age: 1,
    sex: 'male',
    digHole: false
};

// comment
console.log(cat, dog);

function sum(a: number, b: number): string {
    return '' + (a + b);
}

console.log(sum(1, 2))

magic();
