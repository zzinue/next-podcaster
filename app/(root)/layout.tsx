

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <main> <p className="text-white-1">LEFT side</p> 
            {children} 
            <p className="text-white-1">RIGHT side</p>  </main>
    </div>
  );
}
