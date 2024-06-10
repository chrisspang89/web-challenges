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
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }
        h3 {
          font-size: 1.8rem;
          margin-bottom: 15px;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin: 10px 0;
        }
        a {
          text-decoration: none;
          color: #0070f3;
          font-size: 1.2rem;
        }
        a:hover {
          text-decoration: underline;
        }
        button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          cursor: pointer;
          border-radius: 5px;
          margin-top: 20px;
        }
        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </>
  );
}
