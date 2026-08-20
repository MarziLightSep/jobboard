import Link from "next/link";

export default function Jobs() {
    return (
      <main>
        <h1>All Jobs</h1>
        <ul>
          <li>
            <Link href={"/jobs/1"}>Frontend Developer</Link>
          </li>
          <li>
            <Link href={"/jobs/2"}>Backend Developer</Link>
          </li>
          <li>
            <Link href={"/jobs/3"}>Fullstack Developer</Link>
          </li>
        </ul>
      </main>
    );
}