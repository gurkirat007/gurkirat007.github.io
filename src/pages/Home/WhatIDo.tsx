import { Card, Divider, Grid } from "@mantine/core";
import classes from "./Home.module.less";
import { whatIDo } from "../../Typings/AppConstants";

function Info() {
  const card = whatIDo.map((whatIDoCard) => {
    return (
      <Grid.Col span={6}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            {/* <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        /> */}
            {/* abc */}
            {whatIDoCard.icon}
          </Card.Section>
          {whatIDoCard.text}
          {/* <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group> */}

          {/* <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text> */}

          {/* <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button> */}
        </Card>
      </Grid.Col>
    );
  });

  return card;
}

export default function WhatIDoSection() {
  return (
    <div>
      <div>
        <h3 className={classes.contentSubHeading}>WHAT I DO</h3>
        <h1 className={classes.contentHeading}>SERVICES</h1>
      </div>
      <div>
        <Grid>
          <Info />
        </Grid>
      </div>
      <Divider />
    </div>
  );
}
