import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './card'

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

class undoList extends Component {
    render() {
        const {job} = this.props;
        const finished = false;
        return (
            <Undo>
                <UndoTitle>進行中</UndoTitle>
                <UndoListBox>
                    {job.map(item=>(<Card info={item} finish={finished}/>))}
                </UndoListBox>
            </Undo>
        );
    }
}

export default undoList;