const faker = require('faker');
const fs = require('fs');

function generateData(){
    let students = []
    let books = []
    let issuedbooks = []
    for(let id=1; id<=20;id++){
       
       
        students.push({
            "id":id,
            "roll_no":faker.datatype.number(),
            "first_name":faker.name.firstName(),
            "last_name":faker.name.lastName(),
            "Class":faker.datatype.string(),
            "division":faker.git.branch(),
            "department":faker.commerce.department,
            "dues":faker.commerce.price(),
            "issued_books":0
        });
    }
    for(let id=1; id<=15;id++){
       
        let issued_copies = faker.datatype.number()
        let availble_copies = faker.datatype.number()

        books.push({
            "id":id,
            "book_id":faker.datatype.number(),
            "book_name":faker.system.fileName(),
            "book_edition":faker.date.past(),
            "book_department":faker.commerce.department(),
            "available_copies":availble_copies,
            "issued_copies":issued_copies,
            "total_books":availble_copies+issued_copies,
           
        });
    }
    return {
        "students":students,
        "books":books,
        "issuedbooks":issuedbooks
    }
}

let dataObj = generateData();

fs.writeFileSync('data.json',JSON.stringify(dataObj,null,'\t'));