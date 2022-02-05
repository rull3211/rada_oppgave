import { Page, ServerPage, ServerPagesObj } from "./types"

export const mapServerPage = (page: ServerPage): Page => {
    return {
        title: page.title,
        popularity: page.index, // med antakelsen om at index er populariteten på ordet 
        pageId: page.pageid,
    }
}

export const mapServerPagesToList = (pages: ServerPagesObj): Page[] => {
    return Object.keys(pages).map( key => mapServerPage(pages[key]));
}