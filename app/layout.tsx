import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head title="Meta Messenger" />
      <body>{children}</body>
    </html>
  );
}
