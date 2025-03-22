import config from "@/config/default/config.json"

export default function HeadContent() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ff0000" />
      <meta name="google-site-verification" content={config.google_verify} />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}

