import React from "react";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog by Cloud Collective Brisbane
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Return to{' '}
        <a
          href="https://www.cloudcollectivebrisbane.org"
          className="underline hover:text-success duration-200 transition-colors"
        >
          homepage 
        </a>{' '}
      </h4> 
    </section>
  )
}
