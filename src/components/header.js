import React from "react";
import { Link } from 'gatsby'

export default function Header() {
  return (
    <h2 className="text-xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link to="/" className="hover:underline">
        Blog
      </Link>
      by Cloud Collective Brisbane
    </h2>
  )
}
