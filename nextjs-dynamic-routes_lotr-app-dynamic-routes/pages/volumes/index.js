import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import { Merriweather_Sans } from "next/font/google";

const merriweatherSans = Merriweather_Sans({ subsets: ["latin"] });

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const handleRandomVolume = () => {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  };

  const StyledContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `;

  const StyledHeadline = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-family: ${merriweatherSans.style.fontFamily};
  `;

  const StyledP = styled.p`
    font-size: 1rem;
    margin-bottom: 20px;
    font-family: ${merriweatherSans.style.fontFamily};
  `;

  const StyledSL = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-family: ${merriweatherSans.style.fontFamily};
  `;

  const StyledUL = styled.ul`
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
  `;

  const StyledLI = styled.li`
    margin: 10px 0;
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: #0070f3;
    font-size: 1rem;
    font-family: ${merriweatherSans.style.fontFamily};
    transition: color 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      color: #ff4081;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    }
  `;

  const StyledButton = styled.button`
    background-color: #0070f3;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      background-color: #ff4081;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    }
  `;

  return (
    <>
      <Head>
        <title>LOTR: All Volumes</title>
      </Head>
      <StyledContainer>
        <StyledHeadline>The Lord of the Rings</StyledHeadline>
        <StyledP>{introduction}</StyledP>
        <StyledSL>All Volumes</StyledSL>
        <StyledUL>
          {volumes.map((volume) => (
            <StyledLI key={volume.key}>
              <StyledLink href={`/volumes/${volume.slug}`}>
                {volume.title}
              </StyledLink>
            </StyledLI>
          ))}
        </StyledUL>
        <StyledButton onClick={handleRandomVolume}>
          Go to a Random Volume!
        </StyledButton>
      </StyledContainer>
    </>
  );
}
