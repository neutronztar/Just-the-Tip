import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Left(props) {
    return (
        <Svg
            height='32px'
            viewBox='0 0 32 32'
            width='32px'
            xmlSpace='preserve'
            xmlns='http://www.w3.org/2000/svg'
            enableBackground='new 0 0 32 32'
            {...props}
        >
            <Path d='M28 14H8.8l4.62-4.62c.394-.394.58-.864.58-1.38 0-.984-.813-2-2-2-.531 0-.994.193-1.38.58l-7.958 7.958C2.334 14.866 2 15.271 2 16s.279 1.08.646 1.447l7.974 7.973c.386.387.849.58 1.38.58 1.188 0 2-1.016 2-2 0-.516-.186-.986-.58-1.38L8.8 18H28a2 2 0 000-4z' />
        </Svg>
    );
}

export default Left;
