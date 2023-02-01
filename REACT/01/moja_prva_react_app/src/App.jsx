import { v4 } from "uuid";
import './App.scss';


const App=()=> {
  return (
  <div className="uuid">{v4()}</div>);
}