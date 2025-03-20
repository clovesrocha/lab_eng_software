# DESAFIO - TESTE DE AUTOMAÇÃO DE INGRESSOS 🎟️ 

# Cenário:
Uma empresa de eventos lançou um site para a venda de ingressos online. Sua tarefa é automatizar o processo de compra de ingressos usando Selenium e Python.

#Objetivo:
Criar um script de automação que simule um usuário comprando um ingresso para um evento específico, validando os principais elementos e interações da página.

#Requisitos do Teste
O script deve:

Abrir o site da plataforma de venda de ingressos.
Selecionar um evento disponível na lista.
Escolher a quantidade de ingressos (pelo menos 2 ingressos).
Preencher os dados do comprador, incluindo nome, e-mail e telefone.
Selecionar o método de pagamento (exemplo: cartão de crédito ou boleto).
Confirmar a compra e verificar se a mensagem de sucesso aparece na tela.

# Critérios de Sucesso
✅ O script deve rodar sem erros e simular a compra com sucesso.
✅ A automação deve verificar a existência dos elementos na página antes de interagir.
✅ O código deve incluir asserts para validar que a compra foi realizada com sucesso.
✅ O uso de esperas dinâmicas (WebDriverWait) é recomendado para evitar falhas por carregamento da página.

# Dicas e Recursos
🔹 Ferramentas: Selenium WebDriver, Python, ChromeDriver ou GeckoDriver.
🔹 Comandos úteis: find_element(), send_keys(), click(), WebDriverWait(), assert.
🔹 Bibliotecas recomendadas: selenium, pytest para automação de testes.
🔹 Exemplo de validação: Verifique se um elemento com a mensagem "Compra realizada com sucesso!" está visível na página após a finalização.

💡 Desafio extra:
📌 Implemente testes para verificar cenários de erro, como:

Compra sem preencher os dados do usuário.
Seleção de quantidade inválida de ingressos.
Pagamento recusado.

Boa sorte! 🚀
