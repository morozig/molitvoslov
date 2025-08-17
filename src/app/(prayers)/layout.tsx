import Reader from '../../components/Reader';

export default function PrayersLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Reader>
      {children}
    </Reader>
  );
}
