import Head from 'next/head';
// import { useUser } from "@auth0/nextjs-auth0/client"

export default function Thankyou() {
  // const { user, error, isLoading } = useUser();
  return (
    <>
      <Head>
        <title>Shop App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Thank You </h1>
    </>
  );
}
