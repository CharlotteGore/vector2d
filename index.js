var is = require('is');

var Vector2D = function( arr ){

	var self = this;

	this[0] = arr[0] || 0;
	this[1] = arr[1] || 0;

	return this;
}

Vector2D.prototype = {

	copy : function(){
		return new Vector2D([this[0], this[1]]);		
	},

	set : function(x, y){
		var a = parseInput(x, y);
		this[0] = a[0];
		this[1] = a[1];
		return this;		
	},

	add : function( a ){
		this[0] += a[0];
		this[1] += a[1];
		return this;
	},

	subtract : function( a ){
		this[0] -= a[0];
		this[1] -= a[1];
		return this;
	},

	multiply : function( a ){
		this[0] = this[0] * a[0];
		this[1] = this[1] * a[1];
		return this;
	},

	divide : function( a ){
		this[0] = this[0] / a[0];
		this[1] = this[1] / a[1];
		return this;
	},

	scale : function( val ){
		this[0] = this[0] * val;
		this[1] = this[1] * val;
		return this;
	},

	dot : function( a ){
		if(!a){ var a = [this[0], this[1]]; }
		return (this[0] * a[0]) + (this[1] * a[1]);		
	},

	magnitude : function(){
		return Math.sqrt( ( this[0] * this[0] ) + ( this[1] * this[1] ) );
	},

	normalise : function(){

		var m = this.magnitude();
		this[0] = this[0] / m;
		this[1] = this[1] / m;
		return this;
	},

	distance : function( a ){
		var x = a[0] - this[0], y = a[1] - this[1];
		return Math.sqrt( ( x * x ) + ( y * y ));
	},

	cos : function( a ){
		return this.dot(a) / ( this.magnitude() * a.magnitude() );
	},

	cssPos : function(){
		return { left : this[0], top : this[1]}
	},

	cssSize : function(){
		var self = this;
		return { width : this[0], height : this[1]}
	},

	coords : function(){
		var self = this;
		return { x : this[0], y : this[1] }
	}

}


function parseInput(x, y){
	var a;
	is.number(x) ? a = [x, y] : 
		is.array(x) ? a = x :
			is.number(x.x) ? a = [x.x, x.y] : 
				is.number(x.left) ? a = [x.left, x.top] : 
					is.number(x.width) ? a = [x.width, x.height] :
						is.number(x[0]) ? a = [x[0], x[1]] :
							a = [0,0]
	return a;
}

module.exports.vector = module.exports.v = function(x, y){

	return new Vector2D(parseInput(x, y));	

}


module.exports.add = function( p, q ){
	return [p[0] + q[0], p[1] + q[1]];	
}

module.exports.subtract = function( p, q ){
	return [p[0] - q[0], p[1] - q[1]];	
}

module.exports.multiply = function( p, q ){
	return [p[0] * q[0], p[1] * q[1]];	
}

module.exports.divide = function( p, q ){
	return [p[0] / q[0], p[1] / q[1]];	
}

module.exports.scale = function( p, scale ){
	return [p[0] * scale, p[1] * scale];
}

module.exports.dot = module.exports.dotProduct = function( p, q ){
	if(p && q){
		return p[0] * q[0] + p[1] * q[1];
	}else{
		return p[0] * p[0] + p[1] * p[1];
	}
}

module.exports.distance = function( p, q ){
	var x = p[0] - q[0], y = p[1] - q[1];
	return Math.sqrt( x * x + y * y );
}

module.exports.length = module.exports.magnitude = function( p ){
	return Math.sqrt( ( p[0] * p[0] ) + ( p[1] * p[1] ) );
}

module.exports.cos = function( p, q ){
	return (p[0] * q[0] + p[1] * q[1]) / (Math.sqrt( ( p[0] * p[0] ) + ( p[1] * p[1] ) ) * Math.sqrt( ( q[0] * q[0] ) + ( q[1] * q[1] ) ));
}

module.exports.normalise = module.exports.normalize = function( p ){
	var l = Math.sqrt( ( p[0] * p[0] ) + ( p[1] * p[1] ) );
	return [p[0] / l, p[1] / l];
}