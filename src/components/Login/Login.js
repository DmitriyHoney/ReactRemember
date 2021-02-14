import { Field, reduxForm } from 'redux-form'
import cls from './Login.module.css'
const Login = props => {
    let handleSubmitSignIn = (formData) => {
        props.signIn(formData);
    }
    return <div>
        <LoginFormWithReduxForm onSubmit={handleSubmitSignIn} />
    </div>
}

const LoginForm = props => {
    
    return (
        <div>
            <h3>Sign In</h3>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="login-email">Email:</label>
                    <Field id="login-email" name="email" component="input" type="text" placeholder="email" />
                </div>
                <div>
                    <label htmlFor="login-password">Password:</label>
                    <Field id="login-password" name="password" component="input" type="password" placeholder="password" />
                </div>
                <div>
                    <label htmlFor="login-remember">RememberMe:</label>
                    <Field id="login-remember" name="rememberMe" component="input" type="checkbox" />
                </div>
                {props.error ? <div className={cls.common_error}>{props.error}</div> : ''}
                <button>Sign In</button>
            </form>
        </div>
    )
}

const LoginFormWithReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;