import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from '../components/Header/Header'
import AddRecipesPage from '../pages/AddRecipesPage/AddRecipesPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import RecipeDetailsPage from '../pages/RecipeDetailsPage/RecipeDetailsPage'
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage'
import SignupPage from '../pages/SignupPage/SignupPage'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/cadastro" >
                        <SignupPage />
                    </Route>
                    <Route exact path="/">
                        <RecipesListPage />
                    </Route>
                    <Route exact path="/detalhes/:id" >
                        <RecipeDetailsPage />
                    </Route>
                    <Route exact path="/adicionar-receita">
                        <AddRecipesPage />
                    </Route>
                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router