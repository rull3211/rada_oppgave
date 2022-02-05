export interface Page {
    pageId: string,
    popularity: number
    title: string
}

export interface ServerPage{
    pageid: string,
    ns: number,
    title: string,
    index: number,
}

export interface ServerPagesObj{
    [key: string]: ServerPage
}

export type ApiFormat = "json" | "php" | "xml"
