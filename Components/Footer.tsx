import { FC, ReactElement } from 'react'
import { Container } from '@material-ui/core'

interface IFooter {}

const Footer: FC<IFooter> = ({}): ReactElement => {
  return <Container>&copy; 2021 | typedashutosh </Container>
}

export default Footer
