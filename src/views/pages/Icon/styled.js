import styled from 'styled-components'

export const IconWrap = styled.section``

export const IconItem = styled.div`
  margin-top: 24px;
  padding: 24px;
  background: #fff;
  border-radius: 4px;
  h2 {
    font-size: 16px;
  }
  ul {
    font-size: 0;
    li {
      display: inline-block;
      vertical-align: top;
      padding: 10px 0 0;
      width: 16.6%;
      height: 100px;
      text-align: center;
      font-size: 14px;
      box-sizing: border-box;
      border-radius: 4px;
      &:hover {
        color: #fff;
        background: #1890ff;
        .anticon {
          transform: scale(1.2);
        }
      }
      .anticon {
        margin: 12px 0 8px;
        font-size: 32px;
        transition: transform 0.3s ease-in-out;
      }
    }
  }
`
