export class Hero {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    exp: number;
    level: number;

    constructor(objItem: any) {
        this.name = objItem.name || 'noname';
        this.description = objItem.description || '';
        this.imgUrl = objItem.imgUrl || '';
        this.exp = objItem.exp || 0;
        this.level = objItem.level || 1;
        this.id = objItem.id;
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
