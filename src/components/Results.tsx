import React, { ReactElement } from "react"
import { connect } from "react-redux"
import { Page } from "../common/types"
import { selectResultAction } from "../redux/actions/wikiActions"
import { getPages, getSelectedPage } from "../redux/selectors/pagesSelector"
import { AppDispatch, RootState } from "../redux/store"
import styles from "../styles/results.module.css"
interface AppStateProps{
    results: Page[]
    selected: Page| null
}

interface AppDispatchProps{
    onSelect:(page:Page)=>void
}

type Props = AppStateProps & AppDispatchProps

const Results: React.FC<Props> =  (props: Props): ReactElement => {

    return (<section className={styles.sectionBody}>
                <ul>
                    {props.results.map((result, index) => 
                    <li 
                        tabIndex={props.selected ? -1 : 0} 
                        className={index%2===0 ? styles.grey: styles.white} 
                        onKeyPress={e => e.key ==="Enter" && props.onSelect(result)}
                        onClick={()=>props.onSelect(result)} 
                        key={result.pageId}>{result.title}
                    </li>)}
                </ul>
            </section>)
}

const mapStateToProps = (state: RootState) => {
    return {
        results: getPages(state),
        selected: getSelectedPage(state)
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return{
        onSelect: (page: Page): void => {
            dispatch(selectResultAction(page))
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)