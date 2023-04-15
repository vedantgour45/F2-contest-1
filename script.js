/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr.filter((arr) => arr.profession === "developer");
  const developerNames = developers.map((developer) => developer.name);
  console.log("Developers by Map Function: ", developerNames);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const developers = [];
  arr.forEach((arr) => {
    if (arr.profession === "developer") {
      developers.push(arr.name);
    }
  });
  console.log("Developers by forEach Function: ", developers);
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log("Updated array: ", arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filtered = arr.filter((arr) => arr.profession !== "admin");
  console.log("Admin removed! Updated array: ", filtered);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
    { id: 5, name: "vedant", age: "22", profession: "developer" },
    { id: 6, name: "shivani", age: "21", profession: "manager" },
    { id: 7, name: "amit", age: "25", profession: "sales" },
  ];
  const allEmployees = arr.concat(newArr);
  console.log("Concatenated All employees array: ", allEmployees);
}
