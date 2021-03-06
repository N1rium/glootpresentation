import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const RevenueModel = styled.div`
  padding: 0px 25px;
  display: flex;
  flex-direction: column;
  margin: 250px 0px;
  justify-content: center;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 10px;
`;

const TD = styled.td`
  border-radius: 6px;
  background: ${props => props.bg || 'rgb(244, 244, 244)'};
  color: ${props => props.color || '#000'};
  margin: 0px 10px;
  font-size: 1em;
  padding: 10px 20px;
  text-align: center;
`;

const Titles = styled.div`
  max-width: 720px;
`;

export default () => {
  return (
    <RevenueModel>
      <Fade bottom>
        <Titles>
          <h2>Pay to enter revenue model</h2>
          <p>Example: G-Loot hosts a $800 prize pool re-playable contest for 1000 players</p>
        </Titles>
      </Fade>
      <TableContainer>
        <Table>
          <tbody>
            <Fade bottom>
              <tr>
                <TD bg="transparent" colSpan="3"></TD>
                <TD>Price</TD>
                <TD>Volume</TD>
                <TD>Total</TD>
              </tr>
            </Fade>
            <Fade bottom>
              <tr>
                <TD bg="#68FF78" color="#000" colSpan="3">
                  Entry revenue
                </TD>
                <TD>$0.30</TD>
                <TD>1000 players</TD>
                <TD>$300</TD>
              </tr>
            </Fade>
            <Fade bottom>
              <tr>
                <TD bg="#68FF78" color="#000" colSpan="3">
                  Retry revenue
                </TD>
                <TD>$0.30</TD>
                <TD>2500 retries</TD>
                <TD>$750</TD>
              </tr>
            </Fade>
            <Fade bottom>
              <tr>
                <TD bg="#68FF78" color="#000" colSpan="3">
                  Service revenue
                </TD>
                <TD></TD>
                <TD>10% of prize pool</TD>
                <TD>$80</TD>
              </tr>
            </Fade>
            <Fade bottom>
              <tr>
                <TD bg="#68FF78" color="#000" colSpan="5">
                  Player generated revenue
                </TD>
                <TD>$1,130</TD>
              </tr>
            </Fade>
            <Fade bottom>
              <tr>
                <TD bg="rgb(116, 54, 255)" color="#fff" colSpan="5">
                  Prize Pool
                </TD>
                <TD>-$800</TD>
              </tr>
            </Fade>
          </tbody>
        </Table>
      </TableContainer>
    </RevenueModel>
  );
};
