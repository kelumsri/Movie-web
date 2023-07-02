'use client'
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(300);

export default function LeadGrid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Container my="md" className="w-full">
        <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />

          <Grid gutter="md">
            <Grid.Col style={{ background: 'red' }}>
              <div className="flex justify-center items-center h-full ">
                <span>kelum</span>
              </div>
            </Grid.Col>

            <Grid.Col span={6} style={{ background: 'green' }}>
              <div className="flex justify-center items-center h-full">
                <span>kelum</span>
              </div>
            </Grid.Col>

            <Grid.Col span={6} style={{ background: 'blue' }}>
              <div className="flex justify-center items-center h-full">
                <span>kelum</span>
              </div>
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
    </div>
  );
}
