import Conta from "./Conta";

interface User {
    id: number;
    nome: string;
    cpf: string;
    senha: string;
    contas: Conta[]
}

export default User;