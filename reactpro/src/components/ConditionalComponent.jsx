import Code from "./Code";
import Welcome from "./Welcome";


export default function ConditionalComponent() {

    const display = false;
    return display ? <h1>Welcome to React</h1> : <h1>Goodbye from React</h1>;
}
  