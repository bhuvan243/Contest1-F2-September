const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  { name: "BHUVAN", age: 24, profession: "developer"}
];

// 1. Print Developers
function printDeveloper() {
  console.log("The developers are: ");
  for (let i=0; i<data.length; i++){
    if (data[i].profession === "developer"){
      console.log(data[i].name);
    }
  }
}

// 2. Add Data
function addData() {
  let name = prompt("Enter the name");
  let age = prompt("Enter the age");
  let profession = prompt("Enter the profession");
  let newData = { name: name, age: age, profession: profession };
  data.push(newData);
  console.log("Data added successfully");
}

// 3. Remove Admins
function removeAdmin() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].profession === "admin") {
         data.pop(data[i].profession);
    }
  } 
  console.log("Admin person is removed successfully")
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: "Barath", age: 24, profession: "admin" },
    { name: "Baskar", age: 24, profession: "developer" },
    ];
    for (let i = 0; i < dummyArray.length; i++) {
      data.push(dummyArray[i])
    }
    console.log("A Dummy Array is added to the Old Array");
}

// 5. Average Age
function averageAge() {
  let totalAge = 0;
  for (let i=0; i<data.length; i++){
    totalAge += data[i].age; 
  }
  let averageAge = totalAge/data.length;
  console.log("The average age is : " + averageAge);
}

// 6. Age Check
function checkAgeAbove25() {
  for (let i=0; i<data.length; i++){
    if (data[i].age > 25){
      console.log("'VERIFIED' - There is a person whose age is above 25");
      return;
    }
  }
  console.log("There is no person who is older than 25");
}

// 7. Unique Professions
function uniqueProfessions() {}

// 8. Sort by Age
function sortByAge() {}

// 9. Update Profession
function updateJohnsProfession() {
  for(let i=0;i<data.length;i++){
    if(data[i].name === "john"){
         data[i].profession = "manager";
         break;
    }
  }
  console.log("John's Profession is updated as 'Manager'")
}

// 10. Profession Count
function getTotalProfessions() {}
