"use strict";
class TechBooks {
    spreadFunc(abc) {
        let output = [];
        abc.forEach((i:any) => {
            console.log;
            if (typeof i == "number") {
                output.push(i);
            }
            else {
                output.push(...this.spreadFunc(i));
            }
        });
        return output;
    }
}
let book1 = new TechBooks();
let input = [1, [2, 3, 4, [5, 6, [7, 8, [9]]]]];
let res = book1.spreadFunc(input);
console.log(res);