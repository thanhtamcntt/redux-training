
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import authReducer from '../reducers/auth';

export const userLoginFetch = user => {
    return dispatch => {
      return fetch("https://api-com-kanri.dev.kod-hc.info/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
          } else {
            localStorage.setItem("token", data.jwt)
            dispatch(authReducer(data.user))
          }
        })
    }
}