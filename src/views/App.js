import logo from "./logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav.js";
import Home from "./Example/Home.js";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUser from "./Users/ListUser.js";
import DetailUser from "./Users/DetailUser.js";
/*
  2 Component: class component / function component(function, arrow)
*/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/about" element={<MyComponent />} />
            <Route path="/user" element={<ListUser />} />
            <Route path="/user/:id" element={<DetailUser />} />
          </Routes>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
