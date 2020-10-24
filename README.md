# Jogo da Velha
Jogo desenvolvido em Python, utilizando Flask, e Javascript

## Instruções: ##
Necessário ter instalado no computador o Python 3.6 (https://www.python.org/downloads/release/python-360/)



**OBS: Os passos a seguir devem ser executados em um terminal**

Após a instalação do Python, utilizar o pip (gerenciador de pacotes do Python) para instalar o pacote `virtualenv` para criarmos um ambiente virtual:

`pip install virtualenv`




Após a instalação do ambiente virtual, entrar na pasta do projeto e criar o ambiente virtual do projeto:

```virtualenv venv```




Após a criação do ambiente virtual, precisamos ativa-lo para instalar as dependências do projeto:

No windows:

`venv\Scripts\activate`


No Linux:

`. venv/bin/activate`




Após a ativação instalar as dependências do projeto encontradas no arquivo requirements.txt

`pip install -r requirements.txt`


# Iniciando a aplicação
Para inicializar a aplicação, é necessário abrir o terminal e ir até a pasta do projeto.


Na pasta do projeto, ativar o ambiente virtual como explicado acima e utilizar o comando `python main.py` para executarmos nosso arquivo principal da aplicação.


Após a execução do comando acima algumas informações apareceram no terminal mostrando que a aplicação foi iniciada.
As informações devem ser parecidas com as informações abaixo:
 * (venv) λ python main.py
 * Serving Flask app "jogo_velha" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: on
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 209-542-029
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)


Para acessar a aplicação, basta abrir um navegador e acessar a URL na qual o projeto está rodando.

*URL encontrada na última linha da mensagem exibida no terminal. A última linha será parecida com esta `* Running on http://0.0.0.0:5000/`*

