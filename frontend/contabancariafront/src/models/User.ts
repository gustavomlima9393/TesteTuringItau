import Conta from "./Conta";

interface User {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    conta?: Conta[]
}

export default User;