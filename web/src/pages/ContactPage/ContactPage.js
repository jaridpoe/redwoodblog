import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import {
  Form,
  Label,
  TextField,
  Submit,
  TextAreaField,
  FieldError,
} from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <BlogLayout>
        <Form onSubmit={onSubmit}>
          <Label name="name" />
          <TextField
            name="name"
            errorClassName="error"
            validation={{
              required: true,
              pattern: { value: /[^@]+@[^.]+\..+/ },
            }}
          />
          <FieldError name="name" />

          <Label name="email" />
          <TextField
            name="email"
            errorClassName="error"
            validation={{ required: true }}
          />
          <FieldError name="email" />

          <Label name="message" />
          <TextAreaField
            name="message"
            errorClassName="error"
            validation={{ required: true }}
          />
          <FieldError name="message" />

          <Submit>Save</Submit>
        </Form>
      </BlogLayout>
    </>
  )
}

export default ContactPage
