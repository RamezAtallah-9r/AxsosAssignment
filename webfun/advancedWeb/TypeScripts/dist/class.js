"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    firstName;
    lastName;
    address;
    phone;
    constructor(firstName, lastName, address, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getAddress() {
        return this.address;
    }
    getPhone() {
        return this.phone;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setAddress(address) {
        this.address = address;
    }
    setPhone(phone) {
        this.phone = phone;
    }
}
const user1 = new User("Ramez", "Atallah", "123 Main St", 1234567890);
console.log("===First Values===");
console.log(user1.getFirstName());
console.log(user1.getLastName());
console.log(user1.getAddress());
console.log(user1.getPhone());
console.log("===second Values===");
user1.setFirstName("Ramierz");
user1.setLastName("Zetawi");
user1.setAddress("123 Ersla St");
user1.setPhone(569696895);
console.log(user1.getFirstName());
console.log(user1.getLastName());
console.log(user1.getAddress());
console.log(user1.getPhone());
//# sourceMappingURL=class.js.map