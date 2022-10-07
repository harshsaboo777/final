import React from 'react'
import styles from "../componentsStyles/SignUp.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Login = () => {
    return (
        <React.Fragment>
            <div className={styles.container}>
         <div className={styles.loginbox}>
        <p className={styles.logintext}>Login with social media</p>

        <div className={styles.loginsocial}>
            <a href="#" className={styles.facebook}><FacebookIcon /> Facebook </a>
            <a href="#" className={styles.twitter}><TwitterIcon /> Twitter </a>
            <a href="#" className={styles.google}><GoogleIcon /> Google </a>
            <a href="#" className={styles.linkedin}><LinkedInIcon /> Linkedin </a>
        </div>

        <form method="POST" className={styles.loginemail}>

            <p className={styles.logintext}  >Login with email</p>
            <div className={styles.inputgroup}>
                <input type="text" placeholder="First Name" name= "Fname" required/>

            </div>
            
            <div className={styles.inputgroup}>
                <input type="password" placeholder="Password" name= "Password" required/>

            </div>
            <div className={styles.inputgroup}>
                <button className={styles.btn} name= "submit" >Login</button>
            </div>
            <p className={styles.loginregistertext}>Don't have an account? <a href="register.php">Register Here</a></p>



        </form>



    </div>
    </div>
        </React.Fragment>)
}

export default Login