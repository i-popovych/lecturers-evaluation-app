import React, {useEffect, useState} from 'react'
import ListProfessor from './ListProfessor'
import {RatingAPI} from "../api/RatingAPI";
import {Alert} from "@mui/material";

const AllListProfessor = () => {
    const [lectures, setLecture] = useState(null)

    const check = (id, jsonArr) => {
        return jsonArr.filter(i => id === i.uid).length
    }

    useEffect(() => {
        const fetch = async () => {
            try {
                const ids = await RatingAPI.getLecturesIds();
                let temp = ids.data.map(id => RatingAPI.getLectureItem(id))
                let res2 = await Promise.all(temp)
                res2 = res2.map(i => {
                    return {
                        id: i.data.id,
                        name: i.data.name,
                        email: i.data.login,
                        faculty: 'some faculty'
                    }
                })
                setLecture(res2)
            } catch (e) {
                console.log(e)
            }
        }
        fetch()
    }, [])


    if (!lectures) return <Alert>Loading</Alert>

    return (
        <div>
            {lectures.map((u) => <ListProfessor key={u.id} name={u.name} email={u.email} faculty={u.faculty}
                                                id={u.id}
                                                isRating={u.isRating}/>)}
        </div>
    )
}

export default AllListProfessor