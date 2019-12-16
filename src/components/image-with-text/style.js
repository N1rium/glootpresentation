import styled from 'styled-components';

const ImageWithText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  min-height: 50vh;
  background: #000;
  border: 30px solid rgb(17, 17, 17);
  box-shadow: 0px -9px 28px -8px rgba(0, 0, 0, 1);

  .phone {
    width: 1000px;
  }

  header {
    display: flex;
    align-items: center;
  }
`;

export { ImageWithText };
