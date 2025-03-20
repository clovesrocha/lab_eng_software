const { Builder, By, until, logging } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");

(async function example() {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(
      new chrome.Options().addArguments("--auto-open-devtools-for-tabs")
    )
    .build();

  // Remove all cookies
  await driver.manage().deleteAllCookies();

  await driver.get(
    "https://www.bilheteriadigital.com/noite-da-jovem-guarda-04-de-abril"
  );

  // Configurar tempo de espera implícito
  await driver.manage().setTimeouts({ implicit: 500 });

  // Aceita os cookies
  await driver.wait(until.elementLocated(By.css(".cc-allow")), 1000);
  await driver.findElement(By.css(".cc-allow")).click();

  await driver.wait(
    until.elementIsVisible(
      driver.findElement(By.css(".btn-adicionar-carrinho"))
    ),
    10000
  );
  await driver.wait(
    until.elementIsEnabled(
      driver.findElement(By.css(".btn-adicionar-carrinho"))
    ),
    10000
  );
  await driver.executeScript(
    "arguments[0].click();",
    await driver.findElement(By.css(".btn-adicionar-carrinho"))
  );
  await driver.executeScript(
    "arguments[0].click();",
    await driver.findElement(By.css(".btn-adicionar-carrinho"))
  );

  // assert verificando se foi selecionado 2 ingressos no class qtd_ingresso
  await driver.wait(until.elementLocated(By.css(".qtd_ingresso")), 10000);
  const qtdIngresso = await driver.findElement(By.css(".qtd_ingresso"));
  const qtdIngressoHtml = await qtdIngresso.getAttribute("value");

  assert.strictEqual(
    parseInt(qtdIngressoHtml, 10),
    2,
    "O numero dos tickets não é 2"
  );

  await driver.executeScript(
    "arguments[0].click();",
    await driver.findElement(By.id("botao-comprar"))
  );

  await driver.sleep(3000);
  await driver.wait(until.elementLocated(By.id("freserva")), 10000);
  const reserva = await driver.findElement(By.id("freserva"));
  const reservaHtml = await reserva.getAttribute("outerHTML");

  // imprimir na tela o body do iframe da reserva
  await driver.switchTo().frame(reserva);
  const body = await driver.findElement(By.tagName("body"));

  const bodyHtml = await body.getAttribute("outerHTML");
  console.log(bodyHtml);

  // da um getselectAll na classe Lugar do body usando o executeScript
  const lugares = await driver.executeScript(
    "return arguments[0].querySelectorAll('.Lugar')",
    body
  );

  // pega o primeiro lugar e clica
  await lugares[0].click();
  await lugares[1].click();

  // clica no botão de confirmar
  await driver.executeScript(
    "arguments[0].click();",
    await body.findElement(By.id("btnSlide"))
  );
  await driver.executeScript(
    "arguments[0].click();",
    await body.findElement(By.id("btConfirmar"))
  );
})();
