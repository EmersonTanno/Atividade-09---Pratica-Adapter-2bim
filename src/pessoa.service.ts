import { PessoaCsvAdapter } from './pessoa-csv.adapter';
import { RepositorioDePessoas } from './repositorio-de-pessoas.interface';

async function main() {
    const repositorio: RepositorioDePessoas = new PessoaCsvAdapter('pessoas.csv');
    const pessoas = await repositorio.listarPessoas();

    pessoas.forEach(p => {
        console.log(`Nome: ${p.nome}, Idade: ${p.idade}, Email: ${p.email}`);
    });
}

main();
