import { Character } from '../../interfaces/character'
const characters: Character[] = []
const getCharacters = async (url: string): Promise<Character> => {
    const result: Character = await fetch(url).then((res) => res.json())
    return result
}
for (let i = 1; i < 11; i++) {
    const newElement: Character = await getCharacters(
        `https://rickandmortyapi.com/api/character/${i}`
    )
    characters.push(newElement)
}
console.log(characters)
export default getCharacters
