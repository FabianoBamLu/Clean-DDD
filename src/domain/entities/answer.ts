// -- INTERFACES

interface AnswerProps
{
    authorId : string;
    content : string;
    questionId : string;
}

// -- TYPES

export class Answer
{
    // -- PROPERTIES

    public id ?: string;
    public content : string;
    public authorId : string;
    public questionId : string;

    // -- CONSTRUCTORS

    constructor(
        props : AnswerProps,
        id ?: string
        )
    {
        this.authorId = props.authorId;
        this.content = props.content;
        this.id = id ?? crypto.randomUUID();
        this.questionId = props.questionId;
    }
}