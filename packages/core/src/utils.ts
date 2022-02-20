export function joinRegExps(
  regexps: RegExp[],
  flags?: Parameters<RegExpConstructor>[1],
): RegExp {
  return new RegExp(regexps.map((regexp) => regexp.source).join(''), flags);
}
