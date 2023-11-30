/**
 * Toma de un ojeto date y lo lleva a una representacion de string
 * AAAA-MM-DD hh:mm:ss
 *
 * @param {Date|null} date
 * @returns {string|null}
 */
export function dateToString(date) {
    if (date == null) return null

    const dateFormatter = new Intl.DateTimeFormat("es-AR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(date)

    return dateFormatter.replace(",", "")
}
