// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data)  {
    // Добавить код
    if (book[metadataType]) {
        book[metadataType].push(data);
    } else
    book[metadataType] = [data];
}

// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
    // вернуть
    return book[metadataType];
}

// Создание объекта книги и добавление метаданных
const book = {
    title: "1984",
    author: "George Orwell",
};

const reviewSymbol = Symbol('review');
const ratingSymbol = Symbol('rating');
const tagsSymbol = Symbol('tags');

addMetadata(book, reviewSymbol, "Отличная книга о дистопии!");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, "dystopia");

// Вывод метаданных для книги
console.log(getMetadata(book, reviewSymbol));
console.log(getMetadata(book, ratingSymbol));
console.log(getMetadata(book, tagsSymbol));


////////////////////////////////

// const books = [
//     { title: "1984", author: "George Orwell" },
//     { title: "Brave New World", author: "Aldous Huxley" },
//     { title: "Fahrenheit 451", author: "Ray Bradbury" }
// ];

// books[Symbol.iterator] = function() {
//     return {
//         current: 0,
//         to: this.length,
//         next() {
//             return this.current < this.to
//             ? {done: false, value: books[this.current++]}
//             : {done : true};
//         }
//     }
// }

// for (let book of books) {
//     console.log(`Название: ${book.title}, Автор: ${book.author}`);
// }


////////////////////////////////
// const elCollection = document.querySelectorAll('div');
// const elArray = Array.from(elCollection);
// console.log(elArray);
// const resultArr = [];
// elArray.forEach(element => {
//     element.hasAttribute("data-active")
//     ?  resultArr.push(element)
//     : resultArr;
// });
// resultArr.forEach(element => {
//     console.log(element);
// });


///////////////////////////////////////
const lessons = new Map();
lessons.set("Математика", "Смирнов")
        .set("История", "Иванова")
        .set("Русский язык", "Степанова")
        .set("Информатика", "Петров")
        .set("Английский язык", "Сидоров");

const ivansLessons = new Set()
ivansLessons.add("Математика")
            .add("История");

const students = new Map();
students.set("Иван", ivansLessons);

console.log(`Преподаватель по математике: ${lessons.get("Математика")}`);
console.log(`Уроки Ивана: ${[...students.get("Иван")]}`);