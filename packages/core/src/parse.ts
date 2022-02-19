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

  const rawElements = content.matchAll(/<(?<open>\w+)>|<\/(?<close>\w+)>/g);

  if (rawElements) {
    const elements = [] as Element[];

    [...rawElements].forEach((rawElement) => {
      if (rawElement.groups) {
        const { open, close } = rawElement.groups;
        const tag = open || close;

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
