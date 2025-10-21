
export function sortByAttribute<T>(
    items: T[],
    key: keyof T,
    ascending: boolean = true
): T[] {
    return items.sort((a, b) => {
        const valA = a[key];
        const valB = b[key];

        if (valA < valB) return ascending ? -1 : 1;
        if (valA > valB) return ascending ? 1 : -1;
        return 0;
    });
}

