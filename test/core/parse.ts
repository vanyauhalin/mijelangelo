import { parse } from '@mijelangelo/core/src/parse';
import { test } from 'uvu';
import { throws } from 'uvu/assert';

test('if content is empty', () => {
  throws(parse, Error);
});

test.run();
