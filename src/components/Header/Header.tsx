import { useState } from "react";
import { Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { navBarLinks } from "../../Typings/AppConstants";
import { selectCurrentTab } from "../../slices/AppSlices";
import { useAppSelector } from "../../Hooks";

export function Header() {
  const navigate = useNavigate();

  const activeTab = useAppSelector(selectCurrentTab);
  const [opened, { toggle }] = useDisclosure(false);

  const items = navBarLinks.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={activeTab.link === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        navigate(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <MantineLogo size={28} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
