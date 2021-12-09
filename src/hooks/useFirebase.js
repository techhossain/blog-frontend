import initAuthentication from '../firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

initAuthentication();

const useFirebase = () => {

    const auth = getAuth();


    // Registration with the email & Password
    const emailPasswordRegister = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;

                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    // Login with the email & Password

    const emailPasswordLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }


    return {
        emailPasswordRegister,
        emailPasswordLogin
    }

}

export default useFirebase;