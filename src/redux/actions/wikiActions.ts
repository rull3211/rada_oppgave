import { buildWikiEndpoint, getData } from "../../common/apiService"
import { mapServerPagesToList } from "../../common/mapFromServerObjects"
import { ApiFormat, Page } from "../../common/types"
import { failed, searching, success, selectAction, deSelectAction } from "../reducers/wikiData"
import { AppDispatch } from "../store"

export const searchAction = ( countOfArticles: string, searchWord: string, format: ApiFormat = "json") => {
    return(dispatch: AppDispatch): void => {
        dispatch(searching())
        getData(buildWikiEndpoint(countOfArticles, searchWord, format))
        .then(data => {
            dispatch(success(mapServerPagesToList(data)))
        })
        .catch(() => dispatch(failed()))
    }
}

export const selectResultAction = (page: Page) => {
    return(dispatch: AppDispatch): void => {
        dispatch(selectAction(page))
    }
}


export const deSelectResultAction = () => {
    return(dispatch: AppDispatch): void => {
        dispatch(deSelectAction())
    }
}

