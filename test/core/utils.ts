import { joinRegExps } from '@mijelangelo/core/src/utils';
import { test } from 'uvu';
import { equal } from 'uvu/assert';

test('join RegExps', () => {
  equal(joinRegExps([/\w/, /\s/]), /\w\s/);
});

test('join RegExps with flags', () => {
  equal(joinRegExps([/\w/, /\s/], 'g'), /\w\s/g);
});

test.run();
