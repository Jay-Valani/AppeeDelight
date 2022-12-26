import React, {Component} from 'react';

export interface Props {
  navigation: any;
}

interface S {
  authButton: boolean;
}

interface SS {}

export default class AuthController extends Component<Props, S, SS> {
  constructor(props: Props) {
    super(props);
    this.state = {
      authButton: false,
    };
  }
  signupButton = () => {
    this.setState({authButton: true});
  };
  loginButton = () => {
    this.setState({authButton: true});
  };
}
