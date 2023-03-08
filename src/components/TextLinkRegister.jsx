// LINK "NÃO TENHO CADASTRO" OU "JÁ TENHO CADASTRO"

import styles from './TextLinkRegister.module.css';

function TextLinkRegister(props) {
  // eslint-disable-next-line react/prop-types
  const { text } = props;

  return (
    <p className={ styles.text }>{ text }</p>
  );
}

export default TextLinkRegister;
