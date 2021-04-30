import styled from 'styled-components'
import bearImg from '../../assets/imgs/bear.png'
import zzImg from '../../assets/imgs/z-1.gif'

export const Page404 = styled.section`
  min-height: 100vh;
  background: #8ddfea;
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;

  .info {
    position: relative;
    padding-top: 20px;
    text-align: left;
    z-index: 999;
    h1 {
      margin-bottom: 0.1rem;
      font-family: inherit;
      font-weight: 500;
      line-height: 1.2;
      font-size: 190px;
      font-weight: 700;
      color: #222a4b;
    }
    h2 {
      margin-bottom: 0.1rem;
      font-family: inherit;
      font-weight: 500;
      line-height: 1.2;
      font-size: 50px;
      font-weight: 300;
      color: #00a9e1;
    }
    p {
      margin-bottom: 0.2rem;
      font-family: inherit;
      font-weight: 300;
      line-height: 1.5;
      font-size: 20px;
      color: #000000;
    }
    .btn {
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      font-size: 18px;
      font-weight: 300;
      color: #ffffff;
      border: 0px solid;
      border-bottom: 2px solid;
      border-color: #007ca1;
      padding: 10px 41px;
      border-radius: 5px;
      background: none;
      display: inline-block;
      margin: 10px 0;
      background-color: #00a9e1;
      -webkit-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out;
      -ms-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      text-decoration: none;
      cursor: pointer;
    }
  }
  .bear {
    background-image: url(${bearImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 856px;
    margin: -340px 0 0px;
    position: relative;
    .zzz {
      background-image: url(${zzImg});
      background-position: center;
      background-repeat: no-repeat;
      width: 80px;
      height: 134px;
      position: absolute;
      left: 0px;
      bottom: 220px;
    }
  }
  @media (max-width: 1200px) {
    .bear {
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      width: 100%;
      height: 720px;
      margin: -120px 0 0px;
      position: relative;
    }
  }
  @media (max-width: 992px) {
    max-width: 960px;
  }
  @media (max-width: 440px) {
    .info {
      text-align: center;
      h1 {
        font-size: 90px;
        font-weight: 700;
        margin-top: 10px;
        color: #222a4b;
      }
    }
  }
  @media (max-width: 576px) {
    max-width: 540px;
    padding: 0;
    .bear {
      height: 330px;
      margin: -90px 0 10px;
      .zzz {
        background-size: 100%;
        width: 20px;
        height: 34px;
        bottom: 125px;
      }
    }
  }
`
