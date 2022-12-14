import { Content } from './content'

describe('Notification content', () => {

  it('shoud be ableto create a notfication content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  })

  it('shoud not be able to create a notfification content with less then 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  })
  
  it('shoud not be able to create a notfification content with more then 140 characters', () => {
    expect(() => new Content('aaa'.repeat(241))).toThrow();
  })

})

