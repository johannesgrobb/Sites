//Array functions

//forEach

function doubleValues(arr) {
    var newArr = [];
    arr.forEach(function (val) {
        newArr.push(val * 2);
    });
    return newArr;
}
doubleValues([5, 1, 2, 3, 10]);


function halfValues(arr) {
    var newArr = [];
    arr.forEach(function (val) {
        newArr.push(val / 2);
    })
    return newArr;
}
halfValues([2, 4, 6]);


function onlyEvenValues(arr) {
    var newArr = [];
    arr.forEach(function (val) {
        if (val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}
onlyEvenValues([
    [1, 2, 3],
    [5, 1, 2, 3, 10]
]);


function showFirstAndLast(arr) {
    var newArr = [];
    arr.forEach(function (val) {
        newArr.push(val[0] + val[val.length - 1])
    });
    return newArr;
}
showFirstAndLast(['Johan', 'Piet', 'Sarel']);


function addKeyAndValue(arr, key, value) {
    arr.forEach(function (val) {
        val[key] = value;
    });
    return arr;
}


function vowelCount(str) {
    var splitArr = str.split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function (letter) {
        if (vowels.indexOf(letter.toLowerCase()) !== -1) {
            if (letter in obj) {
                obj[letter]++
            } else {
                obj[letter] = 1;
            }
        }
    });
    return obj;
}


//Map

function doubleValues(arr) {
    return arr.map(function (val) {
        return val * 2;
    });
}


function valTimesIndex(arr) {
    return arr.map(function (val, index) {
        return val * index;
    });
}
valTimesIndex([1, 2, 3]);


function extractKey(arr, key) {
    return arr.map(function (val) {
        return val[key];
    });
}


function extractFullName(arr) {
    return arr.map(function (val) {
        return val.first + " " + val.last;
    });
}


//Filter

var arr = [1, 2, 3];
arr.filter(function (value, index, array) {
    return value > 2;
});

var friends = [{
        name: 'Johan'
    },
    {
        name: 'Raynardt'
    },
    {
        name: 'Willie'
    },
    {
        name: 'Zilla'
    }
];
friends.filter(function (value, index, array) {
    return value.name.length > 5;
}); // ['Zilla', 'Johan']


function onlyFourLetterNames(arr) {
    return arr.filter(function (value) {
        return value.length === 4;
    });
}
onlyFourLetterNames(['Rusty', 'Matt', 'Moxie', 'Colt']); //['Matt', 'Colt']


function divisibleByThree(arr) {
    return arr.filter(function (value) {
        return value % 3 === 0;
    });
}
divisibleByThree([1, 2, 3, 4, 5, 6, 7, 8, 9]); // [3, 6, 9]


function filterByValue(arr, key) {
    return arr.filter(function (val) {
        return val[key] !== undefined;
    });
}
filterByValue([{
        first: 'Elie',
        last: "Schoppik"
    },
    {
        first: 'Tim',
        last: "Garcia",
        isCatOwner: true
    },
    {
        first: 'Matt',
        last: "Lane"
    },
    {
        first: 'Colt',
        last: "Steele",
        isCatOwner: true
    }
], 'isCatOwner');


function find(arr, searchValue) {
    return arr.filter(function (val) {
        return val === searchValue;
    })[0];
}
find([1, 2, 3, 4, 5], 3); // [3]


function findInObj(arr, key, searchValue) {
    return arr.filter(function (val) {
        return val[key] === searchValue;
    })[0];
}
findInObj([{
        first: 'Elie',
        last: "Schoppik"
    },
    {
        first: 'Tim',
        last: "Garcia",
        isCatOwner: true
    },
    {
        first: 'Matt',
        last: "Lane"
    },
    {
        first: 'Colt',
        last: "Steele",
        isCatOwner: true
    }
], 'isCatOwner', true);


function removeVowels(str) {
    var vowels = 'aeiou';
    return str.toLowerCase().split("").filter(function (val) {
        return vowels.indexOf(val) === -1
    }).join('');
}
removeVowels('Elie'); // ['l']


function doubleOddNumbers(arr) {
    return arr.filter(function (val) {
        return val % 2 !== 0;
    }).map(function (val) {
        return val * 2;
    });
}
doubleOddNumbers([1, 2, 3, 4, 5]); // [2, 6, 10]


//Some

var arr = [1, 2, 3];

arr.some(function (value, index, array) {
    return value > 2;
}); // True


function hasEvenNumber(arr) {
    return arr.some(function (value) {
        return value % 2 === 0;
    });
}
hasEvenNumber([1, 2, 3, 4, 5, 6]); // True

function hasOddNumber(arr) {
    return arr.some(function (val) {
        return val % 2 !== 0;
    });
}
hasOddNumber([1, 2, 2, 2, 2, 2, 4]);

function hasAZero(num) {
    return num.toString().split('').some(function (val) {
        return val === '0';
    });
}
hasAZero(3332123213101232321);

//Every

function allLowerCase(str) {
    return str.split('').every(function (value) {
        return value === value.toLowerCase();
    });
}

allLowerCase('this is Really nice'); //false

function allArrays(arr) {
    return arr.every(Array.isArray);
}
allArrays([
    [1],
    [2],
    [3, 4]
]); //True
allArrays([
    [1],
    [2], {}
]); // False

function hasOnlyOddNumbers(arr) {
    return arr.every(function (val) {
        return val % 2 !== 0;
    });
}
hasOnlyOddNumbers([1, 3, 5, 7])

function hasNoDuplicates(arr) {
    return arr.every(function (val) {
        return arr.indexOf(val) === arr.lastindexOf(val);
    });
}
hasNoDuplicates([1, 2, 3, 1])

var arr = [{
        title: "Instructor",
        first: 'Elie',
        last: "Schoppik"
    },
    {
        title: "Instructor",
        first: 'Tim',
        last: "Garcia",
        isCatOwner: true
    },
    {
        title: "Instructor",
        first: 'Matt',
        last: "Lane"
    },
    {
        title: "Instructor",
        first: 'Colt',
        last: "Steele",
        isCatOwner: true
    }
]

function hasCertainKey(arr, key) {
    return arr.every(function (val) {
        return key in val;
    });
}
hasCertainKey(arr, 'first')

var arr = [{
        title: "Instructor",
        first: 'Elie',
        last: "Schoppik"
    },
    {
        title: "Instructor",
        first: 'Tim',
        last: "Garcia",
        isCatOwner: true
    },
    {
        title: "Instructor",
        first: 'Matt',
        last: "Lane"
    },
    {
        title: "Instructor",
        first: 'Colt',
        last: "Steele",
        isCatOwner: true
    }
]

function hasCertainValue(arr, searchValue) {
    return arr.every(function (val) {
        return val[key] === searchValue;
    });
}
hasCertainValue(arr, 'title', 'Instructor');


//Reduce

var arr = [1, 2, 3, 4, 5];
arr.reduce(function (accumulator, nextValue) {
    return accumulator + nextValue;
}, 10);

var names = ['Tim', 'Matt', 'Colt', 'Ellie'];

names.reduce(function (accumulator, nextValue) {
    return accumulator += ' ' + nextValue;
}, 'The Instructors are');


var arr = [5, 4, 1, 4, 5];
arr.reduce(function (accumulator, nextValue) {
    if (nextValue in accumulator) {
        accumulator[nextValue]++;
    } else {
        accumulator[nextValue] = 1;
    }
    return accumulator;
}, {});

function sumOddNumbers(arr) {
    return arr.reduce(function (accumulator, nextValue) {
        if (nextValue % 2 != 0) {
            accumulator += nextValue;
        }
        return accumulator;
    }, 0);
}
sumOddNumbers([1, 2, 3, 4, 5]);

var arr = [{
        name: 'Elie'
    },
    {
        name: 'Tim'
    },
    {
        name: 'Matt'
    },
    {
        name: 'Colt'
    }
];

function extractValue(arr, key) {
    return arr.reduce(function (acc, next) {
        acc.push(next[key]);
        return acc;
    }, []);
}

extractValue(arr, 'name');


function vowelCount(str) {
    var vowels = "aeiou";
    return str.split("").reduce(function (acc, next) {
        if (vowels.indexOf(next.toLowerCase()) !== -1) {
            if (next in acc) {
                acc[next]++;
            } else {
                acc[next] = 1;
            }
        }
        return acc;
    }, {});
}
vowelCount('Elie');
vowelCount('Tim');
vowelCount('Matt');
vowelCount('hmmm');
vowelCount('I Am awesome and so are you');

var arr = [{
        name: 'Elie'
    },
    {
        name: 'Tim'
    },
    {
        name: 'Matt'
    },
    {
        name: 'Colt'
    }
];

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function (acc, next, idx) {
        acc[idx][key] = value;
        return acc;
    }, arr);
}

addKeyAndValue(arr, 'title', 'Instructor');


var names = ['Elie', 'Colt', 'Tim', 'Matt'];

function isLongerThanThreeCharacters(val) {
    return val.length > 3;
}

function partition(acc, isLongerThanThreeCharacters) {
    return arr.reduce(function (acc, next) {
        if (isLongerThanThreeCharacters(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [
        [],
        []
    ]);
}

partition(names, isLongerThanThreeCharacters);
