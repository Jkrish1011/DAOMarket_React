import React, { createContext, useContext, useReducder, useReducer } from 'react';

// DATA LAYER
export const StateContext = createContext();

// PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// to be used in the component.!
export const useStateValue = () => useContext(StateContext);