export const GRID_SIZE = 1024;
export const vertices_ori = new Float32Array([ // Basic Vertices for a square
    //   X,    Y,
      -0.8, -0.8, // Triangle 1 
       0.8, -0.8,
       0.8,  0.8,
      -0.8, -0.8, // Triangle 2 
       0.8,  0.8,
      -0.8,  0.8,
    ]);

export const vertices = new Float32Array([ // Vertices for all subsections for the marching square
    //   X,    Y,
        -1.0,  1.0,  //T1
         0.0,  1.0, 
        -1.0,  0.0, 
        -1.0,  0.0, //T2
         0.0,  1.0, 
         0.0,  0.0, 
         0.0,  0.0, //T3
         0.0,  1.0, 
         1.0,  0.0, 
         1.0,  0.0, //T4
         0.0,  1.0, 
         1.0,  1.0, 
         1.0,  0.0, //T5
         1.0, -1.0, 
         0.0, -1.0, 
         0.0, -1.0, //T6
         0.0,  0.0, 
         1.0,  0.0, 
         0.0, -1.0, //T7
        -1.0,  0.0, 
         0.0,  0.0, 
         0.0, -1.0, //T8
        -1.0, -1.0, 
        -1.0,  0.0,
    ]);

`      
Don't know how to pass vertices for all the square cases.
export const sq_vertices = [
    //0
    new Float32Array([
        // X,  Y, 
        0.0, 0.0,
        0.0, 0.0,
        0.0, 0.0,
    ]),

    //1
    new Float32Array([
        // X,  Y, 
        -1.0,  0.0, // Triangle 1
        -1.0, -1.0,
         0.0, -1.0,
    ]),

    //2
    new Float32Array([
        // X,  Y, 
         1.0,  0.0,
         1.0, -1.0,
         0.0, -1.0,
    ]),

    //3
    new Float32Array([
        // X,  Y, 
        -1.0,  0.0, // T1
         1.0,  0.0, 
         1.0, -1.0, 
         1.0, -1.0, // T2
        -1.0, -1.0,
        -1.0,  0.0,
    ]),

    //4
    new Float32Array([
        // X,  Y, 
         0.0,  1.0,
         1.0,  1.0,
         1.0,  0.0,
    ]),

    //5
    new Float32Array([
        // X,  Y, 
         0.0,  1.0, //T1
         1.0,  1.0,
        -1.0,  0.0,
        -1.0,  0.0, //T2
         1.0,  1.0
        -1.0, -1.0,
        -1.0, -1.0, //T3
         1.0,  1.0, 
         0.0, -1.0,
         0.0, -1.0, //T4
         1.0,  1.0, 
         1.0,  0.0,
    ]),

    //6
    new Float32Array([
        // X,  Y, 
         0.0,  1.0, //T1
         1.0,  1.0,
         0.0, -1.0,  
         0.0, -1.0, //T2
         1.0,  1.0, 
         1.0, -1.0,
    ]),

    //7
    new Float32Array([
        // X,  Y, 
         0.0,  1.0, //T1
         1.0,  1.0, 
         1.0, -1.0, 
         1.0, -1.0, //T2
        -1.0, -1.0, 
        -1.0,  0.0, 
        -1.0,  0.0, //T3
         0.0,  1.0, 
         1.0, -1.0,
    ]),

    //8
    new Float32Array([
        // X,  Y, 
        -1.0,  1.0, 
         0.0,  1.0, 
        -1.0,  0.0,
    ]),

    //9
    new Float32Array([
        // X,  Y, 
        -1.0,  1.0, // T1
         0.0,  1.0, 
         0.0, -1.0,
         0.0, -1.0, // T2
        -1.0, -1.0, 
        -1.0,  1.0,
    ]),

    //10
    new Float32Array([
        // X,  Y, 
         0.0,  1.0, //T1
         1.0,  0.0, 
        -1.0,  1.0, 
        -1.0,  1.0, //T2
         1.0,  0.0, 
         1.0, -1.0, 
         1.0, -1.0, //T3
         0.0, -1.0, 
        -1.0,  1.0, 
        -1.0,  1.0, //T4
         0.0, -1.0, 
        -1.0,  0.0,
    ]),

    //11
    new Float32Array([
        // X,  Y, 
        
    ]),

    //12
    new Float32Array([
        // X,  Y, 
    
    ]),

    //13
    new Float32Array([
        // X,  Y, 
    
    ]),

    //14
    new Float32Array([
        // X,  Y, 
    
    ]),

    //15
    new Float32Array([
        // X,  Y, 
    
    ]),

];
`