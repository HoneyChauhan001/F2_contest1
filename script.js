/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  // let filteredArray = arr.filter((element,idx,list) => {
  //   return element.profession == "developer";
  // })

  // let result = filteredArray.map((element,idx,list) => {
  //   return element.name;
  // })

  // console.log(result);

  arr.map((element,idx,list) => {
    if(element.profession == "developer"){
      console.log(element.name);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element,idx,list) => {
    if(element.profession == "developer"){
      console.log(element.name);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr[3]);
  
}

function removeAdmin() {
  //Write your code here, just console.log
  // for(let i=0; i<arr.length; i++){
  //   if(arr[i].profession == "admin"){
  //     arr.splice(i,1);
  //   }
  // }

  // console.log(arr);

  const filteredArray = arr.filter((element) => {
    return element.profession != "admin";
  })

  console.log(filteredArray);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "rahul", age: "18", profession: "developer" },
    { id: 6, name: "ram", age: "20", profession: "developer" },
    { id: 7, name: "sham", age: "19", profession: "admin" },
  ];

  let concatArray = arr.concat(arr2);

  console.log(concatArray);

}
