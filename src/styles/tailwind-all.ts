import {css, unsafeCSS} from 'lit';
import {globalCustomCss} from './global-custom-css.ts';

export const tailwindAll = css`
    ${unsafeCSS(globalCustomCss)}
  

    .visible {
        visibility: visible
    }

    .invisible {
        visibility: hidden
    }

    .static {
        position: static
    }

    .fixed {
        position: fixed
    }

    .absolute {
        position: absolute
    }

    .relative {
        position: relative
    }

    .sticky {
        position: sticky
    }

    .-bottom-0 {
        bottom: -0px
    }

    .-bottom-0\\.5 {
        bottom: -0.125rem
    }

    .-bottom-1 {
        bottom: -0.25rem
    }

    .-bottom-1\\.5 {
        bottom: -0.375rem
    }

    .-bottom-1\\/2 {
        bottom: -50%
    }

    .-bottom-1\\/3 {
        bottom: -33.333333%
    }

    .-bottom-1\\/4 {
        bottom: -25%
    }

    .-bottom-10 {
        bottom: -2.5rem
    }

    .-bottom-11 {
        bottom: -2.75rem
    }

    .-bottom-12 {
        bottom: -3rem
    }

    .-bottom-14 {
        bottom: -3.5rem
    }

    .-bottom-16 {
        bottom: -4rem
    }

    .-bottom-2 {
        bottom: -0.5rem
    }

    .-bottom-2\\.5 {
        bottom: -0.625rem
    }

    .-bottom-2\\/3 {
        bottom: -66.666667%
    }

    .-bottom-2\\/4 {
        bottom: -50%
    }

    .-bottom-20 {
        bottom: -5rem
    }

    .-bottom-24 {
        bottom: -6rem
    }

    .-bottom-28 {
        bottom: -7rem
    }

    .-bottom-3 {
        bottom: -0.75rem
    }

    .-bottom-3\\.5 {
        bottom: -0.875rem
    }

    .-bottom-3\\/4 {
        bottom: -75%
    }

    .-bottom-32 {
        bottom: -8rem
    }

    .-bottom-36 {
        bottom: -9rem
    }

    .-bottom-4 {
        bottom: -1rem
    }

    .-bottom-40 {
        bottom: -10rem
    }

    .-bottom-44 {
        bottom: -11rem
    }

    .-bottom-48 {
        bottom: -12rem
    }

    .-bottom-5 {
        bottom: -1.25rem
    }

    .-bottom-52 {
        bottom: -13rem
    }

    .-bottom-56 {
        bottom: -14rem
    }

    .-bottom-6 {
        bottom: -1.5rem
    }

    .-bottom-60 {
        bottom: -15rem
    }

    .-bottom-64 {
        bottom: -16rem
    }

    .-bottom-7 {
        bottom: -1.75rem
    }

    .-bottom-72 {
        bottom: -18rem
    }

    .-bottom-8 {
        bottom: -2rem
    }

    .-bottom-80 {
        bottom: -20rem
    }

    .-bottom-9 {
        bottom: -2.25rem
    }

    .-bottom-96 {
        bottom: -24rem
    }

    .-bottom-full {
        bottom: -100%
    }

    .-bottom-px {
        bottom: -1px
    }

    .-left-0 {
        left: -0px
    }

    .-left-0\\.5 {
        left: -0.125rem
    }

    .-left-1 {
        left: -0.25rem
    }

    .-left-1\\.5 {
        left: -0.375rem
    }

    .-left-1\\/2 {
        left: -50%
    }

    .-left-1\\/3 {
        left: -33.333333%
    }

    .-left-1\\/4 {
        left: -25%
    }

    .-left-10 {
        left: -2.5rem
    }

    .-left-11 {
        left: -2.75rem
    }

    .-left-12 {
        left: -3rem
    }

    .-left-14 {
        left: -3.5rem
    }

    .-left-16 {
        left: -4rem
    }

    .-left-2 {
        left: -0.5rem
    }

    .-left-2\\.5 {
        left: -0.625rem
    }

    .-left-2\\/3 {
        left: -66.666667%
    }

    .-left-2\\/4 {
        left: -50%
    }

    .-left-20 {
        left: -5rem
    }

    .-left-24 {
        left: -6rem
    }

    .-left-28 {
        left: -7rem
    }

    .-left-3 {
        left: -0.75rem
    }

    .-left-3\\.5 {
        left: -0.875rem
    }

    .-left-3\\/4 {
        left: -75%
    }

    .-left-32 {
        left: -8rem
    }

    .-left-36 {
        left: -9rem
    }

    .-left-4 {
        left: -1rem
    }

    .-left-40 {
        left: -10rem
    }

    .-left-44 {
        left: -11rem
    }

    .-left-48 {
        left: -12rem
    }

    .-left-5 {
        left: -1.25rem
    }

    .-left-52 {
        left: -13rem
    }

    .-left-56 {
        left: -14rem
    }

    .-left-6 {
        left: -1.5rem
    }

    .-left-60 {
        left: -15rem
    }

    .-left-64 {
        left: -16rem
    }

    .-left-7 {
        left: -1.75rem
    }

    .-left-72 {
        left: -18rem
    }

    .-left-8 {
        left: -2rem
    }

    .-left-80 {
        left: -20rem
    }

    .-left-9 {
        left: -2.25rem
    }

    .-left-96 {
        left: -24rem
    }

    .-left-full {
        left: -100%
    }

    .-left-px {
        left: -1px
    }

    .-right-0 {
        right: -0px
    }

    .-right-0\\.5 {
        right: -0.125rem
    }

    .-right-1 {
        right: -0.25rem
    }

    .-right-1\\.5 {
        right: -0.375rem
    }

    .-right-1\\/2 {
        right: -50%
    }

    .-right-1\\/3 {
        right: -33.333333%
    }

    .-right-1\\/4 {
        right: -25%
    }

    .-right-10 {
        right: -2.5rem
    }

    .-right-11 {
        right: -2.75rem
    }

    .-right-12 {
        right: -3rem
    }

    .-right-14 {
        right: -3.5rem
    }

    .-right-16 {
        right: -4rem
    }

    .-right-2 {
        right: -0.5rem
    }

    .-right-2\\.5 {
        right: -0.625rem
    }

    .-right-2\\/3 {
        right: -66.666667%
    }

    .-right-2\\/4 {
        right: -50%
    }

    .-right-20 {
        right: -5rem
    }

    .-right-24 {
        right: -6rem
    }

    .-right-28 {
        right: -7rem
    }

    .-right-3 {
        right: -0.75rem
    }

    .-right-3\\.5 {
        right: -0.875rem
    }

    .-right-3\\/4 {
        right: -75%
    }

    .-right-32 {
        right: -8rem
    }

    .-right-36 {
        right: -9rem
    }

    .-right-4 {
        right: -1rem
    }

    .-right-40 {
        right: -10rem
    }

    .-right-44 {
        right: -11rem
    }

    .-right-48 {
        right: -12rem
    }

    .-right-5 {
        right: -1.25rem
    }

    .-right-52 {
        right: -13rem
    }

    .-right-56 {
        right: -14rem
    }

    .-right-6 {
        right: -1.5rem
    }

    .-right-60 {
        right: -15rem
    }

    .-right-64 {
        right: -16rem
    }

    .-right-7 {
        right: -1.75rem
    }

    .-right-72 {
        right: -18rem
    }

    .-right-8 {
        right: -2rem
    }

    .-right-80 {
        right: -20rem
    }

    .-right-9 {
        right: -2.25rem
    }

    .-right-96 {
        right: -24rem
    }

    .-right-full {
        right: -100%
    }

    .-right-px {
        right: -1px
    }

    .-top-0 {
        top: -0px
    }

    .-top-0\\.5 {
        top: -0.125rem
    }

    .-top-1 {
        top: -0.25rem
    }

    .-top-1\\.5 {
        top: -0.375rem
    }

    .-top-1\\/2 {
        top: -50%
    }

    .-top-1\\/3 {
        top: -33.333333%
    }

    .-top-1\\/4 {
        top: -25%
    }

    .-top-10 {
        top: -2.5rem
    }

    .-top-11 {
        top: -2.75rem
    }

    .-top-12 {
        top: -3rem
    }

    .-top-14 {
        top: -3.5rem
    }

    .-top-16 {
        top: -4rem
    }

    .-top-2 {
        top: -0.5rem
    }

    .-top-2\\.5 {
        top: -0.625rem
    }

    .-top-2\\/3 {
        top: -66.666667%
    }

    .-top-2\\/4 {
        top: -50%
    }

    .-top-20 {
        top: -5rem
    }

    .-top-24 {
        top: -6rem
    }

    .-top-28 {
        top: -7rem
    }

    .-top-3 {
        top: -0.75rem
    }

    .-top-3\\.5 {
        top: -0.875rem
    }

    .-top-3\\/4 {
        top: -75%
    }

    .-top-32 {
        top: -8rem
    }

    .-top-36 {
        top: -9rem
    }

    .-top-4 {
        top: -1rem
    }

    .-top-40 {
        top: -10rem
    }

    .-top-44 {
        top: -11rem
    }

    .-top-48 {
        top: -12rem
    }

    .-top-5 {
        top: -1.25rem
    }

    .-top-52 {
        top: -13rem
    }

    .-top-56 {
        top: -14rem
    }

    .-top-6 {
        top: -1.5rem
    }

    .-top-60 {
        top: -15rem
    }

    .-top-64 {
        top: -16rem
    }

    .-top-7 {
        top: -1.75rem
    }

    .-top-72 {
        top: -18rem
    }

    .-top-8 {
        top: -2rem
    }

    .-top-80 {
        top: -20rem
    }

    .-top-9 {
        top: -2.25rem
    }

    .-top-96 {
        top: -24rem
    }

    .-top-full {
        top: -100%
    }

    .-top-px {
        top: -1px
    }

    .bottom-0 {
        bottom: 0px
    }

    .bottom-0\\.5 {
        bottom: 0.125rem
    }

    .bottom-1 {
        bottom: 0.25rem
    }

    .bottom-1\\.5 {
        bottom: 0.375rem
    }

    .bottom-1\\/2 {
        bottom: 50%
    }

    .bottom-1\\/3 {
        bottom: 33.333333%
    }

    .bottom-1\\/4 {
        bottom: 25%
    }

    .bottom-10 {
        bottom: 2.5rem
    }

    .bottom-11 {
        bottom: 2.75rem
    }

    .bottom-12 {
        bottom: 3rem
    }

    .bottom-14 {
        bottom: 3.5rem
    }

    .bottom-16 {
        bottom: 4rem
    }

    .bottom-2 {
        bottom: 0.5rem
    }

    .bottom-2\\.5 {
        bottom: 0.625rem
    }

    .bottom-2\\/3 {
        bottom: 66.666667%
    }

    .bottom-2\\/4 {
        bottom: 50%
    }

    .bottom-20 {
        bottom: 5rem
    }

    .bottom-24 {
        bottom: 6rem
    }

    .bottom-28 {
        bottom: 7rem
    }

    .bottom-3 {
        bottom: 0.75rem
    }

    .bottom-3\\.5 {
        bottom: 0.875rem
    }

    .bottom-3\\/4 {
        bottom: 75%
    }

    .bottom-32 {
        bottom: 8rem
    }

    .bottom-36 {
        bottom: 9rem
    }

    .bottom-4 {
        bottom: 1rem
    }

    .bottom-40 {
        bottom: 10rem
    }

    .bottom-44 {
        bottom: 11rem
    }

    .bottom-48 {
        bottom: 12rem
    }

    .bottom-5 {
        bottom: 1.25rem
    }

    .bottom-52 {
        bottom: 13rem
    }

    .bottom-56 {
        bottom: 14rem
    }

    .bottom-6 {
        bottom: 1.5rem
    }

    .bottom-60 {
        bottom: 15rem
    }

    .bottom-64 {
        bottom: 16rem
    }

    .bottom-7 {
        bottom: 1.75rem
    }

    .bottom-72 {
        bottom: 18rem
    }

    .bottom-8 {
        bottom: 2rem
    }

    .bottom-80 {
        bottom: 20rem
    }

    .bottom-9 {
        bottom: 2.25rem
    }

    .bottom-96 {
        bottom: 24rem
    }

    .bottom-auto {
        bottom: auto
    }

    .bottom-full {
        bottom: 100%
    }

    .bottom-px {
        bottom: 1px
    }

    .left-0 {
        left: 0px
    }

    .left-0\\.5 {
        left: 0.125rem
    }

    .left-1 {
        left: 0.25rem
    }

    .left-1\\.5 {
        left: 0.375rem
    }

    .left-1\\/2 {
        left: 50%
    }

    .left-1\\/3 {
        left: 33.333333%
    }

    .left-1\\/4 {
        left: 25%
    }

    .left-10 {
        left: 2.5rem
    }

    .left-11 {
        left: 2.75rem
    }

    .left-12 {
        left: 3rem
    }

    .left-14 {
        left: 3.5rem
    }

    .left-16 {
        left: 4rem
    }

    .left-2 {
        left: 0.5rem
    }

    .left-2\\.5 {
        left: 0.625rem
    }

    .left-2\\/3 {
        left: 66.666667%
    }

    .left-2\\/4 {
        left: 50%
    }

    .left-20 {
        left: 5rem
    }

    .left-24 {
        left: 6rem
    }

    .left-28 {
        left: 7rem
    }

    .left-3 {
        left: 0.75rem
    }

    .left-3\\.5 {
        left: 0.875rem
    }

    .left-3\\/4 {
        left: 75%
    }

    .left-32 {
        left: 8rem
    }

    .left-36 {
        left: 9rem
    }

    .left-4 {
        left: 1rem
    }

    .left-40 {
        left: 10rem
    }

    .left-44 {
        left: 11rem
    }

    .left-48 {
        left: 12rem
    }

    .left-5 {
        left: 1.25rem
    }

    .left-52 {
        left: 13rem
    }

    .left-56 {
        left: 14rem
    }

    .left-6 {
        left: 1.5rem
    }

    .left-60 {
        left: 15rem
    }

    .left-64 {
        left: 16rem
    }

    .left-7 {
        left: 1.75rem
    }

    .left-72 {
        left: 18rem
    }

    .left-8 {
        left: 2rem
    }

    .left-80 {
        left: 20rem
    }

    .left-9 {
        left: 2.25rem
    }

    .left-96 {
        left: 24rem
    }

    .left-auto {
        left: auto
    }

    .left-full {
        left: 100%
    }

    .left-px {
        left: 1px
    }

    .right-0 {
        right: 0px
    }

    .right-0\\.5 {
        right: 0.125rem
    }

    .right-1 {
        right: 0.25rem
    }

    .right-1\\.5 {
        right: 0.375rem
    }

    .right-1\\/2 {
        right: 50%
    }

    .right-1\\/3 {
        right: 33.333333%
    }

    .right-1\\/4 {
        right: 25%
    }

    .right-10 {
        right: 2.5rem
    }

    .right-11 {
        right: 2.75rem
    }

    .right-12 {
        right: 3rem
    }

    .right-14 {
        right: 3.5rem
    }

    .right-16 {
        right: 4rem
    }

    .right-2 {
        right: 0.5rem
    }

    .right-2\\.5 {
        right: 0.625rem
    }

    .right-2\\/3 {
        right: 66.666667%
    }

    .right-2\\/4 {
        right: 50%
    }

    .right-20 {
        right: 5rem
    }

    .right-24 {
        right: 6rem
    }

    .right-28 {
        right: 7rem
    }

    .right-3 {
        right: 0.75rem
    }

    .right-3\\.5 {
        right: 0.875rem
    }

    .right-3\\/4 {
        right: 75%
    }

    .right-32 {
        right: 8rem
    }

    .right-36 {
        right: 9rem
    }

    .right-4 {
        right: 1rem
    }

    .right-40 {
        right: 10rem
    }

    .right-44 {
        right: 11rem
    }

    .right-48 {
        right: 12rem
    }

    .right-5 {
        right: 1.25rem
    }

    .right-52 {
        right: 13rem
    }

    .right-56 {
        right: 14rem
    }

    .right-6 {
        right: 1.5rem
    }

    .right-60 {
        right: 15rem
    }

    .right-64 {
        right: 16rem
    }

    .right-7 {
        right: 1.75rem
    }

    .right-72 {
        right: 18rem
    }

    .right-8 {
        right: 2rem
    }

    .right-80 {
        right: 20rem
    }

    .right-9 {
        right: 2.25rem
    }

    .right-96 {
        right: 24rem
    }

    .right-auto {
        right: auto
    }

    .right-full {
        right: 100%
    }

    .right-px {
        right: 1px
    }

    .top-0 {
        top: 0px
    }

    .top-0\\.5 {
        top: 0.125rem
    }

    .top-1 {
        top: 0.25rem
    }

    .top-1\\.5 {
        top: 0.375rem
    }

    .top-1\\/2 {
        top: 50%
    }

    .top-1\\/3 {
        top: 33.333333%
    }

    .top-1\\/4 {
        top: 25%
    }

    .top-10 {
        top: 2.5rem
    }

    .top-11 {
        top: 2.75rem
    }

    .top-12 {
        top: 3rem
    }

    .top-14 {
        top: 3.5rem
    }

    .top-16 {
        top: 4rem
    }

    .top-2 {
        top: 0.5rem
    }

    .top-2\\.5 {
        top: 0.625rem
    }

    .top-2\\/3 {
        top: 66.666667%
    }

    .top-2\\/4 {
        top: 50%
    }

    .top-20 {
        top: 5rem
    }

    .top-24 {
        top: 6rem
    }

    .top-28 {
        top: 7rem
    }

    .top-3 {
        top: 0.75rem
    }

    .top-3\\.5 {
        top: 0.875rem
    }

    .top-3\\/4 {
        top: 75%
    }

    .top-32 {
        top: 8rem
    }

    .top-36 {
        top: 9rem
    }

    .top-4 {
        top: 1rem
    }

    .top-40 {
        top: 10rem
    }

    .top-44 {
        top: 11rem
    }

    .top-48 {
        top: 12rem
    }

    .top-5 {
        top: 1.25rem
    }

    .top-52 {
        top: 13rem
    }

    .top-56 {
        top: 14rem
    }

    .top-6 {
        top: 1.5rem
    }

    .top-60 {
        top: 15rem
    }

    .top-64 {
        top: 16rem
    }

    .top-7 {
        top: 1.75rem
    }

    .top-72 {
        top: 18rem
    }

    .top-8 {
        top: 2rem
    }

    .top-80 {
        top: 20rem
    }

    .top-9 {
        top: 2.25rem
    }

    .top-96 {
        top: 24rem
    }

    .top-auto {
        top: auto
    }

    .top-full {
        top: 100%
    }

    .top-px {
        top: 1px
    }

    .z-0 {
        z-index: 0
    }

    .z-10 {
        z-index: 10
    }

    .z-20 {
        z-index: 20
    }

    .z-30 {
        z-index: 30
    }

    .z-40 {
        z-index: 40
    }

    .z-50 {
        z-index: 50
    }

    .z-auto {
        z-index: auto
    }

    .order-1 {
        order: 1
    }

    .order-10 {
        order: 10
    }

    .order-11 {
        order: 11
    }

    .order-12 {
        order: 12
    }

    .order-2 {
        order: 2
    }

    .order-3 {
        order: 3
    }

    .order-4 {
        order: 4
    }

    .order-5 {
        order: 5
    }

    .order-6 {
        order: 6
    }

    .order-7 {
        order: 7
    }

    .order-8 {
        order: 8
    }

    .order-9 {
        order: 9
    }

    .order-first {
        order: -9999
    }

    .order-last {
        order: 9999
    }

    .order-none {
        order: 0
    }

    .col-auto {
        grid-column: auto
    }

    .col-span-1 {
        grid-column: span 1 / span 1
    }

    .col-span-10 {
        grid-column: span 10 / span 10
    }

    .col-span-11 {
        grid-column: span 11 / span 11
    }

    .col-span-12 {
        grid-column: span 12 / span 12
    }

    .col-span-2 {
        grid-column: span 2 / span 2
    }

    .col-span-3 {
        grid-column: span 3 / span 3
    }

    .col-span-4 {
        grid-column: span 4 / span 4
    }

    .col-span-5 {
        grid-column: span 5 / span 5
    }

    .col-span-6 {
        grid-column: span 6 / span 6
    }

    .col-span-7 {
        grid-column: span 7 / span 7
    }

    .col-span-8 {
        grid-column: span 8 / span 8
    }

    .col-span-9 {
        grid-column: span 9 / span 9
    }

    .col-span-full {
        grid-column: 1 / -1
    }

    .col-start-1 {
        grid-column-start: 1
    }

    .col-start-10 {
        grid-column-start: 10
    }

    .col-start-11 {
        grid-column-start: 11
    }

    .col-start-12 {
        grid-column-start: 12
    }

    .col-start-13 {
        grid-column-start: 13
    }

    .col-start-2 {
        grid-column-start: 2
    }

    .col-start-3 {
        grid-column-start: 3
    }

    .col-start-4 {
        grid-column-start: 4
    }

    .col-start-5 {
        grid-column-start: 5
    }

    .col-start-6 {
        grid-column-start: 6
    }

    .col-start-7 {
        grid-column-start: 7
    }

    .col-start-8 {
        grid-column-start: 8
    }

    .col-start-9 {
        grid-column-start: 9
    }

    .col-start-auto {
        grid-column-start: auto
    }

    .col-end-1 {
        grid-column-end: 1
    }

    .col-end-10 {
        grid-column-end: 10
    }

    .col-end-11 {
        grid-column-end: 11
    }

    .col-end-12 {
        grid-column-end: 12
    }

    .col-end-13 {
        grid-column-end: 13
    }

    .col-end-2 {
        grid-column-end: 2
    }

    .col-end-3 {
        grid-column-end: 3
    }

    .col-end-4 {
        grid-column-end: 4
    }

    .col-end-5 {
        grid-column-end: 5
    }

    .col-end-6 {
        grid-column-end: 6
    }

    .col-end-7 {
        grid-column-end: 7
    }

    .col-end-8 {
        grid-column-end: 8
    }

    .col-end-9 {
        grid-column-end: 9
    }

    .col-end-auto {
        grid-column-end: auto
    }

    .row-auto {
        grid-row: auto
    }

    .row-span-1 {
        grid-row: span 1 / span 1
    }

    .row-span-10 {
        grid-row: span 10 / span 10
    }

    .row-span-11 {
        grid-row: span 11 / span 11
    }

    .row-span-12 {
        grid-row: span 12 / span 12
    }

    .row-span-2 {
        grid-row: span 2 / span 2
    }

    .row-span-3 {
        grid-row: span 3 / span 3
    }

    .row-span-4 {
        grid-row: span 4 / span 4
    }

    .row-span-5 {
        grid-row: span 5 / span 5
    }

    .row-span-6 {
        grid-row: span 6 / span 6
    }

    .row-span-7 {
        grid-row: span 7 / span 7
    }

    .row-span-8 {
        grid-row: span 8 / span 8
    }

    .row-span-9 {
        grid-row: span 9 / span 9
    }

    .row-span-full {
        grid-row: 1 / -1
    }

    .row-start-1 {
        grid-row-start: 1
    }

    .row-start-10 {
        grid-row-start: 10
    }

    .row-start-11 {
        grid-row-start: 11
    }

    .row-start-12 {
        grid-row-start: 12
    }

    .row-start-13 {
        grid-row-start: 13
    }

    .row-start-2 {
        grid-row-start: 2
    }

    .row-start-3 {
        grid-row-start: 3
    }

    .row-start-4 {
        grid-row-start: 4
    }

    .row-start-5 {
        grid-row-start: 5
    }

    .row-start-6 {
        grid-row-start: 6
    }

    .row-start-7 {
        grid-row-start: 7
    }

    .row-start-8 {
        grid-row-start: 8
    }

    .row-start-9 {
        grid-row-start: 9
    }

    .row-start-auto {
        grid-row-start: auto
    }

    .row-end-1 {
        grid-row-end: 1
    }

    .row-end-10 {
        grid-row-end: 10
    }

    .row-end-11 {
        grid-row-end: 11
    }

    .row-end-12 {
        grid-row-end: 12
    }

    .row-end-13 {
        grid-row-end: 13
    }

    .row-end-2 {
        grid-row-end: 2
    }

    .row-end-3 {
        grid-row-end: 3
    }

    .row-end-4 {
        grid-row-end: 4
    }

    .row-end-5 {
        grid-row-end: 5
    }

    .row-end-6 {
        grid-row-end: 6
    }

    .row-end-7 {
        grid-row-end: 7
    }

    .row-end-8 {
        grid-row-end: 8
    }

    .row-end-9 {
        grid-row-end: 9
    }

    .row-end-auto {
        grid-row-end: auto
    }

    .-m-0 {
        margin: -0px
    }

    .-m-0\\.5 {
        margin: -0.125rem
    }

    .-m-1 {
        margin: -0.25rem
    }

    .-m-1\\.5 {
        margin: -0.375rem
    }

    .-m-10 {
        margin: -2.5rem
    }

    .-m-11 {
        margin: -2.75rem
    }

    .-m-12 {
        margin: -3rem
    }

    .-m-14 {
        margin: -3.5rem
    }

    .-m-16 {
        margin: -4rem
    }

    .-m-2 {
        margin: -0.5rem
    }

    .-m-2\\.5 {
        margin: -0.625rem
    }

    .-m-20 {
        margin: -5rem
    }

    .-m-24 {
        margin: -6rem
    }

    .-m-28 {
        margin: -7rem
    }

    .-m-3 {
        margin: -0.75rem
    }

    .-m-3\\.5 {
        margin: -0.875rem
    }

    .-m-32 {
        margin: -8rem
    }

    .-m-36 {
        margin: -9rem
    }

    .-m-4 {
        margin: -1rem
    }

    .-m-40 {
        margin: -10rem
    }

    .-m-44 {
        margin: -11rem
    }

    .-m-48 {
        margin: -12rem
    }

    .-m-5 {
        margin: -1.25rem
    }

    .-m-52 {
        margin: -13rem
    }

    .-m-56 {
        margin: -14rem
    }

    .-m-6 {
        margin: -1.5rem
    }

    .-m-60 {
        margin: -15rem
    }

    .-m-64 {
        margin: -16rem
    }

    .-m-7 {
        margin: -1.75rem
    }

    .-m-72 {
        margin: -18rem
    }

    .-m-8 {
        margin: -2rem
    }

    .-m-80 {
        margin: -20rem
    }

    .-m-9 {
        margin: -2.25rem
    }

    .-m-96 {
        margin: -24rem
    }

    .-m-px {
        margin: -1px
    }

    .m-0 {
        margin: 0px
    }

    .m-0\\.5 {
        margin: 0.125rem
    }

    .m-1 {
        margin: 0.25rem
    }

    .m-1\\.5 {
        margin: 0.375rem
    }

    .m-10 {
        margin: 2.5rem
    }

    .m-11 {
        margin: 2.75rem
    }

    .m-12 {
        margin: 3rem
    }

    .m-14 {
        margin: 3.5rem
    }

    .m-16 {
        margin: 4rem
    }

    .m-2 {
        margin: 0.5rem
    }

    .m-2\\.5 {
        margin: 0.625rem
    }

    .m-20 {
        margin: 5rem
    }

    .m-24 {
        margin: 6rem
    }

    .m-28 {
        margin: 7rem
    }

    .m-3 {
        margin: 0.75rem
    }

    .m-3\\.5 {
        margin: 0.875rem
    }

    .m-32 {
        margin: 8rem
    }

    .m-36 {
        margin: 9rem
    }

    .m-4 {
        margin: 1rem
    }

    .m-40 {
        margin: 10rem
    }

    .m-44 {
        margin: 11rem
    }

    .m-48 {
        margin: 12rem
    }

    .m-5 {
        margin: 1.25rem
    }

    .m-52 {
        margin: 13rem
    }

    .m-56 {
        margin: 14rem
    }

    .m-6 {
        margin: 1.5rem
    }

    .m-60 {
        margin: 15rem
    }

    .m-64 {
        margin: 16rem
    }

    .m-7 {
        margin: 1.75rem
    }

    .m-72 {
        margin: 18rem
    }

    .m-8 {
        margin: 2rem
    }

    .m-80 {
        margin: 20rem
    }

    .m-9 {
        margin: 2.25rem
    }

    .m-96 {
        margin: 24rem
    }

    .m-auto {
        margin: auto
    }

    .m-px {
        margin: 1px
    }

    .-mx-0 {
        margin-left: -0px;
        margin-right: -0px
    }

    .-mx-0\\.5 {
        margin-left: -0.125rem;
        margin-right: -0.125rem
    }

    .-mx-1 {
        margin-left: -0.25rem;
        margin-right: -0.25rem
    }

    .-mx-1\\.5 {
        margin-left: -0.375rem;
        margin-right: -0.375rem
    }

    .-mx-10 {
        margin-left: -2.5rem;
        margin-right: -2.5rem
    }

    .-mx-11 {
        margin-left: -2.75rem;
        margin-right: -2.75rem
    }

    .-mx-12 {
        margin-left: -3rem;
        margin-right: -3rem
    }

    .-mx-14 {
        margin-left: -3.5rem;
        margin-right: -3.5rem
    }

    .-mx-16 {
        margin-left: -4rem;
        margin-right: -4rem
    }

    .-mx-2 {
        margin-left: -0.5rem;
        margin-right: -0.5rem
    }

    .-mx-2\\.5 {
        margin-left: -0.625rem;
        margin-right: -0.625rem
    }

    .-mx-20 {
        margin-left: -5rem;
        margin-right: -5rem
    }

    .-mx-24 {
        margin-left: -6rem;
        margin-right: -6rem
    }

    .-mx-28 {
        margin-left: -7rem;
        margin-right: -7rem
    }

    .-mx-3 {
        margin-left: -0.75rem;
        margin-right: -0.75rem
    }

    .-mx-3\\.5 {
        margin-left: -0.875rem;
        margin-right: -0.875rem
    }

    .-mx-32 {
        margin-left: -8rem;
        margin-right: -8rem
    }

    .-mx-36 {
        margin-left: -9rem;
        margin-right: -9rem
    }

    .-mx-4 {
        margin-left: -1rem;
        margin-right: -1rem
    }

    .-mx-40 {
        margin-left: -10rem;
        margin-right: -10rem
    }

    .-mx-44 {
        margin-left: -11rem;
        margin-right: -11rem
    }

    .-mx-48 {
        margin-left: -12rem;
        margin-right: -12rem
    }

    .-mx-5 {
        margin-left: -1.25rem;
        margin-right: -1.25rem
    }

    .-mx-52 {
        margin-left: -13rem;
        margin-right: -13rem
    }

    .-mx-56 {
        margin-left: -14rem;
        margin-right: -14rem
    }

    .-mx-6 {
        margin-left: -1.5rem;
        margin-right: -1.5rem
    }

    .-mx-60 {
        margin-left: -15rem;
        margin-right: -15rem
    }

    .-mx-64 {
        margin-left: -16rem;
        margin-right: -16rem
    }

    .-mx-7 {
        margin-left: -1.75rem;
        margin-right: -1.75rem
    }

    .-mx-72 {
        margin-left: -18rem;
        margin-right: -18rem
    }

    .-mx-8 {
        margin-left: -2rem;
        margin-right: -2rem
    }

    .-mx-80 {
        margin-left: -20rem;
        margin-right: -20rem
    }

    .-mx-9 {
        margin-left: -2.25rem;
        margin-right: -2.25rem
    }

    .-mx-96 {
        margin-left: -24rem;
        margin-right: -24rem
    }

    .-mx-px {
        margin-left: -1px;
        margin-right: -1px
    }

    .-my-0 {
        margin-top: -0px;
        margin-bottom: -0px
    }

    .-my-0\\.5 {
        margin-top: -0.125rem;
        margin-bottom: -0.125rem
    }

    .-my-1 {
        margin-top: -0.25rem;
        margin-bottom: -0.25rem
    }

    .-my-1\\.5 {
        margin-top: -0.375rem;
        margin-bottom: -0.375rem
    }

    .-my-10 {
        margin-top: -2.5rem;
        margin-bottom: -2.5rem
    }

    .-my-11 {
        margin-top: -2.75rem;
        margin-bottom: -2.75rem
    }

    .-my-12 {
        margin-top: -3rem;
        margin-bottom: -3rem
    }

    .-my-14 {
        margin-top: -3.5rem;
        margin-bottom: -3.5rem
    }

    .-my-16 {
        margin-top: -4rem;
        margin-bottom: -4rem
    }

    .-my-2 {
        margin-top: -0.5rem;
        margin-bottom: -0.5rem
    }

    .-my-2\\.5 {
        margin-top: -0.625rem;
        margin-bottom: -0.625rem
    }

    .-my-20 {
        margin-top: -5rem;
        margin-bottom: -5rem
    }

    .-my-24 {
        margin-top: -6rem;
        margin-bottom: -6rem
    }

    .-my-28 {
        margin-top: -7rem;
        margin-bottom: -7rem
    }

    .-my-3 {
        margin-top: -0.75rem;
        margin-bottom: -0.75rem
    }

    .-my-3\\.5 {
        margin-top: -0.875rem;
        margin-bottom: -0.875rem
    }

    .-my-32 {
        margin-top: -8rem;
        margin-bottom: -8rem
    }

    .-my-36 {
        margin-top: -9rem;
        margin-bottom: -9rem
    }

    .-my-4 {
        margin-top: -1rem;
        margin-bottom: -1rem
    }

    .-my-40 {
        margin-top: -10rem;
        margin-bottom: -10rem
    }

    .-my-44 {
        margin-top: -11rem;
        margin-bottom: -11rem
    }

    .-my-48 {
        margin-top: -12rem;
        margin-bottom: -12rem
    }

    .-my-5 {
        margin-top: -1.25rem;
        margin-bottom: -1.25rem
    }

    .-my-52 {
        margin-top: -13rem;
        margin-bottom: -13rem
    }

    .-my-56 {
        margin-top: -14rem;
        margin-bottom: -14rem
    }

    .-my-6 {
        margin-top: -1.5rem;
        margin-bottom: -1.5rem
    }

    .-my-60 {
        margin-top: -15rem;
        margin-bottom: -15rem
    }

    .-my-64 {
        margin-top: -16rem;
        margin-bottom: -16rem
    }

    .-my-7 {
        margin-top: -1.75rem;
        margin-bottom: -1.75rem
    }

    .-my-72 {
        margin-top: -18rem;
        margin-bottom: -18rem
    }

    .-my-8 {
        margin-top: -2rem;
        margin-bottom: -2rem
    }

    .-my-80 {
        margin-top: -20rem;
        margin-bottom: -20rem
    }

    .-my-9 {
        margin-top: -2.25rem;
        margin-bottom: -2.25rem
    }

    .-my-96 {
        margin-top: -24rem;
        margin-bottom: -24rem
    }

    .-my-px {
        margin-top: -1px;
        margin-bottom: -1px
    }

    .mx-0 {
        margin-left: 0px;
        margin-right: 0px
    }

    .mx-0\\.5 {
        margin-left: 0.125rem;
        margin-right: 0.125rem
    }

    .mx-1 {
        margin-left: 0.25rem;
        margin-right: 0.25rem
    }

    .mx-1\\.5 {
        margin-left: 0.375rem;
        margin-right: 0.375rem
    }

    .mx-10 {
        margin-left: 2.5rem;
        margin-right: 2.5rem
    }

    .mx-11 {
        margin-left: 2.75rem;
        margin-right: 2.75rem
    }

    .mx-12 {
        margin-left: 3rem;
        margin-right: 3rem
    }

    .mx-14 {
        margin-left: 3.5rem;
        margin-right: 3.5rem
    }

    .mx-16 {
        margin-left: 4rem;
        margin-right: 4rem
    }

    .mx-2 {
        margin-left: 0.5rem;
        margin-right: 0.5rem
    }

    .mx-2\\.5 {
        margin-left: 0.625rem;
        margin-right: 0.625rem
    }

    .mx-20 {
        margin-left: 5rem;
        margin-right: 5rem
    }

    .mx-24 {
        margin-left: 6rem;
        margin-right: 6rem
    }

    .mx-28 {
        margin-left: 7rem;
        margin-right: 7rem
    }

    .mx-3 {
        margin-left: 0.75rem;
        margin-right: 0.75rem
    }

    .mx-3\\.5 {
        margin-left: 0.875rem;
        margin-right: 0.875rem
    }

    .mx-32 {
        margin-left: 8rem;
        margin-right: 8rem
    }

    .mx-36 {
        margin-left: 9rem;
        margin-right: 9rem
    }

    .mx-4 {
        margin-left: 1rem;
        margin-right: 1rem
    }

    .mx-40 {
        margin-left: 10rem;
        margin-right: 10rem
    }

    .mx-44 {
        margin-left: 11rem;
        margin-right: 11rem
    }

    .mx-48 {
        margin-left: 12rem;
        margin-right: 12rem
    }

    .mx-5 {
        margin-left: 1.25rem;
        margin-right: 1.25rem
    }

    .mx-52 {
        margin-left: 13rem;
        margin-right: 13rem
    }

    .mx-56 {
        margin-left: 14rem;
        margin-right: 14rem
    }

    .mx-6 {
        margin-left: 1.5rem;
        margin-right: 1.5rem
    }

    .mx-60 {
        margin-left: 15rem;
        margin-right: 15rem
    }

    .mx-64 {
        margin-left: 16rem;
        margin-right: 16rem
    }

    .mx-7 {
        margin-left: 1.75rem;
        margin-right: 1.75rem
    }

    .mx-72 {
        margin-left: 18rem;
        margin-right: 18rem
    }

    .mx-8 {
        margin-left: 2rem;
        margin-right: 2rem
    }

    .mx-80 {
        margin-left: 20rem;
        margin-right: 20rem
    }

    .mx-9 {
        margin-left: 2.25rem;
        margin-right: 2.25rem
    }

    .mx-96 {
        margin-left: 24rem;
        margin-right: 24rem
    }

    .mx-auto {
        margin-left: auto;
        margin-right: auto
    }

    .mx-px {
        margin-left: 1px;
        margin-right: 1px
    }

    .my-0 {
        margin-top: 0px;
        margin-bottom: 0px
    }

    .my-0\\.5 {
        margin-top: 0.125rem;
        margin-bottom: 0.125rem
    }

    .my-1 {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem
    }

    .my-1\\.5 {
        margin-top: 0.375rem;
        margin-bottom: 0.375rem
    }

    .my-10 {
        margin-top: 2.5rem;
        margin-bottom: 2.5rem
    }

    .my-11 {
        margin-top: 2.75rem;
        margin-bottom: 2.75rem
    }

    .my-12 {
        margin-top: 3rem;
        margin-bottom: 3rem
    }

    .my-14 {
        margin-top: 3.5rem;
        margin-bottom: 3.5rem
    }

    .my-16 {
        margin-top: 4rem;
        margin-bottom: 4rem
    }

    .my-2 {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem
    }

    .my-2\\.5 {
        margin-top: 0.625rem;
        margin-bottom: 0.625rem
    }

    .my-20 {
        margin-top: 5rem;
        margin-bottom: 5rem
    }

    .my-24 {
        margin-top: 6rem;
        margin-bottom: 6rem
    }

    .my-28 {
        margin-top: 7rem;
        margin-bottom: 7rem
    }

    .my-3 {
        margin-top: 0.75rem;
        margin-bottom: 0.75rem
    }

    .my-3\\.5 {
        margin-top: 0.875rem;
        margin-bottom: 0.875rem
    }

    .my-32 {
        margin-top: 8rem;
        margin-bottom: 8rem
    }

    .my-36 {
        margin-top: 9rem;
        margin-bottom: 9rem
    }

    .my-4 {
        margin-top: 1rem;
        margin-bottom: 1rem
    }

    .my-40 {
        margin-top: 10rem;
        margin-bottom: 10rem
    }

    .my-44 {
        margin-top: 11rem;
        margin-bottom: 11rem
    }

    .my-48 {
        margin-top: 12rem;
        margin-bottom: 12rem
    }

    .my-5 {
        margin-top: 1.25rem;
        margin-bottom: 1.25rem
    }

    .my-52 {
        margin-top: 13rem;
        margin-bottom: 13rem
    }

    .my-56 {
        margin-top: 14rem;
        margin-bottom: 14rem
    }

    .my-6 {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem
    }

    .my-60 {
        margin-top: 15rem;
        margin-bottom: 15rem
    }

    .my-64 {
        margin-top: 16rem;
        margin-bottom: 16rem
    }

    .my-7 {
        margin-top: 1.75rem;
        margin-bottom: 1.75rem
    }

    .my-72 {
        margin-top: 18rem;
        margin-bottom: 18rem
    }

    .my-8 {
        margin-top: 2rem;
        margin-bottom: 2rem
    }

    .my-80 {
        margin-top: 20rem;
        margin-bottom: 20rem
    }

    .my-9 {
        margin-top: 2.25rem;
        margin-bottom: 2.25rem
    }

    .my-96 {
        margin-top: 24rem;
        margin-bottom: 24rem
    }

    .my-auto {
        margin-top: auto;
        margin-bottom: auto
    }

    .my-px {
        margin-top: 1px;
        margin-bottom: 1px
    }

    .-mb-0 {
        margin-bottom: -0px
    }

    .-mb-0\\.5 {
        margin-bottom: -0.125rem
    }

    .-mb-1 {
        margin-bottom: -0.25rem
    }

    .-mb-1\\.5 {
        margin-bottom: -0.375rem
    }

    .-mb-10 {
        margin-bottom: -2.5rem
    }

    .-mb-11 {
        margin-bottom: -2.75rem
    }

    .-mb-12 {
        margin-bottom: -3rem
    }

    .-mb-14 {
        margin-bottom: -3.5rem
    }

    .-mb-16 {
        margin-bottom: -4rem
    }

    .-mb-2 {
        margin-bottom: -0.5rem
    }

    .-mb-2\\.5 {
        margin-bottom: -0.625rem
    }

    .-mb-20 {
        margin-bottom: -5rem
    }

    .-mb-24 {
        margin-bottom: -6rem
    }

    .-mb-28 {
        margin-bottom: -7rem
    }

    .-mb-3 {
        margin-bottom: -0.75rem
    }

    .-mb-3\\.5 {
        margin-bottom: -0.875rem
    }

    .-mb-32 {
        margin-bottom: -8rem
    }

    .-mb-36 {
        margin-bottom: -9rem
    }

    .-mb-4 {
        margin-bottom: -1rem
    }

    .-mb-40 {
        margin-bottom: -10rem
    }

    .-mb-44 {
        margin-bottom: -11rem
    }

    .-mb-48 {
        margin-bottom: -12rem
    }

    .-mb-5 {
        margin-bottom: -1.25rem
    }

    .-mb-52 {
        margin-bottom: -13rem
    }

    .-mb-56 {
        margin-bottom: -14rem
    }

    .-mb-6 {
        margin-bottom: -1.5rem
    }

    .-mb-60 {
        margin-bottom: -15rem
    }

    .-mb-64 {
        margin-bottom: -16rem
    }

    .-mb-7 {
        margin-bottom: -1.75rem
    }

    .-mb-72 {
        margin-bottom: -18rem
    }

    .-mb-8 {
        margin-bottom: -2rem
    }

    .-mb-80 {
        margin-bottom: -20rem
    }

    .-mb-9 {
        margin-bottom: -2.25rem
    }

    .-mb-96 {
        margin-bottom: -24rem
    }

    .-mb-px {
        margin-bottom: -1px
    }

    .-ml-0 {
        margin-left: -0px
    }

    .-ml-0\\.5 {
        margin-left: -0.125rem
    }

    .-ml-1 {
        margin-left: -0.25rem
    }

    .-ml-1\\.5 {
        margin-left: -0.375rem
    }

    .-ml-10 {
        margin-left: -2.5rem
    }

    .-ml-11 {
        margin-left: -2.75rem
    }

    .-ml-12 {
        margin-left: -3rem
    }

    .-ml-14 {
        margin-left: -3.5rem
    }

    .-ml-16 {
        margin-left: -4rem
    }

    .-ml-2 {
        margin-left: -0.5rem
    }

    .-ml-2\\.5 {
        margin-left: -0.625rem
    }

    .-ml-20 {
        margin-left: -5rem
    }

    .-ml-24 {
        margin-left: -6rem
    }

    .-ml-28 {
        margin-left: -7rem
    }

    .-ml-3 {
        margin-left: -0.75rem
    }

    .-ml-3\\.5 {
        margin-left: -0.875rem
    }

    .-ml-32 {
        margin-left: -8rem
    }

    .-ml-36 {
        margin-left: -9rem
    }

    .-ml-4 {
        margin-left: -1rem
    }

    .-ml-40 {
        margin-left: -10rem
    }

    .-ml-44 {
        margin-left: -11rem
    }

    .-ml-48 {
        margin-left: -12rem
    }

    .-ml-5 {
        margin-left: -1.25rem
    }

    .-ml-52 {
        margin-left: -13rem
    }

    .-ml-56 {
        margin-left: -14rem
    }

    .-ml-6 {
        margin-left: -1.5rem
    }

    .-ml-60 {
        margin-left: -15rem
    }

    .-ml-64 {
        margin-left: -16rem
    }

    .-ml-7 {
        margin-left: -1.75rem
    }

    .-ml-72 {
        margin-left: -18rem
    }

    .-ml-8 {
        margin-left: -2rem
    }

    .-ml-80 {
        margin-left: -20rem
    }

    .-ml-9 {
        margin-left: -2.25rem
    }

    .-ml-96 {
        margin-left: -24rem
    }

    .-ml-px {
        margin-left: -1px
    }

    .-mr-0 {
        margin-right: -0px
    }

    .-mr-0\\.5 {
        margin-right: -0.125rem
    }

    .-mr-1 {
        margin-right: -0.25rem
    }

    .-mr-1\\.5 {
        margin-right: -0.375rem
    }

    .-mr-10 {
        margin-right: -2.5rem
    }

    .-mr-11 {
        margin-right: -2.75rem
    }

    .-mr-12 {
        margin-right: -3rem
    }

    .-mr-14 {
        margin-right: -3.5rem
    }

    .-mr-16 {
        margin-right: -4rem
    }

    .-mr-2 {
        margin-right: -0.5rem
    }

    .-mr-2\\.5 {
        margin-right: -0.625rem
    }

    .-mr-20 {
        margin-right: -5rem
    }

    .-mr-24 {
        margin-right: -6rem
    }

    .-mr-28 {
        margin-right: -7rem
    }

    .-mr-3 {
        margin-right: -0.75rem
    }

    .-mr-3\\.5 {
        margin-right: -0.875rem
    }

    .-mr-32 {
        margin-right: -8rem
    }

    .-mr-36 {
        margin-right: -9rem
    }

    .-mr-4 {
        margin-right: -1rem
    }

    .-mr-40 {
        margin-right: -10rem
    }

    .-mr-44 {
        margin-right: -11rem
    }

    .-mr-48 {
        margin-right: -12rem
    }

    .-mr-5 {
        margin-right: -1.25rem
    }

    .-mr-52 {
        margin-right: -13rem
    }

    .-mr-56 {
        margin-right: -14rem
    }

    .-mr-6 {
        margin-right: -1.5rem
    }

    .-mr-60 {
        margin-right: -15rem
    }

    .-mr-64 {
        margin-right: -16rem
    }

    .-mr-7 {
        margin-right: -1.75rem
    }

    .-mr-72 {
        margin-right: -18rem
    }

    .-mr-8 {
        margin-right: -2rem
    }

    .-mr-80 {
        margin-right: -20rem
    }

    .-mr-9 {
        margin-right: -2.25rem
    }

    .-mr-96 {
        margin-right: -24rem
    }

    .-mr-px {
        margin-right: -1px
    }

    .-mt-0 {
        margin-top: -0px
    }

    .-mt-0\\.5 {
        margin-top: -0.125rem
    }

    .-mt-1 {
        margin-top: -0.25rem
    }

    .-mt-1\\.5 {
        margin-top: -0.375rem
    }

    .-mt-10 {
        margin-top: -2.5rem
    }

    .-mt-11 {
        margin-top: -2.75rem
    }

    .-mt-12 {
        margin-top: -3rem
    }

    .-mt-14 {
        margin-top: -3.5rem
    }

    .-mt-16 {
        margin-top: -4rem
    }

    .-mt-2 {
        margin-top: -0.5rem
    }

    .-mt-2\\.5 {
        margin-top: -0.625rem
    }

    .-mt-20 {
        margin-top: -5rem
    }

    .-mt-24 {
        margin-top: -6rem
    }

    .-mt-28 {
        margin-top: -7rem
    }

    .-mt-3 {
        margin-top: -0.75rem
    }

    .-mt-3\\.5 {
        margin-top: -0.875rem
    }

    .-mt-32 {
        margin-top: -8rem
    }

    .-mt-36 {
        margin-top: -9rem
    }

    .-mt-4 {
        margin-top: -1rem
    }

    .-mt-40 {
        margin-top: -10rem
    }

    .-mt-44 {
        margin-top: -11rem
    }

    .-mt-48 {
        margin-top: -12rem
    }

    .-mt-5 {
        margin-top: -1.25rem
    }

    .-mt-52 {
        margin-top: -13rem
    }

    .-mt-56 {
        margin-top: -14rem
    }

    .-mt-6 {
        margin-top: -1.5rem
    }

    .-mt-60 {
        margin-top: -15rem
    }

    .-mt-64 {
        margin-top: -16rem
    }

    .-mt-7 {
        margin-top: -1.75rem
    }

    .-mt-72 {
        margin-top: -18rem
    }

    .-mt-8 {
        margin-top: -2rem
    }

    .-mt-80 {
        margin-top: -20rem
    }

    .-mt-9 {
        margin-top: -2.25rem
    }

    .-mt-96 {
        margin-top: -24rem
    }

    .-mt-px {
        margin-top: -1px
    }

    .mb-0 {
        margin-bottom: 0px
    }

    .mb-0\\.5 {
        margin-bottom: 0.125rem
    }

    .mb-1 {
        margin-bottom: 0.25rem
    }

    .mb-1\\.5 {
        margin-bottom: 0.375rem
    }

    .mb-10 {
        margin-bottom: 2.5rem
    }

    .mb-11 {
        margin-bottom: 2.75rem
    }

    .mb-12 {
        margin-bottom: 3rem
    }

    .mb-14 {
        margin-bottom: 3.5rem
    }

    .mb-16 {
        margin-bottom: 4rem
    }

    .mb-2 {
        margin-bottom: 0.5rem
    }

    .mb-2\\.5 {
        margin-bottom: 0.625rem
    }

    .mb-20 {
        margin-bottom: 5rem
    }

    .mb-24 {
        margin-bottom: 6rem
    }

    .mb-28 {
        margin-bottom: 7rem
    }

    .mb-3 {
        margin-bottom: 0.75rem
    }

    .mb-3\\.5 {
        margin-bottom: 0.875rem
    }

    .mb-32 {
        margin-bottom: 8rem
    }

    .mb-36 {
        margin-bottom: 9rem
    }

    .mb-4 {
        margin-bottom: 1rem
    }

    .mb-40 {
        margin-bottom: 10rem
    }

    .mb-44 {
        margin-bottom: 11rem
    }

    .mb-48 {
        margin-bottom: 12rem
    }

    .mb-5 {
        margin-bottom: 1.25rem
    }

    .mb-52 {
        margin-bottom: 13rem
    }

    .mb-56 {
        margin-bottom: 14rem
    }

    .mb-6 {
        margin-bottom: 1.5rem
    }

    .mb-60 {
        margin-bottom: 15rem
    }

    .mb-64 {
        margin-bottom: 16rem
    }

    .mb-7 {
        margin-bottom: 1.75rem
    }

    .mb-72 {
        margin-bottom: 18rem
    }

    .mb-8 {
        margin-bottom: 2rem
    }

    .mb-80 {
        margin-bottom: 20rem
    }

    .mb-9 {
        margin-bottom: 2.25rem
    }

    .mb-96 {
        margin-bottom: 24rem
    }

    .mb-auto {
        margin-bottom: auto
    }

    .mb-px {
        margin-bottom: 1px
    }

    .ml-0 {
        margin-left: 0px
    }

    .ml-0\\.5 {
        margin-left: 0.125rem
    }

    .ml-1 {
        margin-left: 0.25rem
    }

    .ml-1\\.5 {
        margin-left: 0.375rem
    }

    .ml-10 {
        margin-left: 2.5rem
    }

    .ml-11 {
        margin-left: 2.75rem
    }

    .ml-12 {
        margin-left: 3rem
    }

    .ml-14 {
        margin-left: 3.5rem
    }

    .ml-16 {
        margin-left: 4rem
    }

    .ml-2 {
        margin-left: 0.5rem
    }

    .ml-2\\.5 {
        margin-left: 0.625rem
    }

    .ml-20 {
        margin-left: 5rem
    }

    .ml-24 {
        margin-left: 6rem
    }

    .ml-28 {
        margin-left: 7rem
    }

    .ml-3 {
        margin-left: 0.75rem
    }

    .ml-3\\.5 {
        margin-left: 0.875rem
    }

    .ml-32 {
        margin-left: 8rem
    }

    .ml-36 {
        margin-left: 9rem
    }

    .ml-4 {
        margin-left: 1rem
    }

    .ml-40 {
        margin-left: 10rem
    }

    .ml-44 {
        margin-left: 11rem
    }

    .ml-48 {
        margin-left: 12rem
    }

    .ml-5 {
        margin-left: 1.25rem
    }

    .ml-52 {
        margin-left: 13rem
    }

    .ml-56 {
        margin-left: 14rem
    }

    .ml-6 {
        margin-left: 1.5rem
    }

    .ml-60 {
        margin-left: 15rem
    }

    .ml-64 {
        margin-left: 16rem
    }

    .ml-7 {
        margin-left: 1.75rem
    }

    .ml-72 {
        margin-left: 18rem
    }

    .ml-8 {
        margin-left: 2rem
    }

    .ml-80 {
        margin-left: 20rem
    }

    .ml-9 {
        margin-left: 2.25rem
    }

    .ml-96 {
        margin-left: 24rem
    }

    .ml-auto {
        margin-left: auto
    }

    .ml-px {
        margin-left: 1px
    }

    .mr-0 {
        margin-right: 0px
    }

    .mr-0\\.5 {
        margin-right: 0.125rem
    }

    .mr-1 {
        margin-right: 0.25rem
    }

    .mr-1\\.5 {
        margin-right: 0.375rem
    }

    .mr-10 {
        margin-right: 2.5rem
    }

    .mr-11 {
        margin-right: 2.75rem
    }

    .mr-12 {
        margin-right: 3rem
    }

    .mr-14 {
        margin-right: 3.5rem
    }

    .mr-16 {
        margin-right: 4rem
    }

    .mr-2 {
        margin-right: 0.5rem
    }

    .mr-2\\.5 {
        margin-right: 0.625rem
    }

    .mr-20 {
        margin-right: 5rem
    }

    .mr-24 {
        margin-right: 6rem
    }

    .mr-28 {
        margin-right: 7rem
    }

    .mr-3 {
        margin-right: 0.75rem
    }

    .mr-3\\.5 {
        margin-right: 0.875rem
    }

    .mr-32 {
        margin-right: 8rem
    }

    .mr-36 {
        margin-right: 9rem
    }

    .mr-4 {
        margin-right: 1rem
    }

    .mr-40 {
        margin-right: 10rem
    }

    .mr-44 {
        margin-right: 11rem
    }

    .mr-48 {
        margin-right: 12rem
    }

    .mr-5 {
        margin-right: 1.25rem
    }

    .mr-52 {
        margin-right: 13rem
    }

    .mr-56 {
        margin-right: 14rem
    }

    .mr-6 {
        margin-right: 1.5rem
    }

    .mr-60 {
        margin-right: 15rem
    }

    .mr-64 {
        margin-right: 16rem
    }

    .mr-7 {
        margin-right: 1.75rem
    }

    .mr-72 {
        margin-right: 18rem
    }

    .mr-8 {
        margin-right: 2rem
    }

    .mr-80 {
        margin-right: 20rem
    }

    .mr-9 {
        margin-right: 2.25rem
    }

    .mr-96 {
        margin-right: 24rem
    }

    .mr-auto {
        margin-right: auto
    }

    .mr-px {
        margin-right: 1px
    }

    .mt-0 {
        margin-top: 0px
    }

    .mt-0\\.5 {
        margin-top: 0.125rem
    }

    .mt-1 {
        margin-top: 0.25rem
    }

    .mt-1\\.5 {
        margin-top: 0.375rem
    }

    .mt-10 {
        margin-top: 2.5rem
    }

    .mt-11 {
        margin-top: 2.75rem
    }

    .mt-12 {
        margin-top: 3rem
    }

    .mt-14 {
        margin-top: 3.5rem
    }

    .mt-16 {
        margin-top: 4rem
    }

    .mt-2 {
        margin-top: 0.5rem
    }

    .mt-2\\.5 {
        margin-top: 0.625rem
    }

    .mt-20 {
        margin-top: 5rem
    }

    .mt-24 {
        margin-top: 6rem
    }

    .mt-28 {
        margin-top: 7rem
    }

    .mt-3 {
        margin-top: 0.75rem
    }

    .mt-3\\.5 {
        margin-top: 0.875rem
    }

    .mt-32 {
        margin-top: 8rem
    }

    .mt-36 {
        margin-top: 9rem
    }

    .mt-4 {
        margin-top: 1rem
    }

    .mt-40 {
        margin-top: 10rem
    }

    .mt-44 {
        margin-top: 11rem
    }

    .mt-48 {
        margin-top: 12rem
    }

    .mt-5 {
        margin-top: 1.25rem
    }

    .mt-52 {
        margin-top: 13rem
    }

    .mt-56 {
        margin-top: 14rem
    }

    .mt-6 {
        margin-top: 1.5rem
    }

    .mt-60 {
        margin-top: 15rem
    }

    .mt-64 {
        margin-top: 16rem
    }

    .mt-7 {
        margin-top: 1.75rem
    }

    .mt-72 {
        margin-top: 18rem
    }

    .mt-8 {
        margin-top: 2rem
    }

    .mt-80 {
        margin-top: 20rem
    }

    .mt-9 {
        margin-top: 2.25rem
    }

    .mt-96 {
        margin-top: 24rem
    }

    .mt-auto {
        margin-top: auto
    }

    .mt-px {
        margin-top: 1px
    }

    .block {
        display: block
    }

    .inline-block {
        display: inline-block
    }

    .inline {
        display: inline
    }

    .flex {
        display: flex
    }

    .inline-flex {
        display: inline-flex
    }

    .table {
        display: table
    }

    .inline-table {
        display: inline-table
    }

    .table-caption {
        display: table-caption
    }

    .table-cell {
        display: table-cell
    }

    .table-column {
        display: table-column
    }

    .table-column-group {
        display: table-column-group
    }

    .table-footer-group {
        display: table-footer-group
    }

    .table-header-group {
        display: table-header-group
    }

    .table-row-group {
        display: table-row-group
    }

    .table-row {
        display: table-row
    }

    .flow-root {
        display: flow-root
    }

    .grid {
        display: grid
    }

    .inline-grid {
        display: inline-grid
    }

    .contents {
        display: contents
    }

    .hidden {
        display: none
    }

    .h-0 {
        height: 0px
    }

    .h-0\\.5 {
        height: 0.125rem
    }

    .h-1 {
        height: 0.25rem
    }

    .h-1\\.5 {
        height: 0.375rem
    }

    .h-1\\/2 {
        height: 50%
    }

    .h-1\\/3 {
        height: 33.333333%
    }

    .h-1\\/4 {
        height: 25%
    }

    .h-1\\/5 {
        height: 20%
    }

    .h-1\\/6 {
        height: 16.666667%
    }

    .h-10 {
        height: 2.5rem
    }

    .h-11 {
        height: 2.75rem
    }

    .h-12 {
        height: 3rem
    }

    .h-14 {
        height: 3.5rem
    }

    .h-16 {
        height: 4rem
    }

    .h-2 {
        height: 0.5rem
    }

    .h-2\\.5 {
        height: 0.625rem
    }

    .h-2\\/3 {
        height: 66.666667%
    }

    .h-2\\/4 {
        height: 50%
    }

    .h-2\\/5 {
        height: 40%
    }

    .h-2\\/6 {
        height: 33.333333%
    }

    .h-20 {
        height: 5rem
    }

    .h-24 {
        height: 6rem
    }

    .h-28 {
        height: 7rem
    }

    .h-3 {
        height: 0.75rem
    }

    .h-3\\.5 {
        height: 0.875rem
    }

    .h-3\\/4 {
        height: 75%
    }

    .h-3\\/5 {
        height: 60%
    }

    .h-3\\/6 {
        height: 50%
    }

    .h-32 {
        height: 8rem
    }

    .h-36 {
        height: 9rem
    }

    .h-4 {
        height: 1rem
    }

    .h-4\\/5 {
        height: 80%
    }

    .h-4\\/6 {
        height: 66.666667%
    }

    .h-40 {
        height: 10rem
    }

    .h-44 {
        height: 11rem
    }

    .h-48 {
        height: 12rem
    }

    .h-5 {
        height: 1.25rem
    }

    .h-5\\/6 {
        height: 83.333333%
    }

    .h-52 {
        height: 13rem
    }

    .h-56 {
        height: 14rem
    }

    .h-6 {
        height: 1.5rem
    }

    .h-60 {
        height: 15rem
    }

    .h-64 {
        height: 16rem
    }

    .h-7 {
        height: 1.75rem
    }

    .h-72 {
        height: 18rem
    }

    .h-8 {
        height: 2rem
    }

    .h-80 {
        height: 20rem
    }

    .h-9 {
        height: 2.25rem
    }

    .h-96 {
        height: 24rem
    }

    .h-auto {
        height: auto
    }

    .h-dvh {
        height: 100dvh
    }

    .h-fit {
        height: fit-content
    }

    .h-full {
        height: 100%
    }

    .h-lvh {
        height: 100lvh
    }

    .h-max {
        height: max-content
    }

    .h-min {
        height: min-content
    }

    .h-px {
        height: 1px
    }

    .h-screen {
        height: 100vh
    }

    .h-svh {
        height: 100svh
    }

    .max-h-0 {
        max-height: 0px
    }

    .max-h-0\\.5 {
        max-height: 0.125rem
    }

    .max-h-1 {
        max-height: 0.25rem
    }

    .max-h-1\\.5 {
        max-height: 0.375rem
    }

    .max-h-10 {
        max-height: 2.5rem
    }

    .max-h-11 {
        max-height: 2.75rem
    }

    .max-h-12 {
        max-height: 3rem
    }

    .max-h-14 {
        max-height: 3.5rem
    }

    .max-h-16 {
        max-height: 4rem
    }

    .max-h-2 {
        max-height: 0.5rem
    }

    .max-h-2\\.5 {
        max-height: 0.625rem
    }

    .max-h-20 {
        max-height: 5rem
    }

    .max-h-24 {
        max-height: 6rem
    }

    .max-h-28 {
        max-height: 7rem
    }

    .max-h-3 {
        max-height: 0.75rem
    }

    .max-h-3\\.5 {
        max-height: 0.875rem
    }

    .max-h-32 {
        max-height: 8rem
    }

    .max-h-36 {
        max-height: 9rem
    }

    .max-h-4 {
        max-height: 1rem
    }

    .max-h-40 {
        max-height: 10rem
    }

    .max-h-44 {
        max-height: 11rem
    }

    .max-h-48 {
        max-height: 12rem
    }

    .max-h-5 {
        max-height: 1.25rem
    }

    .max-h-52 {
        max-height: 13rem
    }

    .max-h-56 {
        max-height: 14rem
    }

    .max-h-6 {
        max-height: 1.5rem
    }

    .max-h-60 {
        max-height: 15rem
    }

    .max-h-64 {
        max-height: 16rem
    }

    .max-h-7 {
        max-height: 1.75rem
    }

    .max-h-72 {
        max-height: 18rem
    }

    .max-h-8 {
        max-height: 2rem
    }

    .max-h-80 {
        max-height: 20rem
    }

    .max-h-9 {
        max-height: 2.25rem
    }

    .max-h-96 {
        max-height: 24rem
    }

    .max-h-dvh {
        max-height: 100dvh
    }

    .max-h-fit {
        max-height: fit-content
    }

    .max-h-full {
        max-height: 100%
    }

    .max-h-lvh {
        max-height: 100lvh
    }

    .max-h-max {
        max-height: max-content
    }

    .max-h-min {
        max-height: min-content
    }

    .max-h-none {
        max-height: none
    }

    .max-h-px {
        max-height: 1px
    }

    .max-h-screen {
        max-height: 100vh
    }

    .max-h-svh {
        max-height: 100svh
    }

    .min-h-0 {
        min-height: 0px
    }

    .min-h-0\\.5 {
        min-height: 0.125rem
    }

    .min-h-1 {
        min-height: 0.25rem
    }

    .min-h-1\\.5 {
        min-height: 0.375rem
    }

    .min-h-10 {
        min-height: 2.5rem
    }

    .min-h-11 {
        min-height: 2.75rem
    }

    .min-h-12 {
        min-height: 3rem
    }

    .min-h-14 {
        min-height: 3.5rem
    }

    .min-h-16 {
        min-height: 4rem
    }

    .min-h-2 {
        min-height: 0.5rem
    }

    .min-h-2\\.5 {
        min-height: 0.625rem
    }

    .min-h-20 {
        min-height: 5rem
    }

    .min-h-24 {
        min-height: 6rem
    }

    .min-h-28 {
        min-height: 7rem
    }

    .min-h-3 {
        min-height: 0.75rem
    }

    .min-h-3\\.5 {
        min-height: 0.875rem
    }

    .min-h-32 {
        min-height: 8rem
    }

    .min-h-36 {
        min-height: 9rem
    }

    .min-h-4 {
        min-height: 1rem
    }

    .min-h-40 {
        min-height: 10rem
    }

    .min-h-44 {
        min-height: 11rem
    }

    .min-h-48 {
        min-height: 12rem
    }

    .min-h-5 {
        min-height: 1.25rem
    }

    .min-h-52 {
        min-height: 13rem
    }

    .min-h-56 {
        min-height: 14rem
    }

    .min-h-6 {
        min-height: 1.5rem
    }

    .min-h-60 {
        min-height: 15rem
    }

    .min-h-64 {
        min-height: 16rem
    }

    .min-h-7 {
        min-height: 1.75rem
    }

    .min-h-72 {
        min-height: 18rem
    }

    .min-h-8 {
        min-height: 2rem
    }

    .min-h-80 {
        min-height: 20rem
    }

    .min-h-9 {
        min-height: 2.25rem
    }

    .min-h-96 {
        min-height: 24rem
    }

    .min-h-dvh {
        min-height: 100dvh
    }

    .min-h-fit {
        min-height: fit-content
    }

    .min-h-full {
        min-height: 100%
    }

    .min-h-lvh {
        min-height: 100lvh
    }

    .min-h-max {
        min-height: max-content
    }

    .min-h-min {
        min-height: min-content
    }

    .min-h-px {
        min-height: 1px
    }

    .min-h-screen {
        min-height: 100vh
    }

    .min-h-svh {
        min-height: 100svh
    }

    .w-0 {
        width: 0px
    }

    .w-0\\.5 {
        width: 0.125rem
    }

    .w-1 {
        width: 0.25rem
    }

    .w-1\\.5 {
        width: 0.375rem
    }

    .w-1\\/12 {
        width: 8.333333%
    }

    .w-1\\/2 {
        width: 50%
    }

    .w-1\\/3 {
        width: 33.333333%
    }

    .w-1\\/4 {
        width: 25%
    }

    .w-1\\/5 {
        width: 20%
    }

    .w-1\\/6 {
        width: 16.666667%
    }

    .w-10 {
        width: 2.5rem
    }

    .w-10\\/12 {
        width: 83.333333%
    }

    .w-11 {
        width: 2.75rem
    }

    .w-11\\/12 {
        width: 91.666667%
    }

    .w-12 {
        width: 3rem
    }

    .w-14 {
        width: 3.5rem
    }

    .w-16 {
        width: 4rem
    }

    .w-2 {
        width: 0.5rem
    }

    .w-2\\.5 {
        width: 0.625rem
    }

    .w-2\\/12 {
        width: 16.666667%
    }

    .w-2\\/3 {
        width: 66.666667%
    }

    .w-2\\/4 {
        width: 50%
    }

    .w-2\\/5 {
        width: 40%
    }

    .w-2\\/6 {
        width: 33.333333%
    }

    .w-20 {
        width: 5rem
    }

    .w-24 {
        width: 6rem
    }

    .w-28 {
        width: 7rem
    }

    .w-3 {
        width: 0.75rem
    }

    .w-3\\.5 {
        width: 0.875rem
    }

    .w-3\\/12 {
        width: 25%
    }

    .w-3\\/4 {
        width: 75%
    }

    .w-3\\/5 {
        width: 60%
    }

    .w-3\\/6 {
        width: 50%
    }

    .w-32 {
        width: 8rem
    }

    .w-36 {
        width: 9rem
    }

    .w-4 {
        width: 1rem
    }

    .w-4\\/12 {
        width: 33.333333%
    }

    .w-4\\/5 {
        width: 80%
    }

    .w-4\\/6 {
        width: 66.666667%
    }

    .w-40 {
        width: 10rem
    }

    .w-44 {
        width: 11rem
    }

    .w-48 {
        width: 12rem
    }

    .w-5 {
        width: 1.25rem
    }

    .w-5\\/12 {
        width: 41.666667%
    }

    .w-5\\/6 {
        width: 83.333333%
    }

    .w-52 {
        width: 13rem
    }

    .w-56 {
        width: 14rem
    }

    .w-6 {
        width: 1.5rem
    }

    .w-6\\/12 {
        width: 50%
    }

    .w-60 {
        width: 15rem
    }

    .w-64 {
        width: 16rem
    }

    .w-7 {
        width: 1.75rem
    }

    .w-7\\/12 {
        width: 58.333333%
    }

    .w-72 {
        width: 18rem
    }

    .w-8 {
        width: 2rem
    }

    .w-8\\/12 {
        width: 66.666667%
    }

    .w-80 {
        width: 20rem
    }

    .w-9 {
        width: 2.25rem
    }

    .w-9\\/12 {
        width: 75%
    }

    .w-96 {
        width: 24rem
    }

    .w-auto {
        width: auto
    }

    .w-dvw {
        width: 100dvw
    }

    .w-fit {
        width: fit-content
    }

    .w-full {
        width: 100%
    }

    .w-lvw {
        width: 100lvw
    }

    .w-max {
        width: max-content
    }

    .w-min {
        width: min-content
    }

    .w-px {
        width: 1px
    }

    .w-screen {
        width: 100vw
    }

    .w-svw {
        width: 100svw
    }

    .min-w-0 {
        min-width: 0px
    }

    .min-w-0\\.5 {
        min-width: 0.125rem
    }

    .min-w-1 {
        min-width: 0.25rem
    }

    .min-w-1\\.5 {
        min-width: 0.375rem
    }

    .min-w-10 {
        min-width: 2.5rem
    }

    .min-w-11 {
        min-width: 2.75rem
    }

    .min-w-12 {
        min-width: 3rem
    }

    .min-w-14 {
        min-width: 3.5rem
    }

    .min-w-16 {
        min-width: 4rem
    }

    .min-w-2 {
        min-width: 0.5rem
    }

    .min-w-2\\.5 {
        min-width: 0.625rem
    }

    .min-w-20 {
        min-width: 5rem
    }

    .min-w-24 {
        min-width: 6rem
    }

    .min-w-28 {
        min-width: 7rem
    }

    .min-w-3 {
        min-width: 0.75rem
    }

    .min-w-3\\.5 {
        min-width: 0.875rem
    }

    .min-w-32 {
        min-width: 8rem
    }

    .min-w-36 {
        min-width: 9rem
    }

    .min-w-4 {
        min-width: 1rem
    }

    .min-w-40 {
        min-width: 10rem
    }

    .min-w-44 {
        min-width: 11rem
    }

    .min-w-48 {
        min-width: 12rem
    }

    .min-w-5 {
        min-width: 1.25rem
    }

    .min-w-52 {
        min-width: 13rem
    }

    .min-w-56 {
        min-width: 14rem
    }

    .min-w-6 {
        min-width: 1.5rem
    }

    .min-w-60 {
        min-width: 15rem
    }

    .min-w-64 {
        min-width: 16rem
    }

    .min-w-7 {
        min-width: 1.75rem
    }

    .min-w-72 {
        min-width: 18rem
    }

    .min-w-8 {
        min-width: 2rem
    }

    .min-w-80 {
        min-width: 20rem
    }

    .min-w-9 {
        min-width: 2.25rem
    }

    .min-w-96 {
        min-width: 24rem
    }

    .min-w-fit {
        min-width: fit-content
    }

    .min-w-full {
        min-width: 100%
    }

    .min-w-max {
        min-width: max-content
    }

    .min-w-min {
        min-width: min-content
    }

    .min-w-px {
        min-width: 1px
    }

    .max-w-0 {
        max-width: 0px
    }

    .max-w-0\\.5 {
        max-width: 0.125rem
    }

    .max-w-1 {
        max-width: 0.25rem
    }

    .max-w-1\\.5 {
        max-width: 0.375rem
    }

    .max-w-10 {
        max-width: 2.5rem
    }

    .max-w-11 {
        max-width: 2.75rem
    }

    .max-w-12 {
        max-width: 3rem
    }

    .max-w-14 {
        max-width: 3.5rem
    }

    .max-w-16 {
        max-width: 4rem
    }

    .max-w-2 {
        max-width: 0.5rem
    }

    .max-w-2\\.5 {
        max-width: 0.625rem
    }

    .max-w-20 {
        max-width: 5rem
    }

    .max-w-24 {
        max-width: 6rem
    }

    .max-w-28 {
        max-width: 7rem
    }

    .max-w-2xl {
        max-width: 42rem
    }

    .max-w-3 {
        max-width: 0.75rem
    }

    .max-w-3\\.5 {
        max-width: 0.875rem
    }

    .max-w-32 {
        max-width: 8rem
    }

    .max-w-36 {
        max-width: 9rem
    }

    .max-w-3xl {
        max-width: 48rem
    }

    .max-w-4 {
        max-width: 1rem
    }

    .max-w-40 {
        max-width: 10rem
    }

    .max-w-44 {
        max-width: 11rem
    }

    .max-w-48 {
        max-width: 12rem
    }

    .max-w-4xl {
        max-width: 56rem
    }

    .max-w-5 {
        max-width: 1.25rem
    }

    .max-w-52 {
        max-width: 13rem
    }

    .max-w-56 {
        max-width: 14rem
    }

    .max-w-5xl {
        max-width: 64rem
    }

    .max-w-6 {
        max-width: 1.5rem
    }

    .max-w-60 {
        max-width: 15rem
    }

    .max-w-64 {
        max-width: 16rem
    }

    .max-w-6xl {
        max-width: 72rem
    }

    .max-w-7 {
        max-width: 1.75rem
    }

    .max-w-72 {
        max-width: 18rem
    }

    .max-w-7xl {
        max-width: 80rem
    }

    .max-w-8 {
        max-width: 2rem
    }

    .max-w-80 {
        max-width: 20rem
    }

    .max-w-9 {
        max-width: 2.25rem
    }

    .max-w-96 {
        max-width: 24rem
    }

    .max-w-fit {
        max-width: fit-content
    }

    .max-w-full {
        max-width: 100%
    }

    .max-w-lg {
        max-width: 32rem
    }

    .max-w-max {
        max-width: max-content
    }

    .max-w-md {
        max-width: 28rem
    }

    .max-w-min {
        max-width: min-content
    }

    .max-w-none {
        max-width: none
    }

    .max-w-prose {
        max-width: 65ch
    }

    .max-w-px {
        max-width: 1px
    }

    .max-w-screen-2xl {
        max-width: 1536px
    }

    .max-w-screen-lg {
        max-width: 1024px
    }

    .max-w-screen-md {
        max-width: 768px
    }

    .max-w-screen-sm {
        max-width: 640px
    }

    .max-w-screen-xl {
        max-width: 1280px
    }

    .max-w-sm {
        max-width: 24rem
    }

    .max-w-xl {
        max-width: 36rem
    }

    .max-w-xs {
        max-width: 20rem
    }

    .flex-1 {
        flex: 1 1 0%
    }

    .flex-auto {
        flex: 1 1 auto
    }

    .flex-initial {
        flex: 0 1 auto
    }

    .flex-none {
        flex: none
    }

    .flex-shrink {
        flex-shrink: 1
    }

    .flex-shrink-0 {
        flex-shrink: 0
    }

    .flex-grow {
        flex-grow: 1
    }

    .flex-grow-0 {
        flex-grow: 0
    }

    .table-auto {
        table-layout: auto
    }

    .table-fixed {
        table-layout: fixed
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1)
        }

        50% {
            transform: none;
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1)
        }
    }

    .animate-bounce {
        animation: bounce 1s infinite
    }

    .animate-none {
        animation: none
    }

    @keyframes ping {
        75%, 100% {
            transform: scale(2);
            opacity: 0
        }
    }

    .animate-ping {
        animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite
    }

    @keyframes pulse {
        50% {
            opacity: .5
        }
    }

    .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite
    }

    @keyframes spin {
        to {
            transform: rotate(360deg)
        }
    }

    .animate-spin {
        animation: spin 1s linear infinite
    }

    .cursor-alias {
        cursor: alias
    }

    .cursor-all-scroll {
        cursor: all-scroll
    }

    .cursor-auto {
        cursor: auto
    }

    .cursor-cell {
        cursor: cell
    }

    .cursor-col-resize {
        cursor: col-resize
    }

    .cursor-context-menu {
        cursor: context-menu
    }

    .cursor-copy {
        cursor: copy
    }

    .cursor-crosshair {
        cursor: crosshair
    }

    .cursor-default {
        cursor: default
    }

    .cursor-e-resize {
        cursor: e-resize
    }

    .cursor-ew-resize {
        cursor: ew-resize
    }

    .cursor-grab {
        cursor: grab
    }

    .cursor-grabbing {
        cursor: grabbing
    }

    .cursor-help {
        cursor: help
    }

    .cursor-move {
        cursor: move
    }

    .cursor-n-resize {
        cursor: n-resize
    }

    .cursor-ne-resize {
        cursor: ne-resize
    }

    .cursor-nesw-resize {
        cursor: nesw-resize
    }

    .cursor-no-drop {
        cursor: no-drop
    }

    .cursor-none {
        cursor: none
    }

    .cursor-not-allowed {
        cursor: not-allowed
    }

    .cursor-ns-resize {
        cursor: ns-resize
    }

    .cursor-nw-resize {
        cursor: nw-resize
    }

    .cursor-nwse-resize {
        cursor: nwse-resize
    }

    .cursor-pointer {
        cursor: pointer
    }

    .cursor-progress {
        cursor: progress
    }

    .cursor-row-resize {
        cursor: row-resize
    }

    .cursor-s-resize {
        cursor: s-resize
    }

    .cursor-se-resize {
        cursor: se-resize
    }

    .cursor-sw-resize {
        cursor: sw-resize
    }

    .cursor-text {
        cursor: text
    }

    .cursor-vertical-text {
        cursor: vertical-text
    }

    .cursor-w-resize {
        cursor: w-resize
    }

    .cursor-wait {
        cursor: wait
    }

    .cursor-zoom-in {
        cursor: zoom-in
    }

    .cursor-zoom-out {
        cursor: zoom-out
    }

    .grid-flow-row {
        grid-auto-flow: row
    }

    .grid-flow-col {
        grid-auto-flow: column
    }

    .grid-flow-dense {
        grid-auto-flow: dense
    }

    .grid-flow-row-dense {
        grid-auto-flow: row dense
    }

    .grid-flow-col-dense {
        grid-auto-flow: column dense
    }

    .grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr))
    }

    .grid-cols-10 {
        grid-template-columns: repeat(10, minmax(0, 1fr))
    }

    .grid-cols-11 {
        grid-template-columns: repeat(11, minmax(0, 1fr))
    }

    .grid-cols-12 {
        grid-template-columns: repeat(12, minmax(0, 1fr))
    }

    .grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr))
    }

    .grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr))
    }

    .grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr))
    }

    .grid-cols-5 {
        grid-template-columns: repeat(5, minmax(0, 1fr))
    }

    .grid-cols-6 {
        grid-template-columns: repeat(6, minmax(0, 1fr))
    }

    .grid-cols-7 {
        grid-template-columns: repeat(7, minmax(0, 1fr))
    }

    .grid-cols-8 {
        grid-template-columns: repeat(8, minmax(0, 1fr))
    }

    .grid-cols-9 {
        grid-template-columns: repeat(9, minmax(0, 1fr))
    }

    .grid-cols-none {
        grid-template-columns: none
    }

    .grid-cols-subgrid {
        grid-template-columns: subgrid
    }

    .grid-rows-1 {
        grid-template-rows: repeat(1, minmax(0, 1fr))
    }

    .grid-rows-10 {
        grid-template-rows: repeat(10, minmax(0, 1fr))
    }

    .grid-rows-11 {
        grid-template-rows: repeat(11, minmax(0, 1fr))
    }

    .grid-rows-12 {
        grid-template-rows: repeat(12, minmax(0, 1fr))
    }

    .grid-rows-2 {
        grid-template-rows: repeat(2, minmax(0, 1fr))
    }

    .grid-rows-3 {
        grid-template-rows: repeat(3, minmax(0, 1fr))
    }

    .grid-rows-4 {
        grid-template-rows: repeat(4, minmax(0, 1fr))
    }

    .grid-rows-5 {
        grid-template-rows: repeat(5, minmax(0, 1fr))
    }

    .grid-rows-6 {
        grid-template-rows: repeat(6, minmax(0, 1fr))
    }

    .grid-rows-7 {
        grid-template-rows: repeat(7, minmax(0, 1fr))
    }

    .grid-rows-8 {
        grid-template-rows: repeat(8, minmax(0, 1fr))
    }

    .grid-rows-9 {
        grid-template-rows: repeat(9, minmax(0, 1fr))
    }

    .grid-rows-none {
        grid-template-rows: none
    }

    .grid-rows-subgrid {
        grid-template-rows: subgrid
    }

    .flex-row {
        flex-direction: row
    }

    .flex-row-reverse {
        flex-direction: row-reverse
    }

    .flex-col {
        flex-direction: column
    }

    .flex-col-reverse {
        flex-direction: column-reverse
    }

    .flex-wrap {
        flex-wrap: wrap
    }

    .flex-wrap-reverse {
        flex-wrap: wrap-reverse
    }

    .flex-nowrap {
        flex-wrap: nowrap
    }

    .items-start {
        align-items: flex-start
    }

    .items-end {
        align-items: flex-end
    }

    .items-center {
        align-items: center
    }

    .items-baseline {
        align-items: baseline
    }

    .items-stretch {
        align-items: stretch
    }

    .justify-normal {
        justify-content: normal
    }

    .justify-start {
        justify-content: flex-start
    }

    .justify-end {
        justify-content: flex-end
    }

    .justify-center {
        justify-content: center
    }

    .justify-between {
        justify-content: space-between
    }

    .justify-around {
        justify-content: space-around
    }

    .justify-evenly {
        justify-content: space-evenly
    }

    .justify-stretch {
        justify-content: stretch
    }

    .justify-items-start {
        justify-items: start
    }

    .justify-items-end {
        justify-items: end
    }

    .justify-items-center {
        justify-items: center
    }

    .justify-items-stretch {
        justify-items: stretch
    }

    .gap-0 {
        gap: 0px
    }

    .gap-0\\.5 {
        gap: 0.125rem
    }

    .gap-1 {
        gap: 0.25rem
    }

    .gap-1\\.5 {
        gap: 0.375rem
    }

    .gap-10 {
        gap: 2.5rem
    }

    .gap-11 {
        gap: 2.75rem
    }

    .gap-12 {
        gap: 3rem
    }

    .gap-14 {
        gap: 3.5rem
    }

    .gap-16 {
        gap: 4rem
    }

    .gap-2 {
        gap: 0.5rem
    }

    .gap-2\\.5 {
        gap: 0.625rem
    }

    .gap-20 {
        gap: 5rem
    }

    .gap-24 {
        gap: 6rem
    }

    .gap-28 {
        gap: 7rem
    }

    .gap-3 {
        gap: 0.75rem
    }

    .gap-3\\.5 {
        gap: 0.875rem
    }

    .gap-32 {
        gap: 8rem
    }

    .gap-36 {
        gap: 9rem
    }

    .gap-4 {
        gap: 1rem
    }

    .gap-40 {
        gap: 10rem
    }

    .gap-44 {
        gap: 11rem
    }

    .gap-48 {
        gap: 12rem
    }

    .gap-5 {
        gap: 1.25rem
    }

    .gap-52 {
        gap: 13rem
    }

    .gap-56 {
        gap: 14rem
    }

    .gap-6 {
        gap: 1.5rem
    }

    .gap-60 {
        gap: 15rem
    }

    .gap-64 {
        gap: 16rem
    }

    .gap-7 {
        gap: 1.75rem
    }

    .gap-72 {
        gap: 18rem
    }

    .gap-8 {
        gap: 2rem
    }

    .gap-80 {
        gap: 20rem
    }

    .gap-9 {
        gap: 2.25rem
    }

    .gap-96 {
        gap: 24rem
    }

    .gap-px {
        gap: 1px
    }

    .gap-x-0 {
        column-gap: 0px
    }

    .gap-x-0\\.5 {
        column-gap: 0.125rem
    }

    .gap-x-1 {
        column-gap: 0.25rem
    }

    .gap-x-1\\.5 {
        column-gap: 0.375rem
    }

    .gap-x-10 {
        column-gap: 2.5rem
    }

    .gap-x-11 {
        column-gap: 2.75rem
    }

    .gap-x-12 {
        column-gap: 3rem
    }

    .gap-x-14 {
        column-gap: 3.5rem
    }

    .gap-x-16 {
        column-gap: 4rem
    }

    .gap-x-2 {
        column-gap: 0.5rem
    }

    .gap-x-2\\.5 {
        column-gap: 0.625rem
    }

    .gap-x-20 {
        column-gap: 5rem
    }

    .gap-x-24 {
        column-gap: 6rem
    }

    .gap-x-28 {
        column-gap: 7rem
    }

    .gap-x-3 {
        column-gap: 0.75rem
    }

    .gap-x-3\\.5 {
        column-gap: 0.875rem
    }

    .gap-x-32 {
        column-gap: 8rem
    }

    .gap-x-36 {
        column-gap: 9rem
    }

    .gap-x-4 {
        column-gap: 1rem
    }

    .gap-x-40 {
        column-gap: 10rem
    }

    .gap-x-44 {
        column-gap: 11rem
    }

    .gap-x-48 {
        column-gap: 12rem
    }

    .gap-x-5 {
        column-gap: 1.25rem
    }

    .gap-x-52 {
        column-gap: 13rem
    }

    .gap-x-56 {
        column-gap: 14rem
    }

    .gap-x-6 {
        column-gap: 1.5rem
    }

    .gap-x-60 {
        column-gap: 15rem
    }

    .gap-x-64 {
        column-gap: 16rem
    }

    .gap-x-7 {
        column-gap: 1.75rem
    }

    .gap-x-72 {
        column-gap: 18rem
    }

    .gap-x-8 {
        column-gap: 2rem
    }

    .gap-x-80 {
        column-gap: 20rem
    }

    .gap-x-9 {
        column-gap: 2.25rem
    }

    .gap-x-96 {
        column-gap: 24rem
    }

    .gap-x-px {
        column-gap: 1px
    }

    .gap-y-0 {
        row-gap: 0px
    }

    .gap-y-0\\.5 {
        row-gap: 0.125rem
    }

    .gap-y-1 {
        row-gap: 0.25rem
    }

    .gap-y-1\\.5 {
        row-gap: 0.375rem
    }

    .gap-y-10 {
        row-gap: 2.5rem
    }

    .gap-y-11 {
        row-gap: 2.75rem
    }

    .gap-y-12 {
        row-gap: 3rem
    }

    .gap-y-14 {
        row-gap: 3.5rem
    }

    .gap-y-16 {
        row-gap: 4rem
    }

    .gap-y-2 {
        row-gap: 0.5rem
    }

    .gap-y-2\\.5 {
        row-gap: 0.625rem
    }

    .gap-y-20 {
        row-gap: 5rem
    }

    .gap-y-24 {
        row-gap: 6rem
    }

    .gap-y-28 {
        row-gap: 7rem
    }

    .gap-y-3 {
        row-gap: 0.75rem
    }

    .gap-y-3\\.5 {
        row-gap: 0.875rem
    }

    .gap-y-32 {
        row-gap: 8rem
    }

    .gap-y-36 {
        row-gap: 9rem
    }

    .gap-y-4 {
        row-gap: 1rem
    }

    .gap-y-40 {
        row-gap: 10rem
    }

    .gap-y-44 {
        row-gap: 11rem
    }

    .gap-y-48 {
        row-gap: 12rem
    }

    .gap-y-5 {
        row-gap: 1.25rem
    }

    .gap-y-52 {
        row-gap: 13rem
    }

    .gap-y-56 {
        row-gap: 14rem
    }

    .gap-y-6 {
        row-gap: 1.5rem
    }

    .gap-y-60 {
        row-gap: 15rem
    }

    .gap-y-64 {
        row-gap: 16rem
    }

    .gap-y-7 {
        row-gap: 1.75rem
    }

    .gap-y-72 {
        row-gap: 18rem
    }

    .gap-y-8 {
        row-gap: 2rem
    }

    .gap-y-80 {
        row-gap: 20rem
    }

    .gap-y-9 {
        row-gap: 2.25rem
    }

    .gap-y-96 {
        row-gap: 24rem
    }

    .gap-y-px {
        row-gap: 1px
    }

    .self-auto {
        align-self: auto
    }

    .self-start {
        align-self: flex-start
    }

    .self-end {
        align-self: flex-end
    }

    .self-center {
        align-self: center
    }

    .self-stretch {
        align-self: stretch
    }

    .self-baseline {
        align-self: baseline
    }

    .justify-self-auto {
        justify-self: auto
    }

    .justify-self-start {
        justify-self: start
    }

    .justify-self-end {
        justify-self: end
    }

    .justify-self-center {
        justify-self: center
    }

    .justify-self-stretch {
        justify-self: stretch
    }

    .overflow-auto {
        overflow: auto
    }

    .overflow-hidden {
        overflow: hidden
    }

    .overflow-clip {
        overflow: clip
    }

    .overflow-visible {
        overflow: visible
    }

    .overflow-scroll {
        overflow: scroll
    }

    .overflow-x-auto {
        overflow-x: auto
    }

    .overflow-y-auto {
        overflow-y: auto
    }

    .overflow-x-hidden {
        overflow-x: hidden
    }

    .overflow-y-hidden {
        overflow-y: hidden
    }

    .overflow-x-clip {
        overflow-x: clip
    }

    .overflow-y-clip {
        overflow-y: clip
    }

    .overflow-x-visible {
        overflow-x: visible
    }

    .overflow-y-visible {
        overflow-y: visible
    }

    .overflow-x-scroll {
        overflow-x: scroll
    }

    .overflow-y-scroll {
        overflow-y: scroll
    }

    .overflow-ellipsis {
        text-overflow: ellipsis
    }

    .rounded {
        border-radius: 0.25rem
    }

    .rounded-2xl {
        border-radius: 1rem
    }

    .rounded-3xl {
        border-radius: 1.5rem
    }

    .rounded-full {
        border-radius: 9999px
    }

    .rounded-lg {
        border-radius: 0.5rem
    }

    .rounded-md {
        border-radius: 0.375rem
    }

    .rounded-none {
        border-radius: 0px
    }

    .rounded-sm {
        border-radius: 0.125rem
    }

    .rounded-xl {
        border-radius: 0.75rem
    }

    .rounded-b {
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem
    }

    .rounded-b-2xl {
        border-bottom-right-radius: 1rem;
        border-bottom-left-radius: 1rem
    }

    .rounded-b-3xl {
        border-bottom-right-radius: 1.5rem;
        border-bottom-left-radius: 1.5rem
    }

    .rounded-b-full {
        border-bottom-right-radius: 9999px;
        border-bottom-left-radius: 9999px
    }

    .rounded-b-lg {
        border-bottom-right-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem
    }

    .rounded-b-md {
        border-bottom-right-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem
    }

    .rounded-b-none {
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px
    }

    .rounded-b-sm {
        border-bottom-right-radius: 0.125rem;
        border-bottom-left-radius: 0.125rem
    }

    .rounded-b-xl {
        border-bottom-right-radius: 0.75rem;
        border-bottom-left-radius: 0.75rem
    }

    .rounded-e {
        border-start-end-radius: 0.25rem;
        border-end-end-radius: 0.25rem
    }

    .rounded-e-2xl {
        border-start-end-radius: 1rem;
        border-end-end-radius: 1rem
    }

    .rounded-e-3xl {
        border-start-end-radius: 1.5rem;
        border-end-end-radius: 1.5rem
    }

    .rounded-e-full {
        border-start-end-radius: 9999px;
        border-end-end-radius: 9999px
    }

    .rounded-e-lg {
        border-start-end-radius: 0.5rem;
        border-end-end-radius: 0.5rem
    }

    .rounded-e-md {
        border-start-end-radius: 0.375rem;
        border-end-end-radius: 0.375rem
    }

    .rounded-e-none {
        border-start-end-radius: 0px;
        border-end-end-radius: 0px
    }

    .rounded-e-sm {
        border-start-end-radius: 0.125rem;
        border-end-end-radius: 0.125rem
    }

    .rounded-e-xl {
        border-start-end-radius: 0.75rem;
        border-end-end-radius: 0.75rem
    }

    .rounded-l {
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem
    }

    .rounded-l-2xl {
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem
    }

    .rounded-l-3xl {
        border-top-left-radius: 1.5rem;
        border-bottom-left-radius: 1.5rem
    }

    .rounded-l-full {
        border-top-left-radius: 9999px;
        border-bottom-left-radius: 9999px
    }

    .rounded-l-lg {
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem
    }

    .rounded-l-md {
        border-top-left-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem
    }

    .rounded-l-none {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px
    }

    .rounded-l-sm {
        border-top-left-radius: 0.125rem;
        border-bottom-left-radius: 0.125rem
    }

    .rounded-l-xl {
        border-top-left-radius: 0.75rem;
        border-bottom-left-radius: 0.75rem
    }

    .rounded-r {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem
    }

    .rounded-r-2xl {
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem
    }

    .rounded-r-3xl {
        border-top-right-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem
    }

    .rounded-r-full {
        border-top-right-radius: 9999px;
        border-bottom-right-radius: 9999px
    }

    .rounded-r-lg {
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem
    }

    .rounded-r-md {
        border-top-right-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem
    }

    .rounded-r-none {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px
    }

    .rounded-r-sm {
        border-top-right-radius: 0.125rem;
        border-bottom-right-radius: 0.125rem
    }

    .rounded-r-xl {
        border-top-right-radius: 0.75rem;
        border-bottom-right-radius: 0.75rem
    }

    .rounded-s {
        border-start-start-radius: 0.25rem;
        border-end-start-radius: 0.25rem
    }

    .rounded-s-2xl {
        border-start-start-radius: 1rem;
        border-end-start-radius: 1rem
    }

    .rounded-s-3xl {
        border-start-start-radius: 1.5rem;
        border-end-start-radius: 1.5rem
    }

    .rounded-s-full {
        border-start-start-radius: 9999px;
        border-end-start-radius: 9999px
    }

    .rounded-s-lg {
        border-start-start-radius: 0.5rem;
        border-end-start-radius: 0.5rem
    }

    .rounded-s-md {
        border-start-start-radius: 0.375rem;
        border-end-start-radius: 0.375rem
    }

    .rounded-s-none {
        border-start-start-radius: 0px;
        border-end-start-radius: 0px
    }

    .rounded-s-sm {
        border-start-start-radius: 0.125rem;
        border-end-start-radius: 0.125rem
    }

    .rounded-s-xl {
        border-start-start-radius: 0.75rem;
        border-end-start-radius: 0.75rem
    }

    .rounded-t {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem
    }

    .rounded-t-2xl {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem
    }

    .rounded-t-3xl {
        border-top-left-radius: 1.5rem;
        border-top-right-radius: 1.5rem
    }

    .rounded-t-full {
        border-top-left-radius: 9999px;
        border-top-right-radius: 9999px
    }

    .rounded-t-lg {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem
    }

    .rounded-t-md {
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem
    }

    .rounded-t-none {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px
    }

    .rounded-t-sm {
        border-top-left-radius: 0.125rem;
        border-top-right-radius: 0.125rem
    }

    .rounded-t-xl {
        border-top-left-radius: 0.75rem;
        border-top-right-radius: 0.75rem
    }

    .rounded-bl {
        border-bottom-left-radius: 0.25rem
    }

    .rounded-bl-2xl {
        border-bottom-left-radius: 1rem
    }

    .rounded-bl-3xl {
        border-bottom-left-radius: 1.5rem
    }

    .rounded-bl-full {
        border-bottom-left-radius: 9999px
    }

    .rounded-bl-lg {
        border-bottom-left-radius: 0.5rem
    }

    .rounded-bl-md {
        border-bottom-left-radius: 0.375rem
    }

    .rounded-bl-none {
        border-bottom-left-radius: 0px
    }

    .rounded-bl-sm {
        border-bottom-left-radius: 0.125rem
    }

    .rounded-bl-xl {
        border-bottom-left-radius: 0.75rem
    }

    .rounded-br {
        border-bottom-right-radius: 0.25rem
    }

    .rounded-br-2xl {
        border-bottom-right-radius: 1rem
    }

    .rounded-br-3xl {
        border-bottom-right-radius: 1.5rem
    }

    .rounded-br-full {
        border-bottom-right-radius: 9999px
    }

    .rounded-br-lg {
        border-bottom-right-radius: 0.5rem
    }

    .rounded-br-md {
        border-bottom-right-radius: 0.375rem
    }

    .rounded-br-none {
        border-bottom-right-radius: 0px
    }

    .rounded-br-sm {
        border-bottom-right-radius: 0.125rem
    }

    .rounded-br-xl {
        border-bottom-right-radius: 0.75rem
    }

    .rounded-ee {
        border-end-end-radius: 0.25rem
    }

    .rounded-ee-2xl {
        border-end-end-radius: 1rem
    }

    .rounded-ee-3xl {
        border-end-end-radius: 1.5rem
    }

    .rounded-ee-full {
        border-end-end-radius: 9999px
    }

    .rounded-ee-lg {
        border-end-end-radius: 0.5rem
    }

    .rounded-ee-md {
        border-end-end-radius: 0.375rem
    }

    .rounded-ee-none {
        border-end-end-radius: 0px
    }

    .rounded-ee-sm {
        border-end-end-radius: 0.125rem
    }

    .rounded-ee-xl {
        border-end-end-radius: 0.75rem
    }

    .rounded-es {
        border-end-start-radius: 0.25rem
    }

    .rounded-es-2xl {
        border-end-start-radius: 1rem
    }

    .rounded-es-3xl {
        border-end-start-radius: 1.5rem
    }

    .rounded-es-full {
        border-end-start-radius: 9999px
    }

    .rounded-es-lg {
        border-end-start-radius: 0.5rem
    }

    .rounded-es-md {
        border-end-start-radius: 0.375rem
    }

    .rounded-es-none {
        border-end-start-radius: 0px
    }

    .rounded-es-sm {
        border-end-start-radius: 0.125rem
    }

    .rounded-es-xl {
        border-end-start-radius: 0.75rem
    }

    .rounded-se {
        border-start-end-radius: 0.25rem
    }

    .rounded-se-2xl {
        border-start-end-radius: 1rem
    }

    .rounded-se-3xl {
        border-start-end-radius: 1.5rem
    }

    .rounded-se-full {
        border-start-end-radius: 9999px
    }

    .rounded-se-lg {
        border-start-end-radius: 0.5rem
    }

    .rounded-se-md {
        border-start-end-radius: 0.375rem
    }

    .rounded-se-none {
        border-start-end-radius: 0px
    }

    .rounded-se-sm {
        border-start-end-radius: 0.125rem
    }

    .rounded-se-xl {
        border-start-end-radius: 0.75rem
    }

    .rounded-ss {
        border-start-start-radius: 0.25rem
    }

    .rounded-ss-2xl {
        border-start-start-radius: 1rem
    }

    .rounded-ss-3xl {
        border-start-start-radius: 1.5rem
    }

    .rounded-ss-full {
        border-start-start-radius: 9999px
    }

    .rounded-ss-lg {
        border-start-start-radius: 0.5rem
    }

    .rounded-ss-md {
        border-start-start-radius: 0.375rem
    }

    .rounded-ss-none {
        border-start-start-radius: 0px
    }

    .rounded-ss-sm {
        border-start-start-radius: 0.125rem
    }

    .rounded-ss-xl {
        border-start-start-radius: 0.75rem
    }

    .rounded-tl {
        border-top-left-radius: 0.25rem
    }

    .rounded-tl-2xl {
        border-top-left-radius: 1rem
    }

    .rounded-tl-3xl {
        border-top-left-radius: 1.5rem
    }

    .rounded-tl-full {
        border-top-left-radius: 9999px
    }

    .rounded-tl-lg {
        border-top-left-radius: 0.5rem
    }

    .rounded-tl-md {
        border-top-left-radius: 0.375rem
    }

    .rounded-tl-none {
        border-top-left-radius: 0px
    }

    .rounded-tl-sm {
        border-top-left-radius: 0.125rem
    }

    .rounded-tl-xl {
        border-top-left-radius: 0.75rem
    }

    .rounded-tr {
        border-top-right-radius: 0.25rem
    }

    .rounded-tr-2xl {
        border-top-right-radius: 1rem
    }

    .rounded-tr-3xl {
        border-top-right-radius: 1.5rem
    }

    .rounded-tr-full {
        border-top-right-radius: 9999px
    }

    .rounded-tr-lg {
        border-top-right-radius: 0.5rem
    }

    .rounded-tr-md {
        border-top-right-radius: 0.375rem
    }

    .rounded-tr-none {
        border-top-right-radius: 0px
    }

    .rounded-tr-sm {
        border-top-right-radius: 0.125rem
    }

    .rounded-tr-xl {
        border-top-right-radius: 0.75rem
    }

    .border-0 {
        border-width: 0px
    }

    .border-2 {
        border-width: 2px
    }

    .border-4 {
        border-width: 4px
    }

    .border-8 {
        border-width: 8px
    }

    .border-x {
        border-left-width: 1px;
        border-right-width: 1px
    }

    .border-x-0 {
        border-left-width: 0px;
        border-right-width: 0px
    }

    .border-x-2 {
        border-left-width: 2px;
        border-right-width: 2px
    }

    .border-x-4 {
        border-left-width: 4px;
        border-right-width: 4px
    }

    .border-x-8 {
        border-left-width: 8px;
        border-right-width: 8px
    }

    .border-y {
        border-top-width: 1px;
        border-bottom-width: 1px
    }

    .border-y-0 {
        border-top-width: 0px;
        border-bottom-width: 0px
    }

    .border-y-2 {
        border-top-width: 2px;
        border-bottom-width: 2px
    }

    .border-y-4 {
        border-top-width: 4px;
        border-bottom-width: 4px
    }

    .border-y-8 {
        border-top-width: 8px;
        border-bottom-width: 8px
    }

    .border-b {
        border-bottom-width: 1px
    }

    .border-b-0 {
        border-bottom-width: 0px
    }

    .border-b-2 {
        border-bottom-width: 2px
    }

    .border-b-4 {
        border-bottom-width: 4px
    }

    .border-b-8 {
        border-bottom-width: 8px
    }

    .border-e {
        border-inline-end-width: 1px
    }

    .border-e-0 {
        border-inline-end-width: 0px
    }

    .border-e-2 {
        border-inline-end-width: 2px
    }

    .border-e-4 {
        border-inline-end-width: 4px
    }

    .border-e-8 {
        border-inline-end-width: 8px
    }

    .border-l {
        border-left-width: 1px
    }

    .border-l-0 {
        border-left-width: 0px
    }

    .border-l-2 {
        border-left-width: 2px
    }

    .border-l-4 {
        border-left-width: 4px
    }

    .border-l-8 {
        border-left-width: 8px
    }

    .border-r {
        border-right-width: 1px
    }

    .border-r-0 {
        border-right-width: 0px
    }

    .border-r-2 {
        border-right-width: 2px
    }

    .border-r-4 {
        border-right-width: 4px
    }

    .border-r-8 {
        border-right-width: 8px
    }

    .border-s {
        border-inline-start-width: 1px
    }

    .border-s-0 {
        border-inline-start-width: 0px
    }

    .border-s-2 {
        border-inline-start-width: 2px
    }

    .border-s-4 {
        border-inline-start-width: 4px
    }

    .border-s-8 {
        border-inline-start-width: 8px
    }

    .border-t {
        border-top-width: 1px
    }

    .border-t-0 {
        border-top-width: 0px
    }

    .border-t-2 {
        border-top-width: 2px
    }

    .border-t-4 {
        border-top-width: 4px
    }

    .border-t-8 {
        border-top-width: 8px
    }

    .bg-amber-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 243 199 / var(--tw-bg-opacity, 1))
    }

    .bg-amber-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(253 230 138 / var(--tw-bg-opacity, 1))
    }

    .bg-amber-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(252 211 77 / var(--tw-bg-opacity, 1))
    }

    .bg-amber-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(251 191 36 / var(--tw-bg-opacity, 1))
    }

    .bg-amber-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(245 158 11 / var(--tw-bg-opacity, 1))
    }

    .bg-amber-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(217 119 6 / var(--tw-bg-opacity, 1))
    }

    .bg-amber-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(180 83 9 / var(--tw-bg-opacity, 1))
    }

    .bg-amber-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(146 64 14 / var(--tw-bg-opacity, 1))
    }

    .bg-amber-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(120 53 15 / var(--tw-bg-opacity, 1))
    }

    .bg-amber-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(69 26 3 / var(--tw-bg-opacity, 1))
    }

    .bg-blue-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(219 234 254 / var(--tw-bg-opacity, 1))
    }

    .bg-blue-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(191 219 254 / var(--tw-bg-opacity, 1))
    }

    .bg-blue-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(147 197 253 / var(--tw-bg-opacity, 1))
    }

    .bg-blue-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(96 165 250 / var(--tw-bg-opacity, 1))
    }

    .bg-blue-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(59 130 246 / var(--tw-bg-opacity, 1))
    }

    .bg-blue-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1))
    }

    .bg-blue-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1))
    }

    .bg-blue-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(30 64 175 / var(--tw-bg-opacity, 1))
    }

    .bg-blue-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(30 58 138 / var(--tw-bg-opacity, 1))
    }

    .bg-blue-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(23 37 84 / var(--tw-bg-opacity, 1))
    }

    .bg-cyan-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(207 250 254 / var(--tw-bg-opacity, 1))
    }

    .bg-cyan-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(165 243 252 / var(--tw-bg-opacity, 1))
    }

    .bg-cyan-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(103 232 249 / var(--tw-bg-opacity, 1))
    }

    .bg-cyan-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(34 211 238 / var(--tw-bg-opacity, 1))
    }

    .bg-cyan-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(6 182 212 / var(--tw-bg-opacity, 1))
    }

    .bg-cyan-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(8 145 178 / var(--tw-bg-opacity, 1))
    }

    .bg-cyan-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(14 116 144 / var(--tw-bg-opacity, 1))
    }

    .bg-cyan-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(21 94 117 / var(--tw-bg-opacity, 1))
    }

    .bg-cyan-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(22 78 99 / var(--tw-bg-opacity, 1))
    }

    .bg-cyan-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(8 51 68 / var(--tw-bg-opacity, 1))
    }

    .bg-emerald-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(209 250 229 / var(--tw-bg-opacity, 1))
    }

    .bg-emerald-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(167 243 208 / var(--tw-bg-opacity, 1))
    }

    .bg-emerald-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(110 231 183 / var(--tw-bg-opacity, 1))
    }

    .bg-emerald-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(52 211 153 / var(--tw-bg-opacity, 1))
    }

    .bg-emerald-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(16 185 129 / var(--tw-bg-opacity, 1))
    }

    .bg-emerald-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(5 150 105 / var(--tw-bg-opacity, 1))
    }

    .bg-emerald-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(4 120 87 / var(--tw-bg-opacity, 1))
    }

    .bg-emerald-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(6 95 70 / var(--tw-bg-opacity, 1))
    }

    .bg-emerald-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(6 78 59 / var(--tw-bg-opacity, 1))
    }

    .bg-emerald-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(2 44 34 / var(--tw-bg-opacity, 1))
    }

    .bg-fuchsia-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(250 232 255 / var(--tw-bg-opacity, 1))
    }

    .bg-fuchsia-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(245 208 254 / var(--tw-bg-opacity, 1))
    }

    .bg-fuchsia-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(240 171 252 / var(--tw-bg-opacity, 1))
    }

    .bg-fuchsia-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(232 121 249 / var(--tw-bg-opacity, 1))
    }

    .bg-fuchsia-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(217 70 239 / var(--tw-bg-opacity, 1))
    }

    .bg-fuchsia-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(192 38 211 / var(--tw-bg-opacity, 1))
    }

    .bg-fuchsia-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(162 28 175 / var(--tw-bg-opacity, 1))
    }

    .bg-fuchsia-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(134 25 143 / var(--tw-bg-opacity, 1))
    }

    .bg-fuchsia-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(112 26 117 / var(--tw-bg-opacity, 1))
    }

    .bg-fuchsia-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(74 4 78 / var(--tw-bg-opacity, 1))
    }

    .bg-gray-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1))
    }

    .bg-gray-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1))
    }

    .bg-gray-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(209 213 219 / var(--tw-bg-opacity, 1))
    }

    .bg-gray-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(156 163 175 / var(--tw-bg-opacity, 1))
    }

    .bg-gray-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(107 114 128 / var(--tw-bg-opacity, 1))
    }

    .bg-gray-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(75 85 99 / var(--tw-bg-opacity, 1))
    }

    .bg-gray-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1))
    }

    .bg-gray-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1))
    }

    .bg-gray-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1))
    }

    .bg-gray-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(3 7 18 / var(--tw-bg-opacity, 1))
    }

    .bg-green-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(220 252 231 / var(--tw-bg-opacity, 1))
    }

    .bg-green-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(187 247 208 / var(--tw-bg-opacity, 1))
    }

    .bg-green-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(134 239 172 / var(--tw-bg-opacity, 1))
    }

    .bg-green-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(74 222 128 / var(--tw-bg-opacity, 1))
    }

    .bg-green-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1))
    }

    .bg-green-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(22 163 74 / var(--tw-bg-opacity, 1))
    }

    .bg-green-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(21 128 61 / var(--tw-bg-opacity, 1))
    }

    .bg-green-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(22 101 52 / var(--tw-bg-opacity, 1))
    }

    .bg-green-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(20 83 45 / var(--tw-bg-opacity, 1))
    }

    .bg-green-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(5 46 22 / var(--tw-bg-opacity, 1))
    }

    .bg-indigo-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(224 231 255 / var(--tw-bg-opacity, 1))
    }

    .bg-indigo-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(199 210 254 / var(--tw-bg-opacity, 1))
    }

    .bg-indigo-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(165 180 252 / var(--tw-bg-opacity, 1))
    }

    .bg-indigo-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(129 140 248 / var(--tw-bg-opacity, 1))
    }

    .bg-indigo-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(99 102 241 / var(--tw-bg-opacity, 1))
    }

    .bg-indigo-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(79 70 229 / var(--tw-bg-opacity, 1))
    }

    .bg-indigo-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(67 56 202 / var(--tw-bg-opacity, 1))
    }

    .bg-indigo-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(55 48 163 / var(--tw-bg-opacity, 1))
    }

    .bg-indigo-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(49 46 129 / var(--tw-bg-opacity, 1))
    }

    .bg-indigo-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(30 27 75 / var(--tw-bg-opacity, 1))
    }

    .bg-lime-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(236 252 203 / var(--tw-bg-opacity, 1))
    }

    .bg-lime-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(217 249 157 / var(--tw-bg-opacity, 1))
    }

    .bg-lime-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(190 242 100 / var(--tw-bg-opacity, 1))
    }

    .bg-lime-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(163 230 53 / var(--tw-bg-opacity, 1))
    }

    .bg-lime-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(132 204 22 / var(--tw-bg-opacity, 1))
    }

    .bg-lime-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(101 163 13 / var(--tw-bg-opacity, 1))
    }

    .bg-lime-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(77 124 15 / var(--tw-bg-opacity, 1))
    }

    .bg-lime-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(63 98 18 / var(--tw-bg-opacity, 1))
    }

    .bg-lime-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(54 83 20 / var(--tw-bg-opacity, 1))
    }

    .bg-lime-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(26 46 5 / var(--tw-bg-opacity, 1))
    }

    .bg-neutral-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(245 245 245 / var(--tw-bg-opacity, 1))
    }

    .bg-neutral-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(229 229 229 / var(--tw-bg-opacity, 1))
    }

    .bg-neutral-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(212 212 212 / var(--tw-bg-opacity, 1))
    }

    .bg-neutral-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(163 163 163 / var(--tw-bg-opacity, 1))
    }

    .bg-neutral-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(115 115 115 / var(--tw-bg-opacity, 1))
    }

    .bg-neutral-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(82 82 82 / var(--tw-bg-opacity, 1))
    }

    .bg-neutral-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1))
    }

    .bg-neutral-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(38 38 38 / var(--tw-bg-opacity, 1))
    }

    .bg-neutral-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(23 23 23 / var(--tw-bg-opacity, 1))
    }

    .bg-neutral-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1))
    }

    .bg-orange-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(255 237 213 / var(--tw-bg-opacity, 1))
    }

    .bg-orange-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 215 170 / var(--tw-bg-opacity, 1))
    }

    .bg-orange-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(253 186 116 / var(--tw-bg-opacity, 1))
    }

    .bg-orange-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(251 146 60 / var(--tw-bg-opacity, 1))
    }

    .bg-orange-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(249 115 22 / var(--tw-bg-opacity, 1))
    }

    .bg-orange-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(234 88 12 / var(--tw-bg-opacity, 1))
    }

    .bg-orange-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(194 65 12 / var(--tw-bg-opacity, 1))
    }

    .bg-orange-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(154 52 18 / var(--tw-bg-opacity, 1))
    }

    .bg-orange-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(124 45 18 / var(--tw-bg-opacity, 1))
    }

    .bg-orange-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(67 20 7 / var(--tw-bg-opacity, 1))
    }

    .bg-pink-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(252 231 243 / var(--tw-bg-opacity, 1))
    }

    .bg-pink-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(251 207 232 / var(--tw-bg-opacity, 1))
    }

    .bg-pink-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(249 168 212 / var(--tw-bg-opacity, 1))
    }

    .bg-pink-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(244 114 182 / var(--tw-bg-opacity, 1))
    }

    .bg-pink-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(236 72 153 / var(--tw-bg-opacity, 1))
    }

    .bg-pink-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(219 39 119 / var(--tw-bg-opacity, 1))
    }

    .bg-pink-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(190 24 93 / var(--tw-bg-opacity, 1))
    }

    .bg-pink-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(157 23 77 / var(--tw-bg-opacity, 1))
    }

    .bg-pink-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(131 24 67 / var(--tw-bg-opacity, 1))
    }

    .bg-pink-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(80 7 36 / var(--tw-bg-opacity, 1))
    }

    .bg-purple-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(243 232 255 / var(--tw-bg-opacity, 1))
    }

    .bg-purple-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(233 213 255 / var(--tw-bg-opacity, 1))
    }

    .bg-purple-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(216 180 254 / var(--tw-bg-opacity, 1))
    }

    .bg-purple-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(192 132 252 / var(--tw-bg-opacity, 1))
    }

    .bg-purple-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1))
    }

    .bg-purple-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(147 51 234 / var(--tw-bg-opacity, 1))
    }

    .bg-purple-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(126 34 206 / var(--tw-bg-opacity, 1))
    }

    .bg-purple-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1))
    }

    .bg-purple-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(88 28 135 / var(--tw-bg-opacity, 1))
    }

    .bg-purple-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(59 7 100 / var(--tw-bg-opacity, 1))
    }

    .bg-red-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 226 226 / var(--tw-bg-opacity, 1))
    }

    .bg-red-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 202 202 / var(--tw-bg-opacity, 1))
    }

    .bg-red-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(252 165 165 / var(--tw-bg-opacity, 1))
    }

    .bg-red-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(248 113 113 / var(--tw-bg-opacity, 1))
    }

    .bg-red-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1))
    }

    .bg-red-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1))
    }

    .bg-red-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(185 28 28 / var(--tw-bg-opacity, 1))
    }

    .bg-red-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(153 27 27 / var(--tw-bg-opacity, 1))
    }

    .bg-red-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(127 29 29 / var(--tw-bg-opacity, 1))
    }

    .bg-red-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(69 10 10 / var(--tw-bg-opacity, 1))
    }

    .bg-rose-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(255 228 230 / var(--tw-bg-opacity, 1))
    }

    .bg-rose-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 205 211 / var(--tw-bg-opacity, 1))
    }

    .bg-rose-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(253 164 175 / var(--tw-bg-opacity, 1))
    }

    .bg-rose-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(251 113 133 / var(--tw-bg-opacity, 1))
    }

    .bg-rose-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(244 63 94 / var(--tw-bg-opacity, 1))
    }

    .bg-rose-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(225 29 72 / var(--tw-bg-opacity, 1))
    }

    .bg-rose-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(190 18 60 / var(--tw-bg-opacity, 1))
    }

    .bg-rose-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(159 18 57 / var(--tw-bg-opacity, 1))
    }

    .bg-rose-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(136 19 55 / var(--tw-bg-opacity, 1))
    }

    .bg-rose-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(76 5 25 / var(--tw-bg-opacity, 1))
    }

    .bg-sky-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(224 242 254 / var(--tw-bg-opacity, 1))
    }

    .bg-sky-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(186 230 253 / var(--tw-bg-opacity, 1))
    }

    .bg-sky-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(125 211 252 / var(--tw-bg-opacity, 1))
    }

    .bg-sky-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(56 189 248 / var(--tw-bg-opacity, 1))
    }

    .bg-sky-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(14 165 233 / var(--tw-bg-opacity, 1))
    }

    .bg-sky-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(2 132 199 / var(--tw-bg-opacity, 1))
    }

    .bg-sky-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(3 105 161 / var(--tw-bg-opacity, 1))
    }

    .bg-sky-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(7 89 133 / var(--tw-bg-opacity, 1))
    }

    .bg-sky-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(12 74 110 / var(--tw-bg-opacity, 1))
    }

    .bg-sky-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(8 47 73 / var(--tw-bg-opacity, 1))
    }

    .bg-slate-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(241 245 249 / var(--tw-bg-opacity, 1))
    }

    .bg-slate-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(226 232 240 / var(--tw-bg-opacity, 1))
    }

    .bg-slate-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(203 213 225 / var(--tw-bg-opacity, 1))
    }

    .bg-slate-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(148 163 184 / var(--tw-bg-opacity, 1))
    }

    .bg-slate-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(100 116 139 / var(--tw-bg-opacity, 1))
    }

    .bg-slate-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(71 85 105 / var(--tw-bg-opacity, 1))
    }

    .bg-slate-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1))
    }

    .bg-slate-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1))
    }

    .bg-slate-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(15 23 42 / var(--tw-bg-opacity, 1))
    }

    .bg-slate-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(2 6 23 / var(--tw-bg-opacity, 1))
    }

    .bg-stone-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1))
    }

    .bg-stone-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(231 229 228 / var(--tw-bg-opacity, 1))
    }

    .bg-stone-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(214 211 209 / var(--tw-bg-opacity, 1))
    }

    .bg-stone-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(168 162 158 / var(--tw-bg-opacity, 1))
    }

    .bg-stone-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(120 113 108 / var(--tw-bg-opacity, 1))
    }

    .bg-stone-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(87 83 78 / var(--tw-bg-opacity, 1))
    }

    .bg-stone-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(68 64 60 / var(--tw-bg-opacity, 1))
    }

    .bg-stone-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(41 37 36 / var(--tw-bg-opacity, 1))
    }

    .bg-stone-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1))
    }

    .bg-stone-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(12 10 9 / var(--tw-bg-opacity, 1))
    }

    .bg-teal-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(204 251 241 / var(--tw-bg-opacity, 1))
    }

    .bg-teal-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(153 246 228 / var(--tw-bg-opacity, 1))
    }

    .bg-teal-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(94 234 212 / var(--tw-bg-opacity, 1))
    }

    .bg-teal-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(45 212 191 / var(--tw-bg-opacity, 1))
    }

    .bg-teal-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(20 184 166 / var(--tw-bg-opacity, 1))
    }

    .bg-teal-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(13 148 136 / var(--tw-bg-opacity, 1))
    }

    .bg-teal-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(15 118 110 / var(--tw-bg-opacity, 1))
    }

    .bg-teal-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(17 94 89 / var(--tw-bg-opacity, 1))
    }

    .bg-teal-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(19 78 74 / var(--tw-bg-opacity, 1))
    }

    .bg-teal-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(4 47 46 / var(--tw-bg-opacity, 1))
    }

    .bg-violet-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(237 233 254 / var(--tw-bg-opacity, 1))
    }

    .bg-violet-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(221 214 254 / var(--tw-bg-opacity, 1))
    }

    .bg-violet-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(196 181 253 / var(--tw-bg-opacity, 1))
    }

    .bg-violet-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(167 139 250 / var(--tw-bg-opacity, 1))
    }

    .bg-violet-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(139 92 246 / var(--tw-bg-opacity, 1))
    }

    .bg-violet-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(124 58 237 / var(--tw-bg-opacity, 1))
    }

    .bg-violet-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(109 40 217 / var(--tw-bg-opacity, 1))
    }

    .bg-violet-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(91 33 182 / var(--tw-bg-opacity, 1))
    }

    .bg-violet-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(76 29 149 / var(--tw-bg-opacity, 1))
    }

    .bg-violet-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(46 16 101 / var(--tw-bg-opacity, 1))
    }

    .bg-yellow-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 249 195 / var(--tw-bg-opacity, 1))
    }

    .bg-yellow-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 240 138 / var(--tw-bg-opacity, 1))
    }

    .bg-yellow-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1))
    }

    .bg-yellow-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(250 204 21 / var(--tw-bg-opacity, 1))
    }

    .bg-yellow-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(234 179 8 / var(--tw-bg-opacity, 1))
    }

    .bg-yellow-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(202 138 4 / var(--tw-bg-opacity, 1))
    }

    .bg-yellow-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(161 98 7 / var(--tw-bg-opacity, 1))
    }

    .bg-yellow-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(133 77 14 / var(--tw-bg-opacity, 1))
    }

    .bg-yellow-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(113 63 18 / var(--tw-bg-opacity, 1))
    }

    .bg-yellow-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(66 32 6 / var(--tw-bg-opacity, 1))
    }

    .bg-zinc-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(244 244 245 / var(--tw-bg-opacity, 1))
    }

    .bg-zinc-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(228 228 231 / var(--tw-bg-opacity, 1))
    }

    .bg-zinc-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(212 212 216 / var(--tw-bg-opacity, 1))
    }

    .bg-zinc-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(161 161 170 / var(--tw-bg-opacity, 1))
    }

    .bg-zinc-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(113 113 122 / var(--tw-bg-opacity, 1))
    }

    .bg-zinc-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(82 82 91 / var(--tw-bg-opacity, 1))
    }

    .bg-zinc-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1))
    }

    .bg-zinc-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1))
    }

    .bg-zinc-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1))
    }

    .bg-zinc-950 {
        --tw-bg-opacity: 1;
        background-color: rgb(9 9 11 / var(--tw-bg-opacity, 1))
    }

    .bg-opacity-100 {
        --tw-bg-opacity: 1
    }

    .p-0 {
        padding: 0px
    }

    .p-0\\.5 {
        padding: 0.125rem
    }

    .p-1 {
        padding: 0.25rem
    }

    .p-1\\.5 {
        padding: 0.375rem
    }

    .p-10 {
        padding: 2.5rem
    }

    .p-11 {
        padding: 2.75rem
    }

    .p-12 {
        padding: 3rem
    }

    .p-14 {
        padding: 3.5rem
    }

    .p-16 {
        padding: 4rem
    }

    .p-2 {
        padding: 0.5rem
    }

    .p-2\\.5 {
        padding: 0.625rem
    }

    .p-20 {
        padding: 5rem
    }

    .p-24 {
        padding: 6rem
    }

    .p-28 {
        padding: 7rem
    }

    .p-3 {
        padding: 0.75rem
    }

    .p-3\\.5 {
        padding: 0.875rem
    }

    .p-32 {
        padding: 8rem
    }

    .p-36 {
        padding: 9rem
    }

    .p-4 {
        padding: 1rem
    }

    .p-40 {
        padding: 10rem
    }

    .p-44 {
        padding: 11rem
    }

    .p-48 {
        padding: 12rem
    }

    .p-5 {
        padding: 1.25rem
    }

    .p-52 {
        padding: 13rem
    }

    .p-56 {
        padding: 14rem
    }

    .p-6 {
        padding: 1.5rem
    }

    .p-60 {
        padding: 15rem
    }

    .p-64 {
        padding: 16rem
    }

    .p-7 {
        padding: 1.75rem
    }

    .p-72 {
        padding: 18rem
    }

    .p-8 {
        padding: 2rem
    }

    .p-80 {
        padding: 20rem
    }

    .p-9 {
        padding: 2.25rem
    }

    .p-96 {
        padding: 24rem
    }

    .p-px {
        padding: 1px
    }

    .px-0 {
        padding-left: 0px;
        padding-right: 0px
    }

    .px-0\\.5 {
        padding-left: 0.125rem;
        padding-right: 0.125rem
    }

    .px-1 {
        padding-left: 0.25rem;
        padding-right: 0.25rem
    }

    .px-1\\.5 {
        padding-left: 0.375rem;
        padding-right: 0.375rem
    }

    .px-10 {
        padding-left: 2.5rem;
        padding-right: 2.5rem
    }

    .px-11 {
        padding-left: 2.75rem;
        padding-right: 2.75rem
    }

    .px-12 {
        padding-left: 3rem;
        padding-right: 3rem
    }

    .px-14 {
        padding-left: 3.5rem;
        padding-right: 3.5rem
    }

    .px-16 {
        padding-left: 4rem;
        padding-right: 4rem
    }

    .px-2 {
        padding-left: 0.5rem;
        padding-right: 0.5rem
    }

    .px-2\\.5 {
        padding-left: 0.625rem;
        padding-right: 0.625rem
    }

    .px-20 {
        padding-left: 5rem;
        padding-right: 5rem
    }

    .px-24 {
        padding-left: 6rem;
        padding-right: 6rem
    }

    .px-28 {
        padding-left: 7rem;
        padding-right: 7rem
    }

    .px-3 {
        padding-left: 0.75rem;
        padding-right: 0.75rem
    }

    .px-3\\.5 {
        padding-left: 0.875rem;
        padding-right: 0.875rem
    }

    .px-32 {
        padding-left: 8rem;
        padding-right: 8rem
    }

    .px-36 {
        padding-left: 9rem;
        padding-right: 9rem
    }

    .px-4 {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .px-40 {
        padding-left: 10rem;
        padding-right: 10rem
    }

    .px-44 {
        padding-left: 11rem;
        padding-right: 11rem
    }

    .px-48 {
        padding-left: 12rem;
        padding-right: 12rem
    }

    .px-5 {
        padding-left: 1.25rem;
        padding-right: 1.25rem
    }

    .px-52 {
        padding-left: 13rem;
        padding-right: 13rem
    }

    .px-56 {
        padding-left: 14rem;
        padding-right: 14rem
    }

    .px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem
    }

    .px-60 {
        padding-left: 15rem;
        padding-right: 15rem
    }

    .px-64 {
        padding-left: 16rem;
        padding-right: 16rem
    }

    .px-7 {
        padding-left: 1.75rem;
        padding-right: 1.75rem
    }

    .px-72 {
        padding-left: 18rem;
        padding-right: 18rem
    }

    .px-8 {
        padding-left: 2rem;
        padding-right: 2rem
    }

    .px-80 {
        padding-left: 20rem;
        padding-right: 20rem
    }

    .px-9 {
        padding-left: 2.25rem;
        padding-right: 2.25rem
    }

    .px-96 {
        padding-left: 24rem;
        padding-right: 24rem
    }

    .px-px {
        padding-left: 1px;
        padding-right: 1px
    }

    .py-0 {
        padding-top: 0px;
        padding-bottom: 0px
    }

    .py-0\\.5 {
        padding-top: 0.125rem;
        padding-bottom: 0.125rem
    }

    .py-1 {
        padding-top: 0.25rem;
        padding-bottom: 0.25rem
    }

    .py-1\\.5 {
        padding-top: 0.375rem;
        padding-bottom: 0.375rem
    }

    .py-10 {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem
    }

    .py-11 {
        padding-top: 2.75rem;
        padding-bottom: 2.75rem
    }

    .py-12 {
        padding-top: 3rem;
        padding-bottom: 3rem
    }

    .py-14 {
        padding-top: 3.5rem;
        padding-bottom: 3.5rem
    }

    .py-16 {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .py-2 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem
    }

    .py-2\\.5 {
        padding-top: 0.625rem;
        padding-bottom: 0.625rem
    }

    .py-20 {
        padding-top: 5rem;
        padding-bottom: 5rem
    }

    .py-24 {
        padding-top: 6rem;
        padding-bottom: 6rem
    }

    .py-28 {
        padding-top: 7rem;
        padding-bottom: 7rem
    }

    .py-3 {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem
    }

    .py-3\\.5 {
        padding-top: 0.875rem;
        padding-bottom: 0.875rem
    }

    .py-32 {
        padding-top: 8rem;
        padding-bottom: 8rem
    }

    .py-36 {
        padding-top: 9rem;
        padding-bottom: 9rem
    }

    .py-4 {
        padding-top: 1rem;
        padding-bottom: 1rem
    }

    .py-40 {
        padding-top: 10rem;
        padding-bottom: 10rem
    }

    .py-44 {
        padding-top: 11rem;
        padding-bottom: 11rem
    }

    .py-48 {
        padding-top: 12rem;
        padding-bottom: 12rem
    }

    .py-5 {
        padding-top: 1.25rem;
        padding-bottom: 1.25rem
    }

    .py-52 {
        padding-top: 13rem;
        padding-bottom: 13rem
    }

    .py-56 {
        padding-top: 14rem;
        padding-bottom: 14rem
    }

    .py-6 {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem
    }

    .py-60 {
        padding-top: 15rem;
        padding-bottom: 15rem
    }

    .py-64 {
        padding-top: 16rem;
        padding-bottom: 16rem
    }

    .py-7 {
        padding-top: 1.75rem;
        padding-bottom: 1.75rem
    }

    .py-72 {
        padding-top: 18rem;
        padding-bottom: 18rem
    }

    .py-8 {
        padding-top: 2rem;
        padding-bottom: 2rem
    }

    .py-80 {
        padding-top: 20rem;
        padding-bottom: 20rem
    }

    .py-9 {
        padding-top: 2.25rem;
        padding-bottom: 2.25rem
    }

    .py-96 {
        padding-top: 24rem;
        padding-bottom: 24rem
    }

    .py-px {
        padding-top: 1px;
        padding-bottom: 1px
    }

    .pb-0 {
        padding-bottom: 0px
    }

    .pb-0\\.5 {
        padding-bottom: 0.125rem
    }

    .pb-1 {
        padding-bottom: 0.25rem
    }

    .pb-1\\.5 {
        padding-bottom: 0.375rem
    }

    .pb-10 {
        padding-bottom: 2.5rem
    }

    .pb-11 {
        padding-bottom: 2.75rem
    }

    .pb-12 {
        padding-bottom: 3rem
    }

    .pb-14 {
        padding-bottom: 3.5rem
    }

    .pb-16 {
        padding-bottom: 4rem
    }

    .pb-2 {
        padding-bottom: 0.5rem
    }

    .pb-2\\.5 {
        padding-bottom: 0.625rem
    }

    .pb-20 {
        padding-bottom: 5rem
    }

    .pb-24 {
        padding-bottom: 6rem
    }

    .pb-28 {
        padding-bottom: 7rem
    }

    .pb-3 {
        padding-bottom: 0.75rem
    }

    .pb-3\\.5 {
        padding-bottom: 0.875rem
    }

    .pb-32 {
        padding-bottom: 8rem
    }

    .pb-36 {
        padding-bottom: 9rem
    }

    .pb-4 {
        padding-bottom: 1rem
    }

    .pb-40 {
        padding-bottom: 10rem
    }

    .pb-44 {
        padding-bottom: 11rem
    }

    .pb-48 {
        padding-bottom: 12rem
    }

    .pb-5 {
        padding-bottom: 1.25rem
    }

    .pb-52 {
        padding-bottom: 13rem
    }

    .pb-56 {
        padding-bottom: 14rem
    }

    .pb-6 {
        padding-bottom: 1.5rem
    }

    .pb-60 {
        padding-bottom: 15rem
    }

    .pb-64 {
        padding-bottom: 16rem
    }

    .pb-7 {
        padding-bottom: 1.75rem
    }

    .pb-72 {
        padding-bottom: 18rem
    }

    .pb-8 {
        padding-bottom: 2rem
    }

    .pb-80 {
        padding-bottom: 20rem
    }

    .pb-9 {
        padding-bottom: 2.25rem
    }

    .pb-96 {
        padding-bottom: 24rem
    }

    .pb-px {
        padding-bottom: 1px
    }

    .pl-0 {
        padding-left: 0px
    }

    .pl-0\\.5 {
        padding-left: 0.125rem
    }

    .pl-1 {
        padding-left: 0.25rem
    }

    .pl-1\\.5 {
        padding-left: 0.375rem
    }

    .pl-10 {
        padding-left: 2.5rem
    }

    .pl-11 {
        padding-left: 2.75rem
    }

    .pl-12 {
        padding-left: 3rem
    }

    .pl-14 {
        padding-left: 3.5rem
    }

    .pl-16 {
        padding-left: 4rem
    }

    .pl-2 {
        padding-left: 0.5rem
    }

    .pl-2\\.5 {
        padding-left: 0.625rem
    }

    .pl-20 {
        padding-left: 5rem
    }

    .pl-24 {
        padding-left: 6rem
    }

    .pl-28 {
        padding-left: 7rem
    }

    .pl-3 {
        padding-left: 0.75rem
    }

    .pl-3\\.5 {
        padding-left: 0.875rem
    }

    .pl-32 {
        padding-left: 8rem
    }

    .pl-36 {
        padding-left: 9rem
    }

    .pl-4 {
        padding-left: 1rem
    }

    .pl-40 {
        padding-left: 10rem
    }

    .pl-44 {
        padding-left: 11rem
    }

    .pl-48 {
        padding-left: 12rem
    }

    .pl-5 {
        padding-left: 1.25rem
    }

    .pl-52 {
        padding-left: 13rem
    }

    .pl-56 {
        padding-left: 14rem
    }

    .pl-6 {
        padding-left: 1.5rem
    }

    .pl-60 {
        padding-left: 15rem
    }

    .pl-64 {
        padding-left: 16rem
    }

    .pl-7 {
        padding-left: 1.75rem
    }

    .pl-72 {
        padding-left: 18rem
    }

    .pl-8 {
        padding-left: 2rem
    }

    .pl-80 {
        padding-left: 20rem
    }

    .pl-9 {
        padding-left: 2.25rem
    }

    .pl-96 {
        padding-left: 24rem
    }

    .pl-px {
        padding-left: 1px
    }

    .pr-0 {
        padding-right: 0px
    }

    .pr-0\\.5 {
        padding-right: 0.125rem
    }

    .pr-1 {
        padding-right: 0.25rem
    }

    .pr-1\\.5 {
        padding-right: 0.375rem
    }

    .pr-10 {
        padding-right: 2.5rem
    }

    .pr-11 {
        padding-right: 2.75rem
    }

    .pr-12 {
        padding-right: 3rem
    }

    .pr-14 {
        padding-right: 3.5rem
    }

    .pr-16 {
        padding-right: 4rem
    }

    .pr-2 {
        padding-right: 0.5rem
    }

    .pr-2\\.5 {
        padding-right: 0.625rem
    }

    .pr-20 {
        padding-right: 5rem
    }

    .pr-24 {
        padding-right: 6rem
    }

    .pr-28 {
        padding-right: 7rem
    }

    .pr-3 {
        padding-right: 0.75rem
    }

    .pr-3\\.5 {
        padding-right: 0.875rem
    }

    .pr-32 {
        padding-right: 8rem
    }

    .pr-36 {
        padding-right: 9rem
    }

    .pr-4 {
        padding-right: 1rem
    }

    .pr-40 {
        padding-right: 10rem
    }

    .pr-44 {
        padding-right: 11rem
    }

    .pr-48 {
        padding-right: 12rem
    }

    .pr-5 {
        padding-right: 1.25rem
    }

    .pr-52 {
        padding-right: 13rem
    }

    .pr-56 {
        padding-right: 14rem
    }

    .pr-6 {
        padding-right: 1.5rem
    }

    .pr-60 {
        padding-right: 15rem
    }

    .pr-64 {
        padding-right: 16rem
    }

    .pr-7 {
        padding-right: 1.75rem
    }

    .pr-72 {
        padding-right: 18rem
    }

    .pr-8 {
        padding-right: 2rem
    }

    .pr-80 {
        padding-right: 20rem
    }

    .pr-9 {
        padding-right: 2.25rem
    }

    .pr-96 {
        padding-right: 24rem
    }

    .pr-px {
        padding-right: 1px
    }

    .pt-0 {
        padding-top: 0px
    }

    .pt-0\\.5 {
        padding-top: 0.125rem
    }

    .pt-1 {
        padding-top: 0.25rem
    }

    .pt-1\\.5 {
        padding-top: 0.375rem
    }

    .pt-10 {
        padding-top: 2.5rem
    }

    .pt-11 {
        padding-top: 2.75rem
    }

    .pt-12 {
        padding-top: 3rem
    }

    .pt-14 {
        padding-top: 3.5rem
    }

    .pt-16 {
        padding-top: 4rem
    }

    .pt-2 {
        padding-top: 0.5rem
    }

    .pt-2\\.5 {
        padding-top: 0.625rem
    }

    .pt-20 {
        padding-top: 5rem
    }

    .pt-24 {
        padding-top: 6rem
    }

    .pt-28 {
        padding-top: 7rem
    }

    .pt-3 {
        padding-top: 0.75rem
    }

    .pt-3\\.5 {
        padding-top: 0.875rem
    }

    .pt-32 {
        padding-top: 8rem
    }

    .pt-36 {
        padding-top: 9rem
    }

    .pt-4 {
        padding-top: 1rem
    }

    .pt-40 {
        padding-top: 10rem
    }

    .pt-44 {
        padding-top: 11rem
    }

    .pt-48 {
        padding-top: 12rem
    }

    .pt-5 {
        padding-top: 1.25rem
    }

    .pt-52 {
        padding-top: 13rem
    }

    .pt-56 {
        padding-top: 14rem
    }

    .pt-6 {
        padding-top: 1.5rem
    }

    .pt-60 {
        padding-top: 15rem
    }

    .pt-64 {
        padding-top: 16rem
    }

    .pt-7 {
        padding-top: 1.75rem
    }

    .pt-72 {
        padding-top: 18rem
    }

    .pt-8 {
        padding-top: 2rem
    }

    .pt-80 {
        padding-top: 20rem
    }

    .pt-9 {
        padding-top: 2.25rem
    }

    .pt-96 {
        padding-top: 24rem
    }

    .pt-px {
        padding-top: 1px
    }

    .text-end {
        text-align: end
    }

    .align-baseline {
        vertical-align: baseline
    }

    .align-top {
        vertical-align: top
    }

    .align-middle {
        vertical-align: middle
    }

    .align-bottom {
        vertical-align: bottom
    }

    .align-text-top {
        vertical-align: text-top
    }

    .align-text-bottom {
        vertical-align: text-bottom
    }

    .align-sub {
        vertical-align: sub
    }

    .align-super {
        vertical-align: super
    }

    .font-mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
    }

    .font-sans {
        font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
    }

    .font-serif {
        font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif
    }

    .text-2xl {
        font-size: 1.5rem;
        line-height: 2rem
    }

    .text-3xl {
        font-size: 1.875rem;
        line-height: 2.25rem
    }

    .text-4xl {
        font-size: 2.25rem;
        line-height: 2.5rem
    }

    .text-5xl {
        font-size: 3rem;
        line-height: 1
    }

    .text-6xl {
        font-size: 3.75rem;
        line-height: 1
    }

    .text-7xl {
        font-size: 4.5rem;
        line-height: 1
    }

    .text-8xl {
        font-size: 6rem;
        line-height: 1
    }

    .text-9xl {
        font-size: 8rem;
        line-height: 1
    }

    .text-base {
        font-size: 1rem;
        line-height: 1.5rem
    }

    .text-lg {
        font-size: 1.125rem;
        line-height: 1.75rem
    }

    .text-sm {
        font-size: 0.875rem;
        line-height: 1.25rem
    }

    .text-xl {
        font-size: 1.25rem;
        line-height: 1.75rem
    }

    .text-xs {
        font-size: 0.75rem;
        line-height: 1rem
    }

    .font-black {
        font-weight: 900
    }

    .font-bold {
        font-weight: 700
    }

    .font-extrabold {
        font-weight: 800
    }

    .font-extralight {
        font-weight: 200
    }

    .font-light {
        font-weight: 300
    }

    .font-medium {
        font-weight: 500
    }

    .font-normal {
        font-weight: 400
    }

    .font-semibold {
        font-weight: 600
    }

    .font-thin {
        font-weight: 100
    }

    .text-amber-100 {
        --tw-text-opacity: 1;
        color: rgb(254 243 199 / var(--tw-text-opacity, 1))
    }

    .text-amber-200 {
        --tw-text-opacity: 1;
        color: rgb(253 230 138 / var(--tw-text-opacity, 1))
    }

    .text-amber-300 {
        --tw-text-opacity: 1;
        color: rgb(252 211 77 / var(--tw-text-opacity, 1))
    }

    .text-amber-400 {
        --tw-text-opacity: 1;
        color: rgb(251 191 36 / var(--tw-text-opacity, 1))
    }

    .text-amber-500 {
        --tw-text-opacity: 1;
        color: rgb(245 158 11 / var(--tw-text-opacity, 1))
    }

    .text-amber-600 {
        --tw-text-opacity: 1;
        color: rgb(217 119 6 / var(--tw-text-opacity, 1))
    }

    .text-amber-700 {
        --tw-text-opacity: 1;
        color: rgb(180 83 9 / var(--tw-text-opacity, 1))
    }

    .text-amber-800 {
        --tw-text-opacity: 1;
        color: rgb(146 64 14 / var(--tw-text-opacity, 1))
    }

    .text-amber-900 {
        --tw-text-opacity: 1;
        color: rgb(120 53 15 / var(--tw-text-opacity, 1))
    }

    .text-amber-950 {
        --tw-text-opacity: 1;
        color: rgb(69 26 3 / var(--tw-text-opacity, 1))
    }

    .text-blue-100 {
        --tw-text-opacity: 1;
        color: rgb(219 234 254 / var(--tw-text-opacity, 1))
    }

    .text-blue-200 {
        --tw-text-opacity: 1;
        color: rgb(191 219 254 / var(--tw-text-opacity, 1))
    }

    .text-blue-300 {
        --tw-text-opacity: 1;
        color: rgb(147 197 253 / var(--tw-text-opacity, 1))
    }

    .text-blue-400 {
        --tw-text-opacity: 1;
        color: rgb(96 165 250 / var(--tw-text-opacity, 1))
    }

    .text-blue-500 {
        --tw-text-opacity: 1;
        color: rgb(59 130 246 / var(--tw-text-opacity, 1))
    }

    .text-blue-600 {
        --tw-text-opacity: 1;
        color: rgb(37 99 235 / var(--tw-text-opacity, 1))
    }

    .text-blue-700 {
        --tw-text-opacity: 1;
        color: rgb(29 78 216 / var(--tw-text-opacity, 1))
    }

    .text-blue-800 {
        --tw-text-opacity: 1;
        color: rgb(30 64 175 / var(--tw-text-opacity, 1))
    }

    .text-blue-900 {
        --tw-text-opacity: 1;
        color: rgb(30 58 138 / var(--tw-text-opacity, 1))
    }

    .text-blue-950 {
        --tw-text-opacity: 1;
        color: rgb(23 37 84 / var(--tw-text-opacity, 1))
    }

    .text-cyan-100 {
        --tw-text-opacity: 1;
        color: rgb(207 250 254 / var(--tw-text-opacity, 1))
    }

    .text-cyan-200 {
        --tw-text-opacity: 1;
        color: rgb(165 243 252 / var(--tw-text-opacity, 1))
    }

    .text-cyan-300 {
        --tw-text-opacity: 1;
        color: rgb(103 232 249 / var(--tw-text-opacity, 1))
    }

    .text-cyan-400 {
        --tw-text-opacity: 1;
        color: rgb(34 211 238 / var(--tw-text-opacity, 1))
    }

    .text-cyan-500 {
        --tw-text-opacity: 1;
        color: rgb(6 182 212 / var(--tw-text-opacity, 1))
    }

    .text-cyan-600 {
        --tw-text-opacity: 1;
        color: rgb(8 145 178 / var(--tw-text-opacity, 1))
    }

    .text-cyan-700 {
        --tw-text-opacity: 1;
        color: rgb(14 116 144 / var(--tw-text-opacity, 1))
    }

    .text-cyan-800 {
        --tw-text-opacity: 1;
        color: rgb(21 94 117 / var(--tw-text-opacity, 1))
    }

    .text-cyan-900 {
        --tw-text-opacity: 1;
        color: rgb(22 78 99 / var(--tw-text-opacity, 1))
    }

    .text-cyan-950 {
        --tw-text-opacity: 1;
        color: rgb(8 51 68 / var(--tw-text-opacity, 1))
    }

    .text-emerald-100 {
        --tw-text-opacity: 1;
        color: rgb(209 250 229 / var(--tw-text-opacity, 1))
    }

    .text-emerald-200 {
        --tw-text-opacity: 1;
        color: rgb(167 243 208 / var(--tw-text-opacity, 1))
    }

    .text-emerald-300 {
        --tw-text-opacity: 1;
        color: rgb(110 231 183 / var(--tw-text-opacity, 1))
    }

    .text-emerald-400 {
        --tw-text-opacity: 1;
        color: rgb(52 211 153 / var(--tw-text-opacity, 1))
    }

    .text-emerald-500 {
        --tw-text-opacity: 1;
        color: rgb(16 185 129 / var(--tw-text-opacity, 1))
    }

    .text-emerald-600 {
        --tw-text-opacity: 1;
        color: rgb(5 150 105 / var(--tw-text-opacity, 1))
    }

    .text-emerald-700 {
        --tw-text-opacity: 1;
        color: rgb(4 120 87 / var(--tw-text-opacity, 1))
    }

    .text-emerald-800 {
        --tw-text-opacity: 1;
        color: rgb(6 95 70 / var(--tw-text-opacity, 1))
    }

    .text-emerald-900 {
        --tw-text-opacity: 1;
        color: rgb(6 78 59 / var(--tw-text-opacity, 1))
    }

    .text-emerald-950 {
        --tw-text-opacity: 1;
        color: rgb(2 44 34 / var(--tw-text-opacity, 1))
    }

    .text-fuchsia-100 {
        --tw-text-opacity: 1;
        color: rgb(250 232 255 / var(--tw-text-opacity, 1))
    }

    .text-fuchsia-200 {
        --tw-text-opacity: 1;
        color: rgb(245 208 254 / var(--tw-text-opacity, 1))
    }

    .text-fuchsia-300 {
        --tw-text-opacity: 1;
        color: rgb(240 171 252 / var(--tw-text-opacity, 1))
    }

    .text-fuchsia-400 {
        --tw-text-opacity: 1;
        color: rgb(232 121 249 / var(--tw-text-opacity, 1))
    }

    .text-fuchsia-500 {
        --tw-text-opacity: 1;
        color: rgb(217 70 239 / var(--tw-text-opacity, 1))
    }

    .text-fuchsia-600 {
        --tw-text-opacity: 1;
        color: rgb(192 38 211 / var(--tw-text-opacity, 1))
    }

    .text-fuchsia-700 {
        --tw-text-opacity: 1;
        color: rgb(162 28 175 / var(--tw-text-opacity, 1))
    }

    .text-fuchsia-800 {
        --tw-text-opacity: 1;
        color: rgb(134 25 143 / var(--tw-text-opacity, 1))
    }

    .text-fuchsia-900 {
        --tw-text-opacity: 1;
        color: rgb(112 26 117 / var(--tw-text-opacity, 1))
    }

    .text-fuchsia-950 {
        --tw-text-opacity: 1;
        color: rgb(74 4 78 / var(--tw-text-opacity, 1))
    }

    .text-gray-100 {
        --tw-text-opacity: 1;
        color: rgb(243 244 246 / var(--tw-text-opacity, 1))
    }

    .text-gray-200 {
        --tw-text-opacity: 1;
        color: rgb(229 231 235 / var(--tw-text-opacity, 1))
    }

    .text-gray-300 {
        --tw-text-opacity: 1;
        color: rgb(209 213 219 / var(--tw-text-opacity, 1))
    }

    .text-gray-400 {
        --tw-text-opacity: 1;
        color: rgb(156 163 175 / var(--tw-text-opacity, 1))
    }

    .text-gray-500 {
        --tw-text-opacity: 1;
        color: rgb(107 114 128 / var(--tw-text-opacity, 1))
    }

    .text-gray-600 {
        --tw-text-opacity: 1;
        color: rgb(75 85 99 / var(--tw-text-opacity, 1))
    }

    .text-gray-700 {
        --tw-text-opacity: 1;
        color: rgb(55 65 81 / var(--tw-text-opacity, 1))
    }

    .text-gray-800 {
        --tw-text-opacity: 1;
        color: rgb(31 41 55 / var(--tw-text-opacity, 1))
    }

    .text-gray-900 {
        --tw-text-opacity: 1;
        color: rgb(17 24 39 / var(--tw-text-opacity, 1))
    }

    .text-gray-950 {
        --tw-text-opacity: 1;
        color: rgb(3 7 18 / var(--tw-text-opacity, 1))
    }

    .text-green-100 {
        --tw-text-opacity: 1;
        color: rgb(220 252 231 / var(--tw-text-opacity, 1))
    }

    .text-green-200 {
        --tw-text-opacity: 1;
        color: rgb(187 247 208 / var(--tw-text-opacity, 1))
    }

    .text-green-300 {
        --tw-text-opacity: 1;
        color: rgb(134 239 172 / var(--tw-text-opacity, 1))
    }

    .text-green-400 {
        --tw-text-opacity: 1;
        color: rgb(74 222 128 / var(--tw-text-opacity, 1))
    }

    .text-green-500 {
        --tw-text-opacity: 1;
        color: rgb(34 197 94 / var(--tw-text-opacity, 1))
    }

    .text-green-600 {
        --tw-text-opacity: 1;
        color: rgb(22 163 74 / var(--tw-text-opacity, 1))
    }

    .text-green-700 {
        --tw-text-opacity: 1;
        color: rgb(21 128 61 / var(--tw-text-opacity, 1))
    }

    .text-green-800 {
        --tw-text-opacity: 1;
        color: rgb(22 101 52 / var(--tw-text-opacity, 1))
    }

    .text-green-900 {
        --tw-text-opacity: 1;
        color: rgb(20 83 45 / var(--tw-text-opacity, 1))
    }

    .text-green-950 {
        --tw-text-opacity: 1;
        color: rgb(5 46 22 / var(--tw-text-opacity, 1))
    }

    .text-indigo-100 {
        --tw-text-opacity: 1;
        color: rgb(224 231 255 / var(--tw-text-opacity, 1))
    }

    .text-indigo-200 {
        --tw-text-opacity: 1;
        color: rgb(199 210 254 / var(--tw-text-opacity, 1))
    }

    .text-indigo-300 {
        --tw-text-opacity: 1;
        color: rgb(165 180 252 / var(--tw-text-opacity, 1))
    }

    .text-indigo-400 {
        --tw-text-opacity: 1;
        color: rgb(129 140 248 / var(--tw-text-opacity, 1))
    }

    .text-indigo-500 {
        --tw-text-opacity: 1;
        color: rgb(99 102 241 / var(--tw-text-opacity, 1))
    }

    .text-indigo-600 {
        --tw-text-opacity: 1;
        color: rgb(79 70 229 / var(--tw-text-opacity, 1))
    }

    .text-indigo-700 {
        --tw-text-opacity: 1;
        color: rgb(67 56 202 / var(--tw-text-opacity, 1))
    }

    .text-indigo-800 {
        --tw-text-opacity: 1;
        color: rgb(55 48 163 / var(--tw-text-opacity, 1))
    }

    .text-indigo-900 {
        --tw-text-opacity: 1;
        color: rgb(49 46 129 / var(--tw-text-opacity, 1))
    }

    .text-indigo-950 {
        --tw-text-opacity: 1;
        color: rgb(30 27 75 / var(--tw-text-opacity, 1))
    }

    .text-lime-100 {
        --tw-text-opacity: 1;
        color: rgb(236 252 203 / var(--tw-text-opacity, 1))
    }

    .text-lime-200 {
        --tw-text-opacity: 1;
        color: rgb(217 249 157 / var(--tw-text-opacity, 1))
    }

    .text-lime-300 {
        --tw-text-opacity: 1;
        color: rgb(190 242 100 / var(--tw-text-opacity, 1))
    }

    .text-lime-400 {
        --tw-text-opacity: 1;
        color: rgb(163 230 53 / var(--tw-text-opacity, 1))
    }

    .text-lime-500 {
        --tw-text-opacity: 1;
        color: rgb(132 204 22 / var(--tw-text-opacity, 1))
    }

    .text-lime-600 {
        --tw-text-opacity: 1;
        color: rgb(101 163 13 / var(--tw-text-opacity, 1))
    }

    .text-lime-700 {
        --tw-text-opacity: 1;
        color: rgb(77 124 15 / var(--tw-text-opacity, 1))
    }

    .text-lime-800 {
        --tw-text-opacity: 1;
        color: rgb(63 98 18 / var(--tw-text-opacity, 1))
    }

    .text-lime-900 {
        --tw-text-opacity: 1;
        color: rgb(54 83 20 / var(--tw-text-opacity, 1))
    }

    .text-lime-950 {
        --tw-text-opacity: 1;
        color: rgb(26 46 5 / var(--tw-text-opacity, 1))
    }

    .text-neutral-100 {
        --tw-text-opacity: 1;
        color: rgb(245 245 245 / var(--tw-text-opacity, 1))
    }

    .text-neutral-200 {
        --tw-text-opacity: 1;
        color: rgb(229 229 229 / var(--tw-text-opacity, 1))
    }

    .text-neutral-300 {
        --tw-text-opacity: 1;
        color: rgb(212 212 212 / var(--tw-text-opacity, 1))
    }

    .text-neutral-400 {
        --tw-text-opacity: 1;
        color: rgb(163 163 163 / var(--tw-text-opacity, 1))
    }

    .text-neutral-500 {
        --tw-text-opacity: 1;
        color: rgb(115 115 115 / var(--tw-text-opacity, 1))
    }

    .text-neutral-600 {
        --tw-text-opacity: 1;
        color: rgb(82 82 82 / var(--tw-text-opacity, 1))
    }

    .text-neutral-700 {
        --tw-text-opacity: 1;
        color: rgb(64 64 64 / var(--tw-text-opacity, 1))
    }

    .text-neutral-800 {
        --tw-text-opacity: 1;
        color: rgb(38 38 38 / var(--tw-text-opacity, 1))
    }

    .text-neutral-900 {
        --tw-text-opacity: 1;
        color: rgb(23 23 23 / var(--tw-text-opacity, 1))
    }

    .text-neutral-950 {
        --tw-text-opacity: 1;
        color: rgb(10 10 10 / var(--tw-text-opacity, 1))
    }

    .text-orange-100 {
        --tw-text-opacity: 1;
        color: rgb(255 237 213 / var(--tw-text-opacity, 1))
    }

    .text-orange-200 {
        --tw-text-opacity: 1;
        color: rgb(254 215 170 / var(--tw-text-opacity, 1))
    }

    .text-orange-300 {
        --tw-text-opacity: 1;
        color: rgb(253 186 116 / var(--tw-text-opacity, 1))
    }

    .text-orange-400 {
        --tw-text-opacity: 1;
        color: rgb(251 146 60 / var(--tw-text-opacity, 1))
    }

    .text-orange-500 {
        --tw-text-opacity: 1;
        color: rgb(249 115 22 / var(--tw-text-opacity, 1))
    }

    .text-orange-600 {
        --tw-text-opacity: 1;
        color: rgb(234 88 12 / var(--tw-text-opacity, 1))
    }

    .text-orange-700 {
        --tw-text-opacity: 1;
        color: rgb(194 65 12 / var(--tw-text-opacity, 1))
    }

    .text-orange-800 {
        --tw-text-opacity: 1;
        color: rgb(154 52 18 / var(--tw-text-opacity, 1))
    }

    .text-orange-900 {
        --tw-text-opacity: 1;
        color: rgb(124 45 18 / var(--tw-text-opacity, 1))
    }

    .text-orange-950 {
        --tw-text-opacity: 1;
        color: rgb(67 20 7 / var(--tw-text-opacity, 1))
    }

    .text-pink-100 {
        --tw-text-opacity: 1;
        color: rgb(252 231 243 / var(--tw-text-opacity, 1))
    }

    .text-pink-200 {
        --tw-text-opacity: 1;
        color: rgb(251 207 232 / var(--tw-text-opacity, 1))
    }

    .text-pink-300 {
        --tw-text-opacity: 1;
        color: rgb(249 168 212 / var(--tw-text-opacity, 1))
    }

    .text-pink-400 {
        --tw-text-opacity: 1;
        color: rgb(244 114 182 / var(--tw-text-opacity, 1))
    }

    .text-pink-500 {
        --tw-text-opacity: 1;
        color: rgb(236 72 153 / var(--tw-text-opacity, 1))
    }

    .text-pink-600 {
        --tw-text-opacity: 1;
        color: rgb(219 39 119 / var(--tw-text-opacity, 1))
    }

    .text-pink-700 {
        --tw-text-opacity: 1;
        color: rgb(190 24 93 / var(--tw-text-opacity, 1))
    }

    .text-pink-800 {
        --tw-text-opacity: 1;
        color: rgb(157 23 77 / var(--tw-text-opacity, 1))
    }

    .text-pink-900 {
        --tw-text-opacity: 1;
        color: rgb(131 24 67 / var(--tw-text-opacity, 1))
    }

    .text-pink-950 {
        --tw-text-opacity: 1;
        color: rgb(80 7 36 / var(--tw-text-opacity, 1))
    }

    .text-purple-100 {
        --tw-text-opacity: 1;
        color: rgb(243 232 255 / var(--tw-text-opacity, 1))
    }

    .text-purple-200 {
        --tw-text-opacity: 1;
        color: rgb(233 213 255 / var(--tw-text-opacity, 1))
    }

    .text-purple-300 {
        --tw-text-opacity: 1;
        color: rgb(216 180 254 / var(--tw-text-opacity, 1))
    }

    .text-purple-400 {
        --tw-text-opacity: 1;
        color: rgb(192 132 252 / var(--tw-text-opacity, 1))
    }

    .text-purple-500 {
        --tw-text-opacity: 1;
        color: rgb(168 85 247 / var(--tw-text-opacity, 1))
    }

    .text-purple-600 {
        --tw-text-opacity: 1;
        color: rgb(147 51 234 / var(--tw-text-opacity, 1))
    }

    .text-purple-700 {
        --tw-text-opacity: 1;
        color: rgb(126 34 206 / var(--tw-text-opacity, 1))
    }

    .text-purple-800 {
        --tw-text-opacity: 1;
        color: rgb(107 33 168 / var(--tw-text-opacity, 1))
    }

    .text-purple-900 {
        --tw-text-opacity: 1;
        color: rgb(88 28 135 / var(--tw-text-opacity, 1))
    }

    .text-purple-950 {
        --tw-text-opacity: 1;
        color: rgb(59 7 100 / var(--tw-text-opacity, 1))
    }

    .text-red-100 {
        --tw-text-opacity: 1;
        color: rgb(254 226 226 / var(--tw-text-opacity, 1))
    }

    .text-red-200 {
        --tw-text-opacity: 1;
        color: rgb(254 202 202 / var(--tw-text-opacity, 1))
    }

    .text-red-300 {
        --tw-text-opacity: 1;
        color: rgb(252 165 165 / var(--tw-text-opacity, 1))
    }

    .text-red-400 {
        --tw-text-opacity: 1;
        color: rgb(248 113 113 / var(--tw-text-opacity, 1))
    }

    .text-red-500 {
        --tw-text-opacity: 1;
        color: rgb(239 68 68 / var(--tw-text-opacity, 1))
    }

    .text-red-600 {
        --tw-text-opacity: 1;
        color: rgb(220 38 38 / var(--tw-text-opacity, 1))
    }

    .text-red-700 {
        --tw-text-opacity: 1;
        color: rgb(185 28 28 / var(--tw-text-opacity, 1))
    }

    .text-red-800 {
        --tw-text-opacity: 1;
        color: rgb(153 27 27 / var(--tw-text-opacity, 1))
    }

    .text-red-900 {
        --tw-text-opacity: 1;
        color: rgb(127 29 29 / var(--tw-text-opacity, 1))
    }

    .text-red-950 {
        --tw-text-opacity: 1;
        color: rgb(69 10 10 / var(--tw-text-opacity, 1))
    }

    .text-rose-100 {
        --tw-text-opacity: 1;
        color: rgb(255 228 230 / var(--tw-text-opacity, 1))
    }

    .text-rose-200 {
        --tw-text-opacity: 1;
        color: rgb(254 205 211 / var(--tw-text-opacity, 1))
    }

    .text-rose-300 {
        --tw-text-opacity: 1;
        color: rgb(253 164 175 / var(--tw-text-opacity, 1))
    }

    .text-rose-400 {
        --tw-text-opacity: 1;
        color: rgb(251 113 133 / var(--tw-text-opacity, 1))
    }

    .text-rose-500 {
        --tw-text-opacity: 1;
        color: rgb(244 63 94 / var(--tw-text-opacity, 1))
    }

    .text-rose-600 {
        --tw-text-opacity: 1;
        color: rgb(225 29 72 / var(--tw-text-opacity, 1))
    }

    .text-rose-700 {
        --tw-text-opacity: 1;
        color: rgb(190 18 60 / var(--tw-text-opacity, 1))
    }

    .text-rose-800 {
        --tw-text-opacity: 1;
        color: rgb(159 18 57 / var(--tw-text-opacity, 1))
    }

    .text-rose-900 {
        --tw-text-opacity: 1;
        color: rgb(136 19 55 / var(--tw-text-opacity, 1))
    }

    .text-rose-950 {
        --tw-text-opacity: 1;
        color: rgb(76 5 25 / var(--tw-text-opacity, 1))
    }

    .text-sky-100 {
        --tw-text-opacity: 1;
        color: rgb(224 242 254 / var(--tw-text-opacity, 1))
    }

    .text-sky-200 {
        --tw-text-opacity: 1;
        color: rgb(186 230 253 / var(--tw-text-opacity, 1))
    }

    .text-sky-300 {
        --tw-text-opacity: 1;
        color: rgb(125 211 252 / var(--tw-text-opacity, 1))
    }

    .text-sky-400 {
        --tw-text-opacity: 1;
        color: rgb(56 189 248 / var(--tw-text-opacity, 1))
    }

    .text-sky-500 {
        --tw-text-opacity: 1;
        color: rgb(14 165 233 / var(--tw-text-opacity, 1))
    }

    .text-sky-600 {
        --tw-text-opacity: 1;
        color: rgb(2 132 199 / var(--tw-text-opacity, 1))
    }

    .text-sky-700 {
        --tw-text-opacity: 1;
        color: rgb(3 105 161 / var(--tw-text-opacity, 1))
    }

    .text-sky-800 {
        --tw-text-opacity: 1;
        color: rgb(7 89 133 / var(--tw-text-opacity, 1))
    }

    .text-sky-900 {
        --tw-text-opacity: 1;
        color: rgb(12 74 110 / var(--tw-text-opacity, 1))
    }

    .text-sky-950 {
        --tw-text-opacity: 1;
        color: rgb(8 47 73 / var(--tw-text-opacity, 1))
    }

    .text-slate-100 {
        --tw-text-opacity: 1;
        color: rgb(241 245 249 / var(--tw-text-opacity, 1))
    }

    .text-slate-200 {
        --tw-text-opacity: 1;
        color: rgb(226 232 240 / var(--tw-text-opacity, 1))
    }

    .text-slate-300 {
        --tw-text-opacity: 1;
        color: rgb(203 213 225 / var(--tw-text-opacity, 1))
    }

    .text-slate-400 {
        --tw-text-opacity: 1;
        color: rgb(148 163 184 / var(--tw-text-opacity, 1))
    }

    .text-slate-500 {
        --tw-text-opacity: 1;
        color: rgb(100 116 139 / var(--tw-text-opacity, 1))
    }

    .text-slate-600 {
        --tw-text-opacity: 1;
        color: rgb(71 85 105 / var(--tw-text-opacity, 1))
    }

    .text-slate-700 {
        --tw-text-opacity: 1;
        color: rgb(51 65 85 / var(--tw-text-opacity, 1))
    }

    .text-slate-800 {
        --tw-text-opacity: 1;
        color: rgb(30 41 59 / var(--tw-text-opacity, 1))
    }

    .text-slate-900 {
        --tw-text-opacity: 1;
        color: rgb(15 23 42 / var(--tw-text-opacity, 1))
    }

    .text-slate-950 {
        --tw-text-opacity: 1;
        color: rgb(2 6 23 / var(--tw-text-opacity, 1))
    }

    .text-stone-100 {
        --tw-text-opacity: 1;
        color: rgb(245 245 244 / var(--tw-text-opacity, 1))
    }

    .text-stone-200 {
        --tw-text-opacity: 1;
        color: rgb(231 229 228 / var(--tw-text-opacity, 1))
    }

    .text-stone-300 {
        --tw-text-opacity: 1;
        color: rgb(214 211 209 / var(--tw-text-opacity, 1))
    }

    .text-stone-400 {
        --tw-text-opacity: 1;
        color: rgb(168 162 158 / var(--tw-text-opacity, 1))
    }

    .text-stone-500 {
        --tw-text-opacity: 1;
        color: rgb(120 113 108 / var(--tw-text-opacity, 1))
    }

    .text-stone-600 {
        --tw-text-opacity: 1;
        color: rgb(87 83 78 / var(--tw-text-opacity, 1))
    }

    .text-stone-700 {
        --tw-text-opacity: 1;
        color: rgb(68 64 60 / var(--tw-text-opacity, 1))
    }

    .text-stone-800 {
        --tw-text-opacity: 1;
        color: rgb(41 37 36 / var(--tw-text-opacity, 1))
    }

    .text-stone-900 {
        --tw-text-opacity: 1;
        color: rgb(28 25 23 / var(--tw-text-opacity, 1))
    }

    .text-stone-950 {
        --tw-text-opacity: 1;
        color: rgb(12 10 9 / var(--tw-text-opacity, 1))
    }

    .text-teal-100 {
        --tw-text-opacity: 1;
        color: rgb(204 251 241 / var(--tw-text-opacity, 1))
    }

    .text-teal-200 {
        --tw-text-opacity: 1;
        color: rgb(153 246 228 / var(--tw-text-opacity, 1))
    }

    .text-teal-300 {
        --tw-text-opacity: 1;
        color: rgb(94 234 212 / var(--tw-text-opacity, 1))
    }

    .text-teal-400 {
        --tw-text-opacity: 1;
        color: rgb(45 212 191 / var(--tw-text-opacity, 1))
    }

    .text-teal-500 {
        --tw-text-opacity: 1;
        color: rgb(20 184 166 / var(--tw-text-opacity, 1))
    }

    .text-teal-600 {
        --tw-text-opacity: 1;
        color: rgb(13 148 136 / var(--tw-text-opacity, 1))
    }

    .text-teal-700 {
        --tw-text-opacity: 1;
        color: rgb(15 118 110 / var(--tw-text-opacity, 1))
    }

    .text-teal-800 {
        --tw-text-opacity: 1;
        color: rgb(17 94 89 / var(--tw-text-opacity, 1))
    }

    .text-teal-900 {
        --tw-text-opacity: 1;
        color: rgb(19 78 74 / var(--tw-text-opacity, 1))
    }

    .text-teal-950 {
        --tw-text-opacity: 1;
        color: rgb(4 47 46 / var(--tw-text-opacity, 1))
    }

    .text-violet-100 {
        --tw-text-opacity: 1;
        color: rgb(237 233 254 / var(--tw-text-opacity, 1))
    }

    .text-violet-200 {
        --tw-text-opacity: 1;
        color: rgb(221 214 254 / var(--tw-text-opacity, 1))
    }

    .text-violet-300 {
        --tw-text-opacity: 1;
        color: rgb(196 181 253 / var(--tw-text-opacity, 1))
    }

    .text-violet-400 {
        --tw-text-opacity: 1;
        color: rgb(167 139 250 / var(--tw-text-opacity, 1))
    }

    .text-violet-500 {
        --tw-text-opacity: 1;
        color: rgb(139 92 246 / var(--tw-text-opacity, 1))
    }

    .text-violet-600 {
        --tw-text-opacity: 1;
        color: rgb(124 58 237 / var(--tw-text-opacity, 1))
    }

    .text-violet-700 {
        --tw-text-opacity: 1;
        color: rgb(109 40 217 / var(--tw-text-opacity, 1))
    }

    .text-violet-800 {
        --tw-text-opacity: 1;
        color: rgb(91 33 182 / var(--tw-text-opacity, 1))
    }

    .text-violet-900 {
        --tw-text-opacity: 1;
        color: rgb(76 29 149 / var(--tw-text-opacity, 1))
    }

    .text-violet-950 {
        --tw-text-opacity: 1;
        color: rgb(46 16 101 / var(--tw-text-opacity, 1))
    }

    .text-yellow-100 {
        --tw-text-opacity: 1;
        color: rgb(254 249 195 / var(--tw-text-opacity, 1))
    }

    .text-yellow-200 {
        --tw-text-opacity: 1;
        color: rgb(254 240 138 / var(--tw-text-opacity, 1))
    }

    .text-yellow-300 {
        --tw-text-opacity: 1;
        color: rgb(253 224 71 / var(--tw-text-opacity, 1))
    }

    .text-yellow-400 {
        --tw-text-opacity: 1;
        color: rgb(250 204 21 / var(--tw-text-opacity, 1))
    }

    .text-yellow-500 {
        --tw-text-opacity: 1;
        color: rgb(234 179 8 / var(--tw-text-opacity, 1))
    }

    .text-yellow-600 {
        --tw-text-opacity: 1;
        color: rgb(202 138 4 / var(--tw-text-opacity, 1))
    }

    .text-yellow-700 {
        --tw-text-opacity: 1;
        color: rgb(161 98 7 / var(--tw-text-opacity, 1))
    }

    .text-yellow-800 {
        --tw-text-opacity: 1;
        color: rgb(133 77 14 / var(--tw-text-opacity, 1))
    }

    .text-yellow-900 {
        --tw-text-opacity: 1;
        color: rgb(113 63 18 / var(--tw-text-opacity, 1))
    }

    .text-yellow-950 {
        --tw-text-opacity: 1;
        color: rgb(66 32 6 / var(--tw-text-opacity, 1))
    }

    .text-zinc-100 {
        --tw-text-opacity: 1;
        color: rgb(244 244 245 / var(--tw-text-opacity, 1))
    }

    .text-zinc-200 {
        --tw-text-opacity: 1;
        color: rgb(228 228 231 / var(--tw-text-opacity, 1))
    }

    .text-zinc-300 {
        --tw-text-opacity: 1;
        color: rgb(212 212 216 / var(--tw-text-opacity, 1))
    }

    .text-zinc-400 {
        --tw-text-opacity: 1;
        color: rgb(161 161 170 / var(--tw-text-opacity, 1))
    }

    .text-zinc-500 {
        --tw-text-opacity: 1;
        color: rgb(113 113 122 / var(--tw-text-opacity, 1))
    }

    .text-zinc-600 {
        --tw-text-opacity: 1;
        color: rgb(82 82 91 / var(--tw-text-opacity, 1))
    }

    .text-zinc-700 {
        --tw-text-opacity: 1;
        color: rgb(63 63 70 / var(--tw-text-opacity, 1))
    }

    .text-zinc-800 {
        --tw-text-opacity: 1;
        color: rgb(39 39 42 / var(--tw-text-opacity, 1))
    }

    .text-zinc-900 {
        --tw-text-opacity: 1;
        color: rgb(24 24 27 / var(--tw-text-opacity, 1))
    }

    .text-zinc-950 {
        --tw-text-opacity: 1;
        color: rgb(9 9 11 / var(--tw-text-opacity, 1))
    }

    .text-opacity-100 {
        --tw-text-opacity: 1
    }

    .underline {
        text-decoration-line: underline
    }

    .opacity-0 {
        opacity: 0
    }

    .opacity-10 {
        opacity: 0.1
    }

    .opacity-100 {
        opacity: 1
    }

    .opacity-15 {
        opacity: 0.15
    }

    .opacity-20 {
        opacity: 0.2
    }

    .opacity-25 {
        opacity: 0.25
    }

    .opacity-30 {
        opacity: 0.3
    }

    .opacity-35 {
        opacity: 0.35
    }

    .opacity-40 {
        opacity: 0.4
    }

    .opacity-45 {
        opacity: 0.45
    }

    .opacity-5 {
        opacity: 0.05
    }

    .opacity-50 {
        opacity: 0.5
    }

    .opacity-55 {
        opacity: 0.55
    }

    .opacity-60 {
        opacity: 0.6
    }

    .opacity-65 {
        opacity: 0.65
    }

    .opacity-70 {
        opacity: 0.7
    }

    .opacity-75 {
        opacity: 0.75
    }

    .opacity-80 {
        opacity: 0.8
    }

    .opacity-85 {
        opacity: 0.85
    }

    .opacity-90 {
        opacity: 0.9
    }

    .opacity-95 {
        opacity: 0.95
    }

    .shadow {
        --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-2xl {
        --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-inner {
        --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
        --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-lg {
        --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-md {
        --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-none {
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-sm {
        --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-xl {
        --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-black {
        --tw-shadow-color: #000;
        --tw-shadow: var(--tw-shadow-colored)
    }

    .shadow-white {
        --tw-shadow-color: #fff;
        --tw-shadow: var(--tw-shadow-colored)
    }

    .transition-all {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms
    }

    .transition-colors {
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms
    }

    .transition-none {
        transition-property: none
    }

    .transition-opacity {
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms
    }

    .transition-shadow {
        transition-property: box-shadow;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms
    }

    .transition-transform {
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms
    }

    .delay-0 {
        transition-delay: 0s
    }

    .delay-100 {
        transition-delay: 100ms
    }

    .delay-1000 {
        transition-delay: 1000ms
    }

    .delay-150 {
        transition-delay: 150ms
    }

    .delay-200 {
        transition-delay: 200ms
    }

    .delay-300 {
        transition-delay: 300ms
    }

    .delay-500 {
        transition-delay: 500ms
    }

    .delay-700 {
        transition-delay: 700ms
    }

    .delay-75 {
        transition-delay: 75ms
    }

    .duration-0 {
        transition-duration: 0s
    }

    .duration-100 {
        transition-duration: 100ms
    }

    .duration-1000 {
        transition-duration: 1000ms
    }

    .duration-150 {
        transition-duration: 150ms
    }

    .duration-200 {
        transition-duration: 200ms
    }

    .duration-300 {
        transition-duration: 300ms
    }

    .duration-500 {
        transition-duration: 500ms
    }

    .duration-700 {
        transition-duration: 700ms
    }

    .duration-75 {
        transition-duration: 75ms
    }

    .ease-in {
        transition-timing-function: cubic-bezier(0.4, 0, 1, 1)
    }

    .ease-in-out {
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
    }

    .ease-linear {
        transition-timing-function: linear
    }

    .ease-out {
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1)
    }


`
