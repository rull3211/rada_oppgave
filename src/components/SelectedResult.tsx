import { connect } from "react-redux";
import { Page } from "../common/types";
import { deSelectResultAction } from "../redux/actions/wikiActions";
import { getSelectedPage } from "../redux/selectors/pagesSelector";
import { AppDispatch, RootState } from "../redux/store";
import CopyToClipboard from "../resources/copyToClipboard";
import styles from "../styles/selectedResult.module.css"

interface AppDispatchProps{
    onClick:()=>void
}

interface AppStateProps{
    page: Page|null
}

type ResultProps = AppStateProps & AppDispatchProps

const SelectedResult: React.FC<ResultProps> = (props: ResultProps) => {
    const clickHandler = ()=>{
        props.page && navigator.clipboard.writeText(props.page.title)
    }
    return (props.page && 
        <section className={styles.modal}>
            <div className={styles.contentWrapper}>
                <button 
                    onClick={props.onClick}
                    onKeyPress={e => e.key ==="Enter" && props.onClick()} 
                    tabIndex={0} 
                    className={styles.closeButton}>X</button>
                <div className={styles.leftHalf}>
                    <p>{"Title: "}{props.page.title}</p>
                    <p>{"Popularity: "}{props.page.popularity}</p>  
                </div>
                 <CopyToClipboard clickHandler={clickHandler}></CopyToClipboard>
            </div>
            <div className={styles.cover} onClick={props.onClick}></div>
        </section>)
}

const mapStateToProps = (state: RootState) => {
    return{
        page: getSelectedPage(state)
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return{
        onClick: (): void => {
            dispatch(deSelectResultAction())
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedResult)