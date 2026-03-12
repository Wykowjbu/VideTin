import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VibeTin - Cổng thông tin giải trí & đời sống',
  description: 'Tin tức mới nhất, bảng xếp hạng giải trí, mẹo vặt hữu ích.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
