class User{
   private firstName: string;
   private lastName: string;
   private address: string;
   private phone: number;

    constructor(firstName: string, lastName: string, address: string, phone: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getAddress(): string {
        return this.address;
    }

    getPhone(): number {
        return this.phone;
    }
    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }
    setAddress(address: string): void {
        this.address = address;
    }
    setPhone(phone: number): void {
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

user1.firstName="Ramez";