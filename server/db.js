module.exports = {
    getDbConnections: () => {
        return [
            {id: '0', type:'local', conncectionString: 'test1'},
            {id: '1', type:'local', conncectionString: 'test2'},
            {id: '2', type:'non-local', conncectionString: 'test3'},
        ]
    }
}