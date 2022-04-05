function WebGLAnimation() {

	let context = null;
	let isAnimating = false;
	let animationLoop = null;
	let requestId = null;

	function onAnimationFrame( time, frame ) {

		self.updateMatricesCount = 0;
		self.localMatrixUpdateCount = 0;
		self.worldMatrixUpdateCount = 0;
		self.rootWorldMatrixUpdateCount = 0;
		self.unmodifiedWorldMatrixUpdateCount = 0;
		self.regularWorldMatrixUpdateCount = 0;

		animationLoop( time, frame );

		requestId = context.requestAnimationFrame( onAnimationFrame );

		if (self.showMatricesUpdateCount) {
			console.log(
				self.updateMatricesCount,
				self.localMatrixUpdateCount,
				self.worldMatrixUpdateCount,
				self.rootWorldMatrixUpdateCount,
				self.unmodifiedWorldMatrixUpdateCount,
				self.regularWorldMatrixUpdateCount
			);
		}

	}

	return {

		start: function () {

			if ( isAnimating === true ) return;
			if ( animationLoop === null ) return;

			requestId = context.requestAnimationFrame( onAnimationFrame );

			isAnimating = true;

		},

		stop: function () {

			context.cancelAnimationFrame( requestId );

			isAnimating = false;

		},

		setAnimationLoop: function ( callback ) {

			animationLoop = callback;

		},

		setContext: function ( value ) {

			context = value;

		}

	};

}

export { WebGLAnimation };
