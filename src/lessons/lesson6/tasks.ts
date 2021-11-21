// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

/*interface IStudent {
    name: string;
    surname: string;
    groupNumber: number;
    progress: number[];
    averageMark: number
}

class Student implements IStudent {
    averageMark: number

    constructor(public name: string, public surname: string, public groupNumber: number, public progress: number[],) {
        this.name = name;
        this.surname = surname;
        this.groupNumber = groupNumber;
        this.progress = progress;
        this.averageMark = this.progress.reduce((sum, mark) => sum + mark) / this.progress.length;
    }

    sortStudents(arr: IStudent[]) {
        let sortArr = arr.sort((s1, s2) => {
            return s2.averageMark - s1.averageMark
        })
        return sortArr
    }

    static successfulStudent(arr: IStudent[]) {
        let ArraySuccessfulStudents: IStudent[] = []
        arr.forEach((item) => {
            if (item.averageMark >= 4) ArraySuccessfulStudents.push(item)
        })
        return ArraySuccessfulStudents.forEach((i) => {
            console.log(i.name + "'s avarage mark - " + i.averageMark)
        })
    }
}

let students = [];
students.push(new Student("Andrew", "Smith", 1, [4, 4, 4, 4, 4]))
students.push(new Student("Alex", "Bowl", 2, [5, 5, 5, 5, 5]))
students.push(new Student("Michael", "Halmet", 3, [3, 3, 3, 3, 3]))
students.push(new Student("Jane", "Skoufield", 4, [3, 4, 3, 4, 3]))
students.push(new Student("Frenck", "Green", 5, [2, 2, 5, 4, 5]))

console.log(students)
console.log(Student.prototype.sortStudents(students))
Student.successfulStudent(students)*/

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

/*class Test {
    parametr1: any;
    parametr2: any;

    constructor(a: number, b: string) {
        this.parametr1 = a
        this.parametr2 = b
    }
}

class Test2 extends Test {
    parametr3: any
    constructor(a: number, b: string, c: number) {
        super(a, b);
        this.parametr3 = [this.parametr1, this.parametr2, c]
    }
    get innerParams() {
        return [this.parametr1, this.parametr2, this.parametr3]
    }
    set innerParams(value) {
        this.parametr1 = value + this.parametr1
    }
}

let examp = new Test(100, "Yo")
let examp2 = new Test2(100, "Yo", 50000)


console.log(examp)
console.log(examp2)
console.log(examp2.innerParams)*/


export default () => {
};


