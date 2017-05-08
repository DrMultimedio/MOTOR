function Textura(){
	var self = this;
	this.nombre = "";
	this.imagen = new Image();
	this.textura = gl.createTexture();
	this.imagen.onload = function(){
		self.handleLoadedTexture();
	}

}
Textura.prototype.getNombre = function() {
	return this.nombre;
};

Textura.prototype.setImagen = function(file){
	this.imagen.src = file;

}

Textura.prototype.handleLoadedTexture = function() {


		cubeVerticesTextureCoordBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesTextureCoordBuffer);
		  
		var textureCoordinates = [
		  // Front
		  0.0,  0.0,
		  1.0,  0.0,
		  1.0,  1.0,
		  0.0,  1.0,
		  // Back
		  0.0,  0.0,
		  1.0,  0.0,
		  1.0,  1.0,
		  0.0,  1.0,
		  // Top
		  0.0,  0.0,
		  1.0,  0.0,
		  1.0,  1.0,
		  0.0,  1.0,
		  // Bottom
		  0.0,  0.0,
		  1.0,  0.0,
		  1.0,  1.0,
		  0.0,  1.0,
		  // Right
		  0.0,  0.0,
		  1.0,  0.0,
		  1.0,  1.0,
		  0.0,  1.0,
		  // Left
		  0.0,  0.0,
		  1.0,  0.0,
		  1.0,  1.0,
		  0.0,  1.0
		];

		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
		              gl.STATIC_DRAW);


		console.info('loading image');
		gl.bindTexture(gl.TEXTURE_2D, this.textura);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.imagen);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

	    gl.generateMipmap(gl.TEXTURE_2D);

		gl.bindTexture(gl.TEXTURE_2D, null);

		console.log(this);



};