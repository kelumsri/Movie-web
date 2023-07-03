'use client'

import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Button, Input, Select } from '@chakra-ui/react';
import Image from "../(componants)/(addform)/uploadimage"

export default function FormikExample() {

  return (
    <Formik
      initialValues={{}}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.resetForm(); // Reset the form fields
          actions.setStatus(null); // Reset the form status
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name="name">
          {({ field, form }: { field: any; form: any }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Film name</FormLabel>
                <Input {...field} placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <FormControl>
            <FormLabel>Film category</FormLabel>
            <Select placeholder="Select category">
              <option>Action</option>
              <option>Thriler</option>
            </Select>
          </FormControl>

          <Field name="Director">
          {({ field, form }: { field: any; form: any }) => (
              <FormControl isInvalid={form.errors.Director && form.touched.Director}>
                <FormLabel>Director name</FormLabel>
                <Input {...field} placeholder="director" />
                <FormErrorMessage>{form.errors.Director}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="Cast Members">
          {({ field, form }: { field: any; form: any }) => (
              <FormControl isInvalid={form.errors['Cast Members'] && form.touched['Cast Members']}>
                <FormLabel>Cast Members</FormLabel>
                <Input {...field} placeholder="Cast Members" />
                <FormErrorMessage>{form.errors['Cast Members']}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="Summary">
          {({ field, form }: { field: any; form: any }) => (
              <FormControl isInvalid={form.errors.Summary && form.touched.Summary}>
                <FormLabel>Summary</FormLabel>
                <Input {...field} placeholder="Summary" />
                <FormErrorMessage>{form.errors.Summary}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Image/>
          <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
            Submit
          </Button>

            
        </Form>
      )}
    </Formik>
  );
}
