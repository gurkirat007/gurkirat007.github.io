import {
  Card,
  Divider,
  Grid,
  Image,
  Text,
} from "@mantine/core";
import classes from "./Home.module.less";
import { whatIDo } from "../../content/home";

function Info() {
  const card = whatIDo.map(
    (whatIDoCard) => {
      return (
        <Grid.Col span={6}>
          <Card
            classNames={{
              root: classes.mantineCardRoot,
            }}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
          >
            <Card.Section>
              <Image
                // fit="contain"
                w={"auto"}
                src={`/contentImages/icons/${whatIDoCard.icon}`}
                alt="Norway"
              />
              {/* abc */}
              {/* {whatIDoCard.icon} */}
            </Card.Section>

            <Text
              fw={500}
              classNames={{
                root: classes.contentParagraphHeading,
              }}
            >
              {whatIDoCard.heading}
            </Text>
            <Text
              fw={500}
              classNames={{
                root: classes.contentParagraph,
              }}
            >
              {whatIDoCard.text}
            </Text>
          </Card>
        </Grid.Col>
      );
    },
  );

  return card;
}

export default function WhatIDoSection() {
  return (
    <div>
      <div>
        <h3
          className={
            classes.contentSubHeading
          }
        >
          WHAT I DO
        </h3>
        <h1
          className={
            classes.contentHeading
          }
        >
          SERVICES
        </h1>
      </div>
      <div>
        <Grid>
          <Info />
        </Grid>
      </div>
      <Divider
        classNames={{
          root: classes.divider,
        }}
      />
    </div>
  );
}
