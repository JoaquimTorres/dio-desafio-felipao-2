function calculoRank(rank) {
    if (rank <= 10) {
        return "Ferro";
    } else if ((rank >= 11) && (rank < 20)) {
        return "Bronze";
    } else if ((rank >= 21) && (rank < 50)) {
        return "Prata";
    } else if ((rank >= 51) && (rank < 80)) {
        return "Ouro";
    } else if ((rank >= 81) && (rank < 90)) {
        return "Diamante";
    } else if ((rank >= 91) && (rank < 100)) {
        return "Lendário";
    } else if (rank >= 101) {
        return "Imortal";
    }
}

let vitorias = prompt("Digite o número de vitórias: ");
let derrotas = prompt("Digite o número de derrotas: ");
let rank = vitorias - derrotas;
let classificacao = calculoRank(rank);
console.log("O Herói tem de saldo de " + rank + " está no nível de " + classificacao + ".");
