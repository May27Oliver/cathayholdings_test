import React, { Component } from 'react';
import styled from 'styled-components';
import DoneList from './doneList';
import UndoList from './undoList';
import CardList from '../todo.json';
import store from '../redux/store';

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
function getAPI(info){
    const action = {
        type:'SET_CURRENT_TODOLIST',
        payload:info
    }
    store.dispatch(action);
}
class wrap extends Component {
    componentDidMount() {
        getAPI(CardList);
    }
    render() {
        return (
            <Wrap>
                <UndoList/>
                <DoneList/>
            </Wrap>
        );
    }
}

export default wrap;