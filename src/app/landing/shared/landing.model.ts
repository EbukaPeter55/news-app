interface Source {
    id: string | number;
    name: string;
}

export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
}

export interface ArticleResponse {
    status: string;
    totalResults: number;
    articles: Article
}
