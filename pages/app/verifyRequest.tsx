import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { Paper, Title, Text, Container, Button, Grid } from '@mantine/core';

export default function VerifyRequest() {
  const router = useRouter();
  return (
    <Container size={420} my={90}>
      <Title
        align="center"
        sx={theme => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Great!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        You&apos;re all set. Just click the button in email we just sent you.
      </Text>

      <Paper
        withBorder
        shadow="md"
        p={20}
        mt={30}
        radius="md"
        sx={{
          position: 'relative',
          height: '130px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Text>Don&apos;t you get the email? Try again</Text>
        <Grid grow>
          {/* <Grid.Col span={6}>
            <Button sx={{ width: '100%' }} onClick={() => router.back()}>
              Go back
            </Button>
          </Grid.Col> */}
          <Grid.Col span={6}>
            <Button sx={{ width: '100%' }} onClick={() => router.back()}>
              Try Again
            </Button>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {},
  };
}
