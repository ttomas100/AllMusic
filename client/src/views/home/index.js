import React, {
    useEffect, useState
  } from 'react'
  import useProfile from '../../state/spotify/hooks/useProfile'
  import useSearch from '../../state/spotify/hooks/useSearch'
  import useToken from '../../state/auth/hooks/useToken'
  import { useStateValue } from '../../state/'
  import Spinner from '../../components/spinner'
  import Container from './containers/container'
  import Content from './components/content'
  import Modal from '../../components/modal'
  import SearchForm from './containers/searchForm'
  import Results from './components/results'
  import Text from './components/text'
  import List from './components/list'
  import Card from './components/card'
  import Title from '../../components/title'
  import NotFound from './components/notFound'
  
  const Home = (props) => {
    const [isLoading, setListProfile] = useProfile();
    const [searchLoading, setSearch] = useSearch();
    const [{spotify}] = useStateValue();
    const [auth, setToken] = useToken();
    const [term, setTerm] = useState('');
    const [lastSearch, setLastSearch] = useState([]);
  
    useEffect(() => {
      if (!auth.token && props.location.hash) {
        setToken(props.location.hash);
      } else {
        setToken(localStorage.getItem('access_token'));
      }
      if (!spotify.list || spotify.list.length === 0) {
        setListProfile();
      }
      if ( localStorage.getItem(('last_result')) ) {
        setLastSearch(JSON.parse(localStorage.getItem('last_result')));
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const handleChange = async (e) => {
      await setTerm(e);
      if (e !== '') await setSearch(e);
    };
  
    const handleBlur = (e) => {
      let lastResult = spotify.list.albums.items;
      if (e !== '') {
        localStorage.setItem('last_result', JSON.stringify(lastResult));
      }
    };
  
    return ( 
      <Container>
        <Spinner show = {isLoading || searchLoading} />
        {
          !localStorage.getItem('access_token') && <Modal />
        }
        <Content>
          <SearchForm onChange={(e) => handleChange(e)} onBlur={(e) => handleBlur(e)}/>
          {
            term && <NotFound>Results found for "{term}"</NotFound>
          }
          {
            spotify.list && spotify.list.albums.items.length > 0 &&
            <Results>
              <Title>Albums</Title>
              <List>
                {
                  spotify.list &&
                  spotify.list.albums.items && spotify.list.albums.items.map(a =>
                    <Card key={a.id} title={a.name} artists={a.artists} images={a.images} id={a.id}/>
                  )
                }
              </List>
              {
                spotify.list && spotify.list.artists.items.length > 0 && <Title>Artist</Title>
              }
              <List>
                {
                  spotify.list &&
                  spotify.list.artists.items && spotify.list.artists.items.map(a =>
                    <Card key={a.id} title={a.name} images={a.images}/>
                  )  
                }
              </List>
              {
                spotify.list && spotify.list.tracks.items.lenght > 0 && <Title>Music</Title>
              }

            </Results>
          }
          {
            spotify.list && spotify.list.albums.items.length === 0 && <Text>No Results Found</Text>
          }
          {
            !spotify.list && lastSearch.length > 0 &&
              <Results>
                <Text>Last Albums Searched</Text>
                <List>
                  {
                    lastSearch.map((last) =>
                      <Card key={last.id} title={last.name} id={last.id} images={last.images} />
                    )
                  }
                </List>
              </Results>
          }
        </Content>
      </Container>
    )
  };
  
  export default Home