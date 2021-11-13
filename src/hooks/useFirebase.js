import initializeAuthentication from '../pages/Login/firebase/firebase.initialize';
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, 
    signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";
import axios from 'axios';


// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsAdminLoading(true)
                axios.get(`http://localhost:5000/user/${user.email}`)
                // axios.get(`https://agile-shelf-31650.herokuapp.com/user/${user.email}`)

                .then((res) => {
                    setAdmin(res.data.admin);
                    })
                    .finally(() => setIsAdminLoading(false));
                    ;
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    // // get admin user
    // useEffect(() => {
    //     fetch(`http://localhost:5000/users/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAdmin(data.admin)
    //             // setIsLoading(false);
    //             })
    // }, [user.email])
    // useEffect(() => {
    //     axios.get(`http://localhost:5000/user/${user.email}`).then((res) => {
    //       setAdmin(res.data.admin);
    //     });
    //   }, [user.email]);
    
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        }).catch((error) => {
        })
        .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
        // fetch('https://agile-shelf-31650.herokuapp.com/users', {

            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
            .catch((error) => {
                setAuthError(error.message);
            })
    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        isAdminLoading, 
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;