import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  margin: 10px 0;
  font-size: 1.2rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #0070f3;
  font-size: 1.2rem;
  transition: color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    color: #ff4081;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

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
