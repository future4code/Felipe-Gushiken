import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 10rem;
  margin-bottom: 10px;

  :hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }
`

export const DisplayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  justify-content: center;
  margin: 10px 10px;
`

export const MainContainer = styled.div`
  margin-top: -20px;
  font-family: 'Cinzel', serif;
  text-align: center;
  background: url("https://www.pixel4k.com/wp-content/uploads/2018/10/clear-stars-sky-night-rock-4k_1540141115.jpg") fixed;
  background-size: 100%;

  h1{
    color: white;
    padding: 20px;
  }

  button{
    margin-bottom: 15px;
    cursor: pointer;
    border-radius: 20px;
    background-color: #e6af75;
    padding: 6px;
    font-family: 'Cinzel', serif;

    :hover{
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      background-color: #f2e396;
    }
  }
`