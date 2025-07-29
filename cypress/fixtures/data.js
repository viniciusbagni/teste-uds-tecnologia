export function formatDateToISO(date) {
    return date.toISOString().split('T')[0]
}