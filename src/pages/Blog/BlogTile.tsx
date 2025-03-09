import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import {
  getMediumData,
  // selectIsLoading,
  selectMediumData,
} from "../../slices/AppSlices";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Hooks";
import {
  Button,
  Card,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { RoutePaths } from "../../Typings/enums";
import { useNavigate } from "react-router-dom";
import {
  getThumbnail,
  getTrailer,
} from "./BlogHelperFunction";
import classes from "./Blogs.module.less";

export default function ListBlogs() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const mediumData = useAppSelector(
    selectMediumData,
  );
  // const isLoading = useAppSelector(
  //   selectIsLoading,
  // );

  useEffect(() => {
    void dispatch(getMediumData());
  }, [dispatch]);

  getThumbnail(
    mediumData?.items[0].description,
  );

  return mediumData != null
    ? mediumData.items.map(
        (item, index) => {
          return (
            <Card
              classNames={{
                root: classes.blogTile,
              }}
            >
              <Card.Section>
                <Image
                  src={getThumbnail(
                    mediumData.items[
                      index
                    ].description,
                  )}
                  alt="Norway"
                />
              </Card.Section>

              <Group
                justify="space-between"
                mt="md"
                mb="xs"
              >
                <Text
                  classNames={{
                    root: classes.blogTitle,
                  }}
                >
                  {item.title}
                </Text>
              </Group>

              <Text
                size="sm"
                c="dimmed"
              >
                {getTrailer(
                  mediumData.items[
                    index
                  ].description,
                )}
              </Text>

              <Button
                classNames={{
                  root: classes.readMoreButton,
                }}
                onClick={() => {
                  navigate(
                    `${RoutePaths.Blog}/${index}`,
                  );
                }}
              >
                Read more
              </Button>
            </Card>
          );
        },
      )
    : "no blog";
  // return "hello";
}
