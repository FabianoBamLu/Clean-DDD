// -- TYPES

export class UniqueEntityID
{
    // -- PROPERTIES

    private value: string;

    // -- CONSTRUCTORS

    constructor(
        value ?: string
        )
    {
        this.value = value ?? crypto.randomUUID();
    }

    // -- OPERATIONS

    toString(
        )
    {
        return this.value;
    }

    // ~~

    toValue(
        )
    {
        return this.value;
    }
}