import { useState } from 'react'

function Nav() {
    const [links] = useState(() =>
        [
            {
                name: 'one',
                url: '/oneone'
            },
            {
                name: 'two',
                url: '/twotwo'
            },
            {
                name: 'three',
                url: "/threethree"
            }
        ])

    return (
        <div>
            {
                links.map(x => (
                    <li key={x.name}>
                        <a href={x.url}>
                            {x.name}
                        </a>
                    </li>
                ))
            }
        </div>
    )
}

export default Nav;