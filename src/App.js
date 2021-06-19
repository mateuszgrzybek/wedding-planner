import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import CreateUser from './components/create-user.component';
import WeddingPlans from './components/wedding-plans.component';
import EditPlan from './components/edit-plan.component';
import CreateNewPlan from './components/create-plan.component';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <br />
                <Route path="/" exact component={WeddingPlans} />
                <Route path="/edit/:id" component={EditPlan} />
                <Route path="/create" component={CreateNewPlan} />
                <Route path="/user" component={CreateUser} />
            </div>
        </Router>
    );
}

export default App;
