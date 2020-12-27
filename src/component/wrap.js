import React, { Component } from 'react';
import styled from 'styled-components';
import DoneList from './doneList';
import UndoList from './undoList';
import CardList from '../todo.json'

const thingUndo = CardList.orders.filter(item =>( item.status.code === 1 || item.status.code === 2));
const thingDone = CardList.orders.filter(item =>( item.status.code === 3 || item.status.code === 4));

const Wrap = styled.div`
    border:1px solid #ccc;
    display:flex;
    flex-direction:column;
    width:100%;
    @media (min-width: 500px) {
        max-width:600px;
        align-item:center;
    }
`

class wrap extends Component {
    
    render() {
        return (
            <Wrap>
                <UndoList job={thingUndo}/>
                <DoneList job={thingDone}/>
            </Wrap>
        );
    }
}

export default wrap;