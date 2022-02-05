import React, { ReactElement, useState } from "react"
import { connect } from "react-redux"
import { Page } from "../common/types"
import { searchAction } from "../redux/actions/wikiActions"
import { useAppDispatch } from "../redux/hooks"
import { getSelectedPage } from "../redux/selectors/pagesSelector"
import { RootState } from "../redux/store"

interface AppStateProps{
    selected: Page|null
}

const SearchBar: React.FC<AppStateProps> = (props: AppStateProps): ReactElement => {
    const [searchWord, setSearchWord] = useState("")
    const [countOfArticlesToGet, setCount] = useState("5")
    const dispatch = useAppDispatch()
   
    return(
        <section>
            <input
                tabIndex={props.selected ? -1 : 0}
                onChange={e => setSearchWord(e.target.value)} 
                onKeyPress={e => e.key === "Enter" && dispatch(searchAction(countOfArticlesToGet, searchWord ))} 
                value={searchWord}
                alt="wikipedia top list search bar"
                >
            </input>
            <input
                tabIndex={props.selected ? -1 : 0}
                type="number" 
                onChange={e => setCount(e.target.value)} 
                value={countOfArticlesToGet}
                onKeyPress={e => e.key === "Enter" && dispatch(searchAction(countOfArticlesToGet, searchWord ))} 
            />
            <input
                tabIndex={props.selected ? -1 : 0} 
                type="submit" 
                onClick={() => dispatch(searchAction(countOfArticlesToGet, searchWord))} 
                value={"Search"} />
        </section>
    )
}

const mapStateToProps = (state: RootState) => {
    return{
        selected: getSelectedPage(state)
    }
}

export default connect(mapStateToProps)(SearchBar)