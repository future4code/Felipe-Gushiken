import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostsPage from '../pages/PostsPage/PostsPage'

const Router = () => {
    return (
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/signup">
                    <SignupPage />
                </Route>
                <Route exact path="/feed">
                    <FeedPage />
                </Route>
                <Route exact path="/posts/:id">
                    <PostsPage />
                </Route>
            </Switch>
    )
}

export default Router