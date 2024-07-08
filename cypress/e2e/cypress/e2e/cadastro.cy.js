///<reference types='cypress'/>

describe('US-012 Funcionalidade de cadastro de membros', () => {



  it.only('Deve validar cadastro com sucesso', () => {
    cy.visit("http://127.0.0.1:8080/")
    var email = `diego`${Date.now()}@teste.com
    cy.PreenchenpxrCadastro('Diego', 'Pereira', email', '1495635658', 'Di@123456')
    cy.get('#signup-response').should ('contain', 'Cadastro realizado com sucesso' )
  })

  it('Deve validar mensagem de erro com e-mail duplicado', () => {
   
    cy.PreencherCadastro('Diego', 'Pereira', d_teste1@teste.com, '1495635658',   'Di@123456')
    cy.get('#signup-response').should('to contain' , 'Este email já está cadastrado')
  })

  it('Deve validar mensagem cadastro sem o campo de telefone preenchido', () => {
    var email = `diego`${Date.now()}@teste.com
    cy.PreencherCadastro('Diego', 'Pereira', email, '', 'Di@123456')
    cy.get('#signup-response').should ('contain' , 'Cadastro realizado com sucesso')
  })

  it('Deve validar mensagem de erro por campo Nome nao preenchido', () => {
    var email = `diego`${Date.now()}@teste.com
    cy.PreencherCadastro('', 'Pereira', email, '1495635658', 'Di@123456')
    cy.get('#signup-response').should ('contain', "Nome não pode estar vazio")
  })

  it('Deve validar mensagem de erro por campo Sobrenome nao preenchido', () => {
    var email = `diego`${Date.now()}@teste.com
    cy.PreencherCadastro('Diego', '', email, '1495635658', 'Di@123456')
    cy.get('#signup-response').should ('contain', "Sobrenome não pode estar vazio")
  })
  it('Deve validar mensagem de erro por campo email nao preenchido', () => {
 
    cy.PreencherCadastro('Diego', 'Pereira', '', '1495635658', 'Di@123456')
    cy.get('#signup-response').should ('contain', "Email não pode estar vazio")
  })
  it('Deve validar mensagem de erro por campo senha nao preenchido', () => {
    var email = `diego`${Date.now()}@teste.com
    cy.PreencherCadastro('Diego', 'Pereira', email, '1495635658', '')
    cy.get('#signup-response').should ('contain', "Senha não pode estar vazia")
  })
  it('Deve validar mensagem de erro de senha fraca', () => {
    var email = `diego`${Date.now()}@teste.com
    cy.PreencherCadastro('Diego', 'Pereira', email, '1495635658', 'teste1')
        cy.get('#signup-response').should ('contain', "Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)")
  })
  it('Deve validar mensagem de erro por formato de email invalido', () => {
   
    cy.PreencherCadastro('Diego', 'Pereira', 'diego_teste', '1495635658', 'teste1')
    cy.get('#signup-response').should ('contain', "E-mail deve ser um email válido")
  })
  it('Deve validar mensagem de erro inserir no campo Nome dados inválidos', () => {
    var email = `diego`${Date.now()}@teste.com
    cy.PreencherCadastro('1234665', 'Pereira', email, '1495635658', 'teste1')
    cy.get('#signup-response').should ('contain', "Nome deve conter apenas caracteres alfabéticos, acentuados e espaços")
  })
 
  it('Deve validar mensagem de erro inserir no campo Sobrenome dados inválidos', () => {
    var email = `diego`${Date.now()}@teste.com
    cy.PreencherCadastro('Diego', '134&*', email, '1495635658', 'teste1')
    cy.get('#signup-response').should ('contain', "Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços")
  })

  it('Deve validar o link de politca da privacidade', () => {
  
    cy.get('a').click()
    cy.contains("Politica de Privacidade")
    cy.url().should('include', '/polices.html')
    cy.get('#results-section').should ("be.visible")
  })
});

