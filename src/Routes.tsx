import { Route } from "react-router-dom";
import Snack from "./Snack";
import VendingMachine from "./VendingMachine";

const Routes = () => (
    <>
        <Route exact path="/">
            <VendingMachine />
        </Route>
        <Route exact path="/chips">
            <Snack name="Chips" details="Salty and crunchy, but light and thin." />
        </Route>
        <Route exact path="/soda">
            <Snack name="Soda" details="Sharp drink, with fizzing bubbles and sugar." />
        </Route>
        <Route exact path="/gum">
            <Snack name="Gum" details="Great flavor, can chew for hours and blowing bubbles." />
        </Route>
        <Route exact path="/demo">
            <Snack />
        </Route>
    </>
);

export default Routes;
