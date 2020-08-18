export class Paciente {

    id: string;
    rg: string;
    name: string;
    dateOfBirth: string;
    height: string;
    weight: string;

    // static method (factory)
    static parse(args: any): Paciente {
        return Object.assign(new Paciente(), args);
    }

    toString(): void {
        console.log(`${this.rg} - ${this.nome}`);
    }
}
