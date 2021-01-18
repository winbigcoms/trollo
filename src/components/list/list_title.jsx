import React, { useState, useCallback } from 'react';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone} from '@ant-design/icons';
import styled from 'styled-components';
import { Popover } from 'antd';
import Title from '../common/title';

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

const ListTitle = ({title}) => {

  const [ like, setLike ] = useState(false);
  const onClickLikeBtn = useCallback(() => {
    setLike(!like);
  }, [like]);
  return (
    <Container>
      <Title title={title}/>
      <PopOverPos>
      
      { like ?
      <HeartTwoTone style={{marginRight: 5}} onClick={onClickLikeBtn}/> 
      : <HeartOutlined style={{marginRight: 5}} onClick={onClickLikeBtn}/>
      }
      <Popover 
        content="Delete list"
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