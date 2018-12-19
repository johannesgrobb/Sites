var earth = {
    isRound: true,
    numberFromSun: 3
}

describe("Earth", function() {
    it("is round", function() {
        expect(earth.isRound).toBe(true)
    });
    it("is the third planet from the sun", function() {
        expect(earth.numberFromSun).toBe(3)
    });
});

describe("Jasmine Matchers", function() {
    
    it("allows for === and deep equality", function() {
        expect(1+1).toBe(2);
        expect([1,2,3]).toEqual([1,2,3]);
    });

    it("allows for precision checking", function() {
        expect(3.1415).toBeCloseTo(3.14, 2);
    });

    it("allows for easy truthy / falsy checking", function() {
        expect(0).toBeFalsy();
        expect([]).toBeTruthy();
    });

    it("allows for checking contents of an object", function() {
        expect([1,2,3]).toContain(1);
        expect({name: 'Ellie'}).toEqual(jasmine.objectContaining({name: 'Ellie'}));
    });

    it("allows for easy type checking", function() {
        expect([]).toEqual(jasmine.any(Array));
        expect(function(){}).toEqual(jasmine.any(Function));
    });

});

describe("Arrays", function() {
    var arr;
    beforeEach(function () {
        arr = [1,2,3];
    });

    it("adds elements to an array", function() {
        arr.push(7);
        expect(arr).toEqual([1,2,3,7]);
    });

    it("returns the new length of an array", function() {
        expect(arr.push(7)).toBe(4);
    });

    it("adds anything to the array", function() {
        expect(arr.push({})).toBe(4);
    });
});

describe("Counting", function() {
    var count = 0;

    beforeEach(function() {
        count++;
    });

    afterEach(function() {
        count = 0;
    });

    it("has a counter that increments", function() {
        expect(count).toBe(1);
    });

    it("gets reset", function() {
        expect(count).toBe(1);
    });
});

describe("Array", function() {
    var arr;
    beforeEach(function() {
        arr = [1,3,5];
    });

    describe("#unshift", function() {

        it("adds an element to the beggining of an array", function() {
            arr.unshift(17);
            expect(arr[0]).toBe(17);
        });

        it("returns the new length", function() {
            expect(arr.unshift(1000)).toBe(4);
        });
    });

    describe("#push", function() {

        it("adds elements to the end of an array", function() {
            arr.push(7);
            expect(arr[arr.length-1]).toBe(7);
        });

        it("returns the new length", function() {
        expect(arr.push(1000)).toBe(4);
        });
    });

});

function add(a,b,c) {
    return a+b+c;
}

describe("add", function() {
    var addSpy, result;
    beforeEach(function() {
        addSpy = spyOn(window, 'add').and.callThrough();
        result = addSpy(1,2,3);
    })

    it("can have params tested", function() {
        expect(addSpy).toHaveBeenCalled();
        expect(addSpy).toHaveBeenCalledWith(1,2,3);
        expect(addSpy.calls.any()).toBe(true);
        expect(addSpy.calls.count()).toBe(1);
       
    });

    it("can have return value tested", function() {
        expect(result).toEqual(6);
    });

});

describe("a simple setTimeout", function() {
    var sample;
    beforeEach(function() {
        sample = jasmine.createSpy("sampleFunction");
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("is only invoked after 1000 ms", function() {
        setTimeout(function() {
            sample();
        }, 1000);
        jasmine.clock().tick(999);
        expect(sample).not.toHaveBeenCalled();
        jasmine.clock().tick(1);
        expect(sample).toHaveBeenCalled();
        });
});

