import initAuthentication from '../firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from 'react';

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    // Registration with the email & Password
    const emailPasswordRegister = (email, password, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                const { email } = user;
                console.log(email);
                navigate('/')
            })
            .catch((error) => {
                const { code, message } = error;
                console.log(code, message);
            });
    }


    // Login with the email & Password
    const emailPasswordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => console.log('hi'));
    }

    return {
        user,
        setUser,
        emailPasswordRegister,
        emailPasswordLogin,
        logout
    }

}

export default useFirebase;