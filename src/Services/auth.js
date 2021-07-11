import {auth, provider} from './../firebase';

// SIGNIN AND LOGOUT

export const signinwithgoogle = async() =>{
    let user;
    await auth.signInWithPopup(provider)
        .then(
           (res)  =>{
            console.log(res.user);
            user = res.user;
           })
        .catch((error)=>{
            console.log(error.message);
        });

        return user;
};

export const logout = async ()=> {
    let logout;
    await auth.signOut()
        .then(()=>{
            logout =true;
        })
        .catch((error)=>{
            console.log("error logging out");
        });
        return logout;
}