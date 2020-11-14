const prod = {
    URLS: {
        FETCH_COMMENTS: '',
        SEND_COMMENT: ''
    }
};

const stage = {
    URLS: {
        FETCH_COMMENTS: '',
        SEND_COMMENT: ''
    }
};

const dev = {
    URLS: {
        FETCH_COMMENTS: 'http://localhost:8888/comment',
        SEND_COMMENT: 'http://localhost:8888/comment'
    }
};

export const config = (process.env.REACT_APP_ENV === 'dev' ? dev : process.env.REACT_APP_ENV === 'stage' ? stage : prod);
