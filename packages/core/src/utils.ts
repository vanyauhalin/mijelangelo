export function joinRegExps(
  regexps: RegExp[],
  flags?: Parameters<RegExpConstructor>[1],
) {
  return new RegExp(regexps.map((regexp) => regexp.source).join(''), flags);
}
