import {Switch, Route, Redirect} from 'react-router'
import CovidStatisticsPage from "../pages/CovidStatisticsPage";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <CovidStatisticsPage/>
            </Route>
            <Redirect to={'/'}/>
        </Switch>
    )
}
