import { createContext, useState } from "react";
import { UserData } from "./lib/types";


export type IUserContext = {
    setUser: React.Dispatch<React.SetStateAction<UserData>>,
    user?: UserData
}

const UserContext = createContext<IUserContext>({user: {user: null,isConnected: false},setUser: ()=> {}})

type Props ={
    children: React.ReactNode
}
const UserProvider = ({children}:Props)=>{

    const [user,setUser] = useState<UserData>({user: null,isConnected: false});
    //




    return <UserContext.Provider value={{user,setUser}}>
{children}
    </UserContext.Provider>

}

export {UserContext,UserProvider}