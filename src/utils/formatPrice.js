// Formats a number as an Indian-Rupee price with locale grouping, e.g. ₹2,999.
export default function formatPrice(amount) {
  const value = Number(amount)
  return `₹${Number.isFinite(value) ? value.toLocaleString("en-IN") : 0}`
}
