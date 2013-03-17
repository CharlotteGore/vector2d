
# vector2d

  A refactor of some old Vector2D library stuff into a CommonJS module. I've learnt a little more Vector mathematics theory since the last attempt at this!

  This module has parts. The first part is the generation of 2D vectors which have various methods to manipulate them as required, along with the ability to output as CSS Position or CSS Size data.

  The second part is a bunch of static methods that can do vector maths on vectors or simple 2d arrays. Helpful for computing values without changing the original vectors, and may or may not be faster. I've tried to collapse the calculations as much as possible to limit the number of function calls made internally. 

## Installation

    $ component install charlottegore/vector2d

## API

### require('vector2d').vector( vector, [y] )

  Create a new 2D Vector. Valid arguments are:

    .vector( { x : number, y : number} ) // x/y object
    .vector( { left : number, top : number } ) // left/top object
    .vector( { width: number, height: number } ) // width/height object
    .vector( [ number, number ] ) // an array of two values
    .vector( vector2dObject ) // another Vector2D object
    .vector( number, number ) // two numbers

### Vector Object API

  Create a new Vector Object:

  	var P = require('vector2d').vector( 10, 15 );
  	var Q = require('vector2d').vector( 20, 25 );

#### .cssPos()

  Returns the vector as an object `{ left : number, top : number }`

#### .cssSize()

  Returns the vector as an object `{ width: number, height : number }`

#### .coords()

  Returns the vector as an object `{ x : number, height : number }` 

#### .add( vector )

  Add the second vector

    P.add( Q );

#### .subtract( vector )

  Subtract the second vector

    P.subtract( Q );

#### .multiply( vector )

  Multiply by the second vector

  	P.multiply( Q );

#### .divided( vector )

  Divide by the second vector

    P.divide( Q )

#### .scale( factor )

  Multiply the vector by the factor.

    P.scale( 0.5 )

#### .dot( [vector] )

  Return the dot product of the vector or the dot product of the vector and the second vector.

    P.dot();
    P.dot( Q );

#### .magnitude()

  Return the magnitude or length of the vector

    P.magnitude();

#### .cos( vector )

  Compute the Cosine of the angle between itself and the second vector.

    P.cos( Q );

#### .distance( vector )

  Computer the distance between itself and the second vector.

    P.distance( Q );

#### .normalise()

  Convert the vector into a Unit vector.

    P.normalise();


### Static Methods API

  All the static methods return arrays or numbers and accept either Vectors or Arrays as inputs. 

#### require('vector2d').add( p, q )

  Adds p and q. Returns an array.

#### require('vector2d').subtract( p, q )

  Subtracts q from p. Returns an array.

#### require('vector2d').multiply( p, q )

  Multiplies p and q. Returns an array.

#### require('vector2d').divide( p, q )

  Divides p by q. Returns an array.

#### require('vector2d').scale( p, factor )

  Scales p by the factor. Returns an array.

#### require('vector2d').dot( p [, q] )

  Computes the dot product of p or p and q. Returns a number

#### require('vector2d').magnitude( p )

  Computes the magnitude of p. Returns a number.

#### require('vector2d').cos( p, q )

  Computes the cosine of the angle between p and q. Returns a number.

#### require('vector2d').distance( p, q )

  Computes the distance between p and q. Returns a number.

#### require('vector2d').distance( p )

  Derives a unit vector from p. Returns an array.


## License

  MIT
