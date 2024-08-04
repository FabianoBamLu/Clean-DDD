// -- IMPORTS

import { expect, test } from 'vitest';
import { Slug } from './slug';

// -- TESTS

test(
    'It should be able to create a new slug from text',
    () =>
    {
        let slug = Slug.createFromText( 'Slug created by Slug.createFromText method' );

        expect( slug.value ).toEqual( 'slug-created-by-slugcreatefromtext-method' );
    }
    );