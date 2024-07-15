export type PhotoDataType = {
    id: string;
    created_at: string;
    description: string;
    urls: {
        small: string
        regular: string,
    };
    links: {
        download: string,
    };
    likes: number;
    user: {
        name: string,
    };
}
