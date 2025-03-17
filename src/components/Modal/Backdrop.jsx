import React from 'react';
import styled from 'styled-components';

function Backdrop() {
    return <KBackdrop />;
}

export default Backdrop;

const KBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
`;
 