//Reference Video Link :- https://www.youtube.com/watch?v=PesxK6-kG2A

function Employee(name,age,department){
    this.name = name;
    this.age = age;
    this.department = department
}

let employee = [
    new Employee("John",22,"Core"),
    new Employee("Martin",21,"DevOps"),
    new Employee("Johson",22,"Core"),
    new Employee("Jim",27,"Admin"),
    new Employee("John",32,"Admin"),
];

function filter(emps,fn)
{
    let results = [];
    for(let i = 0;i<emps.length;i++){
        if(fn(emps[i])){
            results.push(emps[i]);
        }
    }
    return results;
}

const ageFilter = (emp)=>{
    return emp.age == 27
}

const deptFilter = (emp)=>{
    return emp.department == "Admin"
}

console.log(filter(employee,ageFilter));
console.log(filter(employee,deptFilter));
