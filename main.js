/**
 * - Khai báo biến let và const
 * - So sánh let, const và var
 *  + Var: có cơ chế hoisting, scope là function scope
 *  + let: không có hoisting, scope là block scope
 *  + const: bắt buộc phải gán giá trị khi khai báo, không có hoisting, scope là block scope
 * - Trường hợp sử dụng:
 * + var: khi browser không hỗ trợ let, const (IE)
 * + let: khi cần re-assign giá trị
 * + const: khi không cần re-assign giá trị
 */

// var 
//được đẩy lên đầu => có thể gọi trước khai báo, nằm trong object global executing (window)
// Phạm vi hoạt động trên toàn bộ scope
// console.log(fullName);

// var fullName = 'Le Hoang Loi'; 
// console.log(fullName);

// console.log(window.fullName);

// function showErrWithVar () {
//     var isErr = true;
//     var err = '';

//     if (isErr) {
//         var err = 'Something when wrong'
//         console.log(err);
//     }

//     console.log(err);
// }


// showErrWithVar()


// let 
// console.log(age);
// let age = 18;
// console.log(age);
// console.log(window.age);

// function showErrWithLet () {
//     let isErr = true;
//     let err = '';

//     if (isErr) {
//         let err = 'Something when wrong'
//         console.log(err);
//     }

//     console.log(err);
// }


// showErrWithLet()


// const



// function showErrWithConst () {
//     const isErr = true;
//     const err = '';

//     if (isErr) {
//         const err = 'Something when wrong'
//         console.log(err);
//     }

//     console.log(err);
// }


// showErrWithConst()



/**
 * Function 
 * -Arrow function:
 *  + Không định nghĩa bối cảnh thực thi (this) của riêng nó 
 *  + Không quan tâm nó được thực thi trong ngữ cảnh nào => this của arrow func = gtri của outer function
 *  + Nếu arrow func không có outer func => this của nó bằng global object (window)
 *  + Không dùng arrow function để làm constructor func và làm method của object
 * - So sánh với declaration vs expression (normal) vs arrow function (cú pháp và con trỏ this)
 */

/**
 * this:
 * TH1: this nằm trong 1 func bình thường => this là object window 
 * TH2: this nằm trong object => this là chính cái object
 * TH3: this nằm trong constructor => this là object được tạo ra từ constructor
 * TH4: this nằm trong event => this chính là Element thực hiện sự kiện
 */
// Expression function 

// const calcAgeNormal = function (birthYear) {
//     console.log(this);
//     return 2021  - birthYear;

// }

// const calcAgeArrow = (birthYear) => {
//     console.log(this);
//     console.log(2021 - birthYear);
// }
// const calcAgeArrowShort = (birthYear) => console.log(2021 - birthYear);


// const calcAgeArrowOneParam = birthYear => 2021 - birthYear;
// calcAgeArrow(2000)
// calcAgeNormal()

// var person = {
//     a() {
//         console.log(this);
//     }
// }

// person.a()


// const Student = () => {

// }

// var loi = new Student();


// const student = {
//     name: 'Loi',
//     birthYear: 1994,

//     calcAgeNormal() {
//         console.log(this);
//         console.log(2021 - this.birthYear);
//         // const checkAgeNomal = function() {            
//         //     if( 2021 - this.birthYear >= 18) {
//         //         console.log(this);
//         //         console.log('You are old enough');
//         //     }else {
//         //         console.log('You are not old enough');
//         //     }
//         // }.bind(student);

//         // checkAgeNomal()

//         checkAgeNomal = () => {            
//             if( 2021 - this.birthYear >= 18) {
//                 console.log(this);
//                 console.log('You are old enough');
//             }else {
//                 console.log('You are not old enough');
//             }
//         };

//         checkAgeNomal()
//     },

    
    //Không dùng arrow func làm phương thức bủa obj
    // calcAgeArrow: () => {
    //     console.log(this);
    //     console.log(2021 - this.birthYear);
    // }

// }

// student.calcAgeNormal()



/**
 * Defaul parameter 
 */ 

// const windowDefaultParams = (typeOfUser) => {
//     if (typeOfUser === 'user') {
//         console.log('Redirect use page');
//     } else {
//         console.log('Redirect admin page');
//     }
// }

// windowDefaultParams('user');


// const withDefaultParams = (typeOfUser = 'user') => {
//     if (typeOfUser === 'user') {
//         console.log('Redirect use page');
//     } else {
//         console.log('Redirect admin page');
//     }
// }

// withDefaultParams('admin')


/**
 * Destructuring
 * Destructuring array
 * Destructuring object 
 * 
 */

// With Array

// const students = ['Loi', 'Ha', 'Tung']

// // without destructuring 

// // const loi = students[0];
// // const tung = students[2];

// // console.log(loi, tung);


// // with destructuring

// const [loi, , tung] = students;
// console.log(loi, tung);


// const student1 = {
//     fullName: 'Loi',
//     age: 27,
//     class: 'BC12',
// }

// console.log(student1.fullName);
// console.log(student1.age);
// console.log(student1.class);

// const {fullName, class:className} = student1;
// console.log(student1);
// console.log(fullName, className);


/**
 * Enhanced object Literals Shorthand syntax
 */

// const age = 27;

// const person = {
//     fullName: 'Le Hoang Loi',
//     age,

//     calcAge() {
//         return 2021 - this.age;
//     },

    
// }

// console.log(person);

/**
 * Spread operators 
 *  - Copy 1 array
 *  - Copy 1 object
 *  - Tham trị và tham chiếu trong js
 *  - Merge arr
 *  - Thêm phần tử vào mảng 
 *  - Sử dụng arr như là danh sách các tham số của func
 */

// Tham trị là các loại giá trị khác => mỗi khi tạo ra 1 biến => tạo ra 1 vùng trên bộ nhớ
// // Tham chiếu (Array, Oject) => biến mới tham chiếu tới giá trị cữ => thay đổi thì thay đổi luôn giá trị cũ
// let num1 = [1, 2, 3]
// let num2 = num1;

// num2.push(4);

// console.log(num1);
// console.log(num2);



// const person = ['Loi', 'Tung', 'Ha'];

// console.log(person[0],person[1], person[2]);

// console.log(...person);

// // coppy arr

// personCoppy = [...person]
// console.log(personCoppy);


// Concatenation Aray

// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];

// let num3 = [...num1,...num2]
// console.log(num3);


// let obj1 = {
//     a : 1,
//     b : 2,
// }

// let obj2 = {
//     c : 3,
//     d : 4,
// }

// let obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const users = ['Loi', 'Tung', 'Ha', 'Men'];

// const showUsers = (user1, user2, user3) => console.log(user1, user2, user3);
// showUsers(...users)

/**
 * Rest parameter
 */

// const sum = (num1, num2, num3) => console.log (num1 + num2 + num3)


// function sum(parameter) {

// }

// sum(Augment)


/**
 * Module 
 *  - import
 *  - export
 */

// import { setLocalStorage, getLocalStorage } from "./utils.js";

// setLocalStorage();


/**
 * Class: bản chất vẫn là 1 func
 */

// expression 
// const Person = class {}

// Declaration 
class Person {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    calcAge () {
        return 2021 - this.birthYear;
    }
}

const loi = new Person('le', 'loi', 1994)
console.log(loi);