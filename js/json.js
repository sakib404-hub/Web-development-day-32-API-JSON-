// console.log("Hellow There");
/**
 * Json file are written in pairs like object but there is one catch the keys will be in double
 * coutation also
 * we have learned two new json method ----> Stringify ---> converting object to json file
 * json.parse(object) ---> converting the json file into a full funded object
 */
const person = {
  name: "Selim",
  fruit: "Dalim",
  dish: "Halim",
  friends: ["Kalim", "Alim", "Lamim"],
  isRich: false,
  money: 3400,
};

console.log(person);
console.log(typeof person);

const personJson = JSON.stringify(person);
console.log(personJson);
console.log("Type of the personJson : ", typeof personJson);

const perseJson = JSON.parse(personJson);
console.log(perseJson);
console.log(typeof perseJson);

const students = [
  { name: "Alim", marks: 56, passed: true },
  { name: "Calim", marks: 66, passed: true },
  { name: "Dalim", marks: 23, passed: false },
  { name: "Selim", marks: 66, passed: true },
  { name: "Halim", marks: 86, passed: true },
];

const personJson2 = JSON.stringify(students);
console.log(personJson2);

const personiFy = JSON.parse(personJson2);
console.log(personiFy);
