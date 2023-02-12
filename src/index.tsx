import RxFM from "rxfm";
import { timer } from "rxjs";
import HelloComponent from "./Components/HelloComponent";

import "./styles.css";

const App = (
  <div>
    <HelloComponent name="World!"></HelloComponent>
  </div>
);

App.subscribe((c) => document.body.appendChild(c));
