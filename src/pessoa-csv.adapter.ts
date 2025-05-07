import * as fs from 'fs';
import * as path from 'path';
import { Pessoa } from './pessoa.entity';
import { RepositorioDePessoas } from './repositorio-de-pessoas.interface';

export class PessoaCsvAdapter implements RepositorioDePessoas {
  constructor(private readonly caminhoArquivo: string) {}

    async listarPessoas(): Promise<Pessoa[]> {
        const conteudo = fs.readFileSync(path.resolve(this.caminhoArquivo), 'utf-8');
        const linhas = conteudo.split('\n').slice(1);
        const pessoas: Pessoa[] = [];

        for (const linha of linhas) {
            if (linha.trim() === '') continue;
            const [nome, idadeStr, email] = linha.split(',');
            pessoas.push(new Pessoa(nome.trim(), Number(idadeStr), email.trim()));
        }

        return pessoas;
    }
}
