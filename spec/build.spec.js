describe("Vector 2D Module", function(){

	describe("Test framework", function(){

		it("can be required", function(){

			expect(require('vector2d')).toBeTruthy()

		});

	})

	describe("Creating vectors", function(){

		var v = require('vector2d');

		it("can create a vector with x/y", function(){

			var p = v.vector({ x : 10, y : 15});

			expect(p[0]).toBe(10);
			expect(p[1]).toBe(15);

		});

		it("can create a vector with an array ", function(){

			var p = v.vector([10, 15]);

			expect(p[0]).toBe(10);
			expect(p[1]).toBe(15);

		});

		it("can create a vector with two params ", function(){

			var p = v.vector(10, 15);

			expect(p[0]).toBe(10);
			expect(p[1]).toBe(15);

		});

		it("can create a vector from another vector", function(){

			var p = v.vector(10, 15);
			var q = v.vector(p);

			expect(q[0]).toBe(10);
			expect(q[1]).toBe(15);

		});

		it("can create a vector with css left/top ", function(){

			var p = v.vector({ left : 10, top: 15 });

			expect(p[0]).toBe(10);
			expect(p[1]).toBe(15);

		});

		it("can create a vector with css width/height ", function(){

			var p = v.vector({ width : 10, height : 15 });

			expect(p[0]).toBe(10);
			expect(p[1]).toBe(15);

		});

		it("can copy a vector", function(){

			var p = v.vector([10, 15]);
			var q = p.copy();

			expect(q[0]).toBe(10);
			expect(q[1]).toBe(15);

		});

	});

	describe("Vector outputs", function(){

		var v = require('vector2d');

		it("can return xy coords", function(){

			var p = v.vector([10, 15]).coords();

			expect(p.x).toBe(10);
			expect(p.y).toBe(15);

		})

		it("can return a css position", function(){

			var p = v.vector([10, 15]).cssPos();

			expect(p.left).toBe(10);
			expect(p.top).toBe(15);

		})

		it("can return a css size", function(){

			var p = v.vector([10, 15]).cssSize();

			expect(p.width).toBe(10);
			expect(p.height).toBe(15);

		})

	});

	describe("Vector Object maths", function(){

		var v = require('vector2d');

		it("can have another vector added to it", function(){

			var p = v.vector([10, 15]);
			var q = v.vector([20, 25]);

			p.add(q);

			expect(p[0]).toBe(30);
			expect(p[1]).toBe(40);

			p.add(q)

			expect(p[0]).toBe(50);
			expect(p[1]).toBe(65);

		});

		it("can have another vector subtracted from it", function(){

			var p = v.vector([10, 15]);
			var q = v.vector([20, 30]);

			p.subtract(q);

			expect(p[0]).toBe(-10);
			expect(p[1]).toBe(-15);

			p.subtract(q);

			expect(p[0]).toBe(-30);
			expect(p[1]).toBe(-45);

		});

		it("can have another vector multiplied with it", function(){

			var p = v.vector([10, 15]);
			var q = v.vector([20, 25]);

			p.multiply(q);

			expect(p[0]).toBe(200);
			expect(p[1]).toBe(375);

			p.multiply(q);

			expect(p[0]).toBe(4000);
			expect(p[1]).toBe(9375);

		});

		it("can be divided by another vector", function(){

			var p = v.vector([10, 15]);
			var q = v.vector([20, 25]);

			p.divide(q);

			expect(p[0]).toBe(0.5);
			expect(p[1]).toBe(0.6);


		});

		it("can be scaled by a factor", function(){

			var p = v.vector([10, 15]);

			p.scale(0.5);

			expect(p[0]).toBe(5);
			expect(p[1]).toBe(7.5);

			p.scale(2);

			expect(p[0]).toBe(10);
			expect(p[1]).toBe(15);

			p.scale(2);

			expect(p[0]).toBe(20);
			expect(p[1]).toBe(30);

		});

		it("can compute its own dot product", function(){

			var p = v.vector([10, 15]);

			expect(p.dot()).toBe(325)

		});

		it("can compute its dot product with another vector", function(){

			var p = v.vector([10, 15]);
			var q = v.vector([20, 30]);

			expect(p.dot(q)).toBe(650);

		});

		it("can computes its magnitude/length", function(){

			var p = v.vector([10, 15]);

			expect( p.magnitude() ).toBeCloseTo(18.027756377319946);

		});

		it("can computer the cosine of the angle between itself and another vector", function(){

			var p = v.vector([10, 15]);
			var q = v.vector([20, 0]);

			expect(p.cos(q)).toBeCloseTo(0.5547001962252291)

			p.set([0,10])
			q.set([10,0])

			expect(p.cos(q)).toBe(0);

			p.set([0, 10])
			q.set([0,-10])

			expect(p.cos(q)).toBe(-1);

			p.set([0, 10])
			q.set([0, 10])

			expect(p.cos(q)).toBe(1);		
		

		});

		it("can compute the distance between itself and another vector", function(){

			var p = v.vector([10, 15]);
			var q = v.vector([20, 0]);

			expect( p.distance(q) ).toBe(18.027756377319946);

			p.set([0,0])
			q.set([20,0])

			expect( p.distance(q) ).toBe(20) 

			p.set([0,0])
			q.set([0,0])

			expect( p.distance(q) ).toBe(0) 

		});

		it("can turn itself into a unit vector", function(){

			var p = v.vector([10,15]);

			p.normalise();

			expect(p[0]).toBeCloseTo(0.5547001962252291);
			expect(p[1]).toBeCloseTo(0.8320502943378437);

		})


	});

	describe("Static vector maths", function(){

		var v = require('vector2d');

		it("can add two vectors", function(){

			var p = v.vector([10, 15]);
			var q = v.vector([20, 25]);

			var r = v.add(p, q)

			expect(r).toEqual([30, 40]);


		});

		it("can subject one vector from another", function(){

			var p = v.vector([10, 15]);
			var q = v.vector([20, 30]);

			var r = v.subtract(p, q);

			expect(r).toEqual([-10, -15]);

		});

		it("can multiply two vectors", function(){

			var p = v.vector([10, 15]);
			var q = v.vector([20, 25]);

			var r = v.multiply(p , q);

			expect(r).toEqual([200, 375]);

		});


		it("can be divided a vector by another vector", function(){

			var p = v.vector([10, 15]);
			var q = v.vector([20, 25]);

			expect(v.divide(p, q)).toEqual([0.5, 0.6]);


		});

		it("can scale a vector by a factor", function(){

			var p = v.vector([10, 15]);

			var r = v.scale(p, 0.5)

			expect(r).toEqual([5, 7.5]); 

		});

		it("can compute the dot product of a vector", function(){

			var p = v.vector([10, 15]);

			expect( v.dot(p) ).toBe(325)

		});

		it("can compute the dot product of two vectors", function(){

			var p = v.vector([10, 15]);
			var q = v.vector([20, 30]);

			expect(v .dot(p, q) ).toBe(650);

		});

		it("can compute the magnitude of a vector", function(){

			var p = v.vector([10, 15]);

			expect( v.magnitude(p) ).toBeCloseTo(18.027756377319946);

		});

		it("can computer the cosine of the angle between two vectors", function(){

			var p = v.vector([10, 15]);
			var q = v.vector([20, 0]);

			expect(v.cos(p, q)).toBeCloseTo(0.5547001962252291)

			p.set([0,10])
			q.set([10,0])

			expect(v.cos(p, q)).toBe(0);

			p.set([0, 10])
			q.set([0,-10])

			expect(v.cos(p, q)).toBe(-1);

			p.set([0, 10])
			q.set([0, 10])

			expect(v.cos(p, q)).toBe(1);		
		

		});

		it("can compute the distance between two vectors", function(){

			var p = v.vector([10, 15]);
			var q = v.vector([20, 0]);

			expect( v.distance(p, q) ).toBe(18.027756377319946);

			p.set([0,0])
			q.set([20,0])

			expect( v.distance(p, q) ).toBe(20) 

			p.set([0,0])
			q.set([0,0])

			expect( v.distance(p, q) ).toBe(0) 

		});

		it("can normalise a vector", function(){

			var p = v.vector([10,15]);

			p.normalise();

			expect(v.normalise(p)[0]).toBeCloseTo(0.5547001962252291);
			expect(v.normalise(p)[1]).toBeCloseTo(0.8320502943378437);

		});


	});

});