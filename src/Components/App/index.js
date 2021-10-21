import React from 'react'
import {Context, Provider} from './context'
import {AppUI} from './AppUI'


function App(){
    return(
        <Provider>
            <AppUI />
        </Provider>
    )
}

export { App }