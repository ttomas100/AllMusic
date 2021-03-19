import React from 'react'
import ReactPlayer from 'react-player'
import Container from '../components/player/playerContainer'
import PlayButton from '../components/player/playButton'
import PlayerRange from '../components/player/playerRange'
import PlayNow from '../components/player/playNow'
import SaveButton from '../components/player/saveButton'

const Player = (props) => {
  const { onClick, onChange, play, volume, playing, actual, onSave } = props;
  return (
    <Container>
      <PlayNow>Play Now: {actual}</PlayNow>
      <PlayButton onClick={onClick} play={play} />
      <SaveButton onClick={onSave} save={onSave} />
      <PlayerRange onChange={(e) => onChange(e)} volume={volume} />
      <ReactPlayer url={playing} playing={play} volume={volume} width="10px" height="20px" />
    </Container>
  )
};

export default Player;