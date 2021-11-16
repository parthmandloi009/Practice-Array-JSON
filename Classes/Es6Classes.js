//Es6 classes in javascript

class Consultant {
    name = "";

    setName(name){
        this.name = name
    }

    sayHello(){
        console.log(this.name);
    }
}

myConsultant = new Consultant();
myConsultant.setName("Ram");
myConsultant.sayHello();


class Course{
    courseName = " ";

    getAllCourses(){
        //this.courseName = "MEAN Stack";
        console.log(this.courseName);
    }

    setCourses(){
      this.courseName = "Hello "+"MERN Stack...";
      this.getAllCourses();

    }
}


var c1 = new Course();
c1.setCourses();