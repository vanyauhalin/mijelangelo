export function parse(content?: string) {
  if (!content) {
    throw new Error('Content must be a string');
  }

  return content;
}
