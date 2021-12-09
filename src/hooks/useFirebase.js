import initAuthentication from '../firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

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
            .then((result) => {
                const user = result.user;

                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return {
        user,
        emailPasswordRegister,
        emailPasswordLogin
    }

}

export default useFirebase;