export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // check if the user is logged in as admin

  return <main className="flex h-screen w-full font-inter">{children}</main>;
}
