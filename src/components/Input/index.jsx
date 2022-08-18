import { Container } from "./styles";

export function Input({ title, placeHolder, icon: Icon, ...rest }) {
  return (
    <Container>
      <label> {title} </label>
      {Icon && <Icon size={20} />}
      <input placeholder={placeHolder} {...rest} />
    </Container>
  )
}