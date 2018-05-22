import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {

    onEmailChanged = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChanged = (text) => {
        this.props.passwordChanged(text);
    }

    onButtonPress() {        
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        } 
        return <Button onPressProps={this.onButtonPress.bind(this)}>Login</Button>;
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyles}>{this.props.error}</Text>
                </View>
            );
        }
    }

    render() {
        return (
           <Card>
                <CardSection>
                    <Input 
                        label="Email" 
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={this.props.email} 
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry label="Password" 
                        placeholder="password" 
                        onChangeText={this.onPasswordChanged.bind(this)}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>                 
                    {this.renderButton()}
                </CardSection>
           </Card>
        );
    }
}

const styles = {
    errorTextStyles: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {   
    const { email, password, error, loading } = auth;
    return {
        email, password, error, loading
    };
};

export default connect(mapStateToProps, { emailChanged, 
                                            passwordChanged, 
                                            loginUser })(LoginForm);
