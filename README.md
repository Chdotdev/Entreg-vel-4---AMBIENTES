# Algoritmos Fundamentais com Testes Unitários (Jest)

Este repositório contém a implementação de 6 algoritmos fundamentais refatorados sob os princípios de **Clean Code** e **Programação Defensiva**, acompanhados de testes unitários automatizados desenvolvidos com **Jest**.

---

## 🚀 Algoritmos Implementados

- **Somatório**: Soma os elementos de uma lista.
- **Número Primo**: Verifica se um número inteiro é primo.
- **Contagem**: Conta números válidos numa coleção.
- **Fibonacci**: Gera a sequência de Fibonacci até $N$ termos.
- **MDC**: Calcula o Máximo Divisor Comum entre dois números.
- **Quicksort**: Ordena uma lista de números.

---

## 🔧 Como Executar os Testes

1. **Clonar o repositório:**
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd ATIVIDADE4_AMBIENTES
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Executar a suíte de testes:**
   ```bash
   npm test
   ```

---

## 🧪 Estrutura do Projeto

```text
.
├── funcoes/
│   ├── contagem.js
│   ├── fibonacci.js
│   ├── mdc.js
│   ├── numeroprimo.js
│   ├── quicksort.js
│   └── somatorio.js
├── tests/
│   └── allFunctions.test.js
├── .gitignore
├── package.json
└── README.md
```