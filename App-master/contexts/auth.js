import { createContext, useMemo, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth, { db } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({children}) {
    const navigation = useNavigation(); 
    const [Cor, setCor] = useState(null);
    const [loading, setLoading] = useState(null);
    const [erro, setError] = useState(null);
    const [user, setUser] = useState([]);

    async function signin({mail, pass}){ 
        
            setLoading(1);
            setCor(null);
            const userCredential = await signInWithEmailAndPassword(auth, mail, pass)
                .then((response) =>{
                    getUser(response.user.uid);
                }).catch((error) =>{
            setCor(1);
            console.log(error);
            }).finally(() =>
            setLoading('')
        )};

    async function signup({email, senha}){ 
        setLoading(1);
        setError(null);
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha)
            .then((response)=>{
                createUser(response.user.uid);
            }).catch((error) => setError(1));
        
        setLoading('');
       
    };

    async function createUser(uid){
        const userInfos = await setDoc(doc(db, 'users', uid), {
            id: uid,
            nome: 'nothing',
            idade:'nothing',
            altura:'nothing',
            posicao:'nothing',
            pernaDominante:'nothing',
            fotoUrl:'nothing',
            createdAt: serverTimestamp(),
        
        }).then((response)=>{
            setUser(response);
            
        }).then(()=>go()
        ).catch((error)=>{console.log(error);setError(1);});
    }; 

    const go = () => navigation.navigate('Welcome');

    async function getUser(uid){
        const userInfos = await getDoc(doc(db, 'users', uid))
            .then((response) =>{
                setUser(response.data());
            });
    }

    const logout = () => {
        signOut(auth).then(()=>{setUser('')});
    };

    const memoedValue = useMemo(
        ()=>({
            user,
            Cor,
            loading,
            erro,
            signin: signin,
            signup: signup,
            logout: logout,
        }),[user, Cor, loading, erro, signin, signup]
    );

    return(
        <AuthContext.Provider value={memoedValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;