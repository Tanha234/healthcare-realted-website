import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication();

const useFirebase=()=>{
    const[user,setUser]=useState({});
    const[error,setError]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState('')
    const[isLogging,setIsLogging]=useState(false);
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

const passWord=e=>{
   setPassword(e.target.value)
}
const emailVery=e=>{
    setEmail(e.target.value)
}
    const logOut=()=>
    signOut(auth)
    .then(()=>{
        setUser("");
    })
    const handleEvent=e=>{
        e.preventDefault();
        console.log(email,password)
       
        if (isLogging) {
            processLogin(email, password);
          }
          else {
            registerNewUser(email, password);
          }
      
        }
      
        const processLogin = (email, password) => {
          signInWithEmailAndPassword(auth, email, password)
            .then(result => {
              const user = result.user;
              console.log(user);
              setError('');
            })
            .catch(error => {
              setError(error.message);
            })
       
         
        
       
    }
    const toogleSing=(e)=>{
        setIsLogging(e.target.checked)

      }
      const  registerNewUser=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        
        .then(result=>{
            const user=result.user
            console.log(user)
        })
       

      }
        
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
        logOut,
        handleEvent,
        emailVery,
        toogleSing,
        error,
        isLogging,
        registerNewUser,
        
        
        passWord


  
    } 
}
export default useFirebase;