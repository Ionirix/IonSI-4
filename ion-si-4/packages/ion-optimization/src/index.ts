export function clamp(value: number, minimum: number, maximum: number): number {
  if (minimum > maximum) {
    throw new RangeError("minimum must not exceed maximum");
  }
  return Math.min(maximum, Math.max(minimum, value));
}