const parser = new DOMParser();

const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;

const xmlDOM = parser.parseFromString(xmlString,"text/xml");

const list = xmlDOM.querySelector("list");

const students = Array.from(xmlDOM.querySelectorAll("student")).map(student => {
    const name = student.querySelector("name");
    const firstName = name.querySelector("first").textContent;
    const secondName = name.querySelector("second").textContent;
    const lang = name.getAttribute("lang");
    const age = Number(student.querySelector("age").textContent);
    const prof = student.querySelector("prof").textContent;
    return { name: `${firstName} ${secondName}`, age, prof, lang };
});

console.log(students)