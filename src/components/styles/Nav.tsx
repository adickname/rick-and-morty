import { styled } from "styled-components";
const NavStyled = styled.nav`
    display: flex;
    background-color: red;
`;
const UlStyled = styled.ul`
    display: flex;
`;
const Li = styled.li`
    display: flex;
    padding: 20px;
`;
export const Nav = () => {
    return (
        <>
            <NavStyled>
                <UlStyled>
                    <Li>About</Li>
                    <Li>Contact</Li>
                    <Li>Characters</Li>
                    <Li></Li>
                </UlStyled>
            </NavStyled>
        </>
    );
};
