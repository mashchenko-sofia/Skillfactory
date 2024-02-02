const jsonString = `
{
  "list": [
    {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
    },
    {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
    }
  ]
}
`

const data = JSON.parse(jsonString);

const list = data.list;
const people = [];

for (let i = 0; i < list.length; i++) {
  const name = list[i].name;
  const age = Number(list[i].age);
  const prof = list[i].prof;
  people.push({name, age, prof});
}
const jsObject = {list: people}

console.log(jsObject)