const axios = require('axios')

module.exports = {
    async request(url, method, data, headers) {
        try {
            const response = data
                ? await axios[method](url, data, {headers})
                : await axios[method](url, {headers})
            return response
        } catch(err) {
            return err
        }
    },
}
