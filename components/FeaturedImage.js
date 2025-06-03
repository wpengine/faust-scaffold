import Link from "next/link";
import Image from "next/image";
import styles from "../styles/featured-image.module.css";

export function FeaturedImage({
  post,
  classNames = "h-48 my-9 relative",
  uri = false,
  title = "",
}) {
  if (!post.featuredImage?.node?.sourceUrl) {
    return "";
  }

  return (
    <div className={styles.wrapper + " " + classNames}>
      {typeof uri === "string" && uri.trim() !== "" ? (
        <Link href={uri} title={title} className={styles.link}>
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
        </Link>
      ) : (
        <Image
          src={post.featuredImage.node.sourceUrl}
          alt={post.featuredImage.node.altText || post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
      )}
    </div>
  );
}
