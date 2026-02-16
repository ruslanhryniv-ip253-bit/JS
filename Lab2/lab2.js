//1

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, "text"];

arr4.sort(() => Math.random() - 0.5);

console.log(arr4.join("/"));
//2

function camelize(str) {
    return str
        .split("-")
        .map((word, index) => {
            if (index === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join("");
}


console.log(camelize("back-ground-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
