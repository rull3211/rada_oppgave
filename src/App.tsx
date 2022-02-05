import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Results from "./components/Results"
import { connect } from 'react-redux';
import { RootState } from './redux/store';
import { Page } from './common/types';
import { getSelectedPage, getStatus } from './redux/selectors/pagesSelector';
import SelectedResult from './components/SelectedResult';
import { Status } from './components/Status';

interface AppStateProps{
  page: Page|null
  status: string
}

type AppProps = AppStateProps

const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <div className="App">
      <h1>Wikipedia toplist search engine</h1>
      <SearchBar>
      </SearchBar>
      <Results>
      </Results>
      {props.status !== "idle"  && <Status status={props.status}  ></Status>}
      {props.page && <SelectedResult></SelectedResult>}
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return{
      page: getSelectedPage(state),
      status: getStatus(state)
  }
}
export default  connect(mapStateToProps)(App);
