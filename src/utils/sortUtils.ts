
export function sortByAttribute<T>(arr: T[], key: keyof T, ascending: boolean = true): T[] {
    return [...arr].sort((a, b) => {
        const valA = a[key];
        const valB = b[key];

        // Handle string and number sorting
        if (typeof valA === "string" && typeof valB === "string") {
            return ascending
                ? valA.localeCompare(valB)
                : valB.localeCompare(valA);
        }

        if (typeof valA === "number" && typeof valB === "number") {
            return ascending ? valA - valB : valB - valA;
        }

        // Fallback for mixed or undefined types
        return 0;
    });
}