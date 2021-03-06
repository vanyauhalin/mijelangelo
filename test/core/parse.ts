import { Delimiter } from '@mijelangelo/core/src/delimiter';
import { Element } from '@mijelangelo/core/src/element';
import { parse } from '@mijelangelo/core/src/parse';
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

test('parse simple html element with attributes', () => {
  equal(parse('<div style="color: red"></div>'), [
    new Element({
      tag: 'div',
    }),
    new Element({
      tag: 'div',
    }),
  ]);
});

test('parse single html element', () => {
  equal(parse('<div />'), [
    new Element({
      tag: 'div',
    }),
  ]);
});

test('parse simple web-component', () => {
  equal(parse('<web-component></web-component>'), [
    new Element({
      tag: 'web-component',
    }),
    new Element({
      tag: 'web-component',
    }),
  ]);
});

test('parse simple web-component with attributes', () => {
  equal(parse('<web-component style="color: red"></web-component>'), [
    new Element({
      tag: 'web-component',
    }),
    new Element({
      tag: 'web-component',
    }),
  ]);
});

test('parse single web-component', () => {
  equal(parse('<web-component />'), [
    new Element({
      tag: 'web-component',
    }),
  ]);
});

test('parse simple statement delimiter', () => {
  equal(parse('{% ... %}'), [
    new Delimiter({
      type: 'statement',
    }),
  ]);
});

test('parse simple expression delimiter', () => {
  equal(parse('{{ ... }}'), [
    new Delimiter({
      type: 'expression',
    }),
  ]);
});

test('parse simple comment delimiter', () => {
  equal(parse('{# ... #}'), [
    new Delimiter({
      type: 'comment',
    }),
  ]);
});

test('parse simple html element with simple statement delimiter', () => {
  equal(parse('<div>{% ... %}</div>'), [
    new Element({
      tag: 'div',
    }),
    new Delimiter({
      type: 'statement',
    }),
    new Element({
      tag: 'div',
    }),
  ]);
});

test.run();
