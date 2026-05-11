/**
 * Extracts class names from the provided code using the given regular expression.
 * @param code Code to scan for class names
 * @param expression Regular expression to match class names
 * @returns An array of unique class names found in the code
 */
export function extractClasses(code: string, expression: RegExp): string[] {
  const results = new Set<string>();

  const matches = code.match(expression);

  if (matches) {
    matches.forEach((m) => results.add(m));
  }

  return Array.from(results);
}
