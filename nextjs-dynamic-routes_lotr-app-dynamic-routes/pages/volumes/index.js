import Link from "next/link";
import { introduction, volumes } from "../../lib/data";

import Head from "next/head";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const handleRandomVolume = () => {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  };

  return (
    <>
      <Head>
        <title>LOTR: All Volumes</title>
      </Head>
      <div className="container">
        <h1>The Lord of the Rings</h1>
        <p>{introduction}</p>
        <h3>All Volumes</h3>
        <ul>
          {volumes.map((volume) => (
            <li key={volume.key}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          ))}
        </ul>
        <button onClick={handleRandomVolume}>Go to a Random Volume!</button>
      </div>
    </>
  );
}
