class Student{
    private name: string;
    private progress: number;
    constructor(name: string, progress: number){
        this.name = name;
        this.progress = progress;
    }
    getName(): string{
        return this.name;
    }
    getProgress(): number{
        return this.progress;
    }
    setName(name: string): void{
        this.name = name;
    }
    setProgress(progress: number): void{
        this.progress = progress;
    }
}
function studentProgress(student: Student): string{
    return `Name: ${student.getName()}, Progress: ${student.getProgress()}`;
}

const student1 = new Student("Ramez", 80);
console.log(studentProgress(student1));