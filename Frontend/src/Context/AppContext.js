import { createContext, useState } from 'react';

export const AppContext = createContext();
export const UserContext = createContext();
export const ProductContext = createContext();
export const FindProductContext = createContext();

const ContextProvider =(props)=>{
    const[auth,setAuth]= useState("true");
    const[uid,setUid] = useState("");
    const[showPro,setShowPro] = useState("");
    const[findPro,setFindPro] = useState("");
    return(
      <>
        <AppContext.Provider value={[auth,setAuth]}>
          <UserContext.Provider value={[uid,setUid]}>
            <ProductContext.Provider value={[showPro,setShowPro]}>
              <FindProductContext.Provider value={[findPro,setFindPro]} >
                {props.children}
              </FindProductContext.Provider>
            </ProductContext.Provider>
          </UserContext.Provider>
        </AppContext.Provider>
      </>
    )
}

export default ContextProvider;
