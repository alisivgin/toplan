import { useState } from 'react';
import {
  TextInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
  LoadingOverlay,
} from '@mantine/core';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { useForm, zodResolver } from '@mantine/form';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
});

export function SignInForm() {
  const [isSending, setIsSending] = useState(false);
  const { getInputProps, onSubmit, setErrors } = useForm({
    schema: zodResolver(schema),
    initialValues: {
      email: '',
    },
  });

  async function handleSendEmail({ email }: { email: string }) {
    setIsSending(true);
    const { ok, error } = await signIn('email', {
      email,
      // redirect: false,
    });
    // if (!ok) {
    //   setErrors({ email: error || 'Could not send email. Please try again.' });
    // }
    setIsSending(false);
  }

  return (
    <Container size={420} my={90}>
      <Title
        align="center"
        sx={theme => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Enter your email to get a login link
      </Text>

      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        radius="md"
        sx={{ position: 'relative' }}
      >
        <form onSubmit={onSubmit(handleSendEmail)}>
          <LoadingOverlay visible={isSending} />
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            {...getInputProps('email')}
          />
          <Button fullWidth mt="xl" type="submit">
            Send me a login link
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default SignInForm;
