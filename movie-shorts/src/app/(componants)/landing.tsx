'use client'
import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://preview.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?auto=webp&s=9659527da9196c27a8875200b41d20a8e901c341)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: rem(700),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export default function HeroContentLeft() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className="text-6xl text-white">Discover the Power of Movies with <span className="text-amber-300 ">Movie-Short!</span></Title>
        <Text className={classes.description} size="xl" mt="xl">
        Movie-Short is a sleek and user-friendly website for captivating short films. 
        Explore diverse genres, stay updated with the latest releases, and connect with a 
        vibrant movie enthusiast community. Dive deeper into the world of short films 
        through exclusive interviews and behind-the-scenes features. 
        Let Movie-Short be your go-to for a quick cinematic escape or curated movie nights.
        </Text>

        <Link href="/sign-in" passHref>
        <Button variant="gradient" size="xl" radius="xl" className={classes.control} 
        style={{ color: '#ffffff', background: 'linear-gradient(45deg, #FFD700, #FFA500)' }}
       >
            Sign In 
          </Button>
        </Link>
      </Container>
    </div>
  );
}