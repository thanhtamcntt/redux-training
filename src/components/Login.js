import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLoginFetch } from '../containers/login';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    changeInputValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validationForm() {
        let returnData = {
            error: false,
            msg: ''
        }
        const { email, password } = this.state
        const re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            returnData = {
                error: true,
                msg: 'Invalid email'
            }
        }

        if (password.length < 8) {
            returnData = {
                error: true,
                msg: 'Password more than 8 character!'
            }
        }
        return returnData;
    }

    submitForm(e) {
        e.preventDefault();

        const validation = this.validationForm()
        if (validation.error) {
            alert(validation.msg)
        } else {
            alert('Submit form success')
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container" style={{ paddingTop: "5%" }}>
                    <form
                        onSubmit={e => {
                            this.submitForm(e);
                        }}
                    >
                        <div className="form-group">
                            <label htmlFor="text">Email:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={this.state.email}
                                placeholder="Enter email"
                                onChange={e => this.changeInputValue(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                placeholder="Enter password"
                                onChange={e => this.changeInputValue(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Login
                    </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);