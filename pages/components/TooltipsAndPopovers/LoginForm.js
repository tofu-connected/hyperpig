import useInput from '../../hooks/UseInput';
import { Input, Button, Text } from "@nextui-org/react";

export default function LoginForm(props) {
    
    const isName = (value) => value.match(/^[a-zA-Z0-9]+$/);
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
        value: enteredPassword,
        isValid: passwordIsValid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        helper: passwordHelper,
        reset: resetPassword
    } = useInput(enteredPasswordIsValid, "Excellent password", "8 or more symbols, please", "")


    let formIsValid = false;

    if (userNameIsValid && passwordIsValid) {
        formIsValid = true;
    }
    const submitHandler = (e) => {
        e.preventDefault();

        if (!formIsValid) {
            userNameBlurHandler();
            passwordBlurHandler();
            return;
        }

        props.returnUserData(enteredUserName, enteredPassword);
        resetUserName();
        resetPassword();
    }   

    return (
        <div className='login-form-wrapper'>
            <Text h2 css={{ color: "$accentColor", fontWeight: "400", fontSize: "20px" }}>Login</Text>
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
                <Button auto type='submit' css={{ alignSelf: "center", width: "140px", marginTop: "5px" }}>Login</Button>
                <Button bordered auto onPress={props.openRegistrationHandler} css={{ alignSelf: "center", width: "140px", marginTop: "-10px" }}>Register</Button>
            </form>
        </div>

    )
}
