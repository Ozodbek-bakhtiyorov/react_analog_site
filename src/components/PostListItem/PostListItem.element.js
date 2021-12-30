import styled from 'styled-components';
export const PostListItemContent = styled.li`
  padding: 20px 0;
  cursor: pointer;
  padding: 20px;
  border-radius:3px ;
  border-bottom:1px solid rgba(255, 255,255, .3);
  &:hover{
    background: rgba(0 , 0, 0, 0.3);
  }
  position: relative;
`;
export const Label = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`
export const Buttons = styled.div`
  .fas {
    font-size: 20px;
  }

  button {
    outline: none;
    border: none;
    background: transparent;

    &:not(:last-child) {
      margin-right: 10px;
    }

    &:first-child {
      color: #5d5454;
    }
  }
`
export const Like = styled.div`
  transition: all .3s ease;
  right:${({like})=>(like ? '5px':'-20px')};
  position: absolute;
  display: block;
  opacity:${({like})=>(like ? '1':'0')};
  color:red;
`