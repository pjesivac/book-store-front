import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/Home";
import { Books } from "../components/Books";
import { Book } from "../components/Book";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { AddBook } from "../user/AddBook";
import ProtectedRoute from "../components/ProtectedRoute";
export const Main = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/books" component={Books}></Route>
        <Route path="/book/:id" component={Book}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <ProtectedRoute path="/addBook" component={AddBook}></ProtectedRoute>

        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
};
