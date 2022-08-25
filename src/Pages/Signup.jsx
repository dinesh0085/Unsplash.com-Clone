
import styles from "./Signup.module.css"
import SignupForm from "./SignupForm"


function Signup(){
    return (
        <div className={styles.signup}>
            <div>
                <img  src="https://www.linkpicture.com/q/SignupPageImage.png" alt="" />
            </div>
            <div>
             <SignupForm></SignupForm>
             


            </div>
        </div>
    )
}

export default Signup