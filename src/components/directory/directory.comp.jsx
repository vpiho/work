import React from 'react'

import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.comp'

class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [{
                title: 'Строительство',
                id: 1
            },
            {
                title: 'Общепит',
                id: 2
            },
            {
                title: 'Уборка',
                id: 3
            },
            {
                title: 'Обслуживание',
                id: 4
            },
            {
                title: 'Гостиница',
                id: 5
            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
            {
                this.state.sections.map(({title, id}) => (
                    <MenuItem key={id} title={title} />
                ))
            }
            </div>
        )
    }
}

export default Directory