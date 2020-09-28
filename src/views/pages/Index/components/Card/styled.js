import styled from 'styled-components'

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  .card-item {
    @media only screen and (min-width: 576px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
    @media only screen and (min-width: 768px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
    @media only screen and (min-width: 992px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
    @media only screen and (min-width: 1200px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
  }
`
export const CardItem = styled.div`
  display: block;
  padding: 0 12px;
  margin-bottom: 24px;
  flex: 0 0 100%;
  max-width: 100%;
  min-height: 1px;
  box-sizing: border-box;
`

export const CardBody = styled.div`
  padding: 20px 24px 8px;
  color: rgba(0, 0, 0, 0.45);
  background: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  p {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-size: 30px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.85);
  }
  .content {
    position: relative;
    padding-bottom: 12px;
    height: 46px;
    display: flex;
    align-items: flex-end;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #f0f0f0;
    }
  }
  .info {
    margin-top: 9px;
    padding-top: 9px;
    span {
      margin-left: 8px;
      color: rgba(0, 0, 0, 0.85);
    }
  }
`
