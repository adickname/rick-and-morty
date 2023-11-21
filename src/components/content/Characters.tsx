import { useState, useEffect } from 'react'
import get from '../../api/GetCharacters'
import { Character } from '../../interfaces/character'
import ButtonsNext from '../styles/ButtonsNext'

const Characters = () => {
    const [error, setError] = useState<any>(null)
    const [subpageNumber, setSubpageNumber] = useState<number>(1)
    const [downloading, setDownloading] = useState<boolean>(false)
    const [characters, setCharacters] = useState<Character[]>([
        {
            id: 0,
            name: 'string',
            status: 'Alive',
            species: 'string',
            type: 'string',
            gender: 'Female',
            origin: {
                nameOrigin: 'string',
                url: 'string',
            },
            location: {
                name: 'string',
                url: 'string',
            },
            image: 'string',
            episode: ['string'],
            url: 'string',
            created: 'string',
        },
    ])
    useEffect(() => {
        addCharacters(subpageNumber)
    }, [subpageNumber])
    const addCharacters = async (subpageNumber: number): Promise<void> => {
        setDownloading(true)
        setCharacters([
            {
                id: 0,
                name: 'string',
                status: 'unknown',
                species: 'string',
                type: 'string',
                gender: 'Female',
                origin: {
                    nameOrigin: 'string',
                    url: 'string',
                },
                location: {
                    name: 'string',
                    url: 'string',
                },
                image: 'string',
                episode: ['string'],
                url: 'string',
                created: 'string',
            },
        ])
        try {
            for (let i = 1; i < 11; i++) {
                let data: Character
                if (subpageNumber === 1) {
                    data = await get(
                        `https://rickandmortyapi.com/api/character/${i}`
                    )
                } else if (i === 10) {
                    data = await get(
                        `https://rickandmortyapi.com/api/character/${subpageNumber}0`
                    )
                } else {
                    data = await get(
                        `https://rickandmortyapi.com/api/character/${
                            subpageNumber - 1
                        }${i}`
                    )
                }
                setCharacters((prev) => [...prev, data])
            }
        } catch (error) {
            setError(error)
        }
        setDownloading(false)
        renderCharacters
    }

    const renderCharacters = (subpageNumber: number) => {
        return (
            <p>
                subpage: {subpageNumber}
                <>
                    {characters.map(
                        ({
                            id,
                            name,
                            gender,
                            status,
                            origin: { nameOrigin },
                        }) => {
                            if (id === 0) {
                            } else {
                                return (
                                    <p>
                                        id : {id} name: {name}, gender: {gender}
                                        , status: {status}, origin: {nameOrigin}
                                    </p>
                                )
                            }
                        }
                    )}
                </>
            </p>
        )
    }

    return (
        <>
            {downloading ? (
                <p>Data is being downloading</p>
            ) : error ? (
                <p>error: {error.message}</p>
            ) : (
                renderCharacters(subpageNumber)
            )}
            {subpageNumber}
            <ButtonsNext
                onClick={() => {
                    setSubpageNumber(1)
                }}
            >
                1
            </ButtonsNext>
            <ButtonsNext
                onClick={() => {
                    setSubpageNumber(2)
                }}
            >
                2
            </ButtonsNext>
            <ButtonsNext
                onClick={() => {
                    setSubpageNumber(3)
                }}
            >
                3
            </ButtonsNext>
        </>
    )
}

export default Characters
