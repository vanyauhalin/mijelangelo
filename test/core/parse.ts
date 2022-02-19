import { Element, parse } from '@mijelangelo/core/src/parse';
import { test } from 'uvu';
import { equal, throws } from 'uvu/assert';

test('if content is empty', () => {
  throws(parse, Error);
});

test('parse simple html element', () => {
  equal(parse('<div></div>'), [
    new Element({
      tag: 'div',
    }),
    new Element({
      tag: 'div',
    }),
  ]);
});

test('parse single html element', () => {
  equal(parse('<div />'), [new Element({
    tag: 'div',
  })]);
});

test.run();
