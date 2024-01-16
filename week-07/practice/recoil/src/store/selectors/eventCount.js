import { selector } from 'recoil'
import countAtom from '../atoms/count'

const evenCountSelector = selector({
    key: 'evenCountSelector',
    get: ({ get }) => {
        const count = get(countAtom)
        return count % 2
    }
})

export default evenCountSelector
