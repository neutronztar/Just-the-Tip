import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg
            viewBox='0 0 1182 1182'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit={2}
            {...props}
        >
            <Path
                d='M1233 337.528c0-21.816-18.05-39.528-40.28-39.528H750.282C728.05 298 710 315.712 710 337.528v691.942c0 21.82 18.05 39.53 40.282 39.53h442.438c22.23 0 40.28-17.71 40.28-39.53V337.528z'
                transform='matrix(1.33002 0 0 1.35538 -701.565 -335.853)'
            />
            <Path fill='black' transform='matrix(1.13274 0 0 1 -75.584 0)' d='M366 68.051H479V1113.051H366z' />
        </Svg>
    );
}

export default SvgComponent;
