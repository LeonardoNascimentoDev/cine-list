export function dateFilter(value, type) {
  if (value) {
    const date = new Date(value);

    if (type === "long") {
      return date.toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } else if (type === "short") {
      return date.toLocaleDateString("pt-BR");
    }
  }
}