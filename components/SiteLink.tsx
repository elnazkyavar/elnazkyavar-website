import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

export default function SiteLink({ href, children, ...props }: SiteLinkProps) {
  const isExternal = /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href);

  if (isExternal) {
    return <a href={href} {...props}>{children}</a>;
  }

  return <Link href={href} {...props}>{children}</Link>;
}
