import React from 'react';
import { Card, Button } from 'antd';
import styled from 'styled-components';
import ListTitle from './list_title';
import CardContent from './card_content';
import { Draggable } from 'react-beautiful-dnd';

const ListContainer = styled(Card)`
  width: 300px;
  border-radius: .2em;
  background-color: #e9e9e9;
  display: inline-block;
  margin: .5em;
  position: relative;
`

const AddCard = styled(Button)`
  background: transparent;
  border: 0;
  position: relative;
  bottom: -10px;
  left: -10px;
  &:hover {
    background-color: transparent;
  }
`

const CardContainer = styled(Card)`
  margin-bottom: .5em;
  border-radius: 8px;
`

const CardCover = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${props => props.color};
  border-radius: 8px;
`;

const List = ({list}) => {
  return (
    <Draggable draggableId={list.title} index={parseInt(list.id)}> 
      {provided => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <ListContainer title={<ListTitle title={list.title}/>}
            style={{position: 'relative'}}
            headStyle={{borderBottom: "0"}}
            bodyStyle={{padding: "10px"}}
          > 
          {/* Cards map zone */}
            {list.cards?.map( v => {
              if(v.cover) {
                const cover = v.cover;
                console.log(cover);
                return (
                <CardContainer 
                  id={v.id} 
                  index={v.id} 
                  key={v.id}
                  bodyStyle={{padding: "1.6px 8px", paddingBottom: '20px'}}
                  cover={<CardCover color={cover}/>}
                >
                  <CardContent card={v}/>
                </CardContainer> 
              )
            } else {
              return (
                <CardContainer 
                  id={v.id} 
                  index={v.id} 
                  key={v.id}
                  bodyStyle={{padding: "1.6px 8px"}}
                >
                  <CardContent card={v}/>
                </CardContainer> 
              )
            }})}
            <AddCard>+ Add another card</AddCard>
          </ListContainer>
          </div>
      )
      }
      </Draggable>
  )
}

export default List