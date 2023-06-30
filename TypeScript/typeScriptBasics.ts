
/* BASIC TYPES */

//Explicit Type
let firstName: string = "Shivam";
console.log(typeof firstName);


//Implicit Type
let startName = "Shivam";
console.log(typeof startName);

/* SPECIAL TYPES */

// type: any
let v: any = true;
v = "string";
console.log(Math.round(5.6));


/* Variable Declarations */
let middleName: string = "Shivam";
const lastName: string = "Soni";


/* INTERFACES */
interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

/* INTERFACES: OPTIONAL PROPERTY */
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
console.log(mySquare);

/* CLASSES */
class Person {
    name: string;
    constructor(name: string) {
        this.name= name;
      }
}
const person = new Person("Shivam");
console.log(person);

/* CLASSES: INHERITANCE */
interface Shape {
    getArea: () => number;
}
class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) { }

    public getArea(): number {
        return this.width * this.height;
    }
}
class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }
}
const mySq = new Square(20);
console.log(mySq.getArea());


/* CLASSES: PUBLIC, PRIVATE, PROTECTED */
class Person1 {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person1 = new Person1("Shivam");

console.log(person1.getName());

/* FUNCTIONS */

let a: number = 5;
let b: number = 6;
function multiply(a: number, b: number) {
    return a * b;
}
console.log(multiply(a, b));

let c: number = 5;
function factorial( c: number) {
    if (c <= 0) {
        return 1;
    } else {
        return (c * factorial(c - 1));
    }
}
console.log(factorial(c));



/* ITERATORS AND GENERATORS */
function* demogenerator(mynum: any) {
    //logic here
    console.log("generator called");
    for (let z = 0; z < mynum.length; z++) {
        yield mynum[z];
    }
}
console.log("Demo to show generator in typescript");
let mydemoarray = [400, 500, 600, 700, 800, 900];
let myiteration = demogenerator(mydemoarray);
let result1 = myiteration.next();
let result2 = myiteration.next();
let result3 = myiteration.next();
let result4 = myiteration.next();
let result5 = myiteration.next();
let result6 = myiteration.next();
console.log("printing result ::: ");
console.log("result one is  ::");
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);