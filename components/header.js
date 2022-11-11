import { gql } from "@apollo/client";
import Link from "next/link";
import style from "./header.module.css";

export default function Header({ siteTitle, siteDescription, menuItems }) {
  return (
    <header className={style.header}>
      <Link href="/" className={style.brand}>
        <h2 className={style.siteTitle}>{siteTitle}</h2>
        <p className={style.siteDescription}>{siteDescription}</p>
      </Link>

      <nav className={style.nav}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={item.uri}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

Header.fragments = {
  entry: gql`
    fragment HeaderFragment on RootQuery {
      generalSettings {
        title
        description
      }
      primaryMenuItems: menuItems(where: { location: PRIMARY }) {
        nodes {
          id
          uri
          path
          label
          parentId
          cssClasses
          menu {
            node {
              name
            }
          }
        }
      }
    }
  `,
};
