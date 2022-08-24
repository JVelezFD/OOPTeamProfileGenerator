//connecting the  js to the index.js and gathering/structing the intern data to display on displayhtml
import Employee from "./employee";

export default class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool = ()=> {
        return this.school;
    };
    getRole = ()=> {
        return "Intern";
    };
}