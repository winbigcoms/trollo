import React, { useState, useCallback } from 'react';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone} from '@ant-design/icons';
import styled from 'styled-components';
import { Popover } from 'antd';
import Title from '../common/title';
import { useDispatch, useSelector } from 'react-redux';
import { removeListRequestAction } from '../../reducers/board';
import { likeListRequestAction, unlikeListRequestAction } from '../../reducers/user';


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  position: relative;
`
const PopOverPos = styled.div`
    position: absolute;
    right: 0;
    border: 0;
    background: transparent;
`;

const ListTitle = ({title, id}) => {
  const dispatch = useDispatch();

  const likes = useSelector(state => state.user)
  console.log(likes.user.like)
  const likedBoards = likes.user.like
  console.log(likedBoards)
  const onClickLikeBtn = () => {
    if(likedBoards.includes(id)){
      dispatch(unlikeListRequestAction(id)) 
    } else {
      dispatch(likeListRequestAction(id))
    }
  };

  const onClickRemoveList = () => {
    dispatch(removeListRequestAction(id));
  };
  return (
    <Container>
      <Title title={title} type="list" id={id}/>
      <PopOverPos>
      
      { likedBoards.includes(id) ?
      <HeartTwoTone style={{marginRight: 5}} onClick={onClickLikeBtn}/> 
      : <HeartOutlined style={{marginRight: 5}} onClick={onClickLikeBtn}/>
      }
      <Popover 
        content={(
          <div onClick={onClickRemoveList}>
            Delete List
          </div>
        )}
        placement="right"
        overlayInnerStyle={{cursor: "pointer"}}
      >
        <EllipsisOutlined style={{transform: "rotate(90deg)"}}/>
      </Popover>
      </PopOverPos>
    </Container>
  )
}

export default ListTitle
