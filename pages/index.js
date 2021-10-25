import Head from 'next/head'
import Image from 'next/image'
import DarkModeSwitch from '../components/DarkModeSwitch'
import Container from '../components/Container'
import { 
  Text,
  Heading,
  useColorMode,
  Flex,
  Stack
 } from '@chakra-ui/react'

export default function Home() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark : 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Home - Muhdan Fyan Syah Sofian</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='700px'
        px={2}

      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
        >
          <Heading mb={2} >Hi, I'm Muhdan Fyan</Heading>
          <Text color={colorSecondary[colorMode]}>
              ajalskdloaskl akpdkaspdkaskfwpklcvam akoaf afoawkfwa akfaoskfas kasfokasof aejfoafnag[hoaskf[ ag afgapwpeoavuneo aeowariawm iwpri ap[ri apwi r[paw]]]]
          </Text>
        </Flex>
      </Stack>
    </Container>
  )
}
