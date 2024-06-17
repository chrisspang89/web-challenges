import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return null;
  }
  const { title, description, cover, books } = volume;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Link href="/volumes" passHref>
          <StyledLink>← All Volumes</StyledLink>
        </Link>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <List>
          {books.map(({ ordinal, title }) => (
            <ListItem key={title}>
              {ordinal}: <strong>{title}</strong>
            </ListItem>
          ))}
        </List>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
        <Navigation>
          {previousVolume ? (
            <Link href={`/volumes/${previousVolume.slug}`} passHref>
              <StyledLink>← Previous Volume: {previousVolume.title}</StyledLink>
            </Link>
          ) : null}
          {nextVolume ? (
            <Link href={`/volumes/${nextVolume.slug}`} passHref>
              <StyledLink>Next Volume: {nextVolume.title} →</StyledLink>
            </Link>
          ) : null}
        </Navigation>
      </Container>
    </>
  );
}
