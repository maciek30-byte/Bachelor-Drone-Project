import React from 'react';

interface GenericListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

export const GenericList = <T,>({ items, renderItem }: GenericListProps<T>) => (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{renderItem(item)}</li>
        ))}
    </ul>
);

