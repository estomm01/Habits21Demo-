import React from "react";
// import Books from "./pages/Books";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard/Dashboard";
import AddHabitForm from "./components/Dashboard/AddHabitForm/AddHabitForm";
// import AddHabitForm from "./components/Dashboard/HabitList/HabitList";

// import styles from './App.module.scss';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// class App extends Component {
//   constructor(props) {
//     super(props);

function App() {
  return (


    <div>
    <Nav />
    {/* <AddHabitForm/> */}
    <Dashboard />
     {/* <HabitList/> */}
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; import AddHabitForm from "./components/Dashboard/AddHabitForm/AddHabitForm";
// import Dashboard from "./components/Dashboard/Dashboard";
// // import AddHabitForm from "./components/Dashboard/AddHabitForm/AddHabitForm";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Dashboard} />
//           <Route exact path="/books" component={Books} />
//           <Route exact path="/books/:id" component={Detail} />
//           <Route exact path="/books/:id" component={Dashborad} />
//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// export default App;
