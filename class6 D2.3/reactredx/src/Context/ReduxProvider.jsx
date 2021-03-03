import React from "react"

export const ReduxContext = React.createContext();

export const ReduxProvider = ({children , store}) =>{
    const{dispatch,getState} = store;
    const value = {dispatch,getState};


const [ state,setState ] = React.useState(0);

const forceUpdate = () => setState(state+1);


React.useEffect(()=>{
    const unsubscribeMethod = store.subscribe(forceUpdate)
    return ()=> unsubscribeMethod();
});

return(
    <ReduxContext.Provider value={value}>{children}</ReduxContext.Provider>
)
}