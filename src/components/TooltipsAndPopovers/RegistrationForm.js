import React from 'react'
import { Input, Button, Text } from "@nextui-org/react";
import useInput from '../../hooks/UseInput';

export default function RegistrationForm(closeHandler, props) {

    const validEmail = (value) => {
        return value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i);
    };
    const isName = (value) => value.trim() !== '' && value.match(/^[a-zA-Z0-9]+$/);
    const enteredPasswordIsValid = (value) => value.length >= 8;

    const {
        value: enteredUserName,
        isValid: userNameIsValid,
        valueChangeHandler: userNameChangeHandler,
        inputBlurHandler: userNameBlurHandler,
        helper: userNameHelper,
        reset: resetUserName,
    } = useInput(isName, "Perfect Name", "It should be latin letters and maybe numbers", "");
    const {
        value: enteredEmail,
        isValid: EmailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        helper: emailHelper,
        reset: resetEmail,
    } = useInput(validEmail, "Decent Email", "E-mail should be like __@__.__", "");
    const {
        value: enteredPassword,
        isValid: passwordIsValid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        helper: passwordHelper,
        reset: resetPassword
    } = useInput(enteredPasswordIsValid, "Excellent password", "8 or more symbols, please", "")
    const {
        value: enteredPasswordRepeat,
        isValid: passwordRepeatIsValid,
        valueChangeHandler: passwordRepeatChangeHandler,
        inputBlurHandler: passwordRepeatBlurHandler,
        helper: passwordRepeatHelper,
        reset: resetPasswordRepeat
    } = useInput(enteredPasswordIsValid, "Perfect", "8 or more symbols, please", "", enteredPassword);

    let formIsValid = false;
    if (userNameIsValid && EmailIsValid && passwordIsValid && passwordRepeatIsValid) {
        formIsValid = true;
    }
    const submitHandler = (e) => {
        e.preventDefault();

        if (!formIsValid) {
            userNameBlurHandler();
            emailBlurHandler();
            passwordBlurHandler();
            passwordRepeatBlurHandler();
            return;
        }

        props.returnUserData(enteredUserName, enteredEmail, enteredPassword);
        resetUserName();
        resetEmail();
        resetPassword();
        resetPasswordRepeat();
    }
    return (
        <div className='login-form-wrapper'>
            <Text h2 css={{ color: "$accentColor", fontWeight: "400", fontSize: "20px", marginBottom: "15px" }}>Registration</Text>
            <form className="login-form" onSubmit={submitHandler}>

                <Input
                    clearable
                    placeholder="Username"
                    bordered
                    color="secondary"
                    status={userNameHelper.color}
                    value={enteredUserName}
                    aria-label="username"
                    helperText={userNameHelper.text}
                    helperColor={userNameHelper.color}
                    onChange={userNameChangeHandler}
                    onBlur={userNameBlurHandler}
                />
                <Input
                    clearable
                    placeholder="E-mail"
                    bordered
                    color="secondary"
                    status={emailHelper.color}
                    value={enteredEmail}
                    aria-label="email"
                    helperText={emailHelper.text}
                    helperColor={emailHelper.color}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                <Input.Password
                    clearable
                    bordered
                    color="secondary"
                    initialValue=""
                    status={passwordHelper.color}
                    type="password"
                    placeholder="Password"
                    value={enteredPassword}
                    aria-label="password"
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                    helperText={passwordHelper.text}
                    helperColor={passwordHelper.color}
                />
                <Input.Password
                    clearable
                    bordered
                    color="secondary"
                    initialValue=""
                    status={passwordRepeatHelper.color}
                    type="password"
                    placeholder="Repeat password"
                    value={enteredPasswordRepeat}
                    aria-label="password"
                    onChange={passwordRepeatChangeHandler}
                    onBlur={passwordRepeatBlurHandler}
                    helperText={passwordRepeatHelper.text}
                    helperColor={passwordRepeatHelper.color}
                />
                <Button type='submit' auto css={{ alignSelf: "center", marginTop: "0px" }}>Register</Button>
            </form>
        </div>

    )
}
