export default class Hero {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    exp: number;
    level: number;
    constructor(hero: Hero) {
        const {exp = 0} = hero;
    }

    // private nextLevelCup() {
    //     return this.level * 20 + 100;
    // }

    // public addExp(exp: number) {
    //     this.exp += exp;
    //     if (this.nextLevelCup() <= this.exp) {
    //         this.level++;
    //     }
    // }
}
