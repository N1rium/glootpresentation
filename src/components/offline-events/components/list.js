import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const list = [
  { name: 'The international 2019', prize: '$34,330,069', game: 'dota 2', players: '90' },
  { name: 'The international 2018', prize: '$25,532,177', game: 'dota 2', players: '90' },
  { name: 'The international 2017', prize: '$24,687,919', game: 'dota 2', players: '90' },
  { name: 'The international 2016', prize: '$20,770,460', game: 'dota 2', players: '80' },
  { name: 'The international 2015', prize: '$18,429,613', game: 'dota 3', players: '80' },
  { name: 'Fortnite World Cup Finals 2019 - Solo', prize: '$15,287,500', game: 'Fortnite', players: '100' },
  { name: 'Fortnite World Cup Finals 2019 - Duo', prize: '$15,100,000', game: 'Fortnite', players: '100' },
  { name: 'The International 2014', prize: '$10,931,103', game: 'dota 2', players: '70' },
  { name: 'LoL 2018 World Championship', prize: '$6,450,000', game: 'LoL', players: '130' },
  { name: 'PUBG Global Championship 2019', prize: '$5,999,999', game: 'PUBG', players: '128' },
  { name: 'LoL 2016 World Championship', prize: '$5,070,000', game: 'LoL', players: '86' },
  { name: 'LoL 2017 World Championship', prize: '$4,946,969', game: 'LoL', players: '128' },
  { name: 'Fortnite Fall Skirmish Series - Clubs Standings', prize: '$4,000,000', game: 'Fortnite', players: '498' },
  { name: 'Overwatch League - Season 2 Playoffs', prize: '$3,500,000', game: 'Overwatch', players: '77' },
  { name: 'Fortnite World Cup Finals 2019 - Creative', prize: '$3,250,000', game: 'Fortnite', players: '32' },
  { name: 'DAC 2015', prize: '$3,057,521', game: 'dota 2', players: '100' },
  { name: 'The Boston Major 2016', prize: '$3,000,000', game: 'dota 2', players: '80' },
  { name: 'The Frankfurt Major 2015', prize: '$3,000,000', game: 'dota 2', players: '80' },
  { name: 'The Kiev Major 2017', prize: '$3,000,000', game: 'dota 2', players: '80' },
  { name: 'The Manila Major 2016', prize: '$3,000,000', game: 'dota 2', players: '80' },
];

const List = styled.div``;

const Table = styled.table`
  width: 100%;
  border-spacing: 10px;
`;

const TD = styled.td`
  border-radius: 6px;
  color: #000;
  margin: 0px 10px;
  font-size: 0.8em;
  padding: 10px 20px;
  text-align: ${props => props.align || 'left'};
  &.bold {
    font-weight: bold;
  }
`;

const Thead = styled.thead`
  > * {
    font-weight: bold;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export default ({}) => {
  return (
    <List>
      <TableContainer>
        <Table>
          <Thead>
            <tr>
              <TD>#</TD>
              <TD>Event</TD>
              <TD align="center">Game</TD>
              <TD>Prize pool</TD>
              <TD align="center">Players</TD>
            </tr>
          </Thead>
          <tbody>
            {list.map((item, i) => (
              <Fade key={i} duration={250}>
                <tr>
                  <TD>{i + 1}</TD>
                  <TD>{item.name}</TD>
                  <TD align="center">{item.game}</TD>
                  <TD className="bold">{item.prize}</TD>
                  <TD className="bold" align="center">
                    {item.players}
                  </TD>
                </tr>
              </Fade>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </List>
  );
};
