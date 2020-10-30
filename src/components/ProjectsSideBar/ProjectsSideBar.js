import React from 'react'
import styled from "styled-components";
import { PlusIcon } from "../../assets";

const SideBarWrapper = styled.div`      
    display: flex;  
    flex-direction: column;
    align-items: center;    

    width: 100%;
    height: 100%;
    
    background-color: #22272a;    
    color: white;
    text-transform: uppercase;        
    text-align: center;
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
