class Book {
	constructor(author, title, pages, languages = []) {
		this.author = author
		this.title = title
		this.amountOfPages = pages
		this.currentPage = 0
		this.languages = languages
	}

	read(number) {
		this.currentPage += number
		console.log(
			`I just read ${number} pages of ${
				this.title
			}, ${this.howManyPagesAreLeft()} pages left!`
		)
	}
	howManyPagesAreLeft() {
		return this.amountOfPages - this.currentPage
	}
}

const harryPotter = new Book("JK Rowling", "Prisoner of Azkaban", 325, [
	"fr",
	"en",
	"it",
	"sp",
])
const bilboBaggin = new Book("Tolkien", "The Hobbit", 200)

// bilboBaggin.read(25)
// bilboBaggin.read(15)
// harryPotter.read(5)
// console.log(harryPotter)

const myBooks = [
	bilboBaggin,
	harryPotter,
	new Book(`Asterix et l'Iris blanc`, "Uderzo", 215),
]
// console.log(myBooks)

class Human {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	say(message) {
		console.log(`${this.name} says: "${message}"`)
	}
}

// const samara = new Human("Samara")

// samara.say("Hi!")

class Student extends Human {
	constructor(name, age, subject) {
		super(name, age)
		// this.name = name
		this.subject = subject
		this.skill = Math.floor(Math.random() * 10)
		console.log(`${this.name} created with ${this.skill} skill`)
	}

	train() {
		const increaseAmount = Math.floor(Math.random() * 5)
		this.skill += increaseAmount
		console.log(increaseAmount)
		if (increaseAmount === 0) {
			this.say("Oops, failed my training!")
			this.train()
		} else {
			this.say(`My skill level is now: ${this.skill}! 💪`)
		}
	}
}

class Teacher extends Human {
	constructor(name, age) {
		super(name, age)
	}
	say(message) {
		super.say(message)
		console.log(`I'm a teacher btw.`)
	}
	yell(message) {
		super.say(message.toUpperCase())
	}
	grade(student, requiredSkill) {
		while (student.skill < requiredSkill) {
			student.train()
		}
		this.yell(`${student.name} just passed the test!`)

		// 	if (student.skill < 50) {
		// 		student.train()
		// 	} else {
		// 	}
		// }
	}
}
const michael = new Student("Michaël", 32, "Web dev")
michael.say("Hi!")
console.log(michael.train())
console.log(michael.train())

const florian = new Teacher("Florian", 33)

florian.say("hello class!")
florian.yell("hello class!")
console.log(`========GRADING STARTED==========`)
// florian.grade(michael)

class ClassRoom {
	constructor() {
		this.teacher = null
		this.students = []
	}
	addStudent(student) {
		this.students.push(student)
	}
	addTeacher(teacher) {
		this.teacher = teacher
	}
	testTime(requiredSkill) {
		for (const student of this.students) {
			this.teacher.grade(student, requiredSkill)
		}
		this.teacher.yell("loop done!")
	}
	newSubject(subject) {
		for (const student of this.students) {
			student.skill = 0
			student.train()
		}
		this.teacher.say("New subject is " + subject)
	}
}

const students = [
	michael,
	new Student("Evan", 28, "web dev"),
	new Student("Samara", 28, "web dev"),
	new Student("María", 28, "web dev"),
	new Student("Julien", 28, "web dev"),
]

const myClassroom = new ClassRoom()

for (const student of students) {
	myClassroom.addStudent(student)
}
myClassroom.addTeacher(florian)

myClassroom.testTime(30)
myClassroom.newSubject("CSS")
myClassroom.testTime(25)
myClassroom.newSubject("Higher order Functions")
myClassroom.testTime(100)
