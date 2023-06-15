import React from 'react';
import X from '../../assets/X.svg'
import O from '../../assets/O.svg'
import './styles.css';

const Player = ({player}) => {
    const players = [];
    players['x'] = X;
    players['o'] = O;

    return (
    <button className='player'>
        <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`}/>
    </button>
    );
};

export default Player;