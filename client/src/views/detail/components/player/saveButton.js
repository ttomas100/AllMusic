import React from 'react'
import styled from 'styled-components'
import theme from '../../../../components/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconSave = styled(FontAwesomeIcon)`
  font-size: ${theme.fontSizes.title};
  color: #4B0082;
  cursor: pointer;
  flex: 1;
  transition: all ease 0.1s;
  margin: 12px
`;

const SaveButton = (props) => (
  <IconSave icon={props.save ? "save" : "save"} onClick={() => props.onClick()}/>
);

export default SaveButton;