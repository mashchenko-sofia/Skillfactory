"strict mode"

const map = new Map([
    ["string", "qwerty"],
    ["number", 9],
    ["boolean", true]
  ]);
  
  map.forEach((value, key) => {
    let res = `Ключ - ${value}` + ', ' + `значение - ${key}`;
    console.log(res);
  })
  