export class Student
{
    // -- PROPERTIES

    public id : string;
    public name : string;

    // -- CONSTRUCTORS

    constructor(
        name : string,
        id ?: string
        )
    {
        this.name = name;
        this.id = id ?? crypto.randomUUID();
    }

    // -- OPERATIONS
}