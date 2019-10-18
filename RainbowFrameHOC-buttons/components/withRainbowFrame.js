import React, {Fragment} from 'react';

let withRainbowFrame = colors => Component => props => {

    console.log(`${colors} - colors`);
    console.log(Component);
    console.log({...props});


    let code = <Component {...props} />;
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