import { Page } from "../../common/types";
import { RootState } from "../store";

export const getPages = (state: RootState): Page[] => state.wiki.pages;
export const getSelectedPage = (state: RootState): Page | null => state.wiki.selectedPage
export const getStatus = (state: RootState): string => state.wiki.status