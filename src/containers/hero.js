import { Title, Text, Container, Button, Overlay, createStyles, keyframes } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 180,
    paddingBottom: 130,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    '@media (max-width: 520px)': {
    //   paddingTop: 80,
    //   paddingBottom: 50,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',
    transition: '0.2s ease-out',

    '&:hover': {
      backgroundColor: '##3294e260 !important',
      transition: '0.2s ease-out'
    },
  },
}));

export function HeroImageBackground() {
  const { classes, cx } = useStyles();

  return (
    <div className={`${classes.wrapper} animate-background`}>
      <Overlay color="#000" opacity={0.7} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          For all your avionics needs{' '}
          {/* <Text component="span" inherit className={classes.highlight}>
            any stack
          </Text> */}
        </Title>

        <Container size={640}>
          <Text size="lg" className={` ${classes.description}`}>
            <p className='shadow-black drop-shadow-md md:text-2xl'>We are a <span className='font-bold text-[#3294e2]'>world-class aviation consultancy</span>, providing avionics services to hundreds of clients, around the world. </p>
          </Text>
        </Container>

        <div className={classes.controls}>
          <Link to="/contact" >
            <Button className={`${cx(classes.control, classes.secondaryControl)} mx-auto w-fit bg-[#3294e2]`} size="lg">
                Get in Touch
            </Button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}