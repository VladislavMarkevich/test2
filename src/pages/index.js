//@flow
import {loginPageURL, jogsViewerPageURL, jogsEditorPageURL, menuPageURL, infoPageURL} from "kernel/url/constants";
import Info from "./Info";
import Jogs from "./Jogs";
import JogsEditor from "./JogsEditor";
import Login from "./Login";
import Menu from "./Menu";

export type PagesConfigType = $ReadOnlyArray<{
  exact?: boolean,
  path: string,
  component: any
}>;

const pagesConfig: PagesConfigType = [
  {
    exact: true,
    path: loginPageURL,
    component: Login
  },
  {
    path: jogsViewerPageURL,
    component: Jogs
  },
  {
    path: jogsEditorPageURL,
    component: JogsEditor
  },
  {
    path: menuPageURL,
    component: Menu
  },
  {
    path: infoPageURL,
    component: Info
  },
  {
    path: "*",
    component: Login
  }
];

export default pagesConfig;
