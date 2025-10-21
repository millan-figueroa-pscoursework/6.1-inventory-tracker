
export function sortByAttribute<T>(items: T[], key: keyof T, ascending = true): T[] {
    return items.sort((a, b) => {
        if (a[key] > b[key]) return ascending ? 1 : -1;
        if (a[key] < b[key]) return ascending ? -1 : 1;
        return 0;
    });
}


