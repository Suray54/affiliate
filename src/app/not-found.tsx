import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page">
      <div className="max-w-[80vw] mx-auto">
        <h1>This page can not be found.</h1>
        <Link href={"/"}>Go to home</Link>
      </div>
    </div>
  );
}
