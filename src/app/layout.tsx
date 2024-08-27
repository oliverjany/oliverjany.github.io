import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EASY-GOLF",
  description: "Egal welche Größe der Golfer hat, die Winkel bleiben gleich. Die wird durch individuelle Anpassung der Schlägerlänge erreicht.",
  keywords: [
    'PXG',
    'TourEdge',
    'Exotics',
    'Golfspiel',
    'Golfball',
    'Golfschläger',
    'golf club',
    'Eisen',
    'irons',
    'Holz',
    'Wood',
    'Wedges',
    'Putter',
    'Chipper',
    'chippen',
    'pitchen',
    'Driver',
    'Golfset',
    'Schlägerkopf',
    'club head',
    'Golfgriff',
    'golf grip',
    'grip size',
    'Golfschaft',
    'golf shaft',
    'Fitting',
    'club fitting',
    'Schwunggewicht',
    'swing weight',
    'Ferrule',
    'Tape',
    'Jeff Summitt',
    'Dave Tutelman',
    'Tom Wishon',
    'Ralph Malty',
    'biometrisch',
    'geometrisch',
    'Schlägerbau',
    'club making',
    'club building',
    'Golfkomponente',
    'golf components',
    'Schwerpunkt',
    'balence point',
    'Golfgeschäft',
    'Pro-Shop',
    'Golf',
    'Golfer',
    'Golferin',
    'Golfspieler',
    'Golfzeitschrift',
    'Schlagroboter',
    'Iron Byron',
    'Körpergröße',
    'Schlagweite',
    'distance',
    'Konstanz',
    'constant',
    'sweet spot',
    'Hobbygolfer',
    'Amateurgolfer',
    'Golfschwung',
    'Schwungtechnik',
    'Loft',
    'Lie',
    'Ballflug',
    'Slice',
    'Draw',
    'Hook',
    'Fade',
    'Demo-Day',
    'Body Geometry Fitting',
    'biometrisch',
    'geometrisch',
    'Geometrie',
    'nach Maß',
    'custom fitting',
    'Fertigungstoleranzen',
    'Golf-Pro',
    'Golftrainer',
    'Schlägersatz',
    'Flexgrad',
    'Schaftflex',
    'shaft flex',
    'bending',
    'EI profile',
    'shaft profile',
    'spine',
    'nbp',
    'flo',
    'moi',
    'frequency',
    'matching',
    'Gelenk-Drehpunkte',
    'Körper-Geometrie',
    'Fachgeschäft',
    'Fachwissen',
    'Golfsport',
    'Rumpfwinkel',
    'Ballflug',
    'Single-Length',
    'Golfrunde',
    'kurzes Spiel',
    'Pitching',
    'Bunker',
    'Shaft Alignment',
    'Frequenz-Messung',
    'golf setup',
    'Pinkafeld'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
