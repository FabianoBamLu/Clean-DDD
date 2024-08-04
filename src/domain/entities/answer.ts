export class Answer
{
    // -- PROPERTIES

    public id ?: string;
    public content : string;

    // -- CONSTRUCTORS

    constructor(
        content : string,
        id ?: string
        )
    {
        this.content = content;
        this.id = id ?? crypto.randomUUID();
    }
}