import React, { useState } from 'react'
import ListProfessor from './ListProfessor'

const AllListProfessor = () => {

    const arr = [
        { id: 1, name: 'Vlad', describe: 'describe - 1', faculty: 'electron', isRating: false },
        { id: 2, name: 'Dima', describe: 'describe - 2', faculty: 'history', isRating: true },
        { id: 3, name: 'Yura', describe: 'describe - 3', faculty: 'music', isRating: true },
    ]

    const [user, setUser] = useState(arr)

    return (
        <div>
            {user.map((u) => <ListProfessor key={u.id} name = {u.name} description={u.describe} faculty={u.faculty} isRating = {u.isRating} />)}
        </div>
    )
}

export default AllListProfessor