import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import CollaboratorEdit from './pages/collaborator/edit';
import CollaboratorAdd from './pages/collaborator/add';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/collaborator/add" component={CollaboratorAdd} />
            <Route exact path="/collaborator/edit/:id" component={CollaboratorEdit} />
        </Switch>
    </BrowserRouter>
);

export default Routes;