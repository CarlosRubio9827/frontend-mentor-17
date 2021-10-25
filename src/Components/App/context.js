import React from 'react'

const Context = React.createContext();

function Provider(props){
    const [openCart, setOpenCart] = React.useState(false);
    const [openSideMenu, setSideMenu] = React.useState(false);
    const [openCarousel, setCarousel] = React.useState(false);
    const [changeAmount, setChangeAmount] = React.useState(0);
   
    
    return (
        <Context.Provider value={{
            openCart,
            setOpenCart,
            openSideMenu,
            setSideMenu,
            openCarousel,
            setCarousel,
            changeAmount,
            setChangeAmount,
        }}>
            { props.children }
        </Context.Provider>
    )
}

export { Context, Provider };