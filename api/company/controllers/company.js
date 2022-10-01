const {requestSociete} = require('../../../utils/request/request-societe')

const findCompany = async (req, res) => {
    const {id} = req.params
    const societe = await requestSociete(`societe/${id}`, 'get')
    if (societe.data) {
        return res.json({status: 200, data: societe.data})
    }
    if (societe.response.data.texte) {
        return res.json({status: 200, message: societe.response.data.texte})
    }
    return res.json(errors(societe.response.status))
}

function errors(code) {
    if (code === 400) return {status: code, message: 'Aucune correspondance'}
    if (code === 404) return {status: code, message: 'Mauvaise requête'}
}

module.exports = {findCompany}