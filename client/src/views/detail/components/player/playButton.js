import React from 'react'
import styled from 'styled-components'
import theme from '../../../../components/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconPlay = styled(FontAwesomeIcon)`
  font-size: ${theme.fontSizes.title};
  color: ${theme.colors.primary};
  cursor: pointer;
  flex: 1;
  transition: all ease 0.3s;
  margin: 12px
`;

const PlayButton = (props) => (
  <IconPlay icon={props.play ? "pause-circle" : "play-circle"} onClick={() => props.onClick()}/>
);

export default PlayButton;