import Body from "./body";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <Body>{children}</Body>
    </html>
  );
}
