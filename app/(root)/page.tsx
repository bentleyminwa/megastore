function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Homepage() {
  await delay(2000);

  return <div>Home</div>;
}
