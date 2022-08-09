import { Container, Label } from "./styles";

export function Textarea({ title, placeHolder, ...rest }) {

  return (
    <>
      <Label>
        {title}
      </Label>
      <Container {...rest} placeholder={placeHolder}>
        {/* {placeHolder} */}
      </Container>
    </>
  )
}