import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SimpleCard(props) {
    return (
        <Svg
            height='220px'
            width='220px'
            viewBox='0 0 1182 1182'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit={2}
            {...props}
        >
            <Path
                d='M1233 369.542c0-39.485-32.67-71.542-72.91-71.542H782.906C742.668 298 710 330.057 710 369.542v627.916c0 39.482 32.668 71.542 72.906 71.542h377.184c40.24 0 72.91-32.06 72.91-71.542V369.542z'
                transform='matrix(1.33002 0 0 1.35538 -701.565 -335.853)'
            />
            <Path fill='black' transform='matrix(1.13274 0 0 1 -64.584 0)' d='M366 68.051H479V1113.051H366z' />
        </Svg>
    );
}

export default SimpleCard;
