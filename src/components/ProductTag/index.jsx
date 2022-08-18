import { Container } from "./styles";

export function ProductTag({title, ...rest}){  
  return(
    <Container {...rest}>
        {title}
    </Container>
  )
}