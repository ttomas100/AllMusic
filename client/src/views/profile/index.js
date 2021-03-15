import React, {
  useEffect, useState
} from 'react'
import useAlbum from '../../state/spotify/hooks/useAlbum'
import useTrack from '../../state/spotify/hooks/useTrack'
import Container from '../detail/containers/container'
import Content from '../detail/components/content'
import BackButton from '../detail/components/back'
import DetailAlbum from '../detail/components/detail'
import InfoAlbum from '../detail/components/infos'
import MusicsList from '../detail/components/musicsList'
import MusicsItem from '../detail/components/musicsItem'
import Player from '../detail/containers/player'
import Spinner from '../../components/spinner'


const Profile = (props) => {
  const [spotify, isLoading, setAlbum] = useAlbum();
  const [track, loading, setMusic] = useTrack();
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [playing, setPlaying] = useState('');
  const [actualMusic, setActualMusic] = useState('');

  useEffect(() => {
    setAlbum(props.match.params.artist);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePlayMusic = (trackSelected) => {
    if(!track.music || track.music.length === 0) {
      setMusic(trackSelected.id);
    }
    setPlay(true);
    setPlaying(trackSelected.preview_url);
    setActualMusic(trackSelected.name);
  };

  const handleMusic = () => {
    setPlay(!play);
  };

  const handleChangeVolume = (e) => {
    setVolume(Number(e));
  };

  return (
    <Container>
      <Spinner show={isLoading || loading} />
      <Content>
        <BackButton link='/home'>Back</BackButton>
        {
          spotify.album &&
            <DetailAlbum>
              <InfoAlbum {...spotify.album} />
              <MusicsList>
              {
                spotify.tracks && spotify.tracks.items.map((track) =>
                  <MusicsItem key={track.id} {...track} onClick={() => handlePlayMusic(track)}/>
                )
              }
              </MusicsList>
            </DetailAlbum>
          }
        {
          track.music && <Player music={track.music} actual={actualMusic} playing={playing} play={play} volume={volume} onClick={() => handleMusic()} onChange={(e) => handleChangeVolume(e) }/>
        }
      </Content>
    </Container>
  )
};

export default Profile