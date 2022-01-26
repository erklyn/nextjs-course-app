import React from 'react';
import Link from 'next/link'

const Page = () => (
    <div> 
        <h1>Note index Path</h1>

        <Link href="/notes/[id]" as={'/notes/1'}>
            Specific
        </Link> 
    </div>
)

export default Page;