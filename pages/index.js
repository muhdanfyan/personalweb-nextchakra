import Head from 'next/head'
import Image from 'next/image'
import DarkModeSwitch from '../components/DarkModeSwitch'
import Container from '../components/Container'
import { Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <Text>Hello World!</Text>
    </Container>
  )
}
