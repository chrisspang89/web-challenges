import { introduction, volumes } from "../lib/data";
import Link from "next/link";

export default function OverviewPage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="volumes/the-fellowship-of-the-ring">Halww</Link>
        </li>
      </ul>
    </div>
  );
}
