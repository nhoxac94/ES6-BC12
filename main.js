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
 * TH3: this nằm trong event => this chính là Element thực hiện sự kiện
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


const student = {
    name: 'Loi',
    birthYear: 1994,

    calcAgeNormal() {
        console.log(this);
        console.log(2021 - this.birthYear);
        // const checkAgeNomal = function() {            
        //     if( 2021 - this.birthYear >= 18) {
        //         console.log(this);
        //         console.log('You are old enough');
        //     }else {
        //         console.log('You are not old enough');
        //     }
        // }.bind(student);

        // checkAgeNomal()

        checkAgeNomal = () => {            
            if( 2021 - this.birthYear >= 18) {
                console.log(this);
                console.log('You are old enough');
            }else {
                console.log('You are not old enough');
            }
        };

        checkAgeNomal()
    },

    
    //Không dùng arrow func làm phương thức bủa obj
    // calcAgeArrow: () => {
    //     console.log(this);
    //     console.log(2021 - this.birthYear);
    // }

}

student.calcAgeNormal()



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


const withDefaultParams = (typeOfUser = 'user') => {
    if (typeOfUser === 'user') {
        console.log('Redirect use page');
    } else {
        console.log('Redirect admin page');
    }
}

withDefaultParams('admin')


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


const student1 = {
    fullName: 'Loi',
    age: 27,
    class: 'BC12',
}

// console.log(student1.fullName);
// console.log(student1.age);
// console.log(student1.class);

const {fullName, class:className} = student1;
console.log(student1);
console.log(fullName, className);


/**
 * Enhanced object Literals Shorthand syntax
 */

const age = 27;

const person = {
    fullName: 'Le Hoang Loi',
    age,

    calcAge() {
        return 2021 - this.age;
    },

    
}

console.log(person);