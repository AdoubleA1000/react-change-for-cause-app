const App = require('./App');

test('The admin email address should be correct', () => {
    function callback(data) {
        expect(data).toBe('admin email correct')
    }

    fetchData(callback);
});

test('The admin password should be correct', () => {
    function callback(data) {
        expect(data).toBe('admin password correct')
    }

    fetchData(callback);

});

test('The admin is logged in', () => {
    function callback(data) {
        expect(data).toBe('admin login correct')
    }

    fetchData(callback);

});

test('The admin is logged out', () => {
    function callback(data) {
        expect(data).toBe('admin logout correct')
    }

    fetchData(callback);

});
