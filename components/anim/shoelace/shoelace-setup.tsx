'use client';
// ^ Make sure to have 'use client'; because `setBasePath()` requires access to `document`.

import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js"

export default function ShoelaceSetup({
  children,
}: {
  children: React.ReactNode
}) {
  setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.17.1/cdn/");
  return <>{children}</>
}
