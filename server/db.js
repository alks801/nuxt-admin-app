module.exports = {
    getDbConnections: () => {
        return [
            {id: '0', type:'local', timeout: '10s',conncectionString: 'test1'},
            {id: '1', type:'local', timeout: '10s',conncectionString: 'test2'},
            {id: '2', type:'non-local', timeout: '12s',conncectionString: 'test35'},
            {id: '3', type:'non-local', timeout: '14s',conncectionString: 'test63'},
            {id: '4', type:'non-local', timeout: '1s',conncectionString: 'test7'},
            {id: '5', type:'non-local', timeout: '14s',conncectionString: 'test3'},
        ]
    }
}