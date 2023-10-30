export default function ContactForm() {
return(
  <>
    <style
      dangerouslySetInnerHTML={{
        __html:
          '\n    #contato {\n      background-image: url(\'images/bg3-new.jpg\');\n      background-size: cover;\n      border-top: 2px solid #6F366E;\n      border-bottom: 2px solid #6F366E;\n    }\n\n    .form-container {\n      background-color: transparent; /* Definindo o background como transparente */\n      border-radius: 10px;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      padding: 20px;\n      width: 80%;\n      margin: 0 auto;\n    }\n\n    .form-container h2 {\n      text-align: center;\n      margin-bottom: 20px;\n      color: #6F366E;\n    }\n\n    .form-group {\n      margin-bottom: 20px;\n    }\n\n    .form-group label {\n      display: block;\n      font-weight: bold;\n      color: #555;\n    }\n\n    .form-group input[type="text"],\n    .form-group input[type="tel"],\n    .form-group input[type="email"] {\n      width: 100%;\n      padding: 10px;\n      font-size: 16px;\n      border: 1px solid #ccc;\n      border-radius: 5px;\n    }\n\n    .form-group input[type="submit"] {\n      background-color: #6F366E;\n      color: #fff;\n      border: none;\n      padding: 10px 20px;\n      font-size: 16px;\n      border-radius: 5px;\n      cursor: pointer;\n      width: 100%;\n    }\n\n    .form-group input[type="submit"]:hover {\n      background-color: #8E4A8A;\n    }\n'
      }}
    />
    <div id="contato">
      <div className="form-container">
        <h2>Formulário de Contato</h2>
        <form id="meuFormulario" method="post">
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefone:</label>
            <input type="tel" id="phone" name="phone" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required="" />
          </div>
          <div className="form-group">
            <input type="submit" defaultValue="Enviar" />
          </div>
        </form>
      </div>
    </div>
  </>

)
}