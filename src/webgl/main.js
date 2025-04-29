// class Shader {
//   constructor(source, type) {
//     this.source = source;
//     this.type = type;
//   }
// }

// const vertexSrc = `#version 300 es
//     precision mediump float;
//     layout (location = 0) in vec3 aPos;
//     layout (location = 1) in vec3 aColor;

//     out vec3 VertexColor;

//     void main()
//     {
//       gl_Position = vec4(aPos, 1.0f);
//       VertexColor = aColor;
//     }
// `;

// const fragSrc = `#version 300 es
//     precision mediump float;
//     in vec3 VertexColor;
//     out vec4 FragColor;

//     void main()
//     {
//       FragColor = vec4(VertexColor, 1.0f);
//     }
// `;
// function initContext() {
//   const canvas = document.querySelector("#gl-canvas");
//   const gl = canvas.getContext("webgl2");
//   if (gl === null) {
//     alert(
//       "Unable to initialize WebGL. Your browser or machine may not support it."
//     );
//   }
//   return gl;
// }
// function initTriangle(gl) {
//   const verticies = [
//     0.5,
//     -0.5,
//     0.0, // positions
//     1.0,
//     0.0,
//     0.0, // colors // bottom right
//     -0.5,
//     -0.5,
//     0.0,
//     0.0,
//     1.0,
//     0.0, // bottom let
//     0.0,
//     0.5,
//     0.0,
//     0.0,
//     0.0,
//     1.0, // top
//   ];

//   const VAO = gl.createVertexArray();
//   gl.bindVertexArray(VAO);

//   const VBO = gl.createBuffer();
//   gl.bindBuffer(gl.ARRAY_BUFFER, VBO);
//   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticies), gl.STATIC_DRAW);

//   gl.vertexAttribPointer(0, 3, gl.FLOAT, gl.FALSE, 24, 0);
//   gl.enableVertexAttribArray(0);
//   gl.vertexAttribPointer(1, 3, gl.FLOAT, gl.FALSE, 24, 12);
//   gl.enableVertexAttribArray(1);

//   return VAO;
// }

// function initShaders(gl, shaders) {
//   const program = gl.createProgram();
//   for (const s of shaders) {
//     const shader = gl.createShader(s.type);
//     gl.shaderSource(shader, s.source);
//     gl.compileShader(shader);

//     console.log(gl.getShaderInfoLog(shader));
//     gl.attachShader(program, shader);
//   }

//   gl.linkProgram(program);

//   if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
//     const info = gl.getProgramInfoLog(program);
//     throw new Error(`Could not link shader program. \n\n${info}`);
//   }

//   return program;
// }

// function main() {
//   const gl = initContext();
//   const VAO = initTriangle(gl);
//   const rawShaders = [
//     new Shader(vertexSrc, gl.VERTEX_SHADER),
//     new Shader(fragSrc, gl.FRAGMENT_SHADER),
//   ];
//   const shaderProgram = initShaders(gl, rawShaders);
//   gl.clearColor(1.0, 1.0, 1.0, 1.0);
//   // Clear the color buffer with specified clear color
//   gl.clear(gl.COLOR_BUFFER_BIT);

//   gl.bindVertexArray(VAO);
//   gl.useProgram(shaderProgram);

//   gl.drawArrays(gl.TRIANGLES, 0, 3);
// }

// export default main;
