import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Link } from 'react-router-dom';


class UserList extends React.Component{
	componentDidMount() {
		this.props.fetchUsers();
		// console.log('PROPS KITA', this.props);
	}

	renderListUser(){
		return this.props.users.map(user => {
			return(
				<div className="item" key={user.id}>
				<i className="large middle aligned icon user" />
					<div className="content">
						<h2>{user.name}</h2>
						<Link to={`/posts/${user.id}`} className="ui button primary">List Posts User</Link>
					</div>
				</div>
			);
		});
	}

	render(){		
		return(
			<div className="ui relaxed divided list">
				{ this.renderListUser() }
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return { users: Object.values(state.users) };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);