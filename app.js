let elList = document.getElementById('studForm')
let elform = document.getElementById('devForm')

let nameOfStudents = []

let student = function(name, nameOfSchool, progLang){
  this.name = name
  this.nameOfSchool = nameOfSchool
  this.progLang = progLang
}

// if(localStorage.parsenameOfStudents){
//   let studentStorage = localStorage.getItem('parsenameOfStudents')
//   nameOfStudents =JSON.parse(studentStorage)
// } else {}

let elHeader = document.createElement('h4')
elList.appendChild(elHeader)
let elTh = document.createElement('h4')
elHeader.appendChild(elTh)
elTh.innerText = 'Name of Student'
let elThschool = document.createElement('h4')
elHeader.appendChild(elThschool)
elThschool.innerText = 'Name of School'
let elThprogLang = document.createElement('h4')
elHeader.appendChild(elThprogLang)
elThprogLang.innerText = 'Programing Language'

let student1 = new student('simon', 'code-partners', 'javascript')
let student2 = new student('Hannah', 'code-partners', 'java')
let student3 = new student('kesete', 'code-partners', 'javascript')

// creating LocalStorage 


//nameOfStudents.push(student1,student2,student3)  

  student.prototype.newNameOfStudent = function(){
    for(let i=0; i<nameOfStudents.length; i++){
      let listName = document.createElement('ul')
      elTh.appendChild(listName)
      let listschool = document.createElement('ul')
      elThschool.appendChild(listschool)
      let listLang = document.createElement('ul')
      elThprogLang.appendChild(listLang)

      listName.innerText=nameOfStudents[i].name
      listschool.innerText = nameOfStudents[i].nameOfSchool
      listLang.innerText = nameOfStudents[i].progLang
    }
  }

  for (let i=0; i<nameOfStudents.length; i++){
    nameOfStudents[i].newNameOfStudent()
  }

//Accessing our inputs on our form in html via dot.notation
let elstudent = elform.name
let elschool = elform.nameOfSchool
let ellanguage = elform.progLang

// Event Listner to our constructor function
elform.addEventListener('submit', function(event){
  event.preventDefault()
  localStorage.setItem('parsenameOfStudents', JSON.stringify(nameOfStudents)) 
//eltable.removeChild(eltable.lastChild)
  let newStudent = new student(elstudent.value,elschool.value, ellanguage.value)   
  nameOfStudents.push(newStudent)
  newStudent.newNameOfStudent()

})
