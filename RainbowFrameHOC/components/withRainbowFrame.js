import React from 'react';

let withRainbowFrame = colors => Component => props => {

    let code = props.children;
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
            <Component {...props} >{code}</Component>
        </div>
    }
    return code;

};

export { withRainbowFrame };