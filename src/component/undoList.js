import React from 'react';
import styled from 'styled-components';
import Card from './card';
import { connect } from 'react-redux';

const Undo = styled.div`
    width:100%;
`
const UndoListBox = styled.div`
    width:100%;
`

const UndoTitle = styled.div`
    border-bottom:1px solid #ccc;
    box-sizing:border-box;
    width:100%;
    line-height:50px;
    padding:0 50px;
    background:#F8F8F8;
    position:relative;
    &:before{
        content:'';
        position:absolute;
        top: 16px;
        left: 35px;
        width:5px;
        height:20px;
        background:#009F49;
    }
`

const undoList =({todo})=>{
    todo = todo.todoList.orders.filter(item =>( item.status.code === 1 || item.status.code === 2))
    return (
        <Undo>
            <UndoTitle>進行中</UndoTitle>
            <UndoListBox>
                {todo.map(item=>(<Card info={item} finish={false} key={item.date}/>))}
            </UndoListBox>
        </Undo>
    );
}

const mapStateToProps = state=>({todo: state.todoList});

export default connect(mapStateToProps)(undoList);