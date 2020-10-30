import React from 'react'
import styled from "styled-components";


const NavigationWrapper = styled.div`    
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 4em;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 15px;
    width: calc(100% - 205px);
    margin-left: 205px;
    overflow: hidden;
    white-space: nowrap;
`

const NavigationActions = styled.div`
    display: flex;    
    height: 100%;
    margin-right: auto;
    &:first-child{
        padding-left: 1rem;
    }
`

const UserActionsWrapper = styled.div`    
    display: flex;   
    justify-content: space-between;
    margin: 10px;
`

const RegisterButton = styled.button`
    border: none;
    border-radius: 2px;
    text-transform: uppercase;
    background-color: #22272a;
    color: white;
    font-size: 0.8rem;
    line-height: 1.5;
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
    margin-right: 5px;
`

const NavButton = styled.button`
    border: none;
    background-color: white;        
    margin-right: 5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;    
    padding: 1rem 1rem 1rem 1rem;
`


export function Navigation() {
    return (
        <NavigationWrapper>
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
