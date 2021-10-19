import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication();

const useFirebase=()=>{
    const[user,setUser]=useState({});
    const[error,setError]=useState("")
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle=()=>{
    signInWithPopup(auth, googleProvider)
    .then((result)=> {
        console.log(result.user)
        setUser(result.user)
       
    }
    ) 
    .catch(error=>{
        setError(error.message)
    }
    )
}
    const logOut=()=>
    signOut(auth)
    .then(()=>{
        setUser("");
    })

useEffect(()=>{
    onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user)
        }
    })
 
 },[])
    return{
        signInWithGoogle,
        user,
        logOut

  
    } 
}
export default useFirebase;