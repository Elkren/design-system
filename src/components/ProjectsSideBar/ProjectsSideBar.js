import React from 'react'
import styled from "styled-components";
import { Logo, PlusIcon } from "../../assets";



const SideBarWrapper = styled.div`      
    display: flex;  
    flex-direction: column;
    align-items: center;

    position: fixed;
    width: 205px;
    background-color: #22272a;
    height: 100vh;
    color: white;
    text-transform: uppercase;        
    text-align: center;
`
const HomeLogo = styled.a`
    display: inline-block;    
    height: 4em;
    width: 100%;
    padding-top: 8px;    
`

const ProjectActionWrapper = styled.div`    
    margin-top: 4rem;
`

const AddToProjectsButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;


    text-transform: uppercase; 
    color: white;
    background: none;
    border: white solid 1px;
    border-radius: 3px;
    padding: 0.75rem 1rem 0.75rem 1rem;
    margin-top: 1rem;

    & svg {
        margin-top: -1px;
        height: 20px;
        width: 20px;
        fill: white;
    }
`

export function ProjectsSideBar({children}) {
    return (
        <SideBarWrapper>
            <HomeLogo href=""><Logo/></HomeLogo>
            <ProjectActionWrapper>
            Your Projects
                <AddToProjectsButton>
                    <PlusIcon />
                    <span>New project</span>
                </AddToProjectsButton>
            </ProjectActionWrapper>
            {children}
        </SideBarWrapper>
    )
}
