import { Dispatch, SetStateAction, createContext } from 'react'

interface IContext {
  bar: string
  setBar: Dispatch<SetStateAction<string>>
}

export const Context = createContext<IContext>({
  bar: 'home',
  setBar: () => {},
})
