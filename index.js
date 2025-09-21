// Assignment 1: Student Grade Calculator
// 1. Create a student object with scores
let student = {
  name: "Ali",
  math: 92,
  science: 85,
  english: 78
};

// 2. Calculate the average score using arithmetic operators
const average = (student.math + student.science + student.english) / 3;

// 3. Determine the letter grade using if–else
let letterGrade;
if (average >= 90) {
  letterGrade = "A";
} else if (average >= 80) {
  letterGrade = "B";
} else if (average >= 70) {
  letterGrade = "C";
} else if (average >= 60) {
  letterGrade = "D";
} else {
  letterGrade = "F";
}

// 4. Display the result
console.log("Student Name:", student.name);
console.log("Average Score:", average.toFixed(2)); // toFixed(2) rounds to 2 decimals
console.log("Letter Grade:", letterGrade);
