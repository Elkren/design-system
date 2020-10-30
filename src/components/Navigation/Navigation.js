import React from 'react'
import styled from "styled-components";
import { Logo } from "../../assets";


const NavigationWrapper = styled.div`        
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    
    width: 100%;
    height: 100%;

    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 15px;
    overflow: hidden;
    white-space: nowrap;
`

const HomeLogoWrapper = styled.div`
    width: 205px;
    height: 4em;
    background-color: white;
    margin-right: 5px;

    @media (min-width: 1100px) {
        background-color: #22272a;
    }
`;

const HomeLogo = styled.a`
    display: inline-block;    
    height: 4em;
    width: 205px;
    padding-top: 5px; 
    & g > :last-child {  
        fill: black;
    }
    @media (min-width: 1100px) {
        & g > :last-child {
            fill: white;
        }
    } 
`

const NavigationActions = styled.div`
    display: flex;        
    height: 100%;
    margin-right: auto;    
`

const UserActionsWrapper = styled.div`    
    display: flex;   
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 10px; 
`

const RegisterButton = styled.button`
    border: none;
    border-radius: 2px;
    text-transform: uppercase;
    background-color: #22272a;
    color: white;
    font-size: 0.8rem;
    height: 35px;
    padding: 0.625em 1em;
    letter-spacing: 0.0625em;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    width: auto;
`

const LoginButton = styled.button`
    border: none;
    background-color: white;    
    font-size: 0.9rem;
    margin-right: 10px;
    text-transform: uppercase;
    letter-spacing: 0.0625em;
    cursor: pointer;
    height: 35px;
    font-weight: bold;
    font-size: 0.8em;
    &:hover, &:focus {
        text-decoration: underline;
        outline: none;
    }
`

const NavButton = styled.button`
    border: none;
    background-color: white;        
    margin-right: 5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;    
    padding: 1rem 1rem 1rem 1rem;
    cursor: pointer;
    letter-spacing: 0.0625em;
    font-weight: bold;
    font-size: 0.8em;
    &:hover, &:focus {
        text-decoration: underline;
        outline: none;
    }
`


export function Navigation() {
    return (
        <NavigationWrapper>
            <HomeLogoWrapper>
                <HomeLogo href=""><Logo/></HomeLogo>
            </HomeLogoWrapper>
            <NavigationActions>
                <NavButton>
                    Search Music
                </NavButton>
                <NavButton>
                    Genres
                </NavButton>
                <NavButton>
                    Moods
                </NavButton>
                <NavButton>
                    Debut artists
                </NavButton>
            </NavigationActions>            
            <UserActionsWrapper>
                <LoginButton>
                    Login
                </LoginButton>
                <RegisterButton>
                    Register
                </RegisterButton>
            </UserActionsWrapper>
        </NavigationWrapper>
    )
}
