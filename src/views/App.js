import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";

/*
  2 Component: class component / function component(function, arrow)
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world with reactjs.</p>

        <MyComponent />
      </header>
    </div>
  );
}

export default App;
