import React from 'react'
import { Box, HStack, Pressable, Icon, Avatar, FlatList } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { data } from '../../utils/list'
import Story from '../../components/Story'
import Feed from '../../components/Feed'

const Home = () => {
  return (
    <Box flex={1} backgroundColor="#f8f8f8" flexDirection="column">
      <HStack
        padding={4}
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        safeArea
      >
        <Box>
          <Pressable>
            <Icon as={Feather} name="menu" size={7} color="#000" />
          </Pressable>
        </Box>

        <Box flexDir="row" alignItems="center" rounded="md">
          <Pressable marginRight={4}>
            <Icon as={Feather} name="bell" size={7} color="#000" />
          </Pressable>

          <Pressable>
            <Avatar
              source={{ uri: 'https://sujeitoprogramador.com/steve.png' }}
              height={12}
              width={12}
            />
          </Pressable>
        </Box>
      </HStack>

      <Box paddingX={4} flexDir="row">
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => <Story data={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </Box>

      <Box paddingX={4}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Feed data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Box>
  )
}

export default Home
