import { Action } from "./actions";

export interface TokenState {
    tokens: string,
    id: string,
    cpf: string
}

const initialState = {
    tokens: "",
    id: "",
    cpf: ''

}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": {
            return { tokens: action.payload, id: state.id, cpf: state.cpf }
        };
        case "ADD_ID": {
            return { id: action.payload, tokens: state.tokens, cpf: state.cpf }
        }
        case "ADD_CPF": {
            return { cpf: action.payload, tokens: state.tokens, id: state.id }
        }
        default:
            return state
    }
}