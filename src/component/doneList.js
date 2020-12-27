import React from 'react';
import styled from 'styled-components';
import Card from './card'
import { connect } from 'react-redux';

const Done = styled.div`
    width:100%;
    postion:relative;
`
const DonListBox = styled.div`
    width:100%;
`
const DoneTitle = styled.div`
    border-bottom:1px solid #ccc;
    box-sizing:border-box;
    width:100%;
    line-height:50px;
    background:#F8F8F8;
    padding:0 25px;
    position:relative;
    &:before{
        content:'';
        position:absolute;
        top:16px;
        left:10px;
        width:5px;
        height:20px;
        background:#009F49;
    }
    @media (min-width: 500px) {
        padding:0 50px;
        &:before{
            left: 35px;
        }
    }
`

const doneList = ({todo})=>{
    if(todo.todoList){
      todo = todo.todoList.orders.filter(item =>( item.status.code === 3 || item.status.code === 4))  
    }else{
        todo = [];
    }
    return (
        <Done>
            <DoneTitle>已完成</DoneTitle>
            <DonListBox>
                {todo.map(item=>(<Card info={item} finish={true} key={item.date}/>))}
            </DonListBox>
        </Done>
    )
}

const mapStateToProps = state=>({todo: state.todoList});

export default connect(mapStateToProps)(doneList);