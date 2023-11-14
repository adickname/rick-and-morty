import React, { useState } from 'react'
import get from '../api/GetCharacters'
import { Character } from '../../interfaces/character'

const setNewCharacters = (s: number) => {}
const listOfCharacters: Character[] = []
for (let i: number = 1; i < 3; i++) {
    const data = await get(`https://rickandmortyapi.com/api/character/${i}`)
    listOfCharacters.push(data)
}

const Characters = () => {
    const name: string[] = listOfCharacters.map((e) => {
        console.log(e.name)
        return e.name
    })
    console.log(name)
    return (
        <p>
            <>
                {listOfCharacters.map(
                    ({
                        name,
                        gender,
                        species,
                        origin: { name: originName },
                        id,
                    }) => {
                        return (
                            <p>
                                {id} name: {name}, gender: {gender}, specie:{' '}
                                {species}, origin: {originName}
                            </p>
                        )
                    }
                )}
            </>
        </p>
    )
}

export default Characters
