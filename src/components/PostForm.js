import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostForm extends React.Component {
	renderError({ error, touched }) {

		if (touched && error ) {
			return(
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({input, label, meta}) => {
		const className = `field ${meta.error && meta.touched ? 'error': ''}`;
		return (
			<div className={className}>
				<label>{ label }</label>
				<input { ...input } autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	}

	renderInputId = ({input}) => {
		return (
			<div className="field">
				<input { ...input } autoComplete="off" value={this.props.match.params.userId} />
			</div>
		);
	}

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	}


	render() {
		return (
			<form 
			onSubmit={this.props.handleSubmit(this.onSubmit)} 
			className="ui form error">
				<Field name="title" component={this.renderInput} label="Enter Title" />
				<Field name="body" component={this.renderInput} label="Enter Body" />
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	
	if (!formValues.title) {
		errors.title = 'You must enter the title';
	}

	if (!formValues.body) {
		errors.body = 'You must enter the body';
	}

	return errors;
};



export default reduxForm({
	form: 'postForm',
	validate
})(PostForm);
