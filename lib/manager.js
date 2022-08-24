//connecting the  js to the index.js and gathering/structing the manager data to display on displayhtml
import Employee from "./employee";

export default class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOffNumber (){
        return this.officeNumber;
    }
    getRole (){
        return "Manager"
    }
}