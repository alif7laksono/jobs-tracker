import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Job Tracking App",
  description:
    "Simple online job tracking application for helping users to track their job applications",
  keywords: [
    "job application tracker",
    "career management",
    "job search organizer",
    "employment tracker",
    "application status manager",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
