import React, {Fragment} from 'react';

let withRainbowFrame = colors => Component => props => {

    let code = <Component {...props} children ={props.children} />;
    for (let color of colors) {
        code = <div
            key={colors.indexOf(color)}
            data-id={colors.indexOf(color)}
            style={
                {
                    borderWidth: 5,
                    borderStyle: 'solid',
                    borderColor: color,
                    padding: 10,
                }
            }
        >
           {code}
        </div>
    }
    return <Fragment children ={code} />;

};

export { withRainbowFrame };