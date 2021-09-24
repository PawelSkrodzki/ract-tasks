import React, { useEffect } from 'react'

const Alert = ({ msg, showAlert, list }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            showAlert();
        }, 3000);
        return () => clearTimeout(timeout);
    }, [list]);
    /// argument useEffecta w tym przypadku list
    // mowi useEffectowi by wyrenderował się za każdym razem gdy zmieni się lista

    return <p>{msg}</p>;
};

export default Alert;