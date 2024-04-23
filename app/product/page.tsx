import Link from "next/link";
import { Suspense } from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Fail to fetch data");
  }
  return res.json();
}

export default async function DashboardPage() {
  const data = await getData();
  return (
    <div>
      <h1>All List</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {(data || []).map((item: any) => (
          <Link href={'/product/' + item?.userId} key={item.userId}>
            <div className=''>{item?.title}</div>
          </Link>
        ))}
      </Suspense>
    </div>
  );
}
