import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import UserList from './UserList';
import PostList from './PostList';
import PostCreate from './PostCreate';
import PostEdit from './PostEdit';
import PostDelete from './PostDelete';


import Header from './Header';
import history from '../history';


const App = () => {
	return(
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact component={UserList} />
						<Route path="/posts/:id" exact component={PostList} />
						<Route path="/posts/create" exact component={PostCreate} />
						<Route path="/postsCreate/:userId" exact component={PostCreate} />
						<Route path="/posts/edit/:id" exact component={PostEdit} />
						<Route path="/posts/delete/:id" exact component={PostDelete} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;