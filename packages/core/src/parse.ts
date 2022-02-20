import { Delimiter } from './delimiter';
import { Element } from './element';
import { joinRegExps } from './utils';

export function parse(content?: string) {
  if (!content) {
    throw new Error('Content must be a string');
  }

  const tags = /(<\/?(?<tag>[\w-]+)([^.>]+)?\/?>)/;
  const or = /|/;
  const delimiters = /(?<delimiter>({%.+%})|({{.+}})|({#.+#}))/;
  const matchedTokens = content
    .matchAll(joinRegExps([tags, or, delimiters], 'g'));

  if (matchedTokens) {
    const parsedTokens = [] as (Element | Delimiter)[];

    [...matchedTokens].forEach((matchedToken) => {
      if (matchedToken.groups) {
        const { delimiter, tag } = matchedToken.groups;

        if (tag) {
          parsedTokens.push(new Element({
            tag,
          }));
        }

        if (delimiter) {
          const open = delimiter.at(1);
          const close = delimiter.at(-2);

          if (open === '%' && close === '%') {
            parsedTokens.push(new Delimiter({
              type: 'statement',
            }));
          }

          if (open === '{' && close === '}') {
            parsedTokens.push(new Delimiter({
              type: 'expression',
            }));
          }

          if (open === '#' && close === '#') {
            parsedTokens.push(new Delimiter({
              type: 'comment',
            }));
          }
        }
      }
    });

    return parsedTokens;
  }

  throw new Error();
}
