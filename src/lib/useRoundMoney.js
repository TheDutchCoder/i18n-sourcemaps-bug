/** @deprecated use `format-numbers.ts` instead */
// round money nearest cent
export default function (value = 0) {
  return Math.round((parseFloat(value) + Number.EPSILON) * 100) / 100
}
