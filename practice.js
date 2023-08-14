// function concatStrings(...strings) {
//     return strings.join('');
//   }

//   console.log(concatStrings("my", " ", "World")); 
// function sumArray (params) {
//     let sum = 0 ;
//    for ( num of params) {
//        sum += num
//    }
//    return sum
// }
// console.log(sumArray([1, 2, 3]))
// console.log(sumArray([5, 10, 2, 3]));

// function createPerson(name,age,occupation){
//     const person = {
//         name: name,
//         age: age,
//         occupation: occupation
//       };
//       return person
// }

// const person1 = createPerson("sumon", 22, "developer");
// console.log(person1);

// const getEvenNumbers = (numbers)=> {
//     return numbers.filter(number => number % 2 === 0);
//   };
  
//   const numbers = [12, 22, 31, 41, 50, 16, 77, 58, 19, 99];
//   const evenNumbers = getEvenNumbers(numbers)
// ;
//   console.log(evenNumbers);

// function getFirstAndLast(nums) {
//     const [first, ...rest] = nums.reverse();
//     const last = first;
  
//     return {  last , first };
//   }
  
//   // Example for  usage:
//   const nums = [12, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const result = getFirstAndLast(nums);
//   console.log(result); 

// class Rectangle {
//     constructor(width, height) {
//       this.width = width;
//       this.height = height;
//     }
  
//     calculateArea() {
//       return this.width * this.height;
//     }
//   }

//   const rectangle1 = new Rectangle(4, 5);

//   console.log("Area:", rectangle1.calculateArea());


// function getFirstAndLast(numbers)
//  {
//     const [first, ...rest] = numbers;
//     const last = rest.pop();
  
//     return {
//       first,
//       last
//     };
//   }
  
//   // Test the function
//   const numbersArray = [11, 2, 3, 4, 5];
//   const result = getFirstAndLast(numbersArray);
//   console.log(result);


  const hablu= {
    name: bablu,
    age: 30 ,
    work: farmer 

  }

   for (const person in hablu) {
    console.log(person.name)
   }