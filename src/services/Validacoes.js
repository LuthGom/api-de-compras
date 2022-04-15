class Validacoes {

    static autenticacaoNome(nome) {
        if (nome.length < 8) {
            throw new Error('Campo nome deve ter ao menos 8 caracteres!');
        } else {
            return nome.toUpperCase()
        }
    }

    static autenticacaoEmail(email) {
        const mail = /\S+@\S+\.\S+/
        mail.test(email)
        return email
    }

}

module.exports = Validacoes;
