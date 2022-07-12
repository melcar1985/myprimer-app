import React from 'react';


export const title =(props) => {
    console.log(props);
    return(
        <h1>
            (props.greeting)
        </h1>
    )
}
export default title;