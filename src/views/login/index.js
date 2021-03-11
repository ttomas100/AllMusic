import React, { useEffect } from 'react'
import useLogin from '../../state/auth/hooks/useLogin'
import Container from './containers/container'
import Button from '../../components/button'
import AllMusic from '../../assets/images/allMusic.png'
import Logo from './components/logo'

const Login = (props) => {
  const { from } = props.location.state || {from: {pathname: "/home"}};
  const [auth, setLogin] = useLogin();

  const handleLogin = async () => {
    await setLogin();
  };

  useEffect(() => {
    if (auth.logged) {
      props.history.push(from);
    }
  }, [auth]);

  return (
    <Container>
      <Logo src={AllMusic} alt="All Music" />
      <Button onClick={() => handleLogin()}>Login</Button>
    </Container>
  )
};

export default Login
