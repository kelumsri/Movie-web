'use client'

// import { IconHeart } from '@tabler/icons-react';
// import {
//   Card,
//   Image,
//   Text,
//   Group,
//   Badge,
//   Button,
//   ActionIcon,
//   createStyles,
//   rem,
// } from '@mantine/core';

// const MoviePage = async ({ params }: { params: { id: string } }) => {
//   const Movie = await prisma.film.findUnique({
//     where: {
//       id: parseInt(params.id),
//     },
//   });
//   if (Movie) {
//     return (
//       // <div className="flex-col">
//       //   <div className="flex-1 space-y-4 p-8 pt-6">
//       //     {Movie.name}
//       //   </div>
//       // </div>
      
//     <div className="flex-1 space-y-4 p-8 pt-6 content-center Class
//     Properties
//     m-0	margin: 0px;
//     mx-10">
//       <Card withBorder radius="md" p="md" className={''}>
//       <Card.Section>
//       <Image src={Movie.image} alt={''} width={230} height={345} />
//       </Card.Section>

//       <Card.Section className="imagesection" mt="md">
//         <Group position="apart">
//           <h4>
//             {Movie.name}
//           </h4>
//           <Badge size="sm">{''}</Badge>
//         </Group>
//         <Text fz="sm" mt="xs">
//           {Movie.summary}
//         </Text>
//       </Card.Section>

//       {/* <Card.Section className={''}>
//         <Text mt="md" className={classes.label} c="dimmed">
//           Perfect for you, if you enjoy
//         </Text>
//         <Group spacing={7} mt={5}>
//           {features}
//         </Group>
//       </Card.Section> */}

//       <Group mt="xs">
//         <Button radius="md" style={{ flex: 1 }}>
//           Show details
//         </Button>
//         <ActionIcon variant="default" radius="md" size={36}>
//           <IconHeart size="1.1rem" className={"classes.like"} stroke={1.5} />
//         </ActionIcon>
//       </Group>
//     </Card>
//     </div>
//     );
//   } else {
//     return (
//       <div className="space-y-10 pb-10">
//         <p>No Movie found</p>
//       </div>
//     );
//   }
  
// };

// export default MoviePage;

import { IconHeart } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
} from '@mantine/core';

const MoviePage = async ({ params }: { params: { id: string } }) => {
  const Movie = await prisma.film.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (Movie) {
    return (
      <div className="flex-1 space-y-4 p-8 pt-6 content-center Class Properties m-0 margin: 0px; mx-10 mt-32">
        <Card withBorder radius="md" p="md" className={''}>
          <div className="flex">
            <div className="w-1/5">
              <Card.Section>
                <Image src={Movie.image} alt={''} width={230} height={345} />
              </Card.Section>
            </div>
            <div className="w-3/4">
              <Card.Section className="imagesection" mt="md">

                <Group position="apart">
                  <Text className="text-5xl text-amber-400" mt="xs" >{Movie.name}</Text>
                  <Text className="text-xl" mt="xs" >Directed by: {Movie.director}</Text>
                  <Text className="text-xl" mt="xs" >Cast Members: {Movie.Castmember}</Text>
                  <Badge size="sm">{''}</Badge>
                </Group>

                <Text fz="sm" mt="xs">
                  {Movie.summary}
                </Text>
              </Card.Section>

              {/* <Card.Section className={''}>
                <Text mt="md" className={classes.label} c="dimmed">
                  Perfect for you, if you enjoy
                </Text>
                <Group spacing={7} mt={5}>
                  {features}
                </Group>
              </Card.Section> */}

              <Group mt="xs">
                <Button radius="md" style={{ flex: 1 }}>
                  Show details
                </Button>
                <ActionIcon variant="default" radius="md" size={36}>
                  <IconHeart size="1.1rem" className={'classes.like'} stroke={1.5} />
                </ActionIcon>
              </Group>
            </div>
          </div>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="space-y-10 pb-10">
        <p>No Movie found</p>
      </div>
    );
  }
};

export default MoviePage;
