/**
 * Creates a list of regular expressions from the provided patterns.
 * @param patterns A list of strings or regular expressions.
 * @returns A list of regular expressions.
 */
export function createMatchers(patterns: (string | RegExp)[]): RegExp[] {
  return patterns.map((p) => (typeof p === "string" ? new RegExp(p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")) : p));
}

/**
 * Checks if the given ID is excluded based on the provided matchers.
 * @param id The ID to check.
 * @param matchers The list of matchers to use.
 * @returns True if the ID is excluded, false otherwise.
 */
export function isExcluded(id: string, matchers: RegExp[]): boolean {
  const normalizedId = id.split("?")[0].replace(/\\/g, "/");

  return matchers.some((regex) => regex.test(normalizedId));
}
