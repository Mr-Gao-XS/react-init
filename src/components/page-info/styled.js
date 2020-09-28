import styled from 'styled-components'

export const PageInfoWrap = styled.div`
  padding: 20px 20px 30px;
  background: #fff;
  border-radius: 4px;
  h1 {
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #efefef;
    }
  }
`
