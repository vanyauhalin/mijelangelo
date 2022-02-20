export class Element {
  tag: string;

  constructor({ tag }: { tag: string }) {
    this.tag = tag;
  }
}

export function parse(content?: string) {
  if (!content) {
    throw new Error('Content must be a string');
  }

  const regexp = /<\/?(?<tag>\w+)\s?\/?>/g;
  const rawElements = content.matchAll(regexp);

  if (rawElements) {
    const elements = [] as Element[];

    [...rawElements].forEach((rawElement) => {
      if (rawElement.groups) {
        const { tag } = rawElement.groups;

        if (tag) {
          elements.push(new Element({
            tag,
          }));
        }
      }
    });

    return elements;
  }

  throw new Error();
}
