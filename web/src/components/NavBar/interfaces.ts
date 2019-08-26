// Child link object
export interface Link {
    href: string;
    name: string | JSX.Element;
    feature?: string;
}

export type ChildLink = Link & {
    icon: string;
};

// Outer link
export type ParentLink = Link & {
    children: ChildLink[];
};
