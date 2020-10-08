let obj = {}

obj.a = 1;
obj['terrain'] = 'earth';
obj.plain = function() {
    console.log('We are flying!!!')
}

obj.plain();

delete obj['terrain'];
console.log('terrain' in obj);