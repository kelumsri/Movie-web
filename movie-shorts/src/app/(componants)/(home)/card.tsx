"use client"

import React, { useEffect, useState } from 'react';
import { UserButton } from "@clerk/nextjs"; 
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';


interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

interface Film {
  id: number;
  name: string;
  category: string;
  director: string;
  Castmember: string;
  image: string;
  summary: string;
  date: string;
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const ArticleList = () => {

    const [films, setFilms] = useState<Film[]>([null]);

  useEffect(() => {
    fetchMovieData();
  }, );

  const fetchMovieData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/filmadd'); // Update with your backend API endpoint for fetching films
      const data = await response.json();
      if (response.ok) {
        if (Array.isArray(data.Film)) {
          
          setFilms(data.Film);
        } else {
          console.log('Movie data is not an array:', data);
        }
      } else {
        console.log('Failed to fetch movie data:', data);
      }
    } catch (error) {
      console.log('Error while fetching movie data:', error);
    }

    console.log(films); 
  };

  const router = useRouter();

const movieclick=(id:number) =>{
  router.push(`/${id}`)
}



  return (
    <Container className='mt-0' maxW={'7xl'} p="12">
      <Heading as="h1">MOVIE-SHORTS</Heading>
      
      <Heading as="h2" marginTop="5">
        <div>
        Your Favourite Movie Here
        </div>
      </Heading>

      <Divider marginTop="5" />

      <Wrap spacing="30px" marginTop="5">
        
          {films[0] ? (films.map((film: any) => (
           
              <WrapItem  width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }} key={film.id}>
             <Box w="100%">
               <Box borderRadius="lg" overflow="hidden">
                 <Link href={`/${film.id}`}  textDecoration="non" _hover={{ textDecoration: 'none' }}>
                   <Image
                     transform="scale(1.0)"
                     src={film.image}
                     alt="some text"
                     objectFit="contain"
                     width="100%"
                     transition="0.3s ease-in-out"
                     _hover={{
                       transform: 'scale(1.05)',
                     }}
                   />
                 </Link>
               </Box>
              
               <Heading fontSize="xl" marginTop="2">
                 <Link  textDecoration="none" _hover={{ textDecoration: 'none' }}>
                   {film.name}
                 </Link>
               </Heading> 
             </Box>
           </WrapItem>
             

          ))) : (<></>)}

        
      </Wrap>
      
    </Container>
  );
};

export default ArticleList;
