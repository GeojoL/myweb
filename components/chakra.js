import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react'
import theme from '../lib/theme'

const Chakra = ({ cookie, children }) => {
  const colorModeManager =
    typeof cookie === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export default Chakra
export async function getServerSideProps({ req }) {
  return {
    props: req.heades.cookie ?? '',
  }
}
