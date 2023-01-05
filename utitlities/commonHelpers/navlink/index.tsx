import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { Children } from "react";
import React from "react";
import cx from "classnames";

type NavLinkProps = React.PropsWithChildren<LinkProps> & {
  activeClassName?: string;
};
//navlink

export const NavLink = ({
  children,
  activeClassName = "active",
  ...props
}: NavLinkProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children) as React.ReactElement;
  const childClassName = child.props.className || "";

  const isActive = asPath === props.href || asPath === props.as;

  const className = cx(childClassName, { [activeClassName]: isActive });

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};
