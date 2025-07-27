# Descrição

Este projeto contém os testes do desafio técnico para a empresa UDS Tecnologia.

# Como inicializar o projeto

* Clone o repositorio em sua máquina local com o comando ```git clone <url repositório>``` e em seguida, instale as dependências com o comando ```npm install```.
* Use o comando ```npx cypress run``` para execução completa.
* Utilize o comando ```npx cypress open``` para abrir a janela de execução e selecionar os casos a serem executados.

# Estrutura

As pastas foram estruturadas para os testes automatizados da seguinte maneira: 
* ```cypress\e2e\api``` contém o arquivo no qual realiza os testes de API.
* ```cypress\e2e\ui``` contém o arquivo no qual realiza os testes de GUI.
* ```cypress\support\commands``` contém os commands usados para estes testes.