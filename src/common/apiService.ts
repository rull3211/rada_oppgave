import { wikiApi, wikiBaseUrl } from "./constants"
import { ApiFormat, ServerPagesObj } from "./types"

export const buildWikiEndpoint = ( gsrlimit: string, gsrsearch: string,format: ApiFormat): string => {
    return `${wikiBaseUrl}${wikiApi}format=${format}&generator=search&gsrnamespace=0&gsrlimit=${encodeURIComponent(gsrlimit)}&gsrsearch=${encodeURIComponent(gsrsearch)}`
}

export const getData = (endpoint: string): Promise<ServerPagesObj> => {
    return fetch(endpoint)
    .then( r => {
        r.status !== 200 && Promise.reject()
        return r.json()
    })
    .then(data => data.query.pages as ServerPagesObj)
    .catch( error => {
        throw error
    } )
}

