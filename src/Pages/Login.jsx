
import styles from "./Login.module.css"
import LoginForm from "./LoginForm"


function Login(){
    return (
        <div className={styles.login}>
           <img className={styles.loginLogo} src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" alt="" />
           
           <LoginForm></LoginForm>
             
           <div className={styles.dontHveAcnt}>Don’t have an account? Join Unsplash</div>

            
        </div>
    )
}

export default Login