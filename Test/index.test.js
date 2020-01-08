const Template = require('../index');

describe('Template', () => {
    describe('Inquirer', () => {
        it('should return same username', async (data) => {
            const username = 'ahmeda47'
            const result = await new Template().getUsername(username);
            data();
            expect(result).toEqual(Template.getUsername('ahmeda47'))
        })
    })
})