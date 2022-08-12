import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Container = styled.div`
width: 1200px;
margin: 10px auto;
`

export const StyledLink = styled(NavLink)`
color: black;
font-size: 16px;
font-weight: bold;
text-decoration: none;

&:not(:last-child) {
    margin-right: 10px;
}

&.active {
    color: red;
}`

