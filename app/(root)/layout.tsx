

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <main> <p className="text-white-1">left side</p> 
            {children} 
            <p className="text-white-1">right side</p>  </main>
    </div>
  );
}
