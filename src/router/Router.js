import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Main from "../pages/Main"
import Register from "../pages/Register"
import Login from "../pages/Login";
import Navbar from "../components/Navbar";


const AppRouter = () => {
    return(
        <Router>

            <Navbar />
            <Switch>
                <Route exact path= "/register" component={Register} />
                <Route exact path= "/login" component={Login} />
                <Route exact path= "/" component={Main} />
            </Switch>

        </Router>
    )
};

export default AppRouter;