import Conta from './Conta';

export interface TransferenciaRequestDTO {
  
    contaOrigem: Conta
  contaDestino: Conta
  valorTransferencia: number;
  tipoTransferencia: string

}