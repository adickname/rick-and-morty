import { Character } from '../../interfaces/character'
/* const characters: Character[] = []
const characters2: Character[] = [] */
/* const getCharacters = async (url: string): Promise<Character> => {
    const result: Character = await fetch(url).then((res) => res.json())
    return result
} */
const get = async (url: string): Promise<Character> => {
    const result = await fetch(url)
    const data = await result.json()
    console.log(data)
    return data
}

/* https://rickandmortyapi.com/api/character/1 */

/* for (let i = 1; i < 11; i++) {
    const newElement: Character = await getCharacters(
        `https://rickandmortyapi.com/api/character/${i}`
    )
    characters.push(newElement)
} */
/* console.log(characters)
get('https://rickandmortyapi.com/api/character/[1,2]')
console.log(characters2) */
export default get
