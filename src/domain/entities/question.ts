// -- INTERFACES

interface QuestionProps
{
    authorId : string;
    content : string;
    title : string;
}

// -- TYPES

export class Question
{
    // -- PROPERTIES
    
    public id : string;
    public title : string;
    public content : string;
    public authorId : string;

    // -- CONSTRUCTORS

    constructor(
        props : QuestionProps,
        id ?: string
    )
    {
        this.authorId = props.authorId;
        this.content = props.content;
        this.id = id ?? crypto.randomUUID();
        this.title = props.title;
    }

    // -- OPERATIONS
}