'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Navbar=()=> {
  const searchParams = useSearchParams()
  const todosFilter = searchParams.get('todos')
  return (
    <nav>
<Link href='/' className={todosFilter === null? "active" : ""}>All</Link>
<Link href='/?todos=active' className={todosFilter === "active" ? "active" : ""}>Active</Link>
<Link href='/?todos=completed' className={todosFilter === "completed"? "active" : ""}>Completed</Link>

    </nav>
  )
}

export default Navbar