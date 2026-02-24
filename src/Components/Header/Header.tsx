/*
import { useState } from "react";
import { Avatar, Burger, Container, Group, Menu, Tabs, Text, UnstyledButton, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconMessage,
  IconPlayerPause,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
} from "@tabler/icons-react";
 */
import cn from "clsx";

import { containerStyles } from "../Container/Container";
import Logotype from "../Logotype/Logotype";
import classes from "./Header.module.css";
import styles from "./Header.module.css";

const user = {
  name: "Jane Spoonfighter",
  email: "janspoon@fighter.dev",
  image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
};

export function Header() {
  return (
    <header className={classes.header}>
      <nav className={cn(containerStyles, styles.nav)}>
        <Logotype />
        <img className={styles.avatar} src={user.image} alt={user.name} />
      </nav>
    </header>
  );
}
