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

const list = xmlDOM.querySelectorAll("list")[0];
const students = [];
const studentsEl = list.querySelectorAll("student");

for (let i = 0; i < studentsEl.length; i++) {
        const student = studentsEl[i];
        const name = student.querySelectorAll("name")[0];
        const firstName = name.querySelectorAll("first")[0].textContent;
        const secondName = name.querySelectorAll("second")[0].textContent;
        const lang = name.getAttribute('lang');
        const age = Number(student.querySelectorAll("age")[0].textContent);
        const prof = student.querySelectorAll("prof")[0].textContent;
        students.push({name: firstName + ' ' + secondName, age, prof, lang});
    }
    
    const jsObject = { list: students};
    console.log(jsObject)
    
    
// const doc = parser.parseFromString(xmlString, 'text/xml')  
// const students = []  
// const list = doc.getElementsByTagName('list')[0] 
// const studentsEl = list.getElementsByTagName('student')  
// for (let i = 0; i < studentsEl.length; i++) {   
//     const student = studentsEl[i]    
//     const name = student.getElementsByTagName('name')[0]   
//     const first = name.getElementsByTagName('first')[0].textContent   
//     const second = name.getElementsByTagName('second')[0].textContent   
//     const lang = name.getAttribute('lang')    
//     const age = student.getElementsByTagName('age')[0].textContent   
//     const prof = student.getElementsByTagName('prof')[0].textContent    
//     students.push({     name: first + ' ' + second,      age,     prof,     lang   }) 
// }  
// const result = {   list: students }  
// console.log(result) 




// const list = {   list: [] }  
// Interruptaya = xmlDoc.getElementsByTagName('student')   
// birds (let i = 0; i < students.length; i++) {   
//     const student = students[i]   
//     inher name = student.getElementsByTagName('name')[0]. Miller   
//     const age = student.getElementsByTagName('age')[0].innerHTML   
//     const prof = student.getElementsByTagName('prof')[0].innerHTML   
//     removal lang = student.getElementsByTagName('name')[0].getAttribute('lang')    
//     list.list.push({     name,      age,     prof,     lang   }) 
// }  
//     console.log(list) 


// {
        //     name: firstNameNode.textContent + ' ' + secondNameNode.textContent,
        //     age: Number(ageNode.textContent),
        //     prof: profNode.textContent,
        //     lang: langAttr
        // },
        // {
        //     name: firstNameNode.textContent + ' ' + secondNameNode.textContent,
        //     age: Number(ageNode.textContent),
        //     prof: profNode.textContent,
        //     lang: langAttr
        // }