export default function Footer() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n          .social-icons {\n            display: flex;\n            align-items: center;\n            margin-bottom: -30px;\n            margin-top: 100px;\n            justify-content: center;\n          }\n\n          .social-icon {\n            width: 50px;\n            height: 50px;\n            background-color: #9A5899;\n            border-radius: 50%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin-right: 10px;\n          }\n\n          .social-icon a {\n            color: #fff;\n            font-size: 24px;\n            text-decoration: none;\n\n          }\n        "
        }}
      />
      <div className="social-icons">
        <div className="social-icon">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
        </div>
        <div className="social-icon">
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
        </div>
        <div className="social-icon">
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .footer {\n      background-color: #9A5899;\n      width: 100%;\n      height: 100px;\n    }\n\n    .top-footer {\n      background-color: #9A5899;\n      width: 100%;\n      height: 5px;\n    }\n  "
        }}
      />
      <div className="top-footer" />
      <footer>
        <div className="footer">
          <p>
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
            Depois que você sair do Facebook, a responsabilidade não é deles e sim
            do nosso site. Fazemos todos os esforços para indicar claramente e
            mostrar todas as provas do produto e usamos resultados reais. Nós não
            vendemos o seu e-mail ou qualquer informação para terceiros. Jamais
            fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à
            vontade para usar o link de contato e falar conosco. Lemos e respondemos
            todas as mensagens por ordem de chegada.
          </p>
        </div>
        <p>© 2023 Paraíso Distribuidora. Todos os direitos reservados.</p>
      </footer>
    </>


    )
    }