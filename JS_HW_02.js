console.log("Задание 1");
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books;

    constructor(initialBooks = []) {
        try {
            if (new Set(initialBooks).size !== initialBooks.length) {
                throw new Error("Начальный список книг содержит дубликаты!");
            }
            this.#books = initialBooks;
        } catch (error) {
            console.error(error.message);
        }
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        try {
            if (this.#books.includes(title)) {
                throw new Error("Книга с таким названием уже существует.");
            }
            this.#books.push(title);
            console.log(`Добавлена книга: "${title}"`);
        } catch (error) {
            console.error(error.message);
        }
    }

    removeBook(title) {
        try {
            const index = this.#books.indexOf(title);
            if (index === -1) {
                throw new Error("Книги с таким названием нет в списке.");
            }
            this.#books.splice(index, 1);
            console.log(`Удалена книга: "${title}"`);
        } catch (error) {
            console.error(error.message);
        }
    }

    hasBook(title) {
        return this.#books.includes(title);
    }

    hasBookNoBoolean(title) {
        if (this.#books.includes(title)) {
            console.log(`Книга с названием "${title}" существует.`);
        } else { console.log(`Книга с названием "${title}" отсутствует.`);
    }
}};

const library = new Library(['Книга 1', 'Книга 2', 'Книга 3']);

console.log(library.allBooks);

library.addBook('Книга 4');
library.addBook('Книга 4'); // Попытка добавить книгу, которая уже существует в списке
console.log(library.allBooks);

library.removeBook('Книга 2');
library.removeBook('Книга 2'); // Попытка удалить книгу, которая уже отсутствует в списке
console.log(library.allBooks);

library.hasBookNoBoolean('Книга 1');
library.hasBookNoBoolean('Книга 2'); 
console.log(library.hasBook('Книга 1'));
console.log(library.hasBook('Книга 2')); 

const library2 = new Library(['Книга 1', 'Книга 2', 'Книга 3', 'Книга 3']); // Попытка создать библиотеку с дублированием книг

// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// const initialData = [
// {
// product: "Apple iPhone 13",
// reviews: [
// {
// id: "1",
// text: "Отличный телефон! Батарея держится долго.",
// },
// {
// id: "2",
// text: "Камера супер, фото выглядят просто потрясающе.",
// },
// ],
// },
// {
// product: "Samsung Galaxy Z Fold 3",
// reviews: [
// {
// id: "3",
// text: "Интересный дизайн, но дорогой.",
// },
// ],
// },
// {
// product: "Sony PlayStation 5",
// reviews: [
// {
// id: "4",
// text: "Люблю играть на PS5, графика на высоте.",
// },
// ],
// },
// ];

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

let reviews = [];

initialData.forEach(item => {
    item.reviews.forEach(review => {
        reviews.push(review.text);
    });
});

const reviewsContainer = document.getElementById('reviewsContainer');

function addReview() {
    const reviewInput = document.getElementById('reviewInput').value.trim();
    if (reviewInput.length < 50 || reviewInput.length > 500) {
        alert("Отзыв должен содержать от 50 до 500 символов.");
        return;
    }

    reviews.push(reviewInput);
    renderReviews();
}

function renderReviews() {
    reviewsContainer.innerHTML = '';
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.textContent = review;
        reviewsContainer.appendChild(reviewElement);
    });
}

renderReviews();
