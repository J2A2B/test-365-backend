const {request} = require('./request')

module.exports = {
    async requestSociete(uri, method, data) {
        const headers = {
            'X-Authorization': `socapi ${process.env.SOCIETE_TOKEN}`
        }
        const url = `${process.env.SOCIETE_API_URL}${uri}`
        return await request(url, method, data, headers)
    }
}