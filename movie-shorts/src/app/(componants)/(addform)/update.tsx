'use client'
 import { createStyles, rem, Select, TextInput } from '@mantine/core';
 import { DatePickerInput } from '@mantine/dates';
const useStyles = createStyles((theme) => ({
   root: {
     position: 'relative',
   },
  input: {
     height: rem(54),
     paddingTop: rem(18),
   },
   label: {
     position: 'absolute',
     pointerEvents: 'none',
     fontSize: theme.fontSizes.xs,
     paddingLeft: theme.spacing.sm,
     paddingTop: `calc(${theme.spacing.sm} / 2)`,
     zIndex: 1,
   },
 }));

 export default function ContainedInputs() {
   // You can add these classes as classNames to any Mantine input, it will work the same
   const { classes } = useStyles();

   return (
     <div>
       {/* <TextInput label="Movie Name" placeholder="" classNames={classes} />

       <Select
         mt="md"
         withinPortal
         data={['Action', 'Romance', 'Horr', 'Thriller']}
         placeholder=""
         label="Movie Category"
         classNames={classes}
       /> */}
        <TextInput label="Movie Name" placeholder="" classNames={classes} />
       <TextInput label="Director" placeholder="" classNames={classes} />
       <TextInput label="Cast members" placeholder="" classNames={classes} />
       <TextInput label="Movie Summery" placeholder="" classNames={classes} />
      
     </div>
   );
 }
