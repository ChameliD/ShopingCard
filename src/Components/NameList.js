import React, { Component } from 'react'
import Subject from './Subject'

function  NameList(){
    const names=['Ashini','Pubudu','Aparna']
    const nameList=names.map(name=><h2>{name}</h2>)
    return<div>{nameList}</div>
}

    
const SubjectList=()=>{
    const subjects=[
        {
            id:1,
            name:'Maths',
            creadit:3,
            preReq:'none'

        },
        {
            id:2,
            name:'Science',
            creadit:3,
            preReq:'Maths'

        },
        {
            id:3,
            name:'IT',
            creadit:3,
            preReq:'Mahrs'

        }
    ]
    const subjectList=subjects.map(subject=>(
        <Subject subject={subject}></Subject>
     ))
    return(
        <div>{subjectList}</div>
    )
}
export default SubjectList