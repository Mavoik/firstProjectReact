import styled from "@emotion/styled";
import React from "react";

const ButtonContainer = styled.button`
    padding: 1rem;
    border: .25rem solid blue;
    background-color: ${({blue})=>blue?'blue':'transparent'};
`;

const Button = ({children, blue, onClick, className, style})  =>{
    return (
        <ButtonContainer blue={blue} onClick={onClick} className={className} style={style}>
            {children}
        </ButtonContainer>
    );
}

export default Button;