import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, extend } from '@react-three/fiber'
//import { OrbitControls, useGLTF } from '@react-three/drei'


export default function mainpage() {
  return (
    <Box textAlign={'center'} py={20}>
      <h1>GeojoLu's Pages</h1>
    </Box>
  )
}
