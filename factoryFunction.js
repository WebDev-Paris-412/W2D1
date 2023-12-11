function Book(author, title, pages) {
	// const that = {}

	this.author = author
	this.title = title
	this.pages = pages
	this.currentPage = 0

	this.read = function (number) {
		this.currentPage += number
	}
	this.howManyPagesAreLeft = function () {
		return `${this.pages - this.currentPage} pages left!`
	}

	// return that
}

const aBook = new Book("JK Rowling", "HP", 715)
const anotherBook = new Book("George Orwell", "1984", 250)

aBook.read(15)
anotherBook.read(100)
console.log(anotherBook.howManyPagesAreLeft())
