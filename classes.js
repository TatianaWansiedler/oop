//Задание 1

let name = "Pizza"
let phone = "81234567890"
let phone2 = "+81234567890"

class Delivery {
    constructor(name, phone) {
        this.name = name
        this.phone = phone
        this.validPhone = this.phone[0] === '+' ? true : false
    }
}
const deliveryName = new Delivery(name, phone)
const deliveryName2 = new Delivery(name, phone2)
// console.log(deliveryName.validPhone); // false
// console.log(deliveryName2.validPhone); // true

// Задание 2

class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}

class Users extends Permissions {
    constructor(name) {
        super()
        this.name = name
    }
}

const user = new Users('Rob')
// console.log(user.name); // Rob

//Задание 3

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.state = 100
        this.type = null
    }

    fix() {
        this.state = this.state * 1.5
    }
    set setState(newState) {
        if (newState < 0) {
            this.state = 0
        } else if (newState > 100) {
            this.state = 100
        } else {
            this.state = newState
        }

    }
    get getState() {
        return this.state
    }
}

const example = new PrintEditionItem("example", "20.03.2012", 200)
example.fix()
example.setState = 200

// console.log(example);
// console.log(example.getState);


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "magazine"
    }
}

const magazine = new Magazine("New-York", "02.09.2002", 100)
// console.log(magazine);

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount)
        this.type = "book"
        this.author = author
    }
}

const book = new Book("New Book", "06.11.1991", 500)
book.fix()
// console.log(book);

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author)
        this.type = "novel"
    }
}

const novelBook = new NovelBook("Moby Dick", "01.01.1851", 400)
// console.log(novelBook.getState);

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author)
        this.type = "fantastic"
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author)
        this.type = "detective"
    }
}