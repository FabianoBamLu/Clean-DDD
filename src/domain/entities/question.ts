// -- INTERFACES

interface QuestionProps
{
    authorId : string;
    content : string;
    slug : string;
    title : string;
}

// -- TYPES

export class Question
{
    // -- PROPERTIES
    
    public authorId : string;
    public content : string;
    public id : string;
    public slug : string;
    public title : string;

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
        this.slug = props.slug;
    }

    // -- OPERATIONS
}