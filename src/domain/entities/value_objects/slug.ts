// -- TYPES

export class Slug
{
    // -- PROPERTIES

    public value : string;

    // -- CONSTRUCTORS

    constructor(
        value : string
    )
    {
        this.value = value;
    }

    // -- OPERATIONS

    /**
     * Receives a string and creates a slug from it.
     *
     * Example: "An example title" => "an-example-title"
     *
     * @param text { string }
     */

    static createFromText(
        text : string
        )
    {
        let slugText = text.normalize( 'NFD' )
            .toLowerCase()
            .trim()
            .replace( /[\u0300-\u036f]/g, '' )
            .replace( /[^a-z0-9\s-]/g, '' )
            .replace( /\s+/g, '-' )
            .replace( /-+/g, '-' );

        return new Slug( slugText );
    }
}