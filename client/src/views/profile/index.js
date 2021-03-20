import React, {useEffect, useState} from 'react'
import useAlbum from '../../state/spotify/hooks/useAlbum'
import useTrack from '../../state/spotify/hooks/useTrack'
import Container from '../detail/containers/container'
import Content from '../detail/components/content'
import BackButton from '../detail/components/back'
import Spinner from '../../components/spinner'
import '../../components/profileNavLink.css'
import { loadPlayList } from '../../api/crudApi'



const Profile = (props) => {
  const [spotify, isLoading, setAlbum] = useAlbum();
  const [track, loading, setMusic] = useTrack();
  const [usePlayList, setPlayList] = useState([]);



  useEffect(() => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleMostrar = async ()=>{
    const prof = localStorage.getItem('profile') || null;

    const playLists =  await loadPlayList(prof);

    setPlayList([
      ...usePlayList,
      ...playLists
    ]);

    console.log(usePlayList)
  }


  return (
    <Container>
      <Spinner show={isLoading || loading} />
      <Content>
        <BackButton link='/home'>Back</BackButton>
        <button className = "profileNavLink" onClick={handleMostrar}> Show PlayList </button>
        <table>
        {
          usePlayList.map((p) => 
          <tr key={p._id} >
            <td><a href={p.previewUrl} target="blank" style={{color: "grey", 
            fontFamily: "georgia", fontSize: "30px", font: "bold", textDecoration: "none"}}>{p.track}</a></td>
          </tr> 
          )
        }
        </table>
      </Content>
    </Container>
  )
};

export default Profile