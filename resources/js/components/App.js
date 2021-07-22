import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Header from './Header';
import Footer from './Footer' 
import Search from './Search'
import Index from './Index/Index'
import AnimeWatching from './Anime-watching/Anime-watching'
import Login from './Login/Login'
import Signup from './Signup/Signup';
import Categories from './categories/Categories';
import AnimeDetails from './Anime-details/Anime-details';
import Blog from './Blog/Blog';
import BlogDetails from './Blog-details/Blog-details';




function App() {
    return (
    <Router>
        <div className="App">

        
            <Header />
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route exact path="/anime-watching/:id">
                    <AnimeWatching />
                </Route>
                <Route exact path="/categories/:gener">
                    <Categories />
                </Route>
                <Route exaxt path="/login">
                    <Login />
                </Route>
                <Route exaxt path="/signup">
                    <Signup />
                </Route>
                <Route exaxt path="/signup">
                    <Categories />
                </Route>
                <Route exaxt path="/anime-details/:id">
                    <AnimeDetails />
                </Route>
                <Route exaxt path="/blog">
                    <Blog />
                </Route>
                <Route exaxt path="/blog-details">
                    <BlogDetails />
                </Route>
            </Switch>
            
            
            <Footer />
            <Search />

        
          
        </div>
    </Router>

        
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
